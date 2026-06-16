import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  align = "left",
  className,
}: Props) {
  return (
    <section
      className={cn(
        "relative flex min-h-[52vh] items-end overflow-hidden md:min-h-[58vh]",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt ?? title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-900/25" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36">
        <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
          <h1 className="font-serif text-5xl font-light text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-stone-200 md:text-xl">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
