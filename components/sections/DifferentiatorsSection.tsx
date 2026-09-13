import { Cog, Handshake, ShieldCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealList, RevealItem } from "@/components/ui/Reveal";

type Principle = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Technical Capability",
    description:
      "Multidisciplinary construction and engineering capability across civil, mechanical and electrical works.",
    icon: Cog,
  },
  {
    number: "02",
    title: "End-to-End Delivery",
    description:
      "A coordinated approach from planning through project completion.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Quality & Control",
    description:
      "Attention to quality control and disciplined project execution.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Client Partnership",
    description:
      "Transparent communication and a focus on client satisfaction.",
    icon: Handshake,
  },
];

function PrinciplePanel({ item }: { item: Principle }) {
  const Icon = item.icon;

  return (
    <article className="bg-ink-950 hover:bg-ink-900 group relative h-full px-0 py-10 transition-colors duration-300 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
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

      <Icon className="text-gold-500 h-5 w-5" aria-hidden="true" />
      <h3 className="heading-4 mt-6">{item.title}</h3>
      <p className="body-text mt-4 max-w-md">{item.description}</p>
    </article>
  );
}

/** What sets Big Rock Builders apart — four capability principles. */
export default function DifferentiatorsSection() {
  return (
    <section
      aria-labelledby="differentiators-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          headingId="differentiators-heading"
          title="Capability That Carries a Project Through."
          description="Every project draws on the same foundation: technical depth, coordinated delivery, disciplined quality control and an open working relationship with our clients."
        />

        <RevealList className="bg-line border-line mt-16 grid gap-px border-y sm:grid-cols-2">
          {principles.map((item) => (
            <RevealItem key={item.number}>
              <PrinciplePanel item={item} />
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
