"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { ProjectImageSlider } from "./ProjectImageSlider";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Signature Developments"
            title="Curated Residential Landmarks"
            subtitle="Discover a portfolio crafted for those who value privacy, proportion, and places that age beautifully."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;

            // Only use the first 4 gallery images
            const sliderImages = p.gallery
              ?.slice(0, 4)
              .map((img) => img.image) ?? [p.image];

            return (
              <FadeIn key={p.slug} delay={i * 0.05}>
                <article className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/10",
                      reverse
                        ? "lg:order-2 lg:translate-y-6"
                        : "lg:-translate-y-4",
                    )}
                  >
                    <ProjectImageSlider images={sliderImages} alt={p.name} />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                  </div>

                  <div
                    className={cn(
                      "space-y-6",
                      reverse && "lg:order-1 lg:text-right",
                    )}
                  >
                    <span className="inline-flex rounded-full border border-gold/30 bg-white/80 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-dark backdrop-blur">
                      {p.status}
                    </span>

                    <h3 className="font-serif text-4xl font-light text-stone-900 md:text-5xl">
                      {p.name}
                    </h3>

                    <p className="text-sm font-light uppercase tracking-[0.25em] text-stone-500">
                      {p.location}
                    </p>

                    <p className="max-w-xl text-base font-light leading-relaxed text-stone-600 md:text-lg">
                      {p.description}
                    </p>

                    <div className={cn("flex", reverse && "lg:justify-end")}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-stone-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-stone-800"
                      >
                        Explore
                        <span className="transition-transform group-hover/btn:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
