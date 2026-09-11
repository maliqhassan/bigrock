import { Building2, Cog, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

type Capability = {
  title: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  { title: "Civil", icon: Building2 },
  { title: "Mechanical", icon: Cog },
  { title: "Electrical", icon: Zap },
];

/** Restrained statement on coordinated multidisciplinary delivery. */
export default function IntegratedCapabilitySection() {
  return (
    <section
      aria-labelledby="integrated-heading"
      className="surface-blue section"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Integrated Delivery"
          headingId="integrated-heading"
          title="One Team. Multiple Capabilities."
          description="Our civil, mechanical and electrical capabilities allow us to approach projects as coordinated systems rather than isolated disciplines."
        />

        <ul className="divide-line border-line mt-16 grid divide-y border-t sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-b">
          {capabilities.map(({ title, icon: Icon }) => (
            <li key={title} className="sm:first:pl-0 sm:last:pr-0">
              <div className="flex items-center gap-4 py-8 sm:px-8 lg:px-10">
                <Icon className="text-gold-500 h-5 w-5 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-cream text-base font-semibold tracking-[0.06em] uppercase">
                  {title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
