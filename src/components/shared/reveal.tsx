"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/animations";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  blur?: boolean;
  as?: "div" | "section" | "span" | "h1" | "h2" | "h3" | "p";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  scale = 1,
  once = true,
  blur = false,
  as = "div",
}: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y, x, scale, filter: blur ? "blur(10px)" : "none" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}

export function RevealText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.045 }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function StaggerGroup({
  children,
  className,
  delay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `opacity .8s cubic-bezier(.22,1,.36,1) ${delay}s, transform .8s cubic-bezier(.22,1,.36,1) ${delay}s` }}>
      {children}
    </div>
  );
}
