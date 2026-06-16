"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

const quick = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-gold/10 bg-stone-900 text-stone-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,169,98,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-light tracking-[0.25em] text-white">
              CK-Infinity
            </p>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-stone-400">
              Sculpting residences where light, landscape, and legacy
              align—crafted for families who expect the exceptional.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-stone-300">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="transition hover:text-gold-light"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/inquiry"
                  className="transition hover:text-gold-light"
                >
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
              Projects
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-stone-300">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="transition hover:text-gold-light"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-stone-300">
              <li>+91 98765 43210</li>
              <li>concierge@ck-infinity.com</li>
              <li className="max-w-[220px] leading-relaxed">
                Infinity Tower, 12th Road, Bandra West, Mumbai 400050
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-lg">
              <a
                href="#"
                className="opacity-80 transition hover:text-gold-light"
                aria-label="Instagram"
              >
                ◎
              </a>
              <a
                href="#"
                className="opacity-80 transition hover:text-gold-light"
                aria-label="LinkedIn"
              >
                ◇
              </a>
              <a
                href="#"
                className="opacity-80 transition hover:text-gold-light"
                aria-label="YouTube"
              >
                △
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[11px] font-light tracking-[0.2em] text-stone-500">
        © 2026 CK-Infinity. All rights reserved.
      </div>
    </footer>
  );
}
