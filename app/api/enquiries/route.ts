import { NextResponse } from "next/server";

/**
 * Enquiry delivery.
 *
 * Sends via Resend's REST API when the environment is configured — no SDK, so
 * no extra dependency. Until the destination address and key are supplied the
 * route reports `delivered: false`, and the form says plainly that nothing was
 * sent rather than claiming otherwise.
 *
 * Required environment variables (see .env.example):
 *   CONTACT_TO_EMAIL    where enquiries are delivered
 *   CONTACT_FROM_EMAIL  verified sender on your Resend domain
 *   RESEND_API_KEY      Resend API key
 */

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  projectType?: unknown;
  message?: unknown;
};

const asText = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { delivered: false, reason: "invalid-request" },
      { status: 400 },
    );
  }

  const name = asText(payload.name, 120);
  const email = asText(payload.email, 160);
  const phone = asText(payload.phone, 60);
  const company = asText(payload.company, 160);
  const projectType = asText(payload.projectType, 80);
  const message = asText(payload.message, 4000);

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return NextResponse.json(
      { delivered: false, reason: "invalid-fields" },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!to || !from || !apiKey) {
    return NextResponse.json({ delivered: false, reason: "not-configured" });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    projectType ? `Project type: ${projectType}` : null,
    "",
    message,
  ].filter(Boolean);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry — ${name}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { delivered: false, reason: "send-failed" },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { delivered: false, reason: "send-failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ delivered: true });
}
