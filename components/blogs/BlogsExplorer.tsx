"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories, blogPosts } from "@/lib/blogs";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 2;

export function BlogsExplorer() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogPosts.filter((b) => {
      const matchQ =
        !q ||
        b.title.toLowerCase().includes(q.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "All" || b.category === cat;
      return matchQ && matchC;
    });
  }, [q, cat]);

  const featured = blogPosts.find((b) => b.featured);
  const showFeatured = Boolean(
    featured && filtered.some((b) => b.slug === featured.slug)
  );
  const gridPosts =
    showFeatured && featured
      ? filtered.filter((b) => b.slug !== featured.slug)
      : filtered;
  const pages = Math.max(1, Math.ceil(gridPosts.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const slice = gridPosts.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {showFeatured && featured ? (
          <FadeIn>
            <Link
              href={`/blogs/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/10 ring-1 ring-stone-100"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[320px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center bg-white p-8 md:p-12">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-dark">
                    Featured · {featured.category}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-light text-stone-900 md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 text-[10px] uppercase tracking-[0.25em] text-stone-400">
                    {featured.readTime} · {featured.date}
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ) : null}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="grid gap-8 sm:grid-cols-2">
              {slice.map((b, i) => (
                <FadeIn key={b.slug} delay={i * 0.04}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-stone-900/5 ring-1 ring-stone-100">
                    <Link href={`/blogs/${b.slug}`} className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                        {b.category}
                      </span>
                      <Link href={`/blogs/${b.slug}`}>
                        <h3 className="mt-2 font-serif text-xl font-light text-stone-900 transition group-hover:text-gold-dark">
                          {b.title}
                        </h3>
                      </Link>
                      <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-stone-600">
                        {b.excerpt}
                      </p>
                      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                        {b.date} · {b.readTime}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {Array.from({ length: pages }, (_, idx) => idx + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={cn(
                    "h-10 w-10 rounded-full text-xs font-medium transition",
                    current === n
                      ? "bg-stone-900 text-white"
                      : "border border-stone-200 bg-white text-stone-600 hover:border-gold/40"
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-panel rounded-3xl p-6">
              <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                Search
              </label>
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Articles, topics…"
                className="mt-3 w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
              />
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                Categories
              </h3>
              <ul className="mt-4 space-y-2">
                {blogCategories.map((c) => (
                  <li key={c}>
                    <button
                      type="button"
                      onClick={() => {
                        setCat(c);
                        setPage(1);
                      }}
                      className={cn(
                        "w-full rounded-xl px-3 py-2 text-left text-sm font-light transition",
                        cat === c
                          ? "bg-gold/15 text-stone-900"
                          : "text-stone-600 hover:bg-stone-100"
                      )}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
