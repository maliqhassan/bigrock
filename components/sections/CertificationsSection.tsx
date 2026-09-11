import { HardHat, MessageSquareText, ShieldCheck, TriangleAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

type Standard = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const standards: Standard[] = [
  {
    number: "01",
    title: "Quality Control",
    description: "Structured attention to quality throughout project delivery.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Risk Management",
    description:
      "A disciplined approach to identifying and managing project risks.",
    icon: TriangleAlert,
  },
  {
    number: "03",
    title: "Safety & Responsibility",
    description:
      "A strong focus on responsible execution across construction activities.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "Clear communication that keeps clients informed throughout delivery.",
    icon: MessageSquareText,
  },
];

function StandardColumn({ item }: { item: Standard }) {
  const Icon = item.icon;

  return (
    <article className="group h-full py-10 lg:px-8 lg:py-0">
      <span
        aria-hidden="true"
        className="font-display block text-4xl font-semibold text-white/[0.07] transition-colors duration-500 group-hover:text-white/[0.12]"
      >
        {item.number}
      </span>

      <Icon className="text-gold-500 mt-8 h-5 w-5" aria-hidden="true" />

      <h3 className="heading-4 mt-5">{item.title}</h3>
      <p className="body-muted mt-4">{item.description}</p>
    </article>
  );
}

/**
 * Quality and professional standards. Deliberately states commitments only —
 * the company profile provides no named certifications or accreditations.
 */
export default function CertificationsSection() {
  return (
    <section aria-labelledby="standards-heading" className="surface-deep section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Quality & Standards"
          headingId="standards-heading"
          title="Committed to Quality. Built on Accountability."
          description="Our approach is grounded in disciplined project delivery, quality control, risk management and transparent communication — helping clients move from planning to completion with confidence."
        />

        <ul className="divide-line border-line mt-16 grid divide-y border-t lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:border-t-0 lg:py-4">
          {standards.map((item) => (
            <li key={item.number} className="lg:first:pl-0 lg:last:pr-0">
              <StandardColumn item={item} />
            </li>
          ))}
        </ul>

        <div className="hairline mt-14 pt-8">
          <p className="font-display text-mist-300 text-sm font-medium sm:text-base">
            Quality is not an afterthought.{" "}
            <span className="text-gold-500">It is part of how we build.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
