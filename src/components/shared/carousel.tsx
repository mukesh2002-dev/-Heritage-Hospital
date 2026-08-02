"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarouselProps = {
  options?: EmblaOptionsType;
  className?: string;
  children: React.ReactNode;
};

export function Carousel({ options, className, children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">{children}</div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </div>
  );
}

export function CarouselControls({ emblaApi, className }: { emblaApi?: EmblaCarouselType; className?: string }) {
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevDisabled(!emblaApi.canScrollPrev());
      setNextDisabled(!emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous slide"
        disabled={prevDisabled}
        onClick={() => emblaApi?.scrollPrev()}
        className="rounded-full"
      >
        <ArrowLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        aria-label="Next slide"
        disabled={nextDisabled}
        onClick={() => emblaApi?.scrollNext()}
        className="rounded-full"
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
