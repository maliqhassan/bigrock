import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Restrained statement about the team. Deliberately carries no names,
 * portraits or figures beyond the verified headcount.
 */
export default function TeamCapabilitySection() {
  return (
    <section aria-labelledby="people-heading" className="bg-ink-950 section">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our People"
              headingId="people-heading"
              title="A Multidisciplinary Team."
              description="Our team brings together 150+ engineers, supervisors and certified tradespeople, combining technical knowledge with practical project experience."
            />
          </div>

          <Reveal
            delay={0.12}
            className="border-line lg:col-span-4 lg:col-start-9 lg:border-l lg:pl-12"
          >
            <p className="font-display text-gold-500 text-6xl leading-none font-semibold">
              150+
            </p>
            <p className="body-muted mt-5 max-w-xs">
              Engineers, supervisors and certified tradespeople across civil,
              mechanical and electrical disciplines.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
