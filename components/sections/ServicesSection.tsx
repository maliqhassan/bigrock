import { Building2, ClipboardList, Hammer, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
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
    <article className="border-line bg-ink-900 hover:border-gold-500/30 hover:bg-ink-850 group relative flex h-full flex-col rounded-xl border p-7 transition-colors duration-300">
      <div className="flex items-start justify-between gap-4">
        <span className="border-line text-azure-400 group-hover:border-gold-500/40 group-hover:text-gold-500 inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-colors duration-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className="font-display text-mist-500 group-hover:text-gold-500/70 text-2xl font-semibold transition-colors duration-300"
        >
          {service.number}
        </span>
      </div>

      <h3 className="heading-4 mt-8">{service.title}</h3>
      <p className="body-muted mt-4">{service.description}</p>
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

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.number}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ArrowLink href="/services">View All Services</ArrowLink>
        </div>
      </div>
    </section>
  );
}
