"use client";

import Image from "next/image";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Siren,
  Ambulance,
  CalendarCheck,
  Phone,
  ShieldCheck,
  Activity,
  Star,
  ChevronLeft,
  ChevronRight,
  Bone,
  ScanLine,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EASE = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1920&auto=format&fit=crop",
    alt: "Advanced orthopaedic surgery at Shree Keshav Heritage Hospital",
    badge: { icon: ShieldCheck, text: "NABH-Level Care · Trusted in North Bihar" },
    title: ["Advanced", "Bone • Joint • Spine", "Care"],
    accentIndex: 1,
    description: `Trusted Orthopaedic Excellence for North Bihar. Super-specialty care led by ${site.doctor} — where world-class surgery meets compassionate healing.`,
    cta: { label: "Book Appointment", icon: CalendarCheck, href: "/appointment" },
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop",
    alt: "Total knee replacement surgery at Shree Keshav Heritage Hospital",
    badge: { icon: Bone, text: "Total Knee Replacement" },
    title: ["Walk the", "Next Day", "After Surgery"],
    accentIndex: 1,
    description:
      "Computer-assisted joint replacement with premium implants. Advanced pain management and early mobilisation — get back on your feet faster than ever.",
    cta: { label: "Explore Joint Replacement", icon: Activity, href: "/treatments#joint-replacement" },
  },
  {
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1920&auto=format&fit=crop",
    alt: "24x7 trauma and emergency care at Shree Keshav Heritage Hospital",
    badge: { icon: HeartPulse, text: "24×7 Trauma & Emergency" },
    title: ["Golden-Hour", "Trauma", "Care"],
    accentIndex: 1,
    description:
      "Trauma-ready emergency bay, dedicated OT and ICU open round the clock. Rapid response ambulance network across Madhubani for accident and fracture emergencies.",
    cta: { label: "Emergency 24×7", icon: Siren, href: "/emergency" },
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop",
    alt: "MRI and diagnostics at Shree Keshav Heritage Hospital",
    badge: { icon: ScanLine, text: "Advanced Diagnostics" },
    title: ["Accurate", "Diagnosis", "Fast"],
    accentIndex: 1,
    description:
      "High-field MRI, CT and digital X-ray with rapid radiologist-verified reports. Right diagnosis in time — the first step towards the right treatment.",
    cta: { label: "View Facilities", icon: ScanLine, href: "/facilities" },
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
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
    }, 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const activeSlide = slides[active];
  const BadgeIcon = activeSlide.badge.icon;
  const CtaIcon = activeSlide.cta.icon;

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#04141d] text-white">
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div key={slide.title.join("")} className="relative h-full min-w-0 flex-[0_0_100%]">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={cn("object-cover transition-opacity duration-1000", active === index ? "opacity-80" : "opacity-30")}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#04141d] via-[#04141d]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04141d] via-transparent to-[#04141d]/40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-24 lg:grid-cols-2 lg:items-center lg:pt-28">
        {/* Left */}
        <div>
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <Badge variant="glass" className="gap-2 px-4 py-2 text-white">
              <BadgeIcon className="h-4 w-4 text-secondary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">{activeSlide.badge.text}</span>
            </Badge>
          </motion.div>

          <motion.h1
            key={`title-${active}`}
            className="font-display mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {activeSlide.title.map((line, i) => (
              <span key={line} className={cn("block", i === activeSlide.accentIndex && "text-gradient-light")}>
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            key={`desc-${active}`}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {activeSlide.description}
          </motion.p>

          <motion.div
            key={`cta-${active}`}
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <MagneticButton asChild>
              <Button asChild size="lg" className="gap-2">
                <a href={activeSlide.cta.href}>
                  <CtaIcon className="h-5 w-5" /> {activeSlide.cta.label}
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton asChild>
              <Button asChild size="lg" variant="destructive" className="gap-2">
                <a href="/emergency">
                  <Siren className="h-5 w-5 animate-pulse" /> Emergency 24×7
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton asChild>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:border-secondary hover:text-secondary">
                <a href={site.phone.emergencyHref}>
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute inset-y-0 right-0 z-20 flex flex-col items-center justify-center gap-6 pr-6">
        <div className="flex flex-col gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-secondary hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:border-secondary hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                active === index ? "bg-secondary scale-125" : "bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
