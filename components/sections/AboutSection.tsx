import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealImage } from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import { site } from "@/lib/site";

/**
 * Homepage company introduction: architectural image on the left, editorial
 * copy on the right, stacking on smaller screens.
 */
export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-ink-950 section">
      <div className="site-container">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Architectural image */}
          <div className="lg:col-span-5">
            <div className="group relative">
              <div
                aria-hidden="true"
                className="border-gold-500/25 absolute -bottom-5 -left-5 hidden h-full w-full rounded-xl border transition-all duration-700 ease-out group-hover:-bottom-3 group-hover:-left-3 lg:block"
              />
              <RevealImage className="border-line bg-ink-900 aspect-[4/3] rounded-xl border sm:aspect-[3/2] lg:aspect-[4/5]">
                <Image
                  src="/images/about.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="from-ink-950/70 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
                />
              </RevealImage>
            </div>
          </div>

          {/* Editorial copy */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  Building with Purpose.
                  <span className="block">Delivering with Confidence.</span>
                </>
              }
              headingId="about-heading"
            />

            <Reveal className="mt-8 flex flex-col gap-6" delay={0.1}>
              <p className="body-text max-w-2xl">
                Founded in {site.country} in {site.foundedYear},{" "}
                {site.legalName} has grown into a trusted partner for delivering
                high-quality construction and engineering solutions.
              </p>
              <p className="body-text max-w-2xl">
                With a team of 150+ engineers, supervisors and certified
                tradespeople, we bring together technical expertise, disciplined
                project management and a commitment to quality across every
                project.
              </p>
              <p className="body-text max-w-2xl">
                From civil and structural works to mechanical and electrical
                services, we provide end-to-end project delivery with a focus on
                safety, transparency and client satisfaction.
              </p>
            </Reveal>

            <ArrowLink href="/about" className="mt-10">
              Discover Big Rock Builders
            </ArrowLink>

            <div className="hairline mt-12 pt-8">
              <p className="text-mist-400 font-display text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                Founded in {site.country}
              </p>
              <p className="font-display text-gold-500 mt-2 text-3xl font-semibold">
                {site.foundedYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
