import Reveal from "@/components/ui/Reveal";

/**
 * Wide capability statement. Carries only the verified headcount figure.
 */
export default function CapabilityStatementSection() {
  return (
    <section
      aria-labelledby="capability-statement-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <div className="border-line grid gap-12 border-y py-14 lg:grid-cols-12 lg:items-center lg:gap-20 lg:py-20">
          <Reveal className="lg:col-span-7">
            <span className="rule-gold" aria-hidden="true" />
            <h2 id="capability-statement-heading" className="heading-2 mt-8">
              One team. Multiple disciplines.{" "}
              <span className="text-gold-500">End-to-end capability.</span>
            </h2>
          </Reveal>

          <Reveal
            className="border-line lg:col-span-4 lg:col-start-9 lg:border-l lg:pl-12"
            delay={0.12}
          >
            <p className="font-display text-gold-500 text-5xl leading-none font-semibold sm:text-6xl">
              150+
            </p>
            <p className="body-muted mt-5 max-w-xs">
              Engineers, supervisors and certified tradespeople.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
