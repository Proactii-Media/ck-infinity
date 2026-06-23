"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "How do I schedule a private site visit?",
    a: "Use our inquiry form or WhatsApp concierge. We confirm within one business day and tailor the walkthrough to your family’s priorities.",
  },
  {
    q: "Do you support NRI buyers?",
    a: "Yes—virtual tours, documentation assistance, and flexible handover timelines are available across key corridors.",
  },
  {
    q: "What payment structures are available?",
    a: "Construction-linked plans and milestone-based schedules vary by project. Our sales desk shares transparent schedules at enquiry stage.",
  },
  {
    q: "Are homes delivered with smart infrastructure?",
    a: "Flagship towers include intelligent access, climate optimization, and optional automation packages curated with leading partners.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="glass-panel overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-serif text-lg font-light text-stone-900">
                {f.q}
              </span>
              <span
                className={cn(
                  "text-gold transition-transform",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="border-t border-stone-200/80 px-6 pb-5 pt-4 text-sm font-light leading-relaxed text-stone-600">
                    {f.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
