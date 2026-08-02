"use client";

import { motion } from "framer-motion";

export function PageTransition() {
  return (
    <motion.div
      key="page-transition"
      className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center"
      aria-hidden
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-full w-1/3 origin-top bg-gradient-to-b from-primary via-secondary to-primary"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 1, 0], opacity: [1, 1, 1, 0] }}
          transition={{
            duration: 0.9,
            delay: i * 0.12,
            ease: [0.83, 0, 0.17, 1],
          }}
        />
      ))}
    </motion.div>
  );
}
