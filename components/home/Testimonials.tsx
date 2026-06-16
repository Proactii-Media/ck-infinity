"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () =>
    setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Voices of Home"
            title="Trusted by discerning residents"
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -left-4 top-8 hidden text-8xl font-serif text-gold/20 md:block">
            “
          </div>
          <GlassPanelCarousel t={t} i={i} />
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-600 transition hover:border-gold/40 hover:text-stone-900"
              aria-label="Previous testimonial"
            >
              Prev
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-600 transition hover:border-gold/40 hover:text-stone-900"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlassPanelCarousel({
  t,
  i,
}: {
  t: (typeof testimonials)[0];
  i: number;
}) {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] px-8 py-12 md:px-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center text-center"
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-gold/30 ring-offset-4 ring-offset-background">
            <Image src={t.image} alt={t.name} fill className="object-cover" sizes="80px" />
          </div>
          <p className="mt-8 font-serif text-2xl font-light leading-relaxed text-stone-800 md:text-3xl">
            {t.quote}
          </p>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
            {t.name}
          </p>
          <p className="mt-2 text-xs font-light text-stone-500">{t.role}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
