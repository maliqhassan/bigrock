import type { MetadataRoute } from "next";

import { site } from "@/lib/site";
import { siteDescription } from "@/lib/seo";

// Emitted as a static file at build time, for the static export.
export const dynamic = "force-static";

/** Served at /manifest.webmanifest — used when the site is saved to a phone. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#071225",
    theme_color: "#071225",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
