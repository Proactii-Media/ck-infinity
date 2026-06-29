"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MasterPlanSection() {
  return (
    <section className="bg-[#faf7f2] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-gold">
            Master Planning
          </p>

          <h2 className="font-serif text-4xl font-light leading-tight text-stone-900 md:text-6xl">
            Designed Around
            <br />
            Nature & Luxury
          </h2>

          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-stone-600">
            CK Lake Side is thoughtfully master planned around a tranquil lake,
            landscaped gardens, premium residences, and community spaces. Every
            road, pathway, and amenity has been positioned to create an
            environment where architecture and nature exist in perfect harmony.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="group"
        >
          <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <Image
              src="/ck-lake-side/ck-17.jpeg"
              alt="CK Lake Side Master Plan"
              width={900}
              height={900}
              className="w-full transition duration-700 group-hover:scale-105"
            />
          </div>

          <p className="mt-6 text-center text-sm uppercase tracking-[0.3em] text-stone-500">
            CK Lake Side • Master Plan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
