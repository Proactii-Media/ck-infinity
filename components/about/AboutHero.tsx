import type { RefObject } from "react";
import { MORPH_IMAGE } from "./constants";
import styles from "./about.module.css";

type AboutHeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
  typographyRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLHeadingElement | null>;
};

export function AboutHero({
  heroRef,
  typographyRef,
  textRef,
}: AboutHeroProps) {
  return (
    <div ref={heroRef} className={styles.heroLayer}>
      <div ref={typographyRef} className={styles.typographyWrap}>
        <h1
          ref={textRef}
          className={styles.heroText}
          style={{ backgroundImage: `url(${MORPH_IMAGE})` }}
        >
          CK-Infinity
        </h1>
      </div>
    </div>
  );
}
