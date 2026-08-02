"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cross } from "lucide-react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 950;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setLeaving(true), 80);
        setTimeout(() => setDone(true), 720);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <motion.div
      id="skh-loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#04141d] via-[#07283a] to-[#04141d]"
      animate={leaving ? { opacity: 0, scale: 1.06 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative mb-8 flex h-24 w-24 items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-primary/30 border-t-primary animate-spin-slow" />
        <div className="absolute inset-3 rounded-full border border-secondary/30 border-b-secondary animate-spin-slow" style={{ animationDirection: "reverse" }} />
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/40"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cross className="h-8 w-8 text-white" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
          SHREE KESHAV HERITAGE
        </h1>
        <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-secondary">Bone • Joint • Spine Care</p>
      </motion.div>

      <div className="mt-10 h-1 w-56 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 text-xs font-medium tabular-nums text-white/60">{progress}%</p>
    </motion.div>
  );
}
