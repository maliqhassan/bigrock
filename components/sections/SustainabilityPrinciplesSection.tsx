import { Landmark, Leaf, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

type Principle = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Efficient Building",
    description:
      "Building approaches that consider efficiency and responsible resource use.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Responsible Delivery",
    description:
      "Thoughtful project execution with attention to environmental and long-term considerations.",
    icon: Recycle,
  },
  {
    number: "03",
    title: "Long-Term Value",
    description:
      "Creating durable solutions designed to serve people and communities over time.",
    icon: Landmark,
  },
];

function PrinciplePanel({ item }: { item: Principle }) {
  const Icon = item.icon;

  return (
    <article className="bg-ink-950 hover:bg-ink-900 group relative h-full px-0 py-12 transition-colors duration-300 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <span
        aria-hidden="true"
        className="via-gold-500/0 group-hover:via-gold-500/60 absolute inset-y-10 left-0 hidden w-px bg-gradient-to-b from-transparent to-transparent transition-colors duration-500 lg:block"
      />

      <span
        aria-hidden="true"
        className="font-display absolute top-10 right-0 text-6xl font-semibold text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.1] sm:right-10 lg:right-12"
      >
        {item.number}
      </span>

      <Icon className="text-gold-500 h-6 w-6" aria-hidden="true" />
      <h3 className="heading-3 mt-7">{item.title}</h3>
      <span className="rule-gold mt-7" aria-hidden="true" />
      <p className="body-text mt-7 max-w-sm">{item.description}</p>
    </article>
  );
}

/** The three sustainability principles as editorial panels. */
export default function SustainabilityPrinciplesSection() {
  return (
    <section aria-labelledby="principles-heading" className="surface-deep section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our Principles"
          headingId="principles-heading"
          title="Three Commitments That Shape How We Build."
        />

        <ul className="bg-line border-line mt-16 grid gap-px border-y lg:grid-cols-3">
          {principles.map((item) => (
            <li key={item.number}>
              <PrinciplePanel item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
