"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactForm() {
  return (
    <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
      <input
        required
        placeholder="Name"
        className="w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
      />
      <input
        required
        type="email"
        placeholder="Email"
        className="w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
      />
      <textarea
        required
        rows={5}
        placeholder="How can we help?"
        className="w-full resize-none rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
      />
      <MagneticButton>
        <button
          type="submit"
          className="rounded-full bg-stone-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
        >
          Send message
        </button>
      </MagneticButton>
    </form>
  );
}
