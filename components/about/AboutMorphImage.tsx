import type { RefObject } from "react";
import Image from "next/image";
import { MORPH_IMAGE } from "./constants";
import styles from "./about.module.css";

type AboutMorphImageProps = {
  morphRef: RefObject<HTMLDivElement | null>;
  morphInnerRef: RefObject<HTMLDivElement | null>;
};

export function AboutMorphImage({
  morphRef,
  morphInnerRef,
}: AboutMorphImageProps) {
  return (
    <div className={styles.morphLayer} aria-hidden="true">
      <div ref={morphRef} className={styles.morphImage}>
        <div ref={morphInnerRef} className={styles.morphImageInner}>
          <Image
            src={MORPH_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
