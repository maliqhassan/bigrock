import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Renders the wordmark without a surrounding link (e.g. inside the footer). */
  asLink?: boolean;
};

function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 24 24"
        className="text-gold-500 h-7 w-7 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path d="M12 2 22 8v8l-10 6L2 16V8l10-6Z" stroke="currentColor" strokeWidth="1.25" />
        <path d="M12 8.5 17 11.4v5.7L12 20l-5-2.9v-5.7L12 8.5Z" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="font-display flex flex-col leading-none">
        <span className="text-cream text-[0.95rem] font-bold tracking-[0.16em] uppercase">
          Big Rock
        </span>
        <span className="text-mist-400 mt-1 text-[0.6rem] font-medium tracking-[0.34em] uppercase">
          Builders
        </span>
      </span>
    </span>
  );
}

/** Brand wordmark shared by the header and footer. */
export default function Logo({ className, asLink = true }: LogoProps) {
  if (!asLink) {
    return (
      <span className={cn("inline-flex", className)}>
        <Wordmark />
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("inline-flex rounded-sm", className)}
    >
      <Wordmark />
    </Link>
  );
}
