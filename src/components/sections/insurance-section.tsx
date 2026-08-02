"use client";

import { ShieldCheck, Wallet, FileCheck2, Clock4, BadgeCheck, Landmark } from "lucide-react";
import { insuranceCompanies } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Marquee } from "@/components/shared/marquee";
import { Button } from "@/components/ui/button";

const cashlessBenefits = [
  { icon: Wallet, title: "Zero Out-of-Pocket", text: "Approved cashless treatments with zero upfront payment." },
  { icon: FileCheck2, title: "Dedicated Insurance Desk", text: "Our team handles approvals, claims and documentation." },
  { icon: Clock4, title: "Fast Pre-Authorisation", text: "Most approvals processed the same working day." },
  { icon: BadgeCheck, title: "All Major TPAs & Insurers", text: "Seamless settlement with government and private insurers." },
];

export function InsuranceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04141d] via-[#0b2f44] to-[#04141d] py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-secondary/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Insurance & Cashless"
              title="Pay With Insurance. Stress-Free."
              description="We're empanelled with every major insurer and TPA network. Our cashless desk makes the paperwork disappear — you focus only on recovery."
              light
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {cashlessBenefits.map((b, i) => (
                <Reveal key={b.title} delay={0.07 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors hover:border-secondary/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{b.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">{b.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="/contact#insurance"><ShieldCheck className="h-5 w-5" /> Check Your Insurance</a>
                </Button>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <Landmark className="h-4 w-4 text-secondary" /> Direct settlement with 100+ TPAs
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="gradient-border glass overflow-hidden rounded-[2rem] p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">Cashless Treatment</h3>
                  <p className="text-xs text-muted-foreground">In just 3 easy steps</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { n: "01", t: "Check eligibility", d: "Share your policy details with our insurance desk." },
                  { n: "02", t: "We get pre-approval", d: "We file the request with your TPA or insurer for you." },
                  { n: "03", t: "Get treated & walk out", d: "Hospital settles directly with the insurer — you pay nothing." },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4 rounded-2xl bg-surface p-4">
                    <span className="font-display text-xl font-extrabold text-primary">{step.n}</span>
                    <div>
                      <p className="text-sm font-bold">{step.t}</p>
                      <p className="text-xs text-muted-foreground">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Empanelled With All Major Insurers & TPAs
            </p>
            <Marquee duration={55}>
              {insuranceCompanies.map((c) => (
                <span key={c} className="mx-4 flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/70">
                  <ShieldCheck className="h-4 w-4 text-secondary" /> {c}
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
