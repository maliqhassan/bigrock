import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealImage } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/** Architectural ruled plate shown beneath the photograph. */
const plateStyle = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "52px 100%, 100% 52px",
} as const;

/** Editorial split introducing how quality sits inside project delivery. */
export default function QualityApproachSection() {
  return (
    <section
      aria-labelledby="quality-approach-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <RevealImage className="border-line bg-ink-900 aspect-[4/3] rounded-lg border lg:aspect-[4/5]">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={plateStyle}
              />
              <Image
                src="/images/quality-approach.jpg"
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

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              eyebrow="Our Approach"
              headingId="quality-approach-heading"
              title="Quality Is Part of How We Build."
            />

            <div className="mt-10 flex flex-col gap-6">
              <p className="body-text max-w-xl">
                At {site.name}, quality is treated as an integral part of
                project delivery. We combine technical capability with
                disciplined execution and ongoing attention to quality, risk and
                communication.
              </p>
              <p className="body-text max-w-xl">
                Our goal is to give clients confidence throughout the build
                &mdash; from planning and coordination through execution and
                completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
