"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems } from "@/lib/gallery";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-gradient-to-b from-background to-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Visual Journey"
            title="Spaces that breathe"
            subtitle="Exteriors, interiors, and amenity moments—composed with the warmth of golden-hour light."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, idx) => (
            <FadeIn key={item.src} delay={(idx % 4) * 0.04} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(idx)}
                className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-lg shadow-stone-900/10"
              >
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/35" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-stone-950/80 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-light">
                      {item.category}
                    </p>
                    <p className="mt-2 text-sm font-light text-white">{item.alt}</p>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-stone-950/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal
            aria-label="Gallery preview"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={galleryItems[active].src}
                  alt={galleryItems[active].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-lg"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="bg-white px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark">
                  {galleryItems[active].category}
                </p>
                <p className="mt-1 font-serif text-xl text-stone-900">
                  {galleryItems[active].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
