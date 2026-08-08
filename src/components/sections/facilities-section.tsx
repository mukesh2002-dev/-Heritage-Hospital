"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { facilities } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FacilitiesSection() {
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
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything You Need, Under One Roof"
          description="Modern infrastructure, advanced technology and thoughtful comfort — designed around your care."
        />

        <Reveal delay={0.1}>
          <div className="mt-14">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {facilities.map((f) => (
                  <div key={f.name} className="min-w-0 shrink-0 grow-0 basis-[85%] px-3 sm:basis-1/2 lg:basis-1/4">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <Image
                          src={f.image}
                          alt={f.name}
                          fill
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-4 z-10">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-md">
                            <f.icon className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-base font-bold transition-colors group-hover:text-primary">{f.name}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous facilities"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2.5">
                {facilities.map((_, index) => (
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
                aria-label="Next facilities"
                onClick={() => emblaApi?.scrollNext()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="group gap-2">
                <Link href="/facilities">
                  View All Facilities <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}