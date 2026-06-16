"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";

const stats = [
  { label: "Years Experience", value: 18, suffix: "+" },
  { label: "Happy Families", value: 2400, suffix: "+" },
  { label: "Premium Amenities", value: 42, suffix: "+" },
  { label: "Projects Delivered", value: 28, suffix: "" },
];

export function AboutBrief() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-cream py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-stone-200/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <FadeIn className="relative">
          <div className="grid grid-cols-12 gap-4">
            <div className="relative col-span-7 aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-stone-900/10">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85"
                alt="Luxury living room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-4 pt-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85"
                  alt="Interior detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
              <div className="glass-panel relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=85"
                  alt="Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 18vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="About CK-Infinity"
              subtitle="We compose residential environments where material honesty, generous light, and intuitive service converge. Each address is imagined as a private sanctuary within the city—calm, confident, and enduring."
            />
          </FadeIn>

          <FadeIn
            delay={0.12}
            className="mt-12 grid grid-cols-2 gap-8 sm:gap-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-gold/30 pl-5">
                <p className="font-serif text-4xl font-light text-stone-900 md:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs font-light uppercase tracking-[0.2em] text-stone-500">
                  {s.label}
                </p>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="mt-10">
            <MagneticButton>
              <Link
                href="/about"
                className="inline-flex rounded-full border border-gold/40 bg-white/70 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-900 shadow-sm backdrop-blur transition hover:border-gold/60 hover:shadow-[0_0_40px_rgba(201,169,98,0.2)]"
              >
                Read More
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
