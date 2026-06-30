import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ABOUT_COPY, ABOUT_IMAGES, ABOUT_STATS } from "./constants";

export function AboutContent() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <FadeIn>
            <div className="grid grid-cols-12 gap-4">
              <div className="relative col-span-7 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/ck-lake-side/ck-10.jpeg"
                  alt="CK Infinity"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="col-span-5 flex flex-col gap-4 pt-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-xl">
                  <Image
                    src={ABOUT_IMAGES.smallTop.src}
                    alt={ABOUT_IMAGES.smallTop.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-xl">
                  <Image
                    src={ABOUT_IMAGES.smallBottom.src}
                    alt={ABOUT_IMAGES.smallBottom.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
              {ABOUT_COPY.label}
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light text-stone-900 md:text-5xl">
              {ABOUT_COPY.heading}
            </h2>

            <p className="mt-8 text-[15px] leading-8 text-stone-600">
              {ABOUT_COPY.paragraph}
            </p>

            <Link
              href={ABOUT_COPY.cta.href}
              className="mt-10 inline-flex rounded-full bg-stone-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-black"
            >
              {ABOUT_COPY.cta.label}
            </Link>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              {ABOUT_STATS.map((item) => (
                <div key={item.label}>
                  <h3 className="font-serif text-4xl font-light text-stone-900">
                    {item.value}
                    {item.suffix}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
