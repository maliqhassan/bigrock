import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type Detail = {
  label: string;
  /** A string, or several lines for an address. */
  value: string | readonly string[];
};

const details: Detail[] = [
  { label: "Company", value: site.legalName },
  { label: "Office", value: site.address.lines },
  { label: "Email", value: site.email },
  { label: "Phone", value: site.phone.display },
  { label: "Founded", value: "Founded in Pakistan in 2016" },
  {
    label: "Team",
    value: "150+ engineers, supervisors and certified tradespeople",
  },
];

/**
 * Company details. Carries only what has been supplied — no phone number or
 * email address yet, so neither is shown.
 */
export default function ContactInformationSection() {
  return (
    <section
      aria-labelledby="company-details-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <div className="border-line grid gap-12 border-y py-14 lg:grid-cols-12 lg:gap-20 lg:py-16">
          <Reveal className="lg:col-span-4">
            <span className="rule-gold" aria-hidden="true" />
            <h2 id="company-details-heading" className="heading-3 mt-7">
              Company Details
            </h2>
            <p className="body-muted mt-5 max-w-xs">
              For project enquiries, use the form and our team can follow up
              with the appropriate next steps.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7 lg:col-start-6">
            <dl>
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="border-line flex flex-col gap-2 border-t py-6 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-10"
                >
                  <dt className="font-display text-mist-400 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase sm:w-32 sm:shrink-0">
                    {detail.label}
                  </dt>
                  <dd className="text-mist-200 text-[0.9375rem]">
                    {Array.isArray(detail.value) ? (
                      <address className="space-y-0.5 not-italic">
                        {detail.value.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
