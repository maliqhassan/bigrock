import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Supplied brand asset — a transparent PNG, used exactly as provided.
 * On light surfaces it sits bare; on dark surfaces it is placed on a light
 * plate so the navy wordmark stays legible. The artwork is never altered.
 */
const LOGO_SRC = "/images/logo.png";
const LOGO_INTRINSIC = 960;

type LogoSize = "sm" | "md" | "lg";

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12 sm:h-14 sm:w-14",
  lg: "h-16 w-16 sm:h-20 sm:w-20",
};

type LogoProps = {
  className?: string;
  size?: LogoSize;
  /** `plate` adds a light backing panel for dark surfaces such as the footer. */
  variant?: "bare" | "plate";
  /** Renders the mark without a surrounding link. */
  asLink?: boolean;
  /** Loads eagerly — set on the header instance. */
  priority?: boolean;
};

function Mark({
  size,
  variant,
  priority,
}: {
  size: LogoSize;
  variant: "bare" | "plate";
  priority?: boolean;
}) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt={`${site.name} logo`}
      width={LOGO_INTRINSIC}
      height={LOGO_INTRINSIC}
      priority={priority}
      sizes="112px"
      className={cn("object-contain", sizeClasses[size])}
    />
  );

  if (variant === "plate") {
    return (
      <span className="inline-flex items-center justify-center rounded-lg bg-white p-2 ring-1 ring-white/15">
        {image}
      </span>
    );
  }

  return image;
}

/** Brand mark shared by the header and footer. */
export default function Logo({
  className,
  size = "md",
  variant = "bare",
  asLink = true,
  priority,
}: LogoProps) {
  if (!asLink) {
    return (
      <span className={cn("inline-flex", className)}>
        <Mark size={size} variant={variant} priority={priority} />
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("inline-flex rounded-md", className)}
    >
      <Mark size={size} variant={variant} priority={priority} />
    </Link>
  );
}
