<?php
/**
 * Enquiry delivery for the Big Rock Builders website.
 *
 * The site is a set of static files, so this is the only server-side piece.
 * The contact form posts JSON here and the server mails it on.
 *
 * To change where enquiries land, edit ENQUIRY_TO below and re-upload this
 * file. Nothing else needs rebuilding.
 */

declare(strict_types=1);

/** Where enquiries are delivered. */
const ENQUIRY_TO = 'info@bigrockbuilders.com.pk';

/**
 * Envelope sender. Must be a mailbox on this domain: mail sent from an address
 * the domain does not own is what gets filtered as spam.
 */
const ENQUIRY_FROM = 'info@bigrockbuilders.com.pk';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/** Ends the request with a JSON failure the form can read. */
function fail(string $reason, int $status = 400): void
{
    http_response_code($status);
    echo json_encode(['delivered' => false, 'reason' => $reason]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail('method-not-allowed', 405);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw === false ? '' : $raw, true);

if (!is_array($data)) {
    fail('invalid-request');
}

/** Reads one field, trimmed and length-capped. */
function field(array $data, string $key, int $max): string
{
    $value = $data[$key] ?? '';

    if (!is_string($value)) {
        return '';
    }

    return mb_substr(trim($value), 0, $max);
}

/**
 * Removes line breaks before a value goes into a mail header. Without this a
 * crafted address could append headers of its own and use the form to send
 * mail to third parties.
 */
function header_safe(string $value): string
{
    return trim(str_replace(["\r", "\n", "\t"], ' ', $value));
}

$name        = field($data, 'name', 120);
$email       = field($data, 'email', 160);
$phone       = field($data, 'phone', 60);
$company     = field($data, 'company', 160);
$projectType = field($data, 'projectType', 80);
$message     = field($data, 'message', 4000);

// Hidden field: a person never sees it, so anything in it came from a bot.
// Answer as though it succeeded, so the bot does not sit there retrying.
if (field($data, 'website', 200) !== '') {
    echo json_encode(['delivered' => true]);
    exit;
}

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail('invalid-fields');
}

$lines = [
    'Name: ' . $name,
    'Email: ' . $email,
];

if ($phone !== '') {
    $lines[] = 'Phone: ' . $phone;
}

if ($company !== '') {
    $lines[] = 'Company: ' . $company;
}

if ($projectType !== '') {
    $lines[] = 'Project type: ' . $projectType;
}

$lines[] = '';
$lines[] = $message;
$lines[] = '';
$lines[] = '--';
$lines[] = 'Sent from the enquiry form at bigrockbuilders.com.pk';

$body = implode("\r\n", $lines);

$subject = 'Website enquiry from ' . header_safe($name);

// Encodes non-ASCII names so the subject line is not mangled in transit.
if (function_exists('mb_encode_mimeheader')) {
    mb_internal_encoding('UTF-8');
    $subject = mb_encode_mimeheader($subject, 'UTF-8');
}

$headers = implode("\r\n", [
    'From: Big Rock Builders Website <' . ENQUIRY_FROM . '>',
    'Reply-To: ' . header_safe($email),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

// -f sets the envelope sender, which is what SPF checks against. Some hosts
// disable it; mail() then ignores it rather than failing.
$sent = @mail(ENQUIRY_TO, $subject, $body, $headers, '-f' . ENQUIRY_FROM);

if ($sent !== true) {
    fail('send-failed', 502);
}

echo json_encode(['delivered' => true]);
