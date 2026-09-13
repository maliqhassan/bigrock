import {
  HardHat,
  MessageSquareText,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealList, RevealItem } from "@/components/ui/Reveal";

type Commitment = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const commitments: Commitment[] = [
  {
    number: "01",
    title: "Quality Control",
    description: "Structured attention to quality throughout project delivery.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Risk Management",
    description:
      "Identifying and managing project risks through disciplined delivery.",
    icon: TriangleAlert,
  },
  {
    number: "03",
    title: "Safety & Responsibility",
    description:
      "A responsible approach to construction and project execution.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "Clear communication that helps clients stay informed and confident throughout the project.",
    icon: MessageSquareText,
  },
];

function CommitmentPanel({ item }: { item: Commitment }) {
  const Icon = item.icon;

  return (
    <article className="bg-ink-950 hover:bg-ink-900 group relative h-full px-0 py-12 transition-colors duration-300 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
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

/** The four quality commitments as large editorial panels. */
export default function QualityStandardsSection() {
  return (
    <section
      aria-labelledby="commitments-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Our Commitments"
          headingId="commitments-heading"
          title="Four Commitments Behind Every Project."
          description="These commitments shape how work is planned, executed and communicated on every project we take on."
        />

        <RevealList className="bg-line border-line mt-16 grid gap-px border-y sm:grid-cols-2">
          {commitments.map((item) => (
            <RevealItem key={item.number}>
              <CommitmentPanel item={item} />
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
