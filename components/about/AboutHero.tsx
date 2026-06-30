import type { RefObject } from "react";
import Image from "next/image";
import styles from "./about.module.css";

type AboutHeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
  imageRef: RefObject<HTMLDivElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  subtitleRef: RefObject<HTMLParagraphElement | null>;
};

export function AboutHero({
  heroRef,
  imageRef,
  overlayRef,
  titleRef,
  subtitleRef,
}: AboutHeroProps) {
  return (
    <div ref={heroRef} className={styles.hero}>
      {/* Background Image */}
      <div ref={imageRef} className={styles.heroImage}>
        <Image
          src="/ck-lake-side/ck-8.jpeg"
          alt="CK Infinity"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>

      {/* Dark Overlay */}
      <div ref={overlayRef} className={styles.overlay} />

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>PREMIUM REAL ESTATE</span>

        <h1 ref={titleRef} className={styles.heroTitle}>
          CK Infinity
        </h1>

        <p ref={subtitleRef} className={styles.heroSubtitle}>
          Crafting Premium Living Experiences with Thoughtfully Designed
          Residential Communities.
        </p>

        <div className={styles.scrollIndicator}>
          <span />
        </div>
      </div>
    </div>
  );
}
