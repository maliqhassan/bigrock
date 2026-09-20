import Image from "next/image";
import { ExternalLink } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealList, RevealItem } from "@/components/ui/Reveal";

/**
 * Registrations and licences held by the company.
 *
 * Every line below is transcribed from the certificates supplied by the
 * company, which are published alongside each entry so a client can check
 * them. Nothing is summarised into a claim the documents do not make.
 *
 * RENEWAL DATES — these entries carry expiry dates and will need updating:
 *   PEC licence 9586 ......... 30 June 2027
 *   E-in-C pre-qualification . 30 June 2028
 */

type Credential = {
  issuer: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  /** Expiry as printed on the certificate, where it carries one. */
  validUntil?: string;
  /** `width`/`height` are the scan's own pixel size. The image is never shown
      larger than that, so it stays as sharp as the supplied document allows. */
  document: { src: string; alt: string; width: number; height: number };
};

const credentials: Credential[] = [
  {
    issuer: "Securities and Exchange Commission of Pakistan",
    title: "Certificate of Incorporation",
    summary:
      "Big Rock Builders (Private) Limited is incorporated under the Companies Ordinance, 1984, and is limited by shares.",
    facts: [
      { label: "Incorporated", value: "29 June 2016" },
      { label: "Corporate UIN", value: "0100481" },
    ],
    document: {
      src: "/images/certificates/secp-incorporation.jpg",
      alt: "SECP Certificate of Incorporation for Big Rock Builders (Private) Limited",
      width: 415,
      height: 612,
    },
  },
  {
    issuer: "Pakistan Engineering Council",
    title: "Licence of Pakistani Constructor",
    summary:
      "Licensed under the Construction and Operation of Engineering Works Bye-Laws 1987, with twenty-five registered fields of specialisation across building, civil and electrical works.",
    facts: [
      { label: "Licence No.", value: "9586" },
      { label: "Category", value: "C3" },
      { label: "Works up to", value: "Rs. 500 million" },
    ],
    validUntil: "30 June 2027",
    document: {
      src: "/images/certificates/pec-licence.jpg",
      alt: "Pakistan Engineering Council constructor licence number 9586, category C3",
      width: 422,
      height: 611,
    },
  },
  {
    issuer: "Engineer-in-Chief's Branch, General Headquarters",
    title: "Pre-Qualification Certificate",
    summary:
      "Pre-qualified as a contractor in Category 3 to bid for road and pavement works, sewerage and water supply, general civil engineering works including concrete repair and soil stabilisation, general building works and general engineering works.",
    facts: [
      { label: "Category", value: "Category 3 Contractor" },
      { label: "Serial No.", value: "484" },
      { label: "Registration No.", value: "2001/Pre-Qual/BRB/283/DP&W" },
    ],
    validUntil: "30 June 2028",
    document: {
      src: "/images/certificates/einc-prequalification.jpg",
      alt: "Engineer-in-Chief's Branch pre-qualification certificate, serial number 484",
      width: 632,
      height: 552,
    },
  },
  {
    issuer: "Federal Board of Revenue",
    title: "DNFBP Registration — AML/CFT",
    summary:
      "Registered as a Designated Non-Financial Business and Profession with the Directorate General of DNFBPs for compliance under the Anti Money Laundering Act, 2010.",
    facts: [
      { label: "Registration No.", value: "7254007" },
      { label: "Activity", value: "Builder" },
      { label: "Registered", value: "13 May 2026" },
    ],
    document: {
      src: "/images/certificates/fbr-dnfbp.jpg",
      alt: "FBR DNFBP AML/CFT certificate of registration number 7254007",
      width: 652,
      height: 545,
    },
  },
];

export default function CredentialsSection() {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Registrations & Licences"
          headingId="credentials-heading"
          title="Qualified, Licensed and Registered."
          description="Big Rock Builders holds the registrations required to tender for and deliver public and private sector work in Pakistan. Each certificate is published in full below."
        />

        <RevealList className="mt-16 grid gap-6 lg:grid-cols-2">
          {credentials.map((credential) => (
            <RevealItem
              key={credential.title}
              className="card border-line bg-ink-900 flex flex-col gap-8 rounded-xl p-6 sm:p-8"
            >
              {/* The document, shown at its own size — capped to the scan's
                  native width so it never has to be upscaled */}
              <a
                href={credential.document.src}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line group block overflow-hidden rounded-lg border bg-white p-3 sm:p-4"
              >
                <Image
                  src={credential.document.src}
                  alt={credential.document.alt}
                  width={credential.document.width}
                  height={credential.document.height}
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  quality={90}
                  style={{ maxWidth: `${credential.document.width}px` }}
                  className="mx-auto h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>

              <div className="min-w-0">
                <p className="eyebrow">{credential.issuer}</p>
                <h3 className="heading-4 mt-3">{credential.title}</h3>
                <span className="rule-gold mt-5" aria-hidden="true" />

                <p className="body-muted mt-5">{credential.summary}</p>

                <dl className="hairline mt-6 flex flex-col gap-2.5 pt-6">
                  {credential.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                    >
                      <dt className="font-display text-mist-400 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                        {fact.label}
                      </dt>
                      <dd className="text-mist-200 text-sm">{fact.value}</dd>
                    </div>
                  ))}

                  {credential.validUntil ? (
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <dt className="font-display text-mist-400 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                        Valid Until
                      </dt>
                      <dd className="font-display text-gold-500 text-sm font-semibold">
                        {credential.validUntil}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <a
                  href={credential.document.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold mt-6 inline-flex items-center gap-2 text-sm"
                >
                  View Full Certificate
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">
                    — {credential.title}, opens in a new tab
                  </span>
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
