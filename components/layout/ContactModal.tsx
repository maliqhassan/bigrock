"use client";

import { motion } from "motion/react";

import Modal from "@/components/ui/Modal";
import ContactForm from "@/components/sections/ContactForm";

const TITLE_ID = "contact-modal-heading";

const EASE = [0.22, 1, 0.36, 1] as const;

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

/** The enquiry form, presented as a dialog from the header call to action. */
export default function ContactModal({ open, onClose }: ContactModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy={TITLE_ID}>
      <div className="p-7 sm:p-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
          }}
        >
          <motion.p
            className="eyebrow"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
            }}
          >
            Get in Touch
          </motion.p>

          <motion.h2
            id={TITLE_ID}
            className="heading-3 mt-4"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
            }}
          >
            Tell Us About Your Project.
          </motion.h2>

          <motion.span
            aria-hidden="true"
            className="rule-gold mt-5"
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.5, ease: EASE },
              },
            }}
            style={{ originX: 0 }}
          />

          <motion.p
            className="body-muted mt-5 max-w-md"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
            }}
          >
            Share the essentials of your project and our team will follow up with
            the appropriate next steps.
          </motion.p>

          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </Modal>
  );
}
