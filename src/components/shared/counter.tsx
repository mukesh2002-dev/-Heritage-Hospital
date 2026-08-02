"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import { formatNumber } from "@/lib/utils";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, duration, inView);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function useCountedInView(target: number, duration = 2000) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useCountUp(target, duration, inView);
  return { ref, value, inView };
}
