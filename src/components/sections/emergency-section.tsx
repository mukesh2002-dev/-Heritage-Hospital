"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Ambulance, Siren, HeartPulse, Shield, Clock, MapPin, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

const emergencyCards = [
  {
    icon: Ambulance,
    title: "Ambulance Response",
    text: "Trained paramedic ambulances covering Rahika, Jhanjharpur, Pupri and the full Madhubani belt.",
    meta: "Within minutes",
  },
  {
    icon: Siren,
    title: "Trauma Bay Ready",
    text: "Dedicated trauma bed, orthopaedic surgeon on call and OT prepared for immediate surgery.",
    meta: "24 × 7 × 365",
  },
  {
    icon: HeartPulse,
    title: "Critical Care Support",
    text: "Level-2 ICU with ventilators, central monitoring and a round-the-clock critical care team.",
    meta: "Always available",
  },
];

export function EmergencySection() {
  return (
    <section className="relative overflow-hidden bg-[#04141d] py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-red-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                Emergency · Trauma · 24×7
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Every Minute Counts.
                <span className="text-gradient-light block">We&#39;re Ready.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Road accidents, fractures, polytrauma and medical emergencies — our trauma team activates the
                moment you call. Golden-hour care, modern trauma OT and 24×7 ambulance across North Bihar.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.a
                  href={site.phone.emergencyHref}
                  className="group relative flex items-center gap-4 rounded-2xl bg-red-600 px-6 py-4 shadow-xl shadow-red-600/30"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative flex h-12 w-12 items-center justify-center">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/30" />
                    <Phone className="relative h-6 w-6 text-white" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-red-200">
                      Call Emergency Now
                    </span>
                    <span className="font-display block text-xl font-extrabold">{site.phone.emergency}</span>
                  </span>
                </motion.a>
                <Button asChild variant="white" size="lg" className="group gap-2">
                  <Link href="/emergency">
                    Trauma Care Details <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> Open 24 hours, 7 days</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Rahika–Madhubani Road</span>
                <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-secondary" /> Golden-hour protocol</span>
              </div>
            </Reveal>
          </div>

          {/* Right — cards */}
          <div className="grid gap-5">
            {emergencyCards.map((c, i) => (
              <Reveal key={c.title} delay={0.1 * i}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:border-red-500/40 hover:bg-white/[0.08]">
                  <div className="flex items-center gap-5">
                    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-400 transition-transform duration-500 group-hover:scale-110">
                      <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-red-500/20" />
                      <c.icon className="relative h-7 w-7" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-lg font-bold">{c.title}</h3>
                        <span className="rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-bold text-secondary">{c.meta}</span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{c.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="glass flex items-center justify-between gap-4 rounded-3xl p-6">
                <div>
                  <p className="text-sm font-semibold">Need to reach us urgently?</p>
                  <p className="text-xs text-muted-foreground">Our response team answers within seconds.</p>
                </div>
                <Button asChild variant="destructive" size="lg" className="gap-2">
                  <Link href={site.phone.emergencyHref}><Siren className="h-5 w-5 animate-pulse" /> Call Ambulance</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
