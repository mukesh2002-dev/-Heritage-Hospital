"use client";

import { PhoneCall, ClipboardList, Stethoscope, Cross, HeartPulse, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Connect",
    text: "Call, WhatsApp or book online. Our coordinators respond instantly and guide your next step.",
    tag: "5 mins",
  },
  {
    icon: ClipboardList,
    title: "Consult & Diagnose",
    text: "Meet the specialist, get examined, and complete MRI / CT / X-ray / lab — all under one roof.",
    tag: "Same day",
  },
  {
    icon: Stethoscope,
    title: "Personalised Plan",
    text: "Receive a clear, honest treatment plan with transparent costing and insurance assistance.",
    tag: "Day 1",
  },
  {
    icon: Cross,
    title: "Surgery / Procedure",
    text: "State-of-the-art modular OT with meticulous care — minimally invasive wherever possible.",
    tag: "Scheduled",
  },
  {
    icon: HeartPulse,
    title: "Recover & Rehab",
    text: "ICU, ward care and structured physiotherapy that gets you walking sooner.",
    tag: "Next day",
  },
  {
    icon: Rocket,
    title: "Return to Life",
    text: "Follow-ups, home rehab guidance and support until you're fully back to your routine.",
    tag: "Long term",
  },
];

export function PatientJourney() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.35]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Patient Journey"
          title="From First Call to Full Recovery"
          description="A clear, guided path through every stage of your care — you'll never feel lost."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={0.08 * i}>
                <div className="group relative flex h-full flex-col items-center rounded-3xl border border-border bg-background p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                  <span className="relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-extrabold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="font-display mt-3 text-base font-bold">{step.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{step.text}</p>
                  <span className="mt-4 rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-bold text-secondary">
                    {step.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
