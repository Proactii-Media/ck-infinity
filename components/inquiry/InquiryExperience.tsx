"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";

const budgets = [
  "₹2–4 Cr",
  "₹4–8 Cr",
  "₹8–15 Cr",
  "₹15 Cr+",
  "AED 3–6M",
  "AED 6M+",
];

export function InquiryExperience() {
  const [success, setSuccess] = useState(false);

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn>
          <form
            className="glass-panel space-y-6 rounded-[2rem] p-8 md:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSuccess(true);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField label="Full name" placeholder="Your name" required />
              <InputField label="Phone" type="tel" placeholder="+91 …" required />
            </div>
            <InputField label="Email" type="email" placeholder="you@email.com" required />
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                Preferred project
              </label>
              <select
                required
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                {projects.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                Budget range
              </label>
              <select
                required
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select range
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                  Schedule site visit
                </label>
                <input
                  type="date"
                  required
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                  Preferred time
                </label>
                <select className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-stone-200/80 bg-white/50 px-4 py-3">
              <input type="checkbox" name="callback" className="mt-1" />
              <span className="text-sm font-light text-stone-600">
                Request a callback from the acquisitions desk within 24 hours.
              </span>
            </label>
            <div>
              <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Share configuration needs, timelines, or questions."
                className="mt-2 w-full resize-none rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
              />
            </div>
            <MagneticButton className="w-full sm:w-auto">
              <button
                type="submit"
                className="w-full rounded-full bg-stone-900 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:w-auto"
              >
                Submit inquiry
              </button>
            </MagneticButton>
          </form>
        </FadeIn>
      </div>

      <AnimatePresence>
        {success ? (
          <motion.div
            className="fixed inset-0 z-[170] flex items-center justify-center bg-stone-950/75 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="max-w-md rounded-[1.75rem] bg-cream p-10 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-2xl">
                ✓
              </div>
              <h3 className="mt-6 font-serif text-2xl text-stone-900">Thank you</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-stone-600">
                Your inquiry is received. A CK-Infinity concierge will contact you shortly to confirm your visit
                and share curated options.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-8 rounded-full border border-stone-300 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function InputField({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
        {label}
      </label>
      <input
        className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
        {...rest}
      />
    </div>
  );
}
