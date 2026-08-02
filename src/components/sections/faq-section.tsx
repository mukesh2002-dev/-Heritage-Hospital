"use client";

import { useState } from "react";
import { MessageCircleQuestion, Phone, CalendarCheck } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | undefined>("item-0");

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Your Questions, Answered"
            description="Everything patients usually ask before surgery, admission or treatment."
          />
          <Reveal delay={0.15}>
            <div className="mt-8 rounded-3xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  <MessageCircleQuestion className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">Still have questions?</p>
                  <p className="text-xs text-muted-foreground">Talk to a care coordinator</p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2.5">
                <Button asChild variant="outline" className="w-full justify-start gap-2">
                  <a href={site.phone.appointmentsHref}><Phone className="h-4 w-4 text-secondary" /> {site.phone.appointments}</a>
                </Button>
                <Button asChild className="w-full gap-2">
                  <a href="/appointment"><CalendarCheck className="h-4 w-4" /> Book an Appointment</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" value={openItem} onValueChange={setOpenItem} className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none shadow-sm">
                <AccordionTrigger className="text-base">{f.question}</AccordionTrigger>
                <AccordionContent className="leading-relaxed">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
