"use client";

import { motion } from "framer-motion";
import { HeartPulse, TrendingUp, ArrowRight } from "lucide-react";
import { successStories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.3]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real Recoveries, Real Lives Transformed"
          description="Every number here is a person who walked out pain-free — here are a few of them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((s, i) => (
            <Reveal key={s.name} delay={0.07 * i}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/10 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative flex items-center justify-between">
                  <span className="font-display flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-lg font-extrabold text-white shadow-lg shadow-primary/25">
                    {s.name.charAt(0)}
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">Age {s.age}</span>
                </div>
                <h3 className="font-display relative mt-5 text-lg font-bold">{s.name}</h3>
                <div className="relative mt-4 space-y-3">
                  <div className="rounded-2xl bg-surface p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">The Problem</p>
                    <p className="mt-1 text-sm font-medium">{s.problem}</p>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <ArrowRight className="h-4 w-4 shrink-0" />
                    <p className="text-sm font-medium">{s.solution}</p>
                  </div>
                  <motion.div
                    className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-3.5 dark:border-emerald-900 dark:bg-emerald-950"
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <TrendingUp className="h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{s.outcome}</p>
                  </motion.div>
                </div>
                <div className="relative mt-auto flex items-center gap-2 pt-5 text-[11px] font-semibold text-muted-foreground">
                  <HeartPulse className="h-4 w-4 text-secondary" />
                  Treated & recovered at SKH Hospital
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
