"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Users, HeartHandshake, Building2 } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { TiltCard } from "@/components/shared/tilt-card";
import { Button } from "@/components/ui/button";
import { MedicalParticles } from "@/components/three";
import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: ShieldCheck, title: "Patient Safety First", text: "Strict infection control protocols and sterility in every procedure." },
  { icon: Award, title: "18+ Years of Excellence", text: "Proven outcomes across joints, spine, trauma and rehabilitation." },
  { icon: Users, title: "85,000+ Happy Patients", text: "Families across North Bihar trust us with their most precious care." },
  { icon: HeartHandshake, title: "Compassionate Team", text: "Doctors, nurses and physiotherapists who treat you like family." },
];

const tickPoints = [
  "Advanced modular operation theatres",
  "24×7 trauma & emergency response",
  "MRI, CT scan & digital X-ray",
  "Cashless insurance desk",
  "In-house physiotherapy & rehab",
  "Experienced super-specialty surgeons",
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-70" />
      <MedicalParticles count={500} className="pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Visual side */}
        <div className="relative">
          <Reveal>
            <TiltCard maxTilt={6} className="group">
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-primary/10">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop"
                    alt="Shree Keshav Heritage Hospital Modern Infrastructure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04141d]/90 via-[#04141d]/40 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center gap-3 p-8 text-center text-white mt-auto">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur border border-white/30">
                      <Building2 className="h-7 w-7 text-white" />
                    </span>
                    <div>
                      <p className="font-display text-2xl font-bold">{site.name}</p>
                      <p className="mt-1 text-xs text-white/80">{site.type}</p>
                    </div>
                    <p className="text-xs text-white/70">{site.address.line1}, {site.address.line2}</p>
                  </div>
                </div>
                <div className="glass-strong absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl p-3 shadow-xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">ISO-Quality Care</p>
                    <p className="text-[11px] text-muted-foreground">Modern infrastructure · NABH-aligned protocols</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Floating badges */}
          <motion.div
            className="glass absolute -right-4 -top-6 hidden rounded-2xl p-4 shadow-2xl sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Surgeries</p>
            <p className="font-display text-2xl font-extrabold text-primary"><Counter value={15000} suffix="+" /></p>
          </motion.div>
          <motion.div
            className="glass absolute -bottom-6 -left-4 hidden rounded-2xl p-4 shadow-2xl sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Patients Treated</p>
            <p className="font-display text-2xl font-extrabold text-secondary"><Counter value={85000} suffix="+" /></p>
          </motion.div>
        </div>

        {/* Content side */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About the Hospital"
            title="Where Advanced Orthopaedic Care Meets Compassion"
            description={site.description}
          />
          <Reveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {tickPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.1 * i}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                  <h.icon className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                  <p className="mt-3 text-sm font-bold">{h.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="group gap-2">
                <Link href="/about">
                  Explore the Hospital <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Badge variant="accent" className="px-4 py-2 text-sm">Est. {site.founded} · Rahika, Madhubani</Badge>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
