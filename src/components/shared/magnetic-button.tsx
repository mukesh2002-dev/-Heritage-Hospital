"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type MagneticButtonProps = React.HTMLAttributes<HTMLElement> & {
  strength?: number;
  asChild?: boolean;
};

export function MagneticButton({ children, className, strength = 0.35, asChild = false, ...props }: MagneticButtonProps) {
  const ref = React.useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = asChild ? Slot : "div";

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      <Comp {...props}>{children}</Comp>
    </motion.div>
  );
}
