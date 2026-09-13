import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Small gold uppercase text link with a trailing arrow. */
export default function ArrowLink({
  href,
  children,
  className,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-display text-gold-500 hover:text-gold-400 group inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition-colors",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
