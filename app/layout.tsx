import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import FloatingActions from "@/components/layout/FloatingActions";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import {
  organizationSchema,
  siteDescription,
  siteUrl,
  websiteSchema,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Resolves every relative URL below, and in each page's metadata, against
  // the live origin. Without it Open Graph images are dropped by crawlers.
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Construction",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_PK",
    url: "/",
    title: `${site.name} | ${site.tagline}`,
    description: siteDescription,
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: `${site.legalName} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: siteDescription,
    images: ["/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Stops iOS auto-linking any number-like text in body copy. Our own tel:
  // links in the footer and call button are unaffected.
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#071225",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="bg-ink-950 flex min-h-full flex-col">
        <JsonLd schema={[organizationSchema(), websiteSchema()]} />
        {/* Motion renders its hidden initial state on the server, so reveal
            everything if JavaScript never runs. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main-content"
          className="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
