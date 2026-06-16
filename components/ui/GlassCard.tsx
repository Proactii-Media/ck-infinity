import { cn } from "@/lib/cn";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-panel rounded-3xl transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(201,169,98,0.18)]",
        className
      )}
    >
      {children}
    </div>
  );
}
