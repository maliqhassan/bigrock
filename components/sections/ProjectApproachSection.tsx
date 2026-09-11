import SectionHeading from "@/components/ui/SectionHeading";

type Principle = {
  number: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Plan with Purpose",
    description: "Clear planning and coordinated execution.",
  },
  {
    number: "02",
    title: "Build with Discipline",
    description: "Attention to quality, risk management and responsible delivery.",
  },
  {
    number: "03",
    title: "Deliver with Confidence",
    description: "Transparent communication and a focus on client satisfaction.",
  },
];

/** How projects are approached, stated without metrics. */
export default function ProjectApproachSection() {
  return (
    <section aria-labelledby="approach-heading" className="surface-deep section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our Approach"
          headingId="approach-heading"
          title="Disciplined Delivery. Lasting Results."
        />

        <ul className="divide-line border-line mt-16 grid divide-y border-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {principles.map((item) => (
            <li key={item.number} className="lg:first:pl-0 lg:last:pr-0">
              <article className="group h-full py-10 lg:px-10 lg:py-12">
                <span
                  aria-hidden="true"
                  className="font-display block text-4xl font-semibold text-white/[0.07] transition-colors duration-500 group-hover:text-white/[0.12]"
                >
                  {item.number}
                </span>
                <span className="rule-gold mt-7" aria-hidden="true" />
                <h3 className="heading-4 mt-7">{item.title}</h3>
                <p className="body-muted mt-4 max-w-sm">{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
