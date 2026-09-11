import { ArrowRight, Building2, Cog, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

type Discipline = {
  title: string;
  icon: LucideIcon;
};

const disciplines: Discipline[] = [
  { title: "Civil", icon: Building2 },
  { title: "Mechanical", icon: Cog },
  { title: "Electrical", icon: Zap },
];

function DisciplineNode({ item }: { item: Discipline }) {
  const Icon = item.icon;

  return (
    <div className="border-line bg-ink-950 flex flex-1 items-center gap-4 rounded-lg border px-6 py-6 sm:flex-col sm:gap-4 sm:px-8 sm:py-10">
      <Icon className="text-gold-500 h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="font-display text-cream text-sm font-semibold tracking-[0.14em] uppercase">
        {item.title}
      </span>
    </div>
  );
}

/**
 * Coordinated disciplines shown as a connected set. The connectors indicate
 * coordination between capabilities, not a sequential process.
 */
export default function IntegratedApproachSection() {
  return (
    <section aria-labelledby="integrated-approach-heading" className="surface-blue section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Integrated Approach"
          headingId="integrated-approach-heading"
          title="Different Disciplines. One Coordinated Direction."
          description="By bringing complementary disciplines together, we support coordinated project delivery and a more integrated approach to construction."
        />

        <div className="mt-16 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
          {disciplines.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-1 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <DisciplineNode item={item} />
              {index < disciplines.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="text-gold-500/70 mx-auto h-5 w-5 shrink-0 rotate-90 sm:mx-0 sm:rotate-0"
                />
              ) : null}
            </div>
          ))}
        </div>

        <p className="body-muted mt-8 max-w-2xl">
          These disciplines are coordinated capabilities rather than a fixed sequence
          &mdash; they run alongside one another and inform delivery throughout a
          project.
        </p>
      </div>
    </section>
  );
}
