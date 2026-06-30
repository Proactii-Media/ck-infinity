"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutContent } from "./AboutContent";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !heroRef.current ||
      !imageRef.current ||
      !contentRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: heroRef.current,
          anticipatePin: 1,
        },
      });

      tl.to(
        imageRef.current,
        {
          yPercent: -12,
          scale: 1.08,
          ease: "none",
        },
        0,
      );

      tl.to(
        ".about-title",
        {
          y: -120,
          opacity: 0,
          ease: "power2.out",
        },
        0,
      );

      tl.to(
        ".about-subtitle",
        {
          y: -80,
          opacity: 0,
          ease: "power2.out",
        },
        0.05,
      );

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* HERO */}
      <div
        ref={heroRef}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/ck-lake-side/ck-8.jpeg"
            alt="CK Infinity"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 px-6 text-center text-white">
          <p className="about-subtitle mb-5 text-xs uppercase tracking-[0.45em] text-white/80">
            Premium Real Estate
          </p>

          <h1 className="about-title font-serif text-6xl font-light md:text-8xl lg:text-[9rem]">
            CK Infinity
          </h1>

          <p className="about-subtitle mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Crafting thoughtfully designed residential communities where
            architecture, comfort and modern living come together.
          </p>

          <div className="mt-14 animate-bounce text-2xl">↓</div>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div ref={contentRef}>
        <AboutContent />
      </div>
    </section>
  );
}
