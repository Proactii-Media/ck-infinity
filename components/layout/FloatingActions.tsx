"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function FloatingActions() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setShowTop(v > 520);
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full glass-panel text-gold-dark shadow-lg md:bottom-8 md:right-8"
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 16 }}
        transition={{ duration: 0.35 }}
        style={{ pointerEvents: showTop ? "auto" : "none" }}
        aria-label="Back to top"
      >
        <span className="text-lg" aria-hidden>
          ↑
        </span>
      </motion.button>

      <motion.div
        className="fixed bottom-24 right-6 z-[105] md:bottom-28 md:right-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <Link
          href="/inquiry"
          className="glass-panel inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-800 shadow-md transition hover:shadow-[0_0_40px_rgba(201,169,98,0.25)]"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Inquiry
        </Link>
      </motion.div>
    </>
  );
}
