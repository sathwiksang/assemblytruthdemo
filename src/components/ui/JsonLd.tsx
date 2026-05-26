/**
 * Renders a JSON-LD <script> for structured data. Server-rendered into the
 * page HTML so crawlers see it without executing client JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Data is build-time/static and contains no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
