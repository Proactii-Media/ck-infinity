"use client";

import { useRef } from "react";
import { AboutHero } from "./AboutHero";
import { AboutMorphImage } from "./AboutMorphImage";
import { AboutContent } from "./AboutContent";
import { useAboutScrollAnimation } from "./useAboutScrollAnimation";
import styles from "./about.module.css";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);
  const morphInnerRef = useRef<HTMLDivElement>(null);

  useAboutScrollAnimation({
    sectionRef,
    pinRef,
    heroRef,
    typographyRef,
    textRef,
    morphRef,
    morphInnerRef,
  });

  return (
    <>
      <section ref={sectionRef} id="about-hero" className={styles.heroSection}>
        <div ref={pinRef} className={styles.pinViewport}>
          <AboutMorphImage morphRef={morphRef} morphInnerRef={morphInnerRef} />

          <AboutHero
            heroRef={heroRef}
            typographyRef={typographyRef}
            textRef={textRef}
          />

          <div className={styles.heroOverlay} aria-hidden="true" />
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <AboutContent />
      </section>
    </>
  );
}
