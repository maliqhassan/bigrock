"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  /** id of the element that names the dialog. */
  labelledBy: string;
  children: ReactNode;
};

/**
 * Accessible dialog: traps Tab inside the panel, closes on Escape or backdrop
 * click, locks page scroll while open, and returns focus to whatever opened it.
 */
export default function Modal({ open, onClose, labelledBy, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 80);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      opener?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-100 flex items-end justify-center p-3 sm:items-center sm:p-6">
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            className="bg-ink-950/80 absolute inset-0 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className="border-line bg-ink-900 relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.9 }}
          >
            {/* Gold hairline along the top edge */}
            <span
              aria-hidden="true"
              className="via-gold-500/70 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent"
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="border-line text-mist-300 hover:border-gold-500/50 hover:text-gold-500 absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
