import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Built as plain static files for shared hosting: `npm run build` writes a
   * complete site to `out/`, which is uploaded to public_html. There is no
   * Node process on the server, so the enquiry form posts to
   * `public/send-enquiry.php` instead of a route handler.
   */
  output: "export",

  /**
   * Each route is written as <route>/index.html, which Apache serves directly
   * at /route/. Without this the export writes <route>.html, which shared
   * hosting will not serve without extra rewrite rules.
   */
  trailingSlash: true,

  /**
   * next/image optimisation needs a server. The images in public/ are already
   * sized and compressed for their slots, so they are served as they are.
   */
  images: { unoptimized: true },
};

export default nextConfig;
