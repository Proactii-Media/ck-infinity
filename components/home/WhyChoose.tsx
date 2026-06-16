"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const reasons = [
  {
    title: "Luxury Lifestyle",
    copy: "Thoughtful spatial poetry—airy plans, bespoke finishes, and service that anticipates before you ask.",
  },
  {
    title: "Prime Location",
    copy: "Addresses chosen for connectivity, skyline, and the quiet confidence of established neighborhoods.",
  },
  {
    title: "Modern Architecture",
    copy: "Facades and interiors authored by studios who understand light, proportion, and enduring material palettes.",
  },
  {
    title: "World-Class Amenities",
    copy: "From wellness courts to curated club programming—amenities designed as daily rituals, not checklists.",
  },
  {
    title: "Safe Community",
    copy: "Layered security, discreet access control, and community design that feels open yet protected.",
  },
  {
    title: "Smart Living",
    copy: "Responsive climate, intelligent access, and future-ready infrastructure woven invisibly into the home.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative bg-gradient-to-b from-cream to-background py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="The CK-Infinity Difference"
            title="Why families choose us"
            subtitle="A singular approach to residential craft—where every decision serves longevity, beauty, and the rhythm of your life."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                delay: i * 0.06,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="group h-full p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(28,25,23,0.08)]">
                <div className="mb-5 h-px w-10 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-16" />
                <h3 className="font-serif text-2xl font-light text-stone-900">
                  {r.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
                  {r.copy}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
