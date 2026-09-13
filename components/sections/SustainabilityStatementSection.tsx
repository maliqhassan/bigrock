import Reveal from "@/components/ui/Reveal";

/**
 * Wide statement on how sustainability thinking sits inside project delivery.
 * Deliberately free of technologies, ratings and quantified claims.
 */
export default function SustainabilityStatementSection() {
  return (
    <section
      aria-labelledby="delivery-statement-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <div className="border-line grid gap-12 border-y py-14 lg:grid-cols-12 lg:gap-20 lg:py-20">
          <Reveal className="lg:col-span-7">
            <span className="rule-gold" aria-hidden="true" />
            <h2 id="delivery-statement-heading" className="heading-2 mt-8">
              Build responsibly. Deliver thoughtfully.{" "}
              <span className="text-gold-500">Create lasting value.</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.12}>
            <p className="body-text lg:mt-16">
              Our sustainability thinking is integrated into how we approach
              construction &mdash; from considering responsible resource use to
              focusing on durable outcomes and long-term value.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
