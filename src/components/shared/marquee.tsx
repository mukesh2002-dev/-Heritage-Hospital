"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className={cn("group relative flex w-full overflow-hidden", className)}>
      <div
        className="flex w-max shrink-0 items-center gap-8 pr-8 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
