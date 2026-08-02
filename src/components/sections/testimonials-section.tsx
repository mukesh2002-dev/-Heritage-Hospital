"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CarouselControls } from "@/components/shared/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Patient Testimonials"
            title="Stories From People We've Helped"
            description="Real words from real patients across Madhubani and North Bihar."
          />
          <Reveal delay={0.15}>
            <CarouselControls emblaApi={emblaApi} />
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-[90%] shrink-0 sm:min-w-[48%] lg:min-w-[31.5%]">
                <figure className="group relative flex h-full flex-col rounded-3xl border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-accent transition-colors group-hover:text-primary/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400" fill={i < Math.round(t.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <Avatar>
                      <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-accent px-3 py-1 text-[10px] font-bold text-primary">
                      {t.treatment}
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
