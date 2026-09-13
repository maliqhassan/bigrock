import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** Compact link between sustainability and the company's wider capability. */
export default function LongTermCapabilitySection() {
  return (
    <section
      aria-labelledby="long-term-heading"
      className="bg-ink-950 section-tight"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Built for the Long Term"
              headingId="long-term-heading"
              title="Sustainability Works Best When It Is Part of the Build."
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="body-text lg:mt-16">
                By combining civil, mechanical and electrical capability with
                disciplined project delivery, we can approach construction as a
                coordinated whole &mdash; with quality, responsibility and
                long-term performance in mind.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
