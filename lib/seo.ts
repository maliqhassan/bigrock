/**
 * Search metadata and structured data.
 *
 * Every value here is drawn from `lib/site.ts`, so nothing is claimed that the
 * company has not supplied. Structured data in particular is a statement to
 * search engines — no ratings, awards, certifications or credentials appear
 * because none have been provided.
 */

import type { Metadata } from "next";

import { site } from "@/lib/site";

/**
 * Canonical origin, used for canonical URLs, Open Graph and the sitemap.
 *
 * Set NEXT_PUBLIC_SITE_URL to the live domain before launch. If a deploy ever
 * goes out without it, the platform's own production domain is used rather
 * than localhost — a wrong canonical tag would keep the site out of search
 * results entirely.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Set automatically on Vercel; the production domain, not the preview one.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/+$/, "");

/** The description used for the site as a whole. */
export const siteDescription =
  "Big Rock Builders (Pvt Ltd) is a Pakistani construction company delivering end-to-end civil, mechanical and electrical projects with rigorous quality control and transparent client communication.";

const absolute = (path: string) => new URL(path, `${siteUrl}/`).toString();

type PageMetaInput = {
  /** Page title, without the company name — the template appends that. */
  title: string;
  description: string;
  /** Route, leading slash, e.g. "/services". */
  path: string;
  /** Share card, relative to the site root. */
  image?: string;
};

/**
 * Per-page metadata: canonical URL plus matching Open Graph and Twitter cards.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og/default.jpg",
}: PageMetaInput): Metadata {
  const isHome = path === "/";
  const fullTitle = isHome
    ? `${site.name} | ${site.tagline}`
    : `${title} | ${site.name}`;

  return {
    // The home page carries the company name itself, so it opts out of the
    // "%s | Big Rock Builders" template rather than reading "Home | ...".
    title: isHome ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_PK",
      url: path,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/**
 * The company itself. `GeneralContractor` is schema.org's type for a
 * construction business, and inherits the local-business properties that let
 * search engines show the address and phone number.
 */
export function organizationSchema() {
  const lines = site.address.lines;

  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteUrl}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: siteUrl,
    logo: absolute("/images/logo.png"),
    image: absolute("/og/default.jpg"),
    description: siteDescription,
    slogan: site.tagline,
    foundingDate: String(site.foundedYear),
    email: site.email,
    telephone: site.phone.dial,
    address: {
      "@type": "PostalAddress",
      streetAddress: lines.slice(0, -1).join(", "),
      addressLocality: lines[lines.length - 1],
      addressCountry: "PK",
    },
    areaServed: { "@type": "Country", name: site.country },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phone.dial,
      email: site.email,
      areaServed: "PK",
    },
    sameAs: [site.social.facebook, site.social.instagram].filter(Boolean),
  };
}

/** The site, so search engines can associate it with the company. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: site.name,
    description: siteDescription,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

/** Breadcrumb trail, so results show Home › Section rather than a bare URL. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absolute(crumb.path),
      }),
    ),
  };
}
