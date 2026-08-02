"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function FacilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything You Need, Under One Roof"
          description="Modern infrastructure, advanced technology and thoughtful comfort — designed around your care."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.name} delay={0.05 * i}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="group gap-2">
            <Link href="/facilities">
              Tour All Facilities <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
