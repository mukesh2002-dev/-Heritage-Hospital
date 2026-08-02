"use client";

import * as React from "react";
import { useInView } from "@/hooks/use-in-view";

export function LazyCanvas({
  children,
  className,
  rootMargin = "500px 0px",
}: {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(rootMargin);

  return (
    <div ref={ref} className={className} aria-hidden>
      {inView ? children : null}
    </div>
  );
}
