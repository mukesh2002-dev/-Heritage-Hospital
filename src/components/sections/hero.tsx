"use client";

import Image from "next/image";
import * as React from "react";
import { Siren, Ambulance, PlayCircle, CalendarCheck, Phone, ShieldCheck, Activity, Star } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { HeroSkeletonScene, MedicalParticles } from "@/components/three";
import { FloatingMedicalIcons } from "@/components/three/floating-medical-icons";
import { LazyCanvas } from "@/components/three/lazy-canvas";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [videoReady, setVideoReady] = React.useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#04141d] text-white">
      {/* Background image & video */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1920&auto=format&fit=crop"
          alt="Advanced orthopaedic surgery at Shree Keshav Heritage Hospital"
          fill
          priority
          className="object-cover opacity-40"
        />
        <video
          className="h-full w-full object-cover opacity-40 transition-opacity duration-1000"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#04141d] via-[#04141d]/85 to-[#04141d]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04141d] via-transparent to-[#04141d]/60" />
        {!videoReady && (
          <>
            <div className="absolute inset-0 bg-mesh opacity-60" />
            <LazyCanvas className="absolute inset-0" rootMargin="200px 0px">
              <MedicalParticles className="absolute inset-0" />
            </LazyCanvas>
            <LazyCanvas className="absolute inset-0" rootMargin="200px 0px">
              <FloatingMedicalIcons />
            </LazyCanvas>
          </>
        )}
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:items-center lg:pt-32">
        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}>
            <Badge variant="glass" className="gap-2 px-4 py-2 text-white">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">NABH-Level Care · Trusted in North Bihar</span>
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          >
            <span className="block">Advanced</span>
            <span className="text-gradient-light block">Bone • Joint • Spine</span>
            <span className="block">Care</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          >
            <span className="font-semibold text-white">Trusted Orthopaedic Excellence for North Bihar.</span>{" "}
            Super-specialty care led by {site.doctor} — where world-class surgery meets compassionate healing.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          >
            <MagneticButton asChild>
              <Button asChild size="lg" className="gap-2">
                <a href="/appointment">
                  <CalendarCheck className="h-5 w-5" /> Book Appointment
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton asChild>
              <Button asChild size="lg" variant="destructive" className="gap-2">
                <a href="/emergency">
                  <Siren className="h-5 w-5 animate-pulse" /> Emergency 24×7
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton asChild>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:border-secondary hover:text-secondary">
                <a href={site.phone.emergencyHref}>
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton asChild>
              <Button asChild size="lg" variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
                <a href="#gallery">
                  <PlayCircle className="h-5 w-5 text-secondary" /> Watch Hospital Tour
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1 text-xs text-white/60">
                <span className="font-bold text-white">{site.googleRating}</span> · {site.googleReviews.toLocaleString("en-IN")}+ Google reviews
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Activity className="h-5 w-5 text-secondary" />
              <span><span className="font-bold text-white">15,000+</span> surgeries performed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Ambulance className="h-5 w-5 text-secondary" />
              <span>24×7 ambulance · Golden-hour trauma care</span>
            </div>
          </motion.div>
        </div>

        {/* Right — 3D Skeleton */}
        <div className="relative hidden h-[620px] lg:block">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute inset-0">
              <HeroSkeletonScene />
            </div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            className="glass absolute left-0 top-24 rounded-2xl p-4 shadow-2xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Knee Replacement</p>
            <p className="font-display text-xl font-bold text-primary">Walk next day</p>
          </motion.div>
          <motion.div
            className="glass absolute right-0 top-40 rounded-2xl p-4 shadow-2xl"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Success Rate</p>
            <p className="font-display text-xl font-bold text-secondary">98.5%</p>
          </motion.div>
          <motion.div
            className="glass absolute bottom-16 left-6 rounded-2xl p-4 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Spine Surgery</p>
            <p className="font-display text-xl font-bold text-primary">Minimally Invasive</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
