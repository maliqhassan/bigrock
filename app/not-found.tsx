import type { Metadata } from "next";

import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for may have moved or no longer exists. Return to the Big Rock Builders home page or explore our projects.",
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="surface-blue relative -mt-20 flex min-h-[70svh] flex-col justify-center pt-20"
    >
      <div className="site-container py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Page Not Found</p>
          <h1 id="not-found-heading" className="heading-1 mt-6">
            This Page Doesn&rsquo;t Exist.
          </h1>
          <span className="rule-gold mt-8 w-16" aria-hidden="true" />
          <p className="lead mt-8">
            The page you&rsquo;re looking for may have moved or no longer exists.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              Explore Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
