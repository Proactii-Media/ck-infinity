import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.35em]",
            dark ? "text-gold-light" : "text-gold-dark"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl",
          dark ? "text-white" : "text-stone-900"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base font-light leading-relaxed md:text-lg",
            dark ? "text-stone-300" : "text-stone-600"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
