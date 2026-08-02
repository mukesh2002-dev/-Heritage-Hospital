"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Stethoscope, CalendarCheck, Phone, ArrowRight, Star, BadgeCheck } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: GraduationCap, title: "MBBS · MS (Orthopaedics)", text: "Gold-medallist, specialist orthopaedic surgeon" },
  { icon: Stethoscope, title: "Joint Replacement & Spine", text: "Fellowship-trained in hip, knee & spine surgery" },
  { icon: Award, title: "18+ Years of Experience", text: "15,000+ successful surgeries across Bihar" },
  { icon: BadgeCheck, title: "Trauma & Polytrauma Expert", text: "Golden-hour limb salvage and accident care" },
];

const specialties = [
  "Knee & Hip Replacement",
  "Spine Surgery & Slip Disc",
  "Arthroscopy & Sports Injuries",
  "Complex Fracture Fixation",
  "Trauma & Polytrauma Care",
  "Paediatric Orthopaedics",
];

export function DoctorSection() {
  return (
    <section id="doctor" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr]">
          {/* Doctor card */}
          <Reveal className="mx-auto">
            <TiltCard maxTilt={8} className="group w-[300px] sm:w-[340px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-surface to-accent/60 p-8 shadow-2xl shadow-primary/10">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/15 to-transparent" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-60" />
                    <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-primary/20 via-accent to-secondary/20 shadow-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                        alt="Dr. N. K. Yadav - Senior Orthopaedic Surgeon"
                        fill
                        sizes="200px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white shadow-lg border-2 border-white">
                      <BadgeCheck className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-2xl font-extrabold text-foreground">{site.doctor}</h3>
                  <p className="mt-1 text-sm font-semibold text-secondary">MBBS, MS (Orthopaedics)</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Bone · Joint · Spine · Trauma Surgeon
                  </p>

                  <div className="mt-4 flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700">
                    <Star className="h-3.5 w-3.5 fill-current" /> 4.9 · 1,200+ patient ratings
                  </div>

                  <div className="mt-5 grid w-full grid-cols-3 gap-2 border-t border-border pt-5">
                    {[
                      { v: "18+", l: "Years" },
                      { v: "15k+", l: "Surgeries" },
                      { v: "85k+", l: "Patients" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="font-display text-lg font-extrabold text-primary">{s.v}</p>
                        <p className="text-[11px] text-muted-foreground">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Content */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Meet Your Surgeon"
              title="Dr. N. K. Yadav — Leading Orthopaedic Surgeon of North Bihar"
              description="A name North Bihar trusts for bone, joint and spine care. Dr. Yadav combines precision surgery, minimally invasive techniques and a deeply personal approach to healing — treating every patient like family."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <Reveal key={c.title} delay={0.08 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{c.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span key={s} className="rounded-full border border-primary/20 bg-accent/60 px-4 py-2 text-xs font-semibold text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group gap-2">
                  <Link href="/doctor">
                    Full Doctor Profile <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href="/appointment"><CalendarCheck className="h-5 w-5" /> Book Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="gap-2 text-primary">
                  <Link href={site.phone.appointmentsHref}><Phone className="h-5 w-5" /> {site.phone.appointments}</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
