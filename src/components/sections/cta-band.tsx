"use client";

import Link from "next/link";
import { Ambulance, Phone, CalendarCheck, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

export function CTABand() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary via-[#0b6e99] to-secondary p-10 text-white shadow-2xl shadow-primary/25 sm:p-14">
            <div className="bg-grid absolute inset-0 opacity-10" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Your Pain-Free Life Starts Today
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-white/80 lg:mx-0">
                  From first consultation to complete recovery — let our expert team walk with you.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85 lg:justify-start">
                  <span className="flex items-center gap-2"><CalendarCheck className="h-4 w-4" /> Same-day appointments</span>
                  <span className="flex items-center gap-2"><Ambulance className="h-4 w-4" /> 24×7 emergency</span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Rahika, Madhubani</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={site.phone.emergencyHref} className="group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-primary shadow-xl transition-transform hover:scale-105">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Call Now</span>
                    <span className="font-display block text-lg font-extrabold">{site.phone.appointments}</span>
                  </span>
                </Link>
                <Link href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-white/15 px-6 py-4 font-semibold backdrop-blur transition-all hover:bg-white/25">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
