import Image from "next/image";
import { Landmark, Leaf, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";

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

function PrincipleRow({ item }: { item: Principle }) {
  const Icon = item.icon;

  return (
    <article className="group border-line flex gap-6 border-t py-8 first:border-t-0 sm:gap-10 lg:py-10">
      <span
        aria-hidden="true"
        className="font-display shrink-0 text-3xl font-semibold text-white/[0.07] transition-colors duration-500 group-hover:text-white/[0.12] sm:text-4xl"
      >
        {item.number}
      </span>

      <div>
        <div className="flex items-center gap-3">
          <Icon className="text-gold-500 h-5 w-5 shrink-0" aria-hidden="true" />
          <h3 className="heading-4">{item.title}</h3>
        </div>
        <p className="body-muted mt-4 max-w-lg">{item.description}</p>
      </div>
    </article>
  );
}

/** Homepage sustainability commitment: editorial split with three principles. */
export default function SustainabilitySection() {
  return (
    <section
      aria-labelledby="sustainability-heading"
      className="surface-blue section"
    >
      <div className="site-container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Heading and visual */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Sustainability"
              headingId="sustainability-heading"
              title="Building for Today. Thinking Beyond Tomorrow."
              description="We believe responsible construction should consider the long-term impact of the spaces and infrastructure we create."
            />

            <div className="border-line bg-ink-900 relative mt-12 aspect-[3/2] overflow-hidden rounded-xl border">
              <Image
                src="/images/sustainability.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="from-ink-950 via-azure-900/35 absolute inset-0 bg-gradient-to-t to-transparent"
              />
            </div>
          </div>

          {/* Principles */}
          <div className="lg:col-span-7">
            <ul className="flex flex-col">
              {principles.map((item) => (
                <li key={item.number}>
                  <PrincipleRow item={item} />
                </li>
              ))}
            </ul>

            <div className="hairline mt-10 pt-8">
              <ArrowLink href="/sustainability">Explore Our Approach</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
