import { Building2, ClipboardList, Hammer, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealList, RevealItem } from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    number: "01",
    title: "Civil & Structural",
    description:
      "Comprehensive civil and structural construction solutions focused on strength, durability and quality execution.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Project Management",
    description:
      "Disciplined project coordination and management from planning through execution, with clear communication and controlled delivery.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Renovations & Extensions",
    description:
      "Thoughtfully managed renovation and extension works designed to improve, expand and modernize existing spaces.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Sustainable Building",
    description:
      "Building approaches that consider efficiency, responsible resource use and long-term value.",
    icon: Leaf,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="border-line bg-ink-900 hover:bg-ink-850 group relative flex h-full flex-col overflow-hidden rounded-xl border px-7 py-9 transition-colors duration-300 sm:px-8">
      {/* Rule along the top edge, drawn in on hover */}
      <span
        aria-hidden="true"
        className="bg-gold-500 absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {/* Reference numeral, set back behind the content */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute top-5 right-6 text-5xl leading-none font-semibold text-white/[0.05] transition-colors duration-500 group-hover:text-white/[0.08]"
      >
        {service.number}
      </span>

      <Icon
        className="text-gold-500 h-6 w-6 shrink-0"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <h3 className="heading-4 mt-8">{service.title}</h3>
      <span className="bg-line mt-5 block h-px w-10" aria-hidden="true" />
      <p className="body-muted mt-5">{service.description}</p>
    </article>
  );
}

/** Homepage overview of the four core service lines. */
export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="What We Do"
          headingId="services-heading"
          title={
            <>
              Built for Complexity.
              <span className="block">Engineered for Excellence.</span>
            </>
          }
          description="From structural construction to integrated building services, Big Rock Builders brings technical expertise and disciplined project delivery together under one roof."
        />

        <RevealList className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <RevealItem key={service.number}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealList>

        <div className="mt-12">
          <ArrowLink href="/services">View All Services</ArrowLink>
        </div>
      </div>
    </section>
  );
}
