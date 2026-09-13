"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import ContactModal from "@/components/layout/ContactModal";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Rendered outside the bar, so the dialog is not scoped by the bar's
          light-surface tokens. */}
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Floating bar: sits over the banner and stays with the page as it scrolls. */}
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
        <div className="site-container">
          {/* `surface-light` re-points the palette tokens inside the white bar. */}
          <div className="surface-light ring-navy-ink/10 flex h-16 items-center gap-4 rounded-full bg-white/65 bg-none pr-3 pl-4 backdrop-blur-2xl shadow-[0_18px_40px_-24px_rgba(7,18,37,0.55)] ring-1 sm:h-[4.5rem] sm:pr-4 sm:pl-6">
            <Logo className="shrink-0" size="sm" priority />

            <nav
              aria-label="Primary"
              className="hidden flex-1 justify-center xl:flex"
            >
              <ul className="flex items-center gap-1">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "font-display block rounded-full px-3.5 py-2 text-[0.7rem] font-medium tracking-[0.06em] whitespace-nowrap uppercase transition-colors",
                        isActive(item.href)
                          ? "bg-azure-800 text-white"
                          : "text-cream hover:bg-soft hover:text-azure-800",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto hidden shrink-0 xl:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                size="sm"
                variant="gold"
                className="gap-2.5 rounded-full py-1.5 pr-1.5 pl-5"
              >
                Get in Touch
                <span
                  aria-hidden="true"
                  className="bg-navy-ink/15 flex h-7 w-7 items-center justify-center rounded-full"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-cream hover:bg-soft ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors xl:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {isMenuOpen ? (
            <div
              id="mobile-navigation"
              className="surface-light ring-navy-ink/5 mt-3 rounded-3xl bg-white/75 bg-none p-4 backdrop-blur-2xl shadow-[0_18px_40px_-24px_rgba(7,18,37,0.55)] ring-1 xl:hidden"
            >
              <nav aria-label="Primary mobile">
                <ul className="flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "font-display block rounded-full px-4 py-3 text-sm font-medium tracking-[0.06em] uppercase transition-colors",
                          isActive(item.href)
                            ? "bg-azure-800 text-white"
                            : "text-cream hover:bg-soft",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => {
                    closeMenu();
                    setIsContactOpen(true);
                  }}
                  variant="gold"
                  className="mt-4 w-full rounded-full"
                >
                  Get in Touch
                </Button>
              </nav>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}
