import Image from "next/image";

import Reveal, { RevealImage } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

/**
 * Message from leadership — the authentic statement as supplied by the
 * company, reproduced verbatim. The signature comes from
 * `leadership` in lib/site.ts.
 */

const message = [
  "At Big Rock Builders (Pvt Ltd), we believe every project should reflect Strength, Quality, and Trust. Our goal is to deliver buildings that not only meet expectations, but stand the test of time. We are proud of the work we do and grateful for the confidence our clients place in us.",
];

export default function CeoMessageSection() {
  const { ceoName, ceoTitle } = site.leadership;

  return (
    <section
      aria-labelledby="leadership-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <RevealImage className="border-line bg-ink-900 aspect-[4/5] rounded-xl border">
              <Image
                src="/images/ceo.jpg"
                alt={`${ceoName}, ${ceoTitle} of ${site.legalName}`}
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

          {/* Message */}
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              eyebrow="Leadership"
              headingId="leadership-heading"
              title="A Message From Our Chief Executive."
            />

            <Reveal className="mt-10" delay={0.1}>
              {/* Opening quotation mark, set as an architectural detail */}
              <span
                aria-hidden="true"
                className="font-display text-gold-500/30 block text-6xl leading-none"
              >
                &ldquo;
              </span>

              <blockquote className="mt-2 flex flex-col gap-6">
                {message.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="body-text max-w-2xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </blockquote>

              <footer className="hairline mt-10 pt-7">
                {ceoName ? (
                  <p className="font-display text-cream text-base font-semibold">
                    {ceoName}
                  </p>
                ) : null}
                <p className="font-display text-gold-500 mt-1 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                  {ceoTitle}
                </p>
                <p className="body-muted mt-1">{site.legalName}</p>
              </footer>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
