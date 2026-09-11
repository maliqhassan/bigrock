import { Building2, Cog, Layers3, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

type Discipline = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const disciplines: Discipline[] = [
  {
    id: "civil",
    number: "01",
    title: "Civil Engineering",
    description:
      "Structural and civil construction capability supporting durable, technically sound project delivery.",
    icon: Building2,
  },
  {
    id: "mechanical",
    number: "02",
    title: "Mechanical Engineering",
    description:
      "Mechanical expertise integrated into project delivery and building systems.",
    icon: Cog,
  },
  {
    id: "integrated-services",
    number: "03",
    title: "Integrated Services",
    description:
      "Coordinated multidisciplinary services designed to work together across complex projects.",
    icon: Layers3,
  },
  {
    id: "electrical",
    number: "04",
    title: "Electrical Engineering",
    description:
      "Electrical capability supporting reliable and integrated building solutions.",
    icon: Zap,
  },
];

function DisciplinePanel({ item }: { item: Discipline }) {
  const Icon = item.icon;

  return (
    <article
      id={item.id}
      className="bg-ink-950 hover:bg-ink-900 group relative h-full scroll-mt-28 px-0 py-12 transition-colors duration-300 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
    >
      <span
        aria-hidden="true"
        className="via-gold-500/0 group-hover:via-gold-500/60 absolute inset-y-10 left-0 hidden w-px bg-gradient-to-b from-transparent to-transparent transition-colors duration-500 sm:block"
      />

      <span
        aria-hidden="true"
        className="font-display absolute top-10 right-0 text-6xl font-semibold text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.1] sm:right-10 lg:right-14"
      >
        {item.number}
      </span>

      <Icon className="text-gold-500 h-6 w-6" aria-hidden="true" />
      <h3 className="heading-3 mt-7">{item.title}</h3>
      <span className="rule-gold mt-7" aria-hidden="true" />
      <p className="body-text mt-7 max-w-md">{item.description}</p>
    </article>
  );
}

/** The four engineering disciplines as large editorial panels. */
export default function ExpertiseOverviewSection() {
  return (
    <section aria-labelledby="disciplines-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Disciplines"
          headingId="disciplines-heading"
          title="Capability Across the Build."
          description="Civil, mechanical, electrical and integrated services capability sits within one organisation, supporting coordinated end-to-end project delivery."
        />

        <ul className="bg-line border-line mt-16 grid gap-px border-y sm:grid-cols-2">
          {disciplines.map((item) => (
            <li key={item.id}>
              <DisciplinePanel item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
