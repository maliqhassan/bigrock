import SectionHeading from "@/components/ui/SectionHeading";

/** Restrained band linking quality to the company's people and capability. */
export default function QualityCapabilitySection() {
  return (
    <section
      aria-labelledby="discipline-heading"
      className="surface-blue section-tight"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Built on Discipline"
              headingId="discipline-heading"
              title="Technical Capability. Disciplined Delivery."
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="body-text lg:mt-16">
              With 150+ engineers, supervisors and certified tradespeople, Big Rock
              Builders brings together the people and multidisciplinary capability
              needed to support end-to-end project delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
