"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { Stethoscope, Timer, HeartPulse, Microscope, ShieldCheck, BadgeCheck, Wallet, Home } from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Super-Specialist Leadership",
    text: "Every case is reviewed and led personally by Dr. N. K. Yadav with 18+ years of orthopaedic expertise.",
  },
  {
    icon: Timer,
    title: "Golden-Hour Trauma Response",
    text: "24×7 emergency bay and ambulance fleet built to save limbs and lives within the critical window.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    text: "MRI, CT, digital X-ray and full laboratory under one roof for same-day, accurate decisions.",
  },
  {
    icon: HeartPulse,
    title: "Modern Modular OTs & ICU",
    text: "Laminar-flow operation theatres and a Level-2 ICU with round-the-clock critical care.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Surgical Outcomes",
    text: "15,000+ successful surgeries with a 98.5% satisfaction rate and long-term follow-up care.",
  },
  {
    icon: Wallet,
    title: "Cashless & Affordable",
    text: "Direct cashless settlement with all major insurers and transparent, fair pricing.",
  },
  {
    icon: Home,
    title: "Care Close to Home",
    text: "World-class orthopaedic care in the heart of Madhubani — no more long journeys to metro cities.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Rehab & Physio",
    text: "Structured recovery programmes that get you back to walking, working and living pain-free.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The SKH Standard — Excellence You Can Measure"
          description="From the moment you arrive to your final follow-up, every step is engineered around your recovery."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={0.06 * i}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <span className="font-display absolute -right-3 -top-4 text-[5.5rem] font-extrabold leading-none text-surface transition-colors duration-500 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:shadow-lg">
                    <r.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats band */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-10 sm:p-14">
          <div className="bg-grid absolute inset-0 opacity-10" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-10 text-center text-white lg:grid-cols-4">
            {[
              { value: 15000, suffix: "+", label: "Surgeries Performed" },
              { value: 85000, suffix: "+", label: "Happy Patients" },
              { value: 18, suffix: "+", label: "Years of Experience" },
              { value: 120, suffix: "", label: "Bed Capacity" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display text-4xl font-extrabold sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/75">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
