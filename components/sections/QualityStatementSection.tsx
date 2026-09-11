/** Wide statement on end-to-end delivery. Factual, with no added metrics. */
export default function QualityStatementSection() {
  return (
    <section
      aria-labelledby="delivery-confidence-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <div className="border-line grid gap-12 border-y py-14 lg:grid-cols-12 lg:gap-20 lg:py-20">
          <div className="lg:col-span-7">
            <span className="rule-gold" aria-hidden="true" />
            <h2 id="delivery-confidence-heading" className="heading-2 mt-8">
              Plan carefully. Build responsibly.{" "}
              <span className="text-gold-500">Deliver with confidence.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="body-text lg:mt-16">
              Our end-to-end approach brings together project management, civil,
              mechanical and electrical capability with quality control, risk
              management and transparent client communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
