import { Building2, Cog, Layers3, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

type Expertise = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const expertise: Expertise[] = [
  {
    number: "01",
    title: "Civil Engineering",
    description:
      "Structural and civil construction capability supporting durable, technically sound project delivery.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Mechanical Engineering",
    description:
      "Mechanical expertise integrated into project delivery and building systems.",
    icon: Cog,
  },
  {
    number: "03",
    title: "Integrated Services",
    description:
      "Coordinated multidisciplinary services designed to work together across complex projects.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Electrical Engineering",
    description:
      "Electrical capability supporting reliable and integrated building solutions.",
    icon: Zap,
  },
];

function ExpertisePanel({ item }: { item: Expertise }) {
  const Icon = item.icon;

  return (
    <article className="bg-ink-950 hover:bg-ink-900 group relative h-full px-0 py-10 transition-colors duration-300 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
      {/* Architectural rule: warms to gold on hover */}
      <span
        aria-hidden="true"
        className="via-gold-500/0 group-hover:via-gold-500/60 absolute inset-y-8 left-0 hidden w-px bg-gradient-to-b from-transparent to-transparent transition-colors duration-500 sm:block"
      />

      <span
        aria-hidden="true"
        className="font-display absolute top-8 right-0 text-5xl font-semibold text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.1] sm:right-10 lg:right-12"
      >
        {item.number}
      </span>

      <div className="flex items-center gap-4">
        <span className="border-line text-azure-400 group-hover:border-gold-500/40 group-hover:text-gold-500 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="heading-4">{item.title}</h3>
      </div>

      <p className="body-text mt-6 max-w-md">{item.description}</p>
    </article>
  );
}

/** Homepage overview of the four engineering disciplines. */
export default function ExpertiseSection() {
  return (
    <section aria-labelledby="expertise-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our Expertise"
          headingId="expertise-heading"
          title="Engineering Depth. Integrated Capability."
          description="Our multidisciplinary capability allows us to approach complex projects with coordinated civil, mechanical and electrical expertise — supporting efficient delivery from planning through completion."
        />

        <ul className="bg-line border-line mt-16 grid gap-px border-y sm:grid-cols-2">
          {expertise.map((item) => (
            <li key={item.number}>
              <ExpertisePanel item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-14 flex items-center gap-6">
          <span className="hairline hidden flex-1 sm:block" aria-hidden="true" />
          <p className="font-display text-mist-300 text-center text-xs font-semibold tracking-[0.18em] uppercase sm:text-[0.8125rem]">
            One team. Multiple disciplines.{" "}
            <span className="text-gold-500">End-to-end capability.</span>
          </p>
          <span className="hairline hidden flex-1 sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
