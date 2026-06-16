"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectStatus } from "@/lib/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

const filters: (ProjectStatus | "All")[] = [
  "All",
  "Ongoing",
  "Completed",
  "Upcoming",
];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [modal, setModal] = useState<string | null>(null);

  const list = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.status === filter),
    [filter],
  );

  const active = modal ? projects.find((p) => p.slug === modal) : null;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-5 py-2 text-[10px] font-medium uppercase tracking-[0.22em] transition",
                  filter === f
                    ? "border-gold/50 bg-gold/15 text-stone-900"
                    : "border-stone-200 bg-white text-stone-500 hover:border-gold/30",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 6) * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-stone-900/5 ring-1 ring-stone-100">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-800 backdrop-blur">
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl font-light text-stone-900">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-stone-500">
                    {p.location}
                  </p>
                  <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-stone-600">
                    {p.description}
                  </p>
                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-dark">
                    Amenities
                  </p>
                  <ul className="mt-2 space-y-1 text-xs font-light text-stone-500">
                    {p.amenities.slice(0, 3).map((a) => (
                      <li key={a}>— {a}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setModal(p.slug)}
                      className="flex-1 rounded-full bg-stone-900 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800"
                    >
                      Explore Details
                    </button>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="flex flex-1 items-center justify-center rounded-full border border-stone-200 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-800 transition hover:border-gold/40"
                    >
                      Gallery & Details
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] bg-cream shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                  {active.status}
                </span>
                <h3 className="mt-3 font-serif text-3xl font-light text-stone-900">
                  {active.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                  {active.location}
                </p>
                <p className="mt-6 text-sm font-light leading-relaxed text-stone-600">
                  {active.longDescription}
                </p>
                <ul className="mt-6 space-y-2 text-sm font-light text-stone-700">
                  {active.amenities.map((a) => (
                    <li key={a}>— {a}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${active.slug}`}
                    className="rounded-full bg-stone-900 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
                    onClick={() => setModal(null)}
                  >
                    Open detail page
                  </Link>
                  <button
                    type="button"
                    onClick={() => setModal(null)}
                    className="rounded-full border border-stone-300 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
