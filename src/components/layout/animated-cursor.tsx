"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 35 });
  const ringY = useSpring(y, { stiffness: 400, damping: 35 });
  const [hovering, setHovering] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, select, textarea"));
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  React.useEffect(() => {
    document.documentElement.classList.toggle("cursor-none", !window.matchMedia("(pointer: coarse)").matches);
    return () => document.documentElement.classList.remove("cursor-none");
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-2 w-2 rounded-full bg-primary md:block"
        style={{ x, y, opacity: hidden ? 0 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 md:block"
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1, scale: hovering ? 1.8 : 1 }}
      />
    </>
  );
}
