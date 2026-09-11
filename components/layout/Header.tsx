"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        isScrolled || isMenuOpen
          ? "border-line bg-ink-950/90 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-container flex h-20 items-center gap-6">
        <Logo className="shrink-0" />

        <nav aria-label="Primary" className="hidden flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "font-display text-[0.75rem] font-medium tracking-[0.08em] uppercase transition-colors",
                    isActive(item.href)
                      ? "text-gold-500"
                      : "text-mist-300 hover:text-cream",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden shrink-0 xl:block">
          <Button href="/contact" size="sm">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-cream hover:text-gold-400 -mr-2 ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors xl:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-line bg-ink-950/95 border-t backdrop-blur-md xl:hidden"
        >
          <nav aria-label="Primary mobile" className="site-container py-6">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href} className="border-line border-b last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "font-display block py-4 text-sm font-medium tracking-[0.06em] uppercase transition-colors",
                      isActive(item.href) ? "text-gold-500" : "text-mist-200",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button href="/contact" onClick={closeMenu} className="mt-6 w-full">
              Get in Touch
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
