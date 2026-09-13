import Image from "next/image";

import Reveal, { RevealImage } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  focus: string[];
  image?: string;
};

const services: Service[] = [
  {
    id: "civil-structural",
    number: "01",
    title: "Civil & Structural",
    description:
      "We deliver civil and structural construction solutions with a focus on sound execution, quality and long-term performance.",
    focus: ["Civil works", "Structural works", "Construction delivery"],
    image: "/images/service-civil.jpg",
  },
  {
    id: "project-management",
    number: "02",
    title: "Project Management",
    description:
      "We provide disciplined project management to coordinate delivery, maintain quality and keep project execution aligned with client requirements.",
    focus: [
      "Project coordination",
      "Quality control",
      "Risk management",
      "Client communication",
    ],
    image: "/images/service-project-management.jpg",
  },
  {
    id: "renovations-extensions",
    number: "03",
    title: "Renovations & Extensions",
    description:
      "We support renovation and extension projects with practical planning and coordinated construction delivery.",
    focus: ["Renovation works", "Building extensions", "Coordinated execution"],
    image: "/images/service-renovation.jpg",
  },
  {
    id: "sustainable-building",
    number: "04",
    title: "Sustainable Building",
    description:
      "We approach construction with attention to efficiency, responsible delivery and long-term value.",
    focus: [
      "Efficient building approaches",
      "Responsible resource use",
      "Long-term considerations",
    ],
    image: "/images/service-sustainable.jpg",
  },
];

/** Architectural ruled backdrop, visible if a photograph is unavailable. */
const blueprintStyle = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "48px 100%, 100% 48px",
} as const;

function ServiceVisual({ service }: { service: Service }) {
  return (
    <RevealImage className="border-line bg-ink-900 aspect-[4/3] rounded-xl border lg:aspect-[4/5]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={blueprintStyle}
      />
      <span
        aria-hidden="true"
        className="font-display absolute right-8 bottom-6 text-7xl font-semibold text-white/[0.05]"
      >
        {service.number}
      </span>

      {service.image ? (
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-center"
        />
      ) : null}

      <div
        aria-hidden="true"
        className="from-ink-950/75 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
      />
    </RevealImage>
  );
}

function ServiceBlock({
  service,
  reverse,
}: {
  service: Service;
  reverse: boolean;
}) {
  const headingId = `${service.id}-heading`;

  return (
    <section
      id={service.id}
      aria-labelledby={headingId}
      className="border-line scroll-mt-28 border-t py-16 first:border-t-0 first:pt-0 lg:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal
          className={cn(
            "lg:col-span-5",
            reverse ? "lg:order-2 lg:col-start-8" : "lg:order-1",
          )}
        >
          <ServiceVisual service={service} />
        </Reveal>

        <Reveal
          delay={0.12}
          className={cn(
            "lg:col-span-6",
            reverse ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-7",
          )}
        >
          <span
            aria-hidden="true"
            className="font-display text-gold-500 block text-sm font-semibold tracking-[0.18em]"
          >
            {service.number}
          </span>

          <h2 id={headingId} className="heading-2 mt-5">
            {service.title}
          </h2>

          <span className="rule-gold mt-7" aria-hidden="true" />

          <p className="body-text mt-7 max-w-xl">{service.description}</p>

          <h3 className="font-display text-mist-400 mt-10 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
            Focus
          </h3>
          <ul className="mt-5 flex flex-col">
            {service.focus.map((item) => (
              <li
                key={item}
                className="border-line text-mist-200 flex items-center gap-4 border-t py-4 text-sm first:border-t-0 first:pt-0 sm:text-[0.9375rem]"
              >
                <span
                  className="bg-gold-500 h-px w-5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** The four service lines, alternating orientation down the page. */
export default function ServicesOverviewSection() {
  return (
    <div className="bg-ink-950 section">
      <div className="site-container">
        {services.map((service, index) => (
          <ServiceBlock
            key={service.id}
            service={service}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
