import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";
import { mainNav } from "@/lib/site";

/**
 * Served at /sitemap.xml, generated from the navigation so a new page cannot
 * be added to the site and forgotten here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return mainNav.map((item) => ({
    url: new URL(item.href, `${siteUrl}/`).toString(),
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : item.href === "/contact" ? 0.8 : 0.7,
  }));
}
