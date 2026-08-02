"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Clock, RefreshCcw } from "lucide-react";
import { treatments } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CarouselControls } from "@/components/shared/carousel";
import { Button } from "@/components/ui/button";

export function TreatmentsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });

  return (
    <section id="treatments" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Treatments"
            title="Comprehensive Bone, Joint & Spine Treatments"
            description="From routine fracture care to complex spinal reconstruction — a complete spectrum under one roof."
          />
          <Reveal delay={0.15} className="flex items-center gap-4">
            <CarouselControls emblaApi={emblaApi} />
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5">
            {treatments.map((t) => (
              <div key={t.id} className="min-w-[85%] shrink-0 sm:min-w-[45%] lg:min-w-[31%] xl:min-w-[23.5%]">
                <Link
                  href={`/treatments#${t.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-soft"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 text-white shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <t.icon className="h-6 w-6" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-secondary" /> {t.duration}</span>
                    <span className="flex items-center gap-1.5"><RefreshCcw className="h-3.5 w-3.5 text-secondary" /> {t.recovery}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/treatments">View All Treatments <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
