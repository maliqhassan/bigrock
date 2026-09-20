/**
 * Renders structured data as a JSON-LD script tag.
 *
 * Server-rendered, so the markup is in the HTML that crawlers receive rather
 * than added later by the browser.
 */
export default function JsonLd({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own data in lib/seo.ts, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
