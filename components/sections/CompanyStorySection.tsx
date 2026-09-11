import { Check } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const capabilities = [
  "End-to-end project delivery",
  "Civil, mechanical and electrical capability",
  "Quality control",
  "Risk management",
  "Transparent client communication",
];

/** Editorial account of the company's background and capability. */
export default function CompanyStorySection() {
  return (
    <section aria-labelledby="story-heading" className="bg-ink-950 section">
      <div className="site-container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our Story"
              headingId="story-heading"
              title="Built on Experience. Driven by Commitment."
            />

            <div className="mt-10 flex flex-col gap-6">
              <p className="body-text max-w-2xl">
                {site.legalName} was founded in {site.country} in {site.foundedYear}{" "}
                and has since grown into a construction and engineering partner
                trusted to deliver demanding work with consistency.
              </p>
              <p className="body-text max-w-2xl">
                Today the company brings together 150+ engineers, supervisors and
                certified tradespeople, giving projects the combination of technical
                knowledge and on-site experience that complex delivery requires.
              </p>
              <p className="body-text max-w-2xl">
                Our civil, mechanical and electrical capability sits under one roof,
                supporting end-to-end delivery from planning through completion, with
                quality control, risk management and transparent client communication
                applied throughout.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="font-display text-gold-500 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
              How We Work
            </h3>

            <ul className="mt-8 flex flex-col">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="border-line flex items-center gap-4 border-t py-5 first:border-t-0 first:pt-0"
                >
                  <Check className="text-gold-500 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-mist-200 text-sm sm:text-[0.9375rem]">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hairline mt-8 pt-8">
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
