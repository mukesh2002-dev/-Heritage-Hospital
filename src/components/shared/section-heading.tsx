import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", alignCls, className)}>
      <Reveal>
        <Badge variant={light ? "secondary" : "accent"} className="gap-2 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em]">
          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
          {eyebrow}
        </Badge>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className={cn("text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-muted-foreground")}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
