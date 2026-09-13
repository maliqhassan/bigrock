import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealImage } from "@/components/ui/Reveal";

/** Architectural ruled plate shown beneath the photograph. */
const plateStyle = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "52px 100%, 100% 52px",
} as const;

/** Editorial split introducing the company's approach to responsible building. */
export default function SustainabilityOverviewSection() {
  return (
    <section aria-labelledby="approach-heading" className="bg-ink-950 section">
      <div className="site-container">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our Approach"
              headingId="approach-heading"
              title="Responsible Construction. Long-Term Thinking."
            />

            <div className="mt-10 flex flex-col gap-6">
              <p className="body-text max-w-xl">
                We believe responsible construction should consider more than
                the immediate requirements of a project. Our approach considers
                efficiency, responsible resource use and the long-term value of
                the spaces and infrastructure we help create.
              </p>
              <p className="body-text max-w-xl">
                Through thoughtful project execution and disciplined delivery,
                we aim to create durable solutions that serve people and
                communities over time.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <RevealImage className="border-line bg-ink-900 aspect-[4/3] rounded-lg border lg:aspect-[4/5]">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={plateStyle}
              />
              <Image
                src="/images/sustainability-overview.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="from-ink-950 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
              />
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
}
