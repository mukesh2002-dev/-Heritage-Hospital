"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Calendar, Clock, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogs, news } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogsSection() {
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
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.3]" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Health Blog"
            title="Expert Advice From Our Team"
            description="Practical, honest guidance on bones, joints, spine and recovery from the doctors themselves."
          />
          <Reveal delay={0.15}>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/blogs">All Articles <ArrowUpRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>

        {/* Blog cards carousel */}
        <Reveal delay={0.1}>
          <div className="mt-14">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {blogs.map((b, index) => (
                  <div
                    key={b.slug}
                    className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      href={`/blogs/${b.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <Image
                          src={b.image}
                          alt={b.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-xs text-white">
                          <span className="rounded-full bg-white/90 px-2.5 py-1 font-bold text-primary backdrop-blur-md">
                            {b.category}
                          </span>
                          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                          {b.title}
                        </h3>
                        <p className="mt-3 flex-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{b.excerpt}</p>
                        <div className="mt-5 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" /> {b.readTime}
                          </span>
                          <span className="flex items-center gap-2 text-sm font-semibold text-secondary">
                            Read Article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls — dots at bottom */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous articles"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2.5">
                {blogs.map((_, index) => (
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
                aria-label="Next articles"
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