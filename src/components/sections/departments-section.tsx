"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { departments } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DepartmentsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="departments" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Departments"
            title="Centres of Specialised Orthopaedic Care"
            description="Every department is purpose-built around a single goal — getting you back to a pain-free, active life."
          />
          <Reveal delay={0.15}>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/departments">View All Departments <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {departments.map((d) => (
                  <div key={d.id} className="min-w-0 shrink-0 grow-0 basis-[85%] px-3 sm:basis-1/2 lg:basis-1/4">
                    <Link
                      href={`/departments#${d.id}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <Image
                          src={d.image}
                          alt={d.name}
                          fill
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-md">
                            <d.icon className="h-5 w-5" />
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary">{d.name}</h3>
                        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{d.description}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                          {d.treatments.slice(0, 2).map((t) => (
                            <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-primary">
                              {t}
                            </span>
                          ))}
                          {d.treatments.length > 2 && (
                            <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                              +{d.treatments.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous departments"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2.5">
                {departments.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      active === index ? "bg-primary scale-125" : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-700"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next departments"
                onClick={() => emblaApi?.scrollNext()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}