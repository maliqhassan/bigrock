import Link from "next/link";

import Logo from "@/components/layout/Logo";
import FooterBuildings from "@/components/layout/FooterBuildings";
import SocialLinks from "@/components/layout/SocialLinks";
import { expertiseNav, mainNav, serviceNav, site } from "@/lib/site";
import type { NavItem } from "@/lib/site";

const companyNav: NavItem[] = mainNav.filter((item) => item.href !== "/");

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-gold-500 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
        {title}
      </h2>
      <ul className="mt-6 flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="link-muted text-sm">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 relative mt-auto overflow-hidden">
      <div
        aria-hidden="true"
        className="via-line to-line h-px w-full bg-gradient-to-r from-azure-600/70"
      />

      <FooterBuildings />
      <div className="site-container section-tight relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo size="lg" variant="plate" />
            <span className="rule-gold mt-7" aria-hidden="true" />
            <p className="eyebrow mt-7 block">{site.tagline}</p>
            <p className="body-muted mt-5 max-w-sm">
              End-to-end project delivery across civil, mechanical and
              electrical disciplines, backed by quality control, risk management
              and transparent client communication.
            </p>

            <SocialLinks className="mt-8" />
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn title="Company" items={companyNav} />
            <FooterColumn title="Services" items={serviceNav} />
            <FooterColumn title="Expertise" items={expertiseNav} />
          </div>
        </div>

        <div className="hairline mt-16 flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="body-muted">
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="body-muted">
            Founded in {site.country}{" "}
            <span className="text-gold-500">&bull;</span> {site.foundedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
