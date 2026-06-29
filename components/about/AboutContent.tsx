import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ABOUT_COPY, ABOUT_IMAGES, ABOUT_STATS } from "./constants";
import styles from "./about.module.css";

export function AboutContent() {
  return (
    <div className={styles.contentInner}>
      <div className={styles.grid}>
        <div className={styles.imagesCol}>
          <FadeIn>
            <div className={styles.imageGrid}>
              <div className={styles.largeImageSlot}>
                <Image
                  src="/ck-lake-side/ck-7.jpeg"
                  alt="CK-Infinity residences"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 35vw"
                />
              </div>
              <div className={styles.smallStack}>
                <div
                  className={`${styles.smallImage} ${styles.smallImageTall}`}
                >
                  <Image
                    src={ABOUT_IMAGES.smallTop.src}
                    alt={ABOUT_IMAGES.smallTop.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </div>
                <div
                  className={`${styles.smallImage} ${styles.smallImageSquare}`}
                >
                  <Image
                    src={ABOUT_IMAGES.smallBottom.src}
                    alt={ABOUT_IMAGES.smallBottom.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 18vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className={styles.textCol}>
          <FadeIn delay={0.08}>
            <p className={styles.label}>{ABOUT_COPY.label}</p>
            <h2 className={styles.heading}>{ABOUT_COPY.heading}</h2>
            <p className={styles.paragraph}>{ABOUT_COPY.paragraph}</p>

            <div className={styles.ctaWrap}>
              <Link href={ABOUT_COPY.cta.href} className={styles.ctaLink}>
                {ABOUT_COPY.cta.label}
              </Link>
            </div>

            <div className={styles.stats}>
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <p className={styles.statValue}>
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
