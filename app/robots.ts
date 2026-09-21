import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

// Emitted as a static file at build time, for the static export.
export const dynamic = "force-static";

/** Served at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Accepts POST only and has nothing to index.
      disallow: "/send-enquiry.php",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
