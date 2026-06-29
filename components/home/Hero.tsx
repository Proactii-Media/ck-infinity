"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-stone-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ck-lake-side/ck-7.jpeg"
          alt="CK Infinity Residences"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/55 via-stone-950/35 to-cream/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 via-transparent to-stone-900/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="max-w-4xl">
          <motion.p
            className="text-[11px] font-medium uppercase tracking-[0.45em] text-gold-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            CK-Infinity Residences
          </motion.p>

          <motion.h1
            className="mt-5 font-serif text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Experience Infinite
            <br />
            <span className="text-gradient-gold">Luxury Living</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-stone-200 md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Where elegance, comfort and lifestyle meet.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.75 }}
        >
          <MagneticButton>
            <Link
              href="/projects"
              className="rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-900 shadow-lg transition hover:bg-stone-100"
            >
              Explore Projects
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/inquiry"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition hover:border-gold/50 hover:bg-white/15"
            >
              Book a Visit
            </Link>
          </MagneticButton>
        </motion.div>

        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.4em] text-stone-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <span className="h-px w-10 bg-gradient-to-r from-gold to-transparent" />
            Scroll
            <motion.span
              className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 pt-1"
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
            >
              <span className="h-1.5 w-1 rounded-full bg-gold" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
