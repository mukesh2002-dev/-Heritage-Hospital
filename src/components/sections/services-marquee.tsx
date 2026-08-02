"use client";

import { services } from "@/lib/data";
import { Marquee } from "@/components/shared/marquee";

export function ServicesMarquee() {
  return (
    <div className="relative border-y border-border bg-surface py-6">
      <Marquee duration={50}>
        {services.map((s) => (
          <span key={s.name} className="mx-3 flex shrink-0 items-center gap-3 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary">
            <s.icon className="h-4 w-4 text-secondary" />
            {s.name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
