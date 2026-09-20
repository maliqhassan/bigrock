import SectionHeading from "@/components/ui/SectionHeading";
import { RevealList, RevealItem } from "@/components/ui/Reveal";

/**
 * Mission and vision, set as a quiet two-column statement band — deliberately
 * lighter than the numbered panel grid further down the page, so the two do
 * not read as the same section twice.
 *
 * DRAFT COPY — both statements are written from the verified company profile
 * only (end-to-end delivery, multidisciplinary capability, quality control,
 * risk management, transparent communication). They are not the company's own
 * adopted wording; replace them with the official statements.
 */

type Statement = {
  label: string;
  title: string;
  body: string;
};

const statements: Statement[] = [
  {
    label: "Our Mission",
    title: "Build well, and deliver honestly.",
    body: "To deliver construction and engineering projects to a consistently high standard — bringing civil, mechanical and electrical capability together under disciplined project management, with quality control and risk management applied throughout, and open communication with every client from planning to completion.",
  },
  {
    label: "Our Vision",
    title: "A partner trusted for the long term.",
    body: "To be known as a construction partner clients return to — valued for technical depth across disciplines, dependable delivery on demanding projects, and work that continues to serve the people and communities around it long after handover.",
  },
];

export default function MissionVisionSection() {
  return (
    <section aria-labelledby="mission-vision-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Mission & Vision"
          headingId="mission-vision-heading"
          title="What We Work Towards."
        />

        <RevealList className="divide-line border-line mt-14 grid divide-y border-y lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {statements.map((statement) => (
            <RevealItem key={statement.label} className="lg:first:pl-0 lg:last:pr-0">
              <div className="py-12 lg:px-12 lg:py-14">
                <p className="font-display text-gold-500 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                  {statement.label}
                </p>
                <h3 className="heading-3 mt-5 max-w-sm">{statement.title}</h3>
                <span className="bg-line mt-7 block h-px w-12" aria-hidden="true" />
                <p className="body-text mt-7 max-w-xl">{statement.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
