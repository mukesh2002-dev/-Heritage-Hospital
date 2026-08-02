"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import * as React from "react";
import { Bone, Dna, Activity, Cross, HeartPulse, ScanLine } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = [
  { Icon: Bone, pos: "left-[6%] top-[22%]", delay: 0, size: "h-8 w-8" },
  { Icon: Dna, pos: "right-[8%] top-[16%]", delay: 1.2, size: "h-10 w-10" },
  { Icon: Activity, pos: "left-[14%] bottom-[24%]", delay: 2.1, size: "h-7 w-7" },
  { Icon: Cross, pos: "right-[16%] bottom-[30%]", delay: 0.6, size: "h-9 w-9" },
  { Icon: HeartPulse, pos: "left-[42%] top-[10%]", delay: 1.8, size: "h-8 w-8" },
  { Icon: ScanLine, pos: "left-[28%] bottom-[12%]", delay: 3.2, size: "h-7 w-7" },
];

export function FloatingMedicalIcons({ className, intensity = 24 }: { className?: string; intensity?: number }) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
      onMouseMove={(e) => {
        if (reduceMotion) return;
        const { innerWidth, innerHeight } = window;
        mx.set((e.clientX / innerWidth - 0.5) * intensity);
        my.set((e.clientY / innerHeight - 0.5) * intensity);
      }}
    >
      {ICONS.map(({ Icon, pos, delay, size }, i) => (
        <motion.div
          key={i}
          className={cn("absolute", pos)}
          style={reduceMotion ? undefined : { x: sx, y: sy }}
          animate={reduceMotion ? undefined : { y: [0, -18, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <div className="glass rounded-2xl p-3 shadow-lg">
            <Icon className={cn(size, "text-primary")} strokeWidth={1.6} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
