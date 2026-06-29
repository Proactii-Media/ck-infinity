"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const quick = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 92%",
              once: true,
            },
          },
        );
      }

      colRefs.current.forEach((col, i) => {
        if (!col) return;
        gsap.fromTo(
          col,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 90%",
              once: true,
            },
            delay: 0.1 + i * 0.08,
          },
        );
      });

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 95%",
              once: true,
            },
          },
        );
      }
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-gold/10 bg-stone-900 text-stone-200"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,169,98,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div ref={logoRef} className="opacity-0">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden">
                <Image
                  src="/ck-logo.jpeg"
                  alt="CK-Infinity"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <p className="font-serif text-2xl font-light tracking-[0.25em] text-white">
                Infinity
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-stone-400">
              Sculpting residences where light, landscape, and legacy align —
              crafted for families who expect the exceptional.
            </p>
          </div>

          <div
            ref={(el) => {
              colRefs.current[0] = el;
            }}
            className="opacity-0"
          >
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-stone-300">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="group relative inline-block transition hover:text-gold-light"
                  >
                    {q.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/inquiry"
                  className="group relative inline-block transition hover:text-gold-light"
                >
                  Inquiry
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          <div
            ref={(el) => {
              colRefs.current[1] = el;
            }}
            className="opacity-0"
          >
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
              Projects
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-stone-300">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group relative inline-block transition hover:text-gold-light"
                  >
                    {p.name}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => {
              colRefs.current[2] = el;
            }}
            className="opacity-0"
          >
            <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-stone-300">
              <li>+91 9537 9977 11, +91 9537 9977 22</li>
              <li>www.ckinfinitygroup.com</li>
              <li className="max-w-[220px] leading-relaxed">
                Nr. Hanuman Temple, N.H. 848-B, Daman Road, Kikarla, Dist-
                Valsad- 396185.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        ref={lineRef}
        className="mx-auto h-px max-w-7xl origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="py-5 text-center text-[11px] font-light tracking-[0.2em] text-stone-500">
        © 2026 CK-Infinity. All rights reserved.
      </div>
    </footer>
  );
}
