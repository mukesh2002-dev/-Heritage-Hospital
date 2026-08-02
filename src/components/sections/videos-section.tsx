"use client";

import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Clock3 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const videos = [
  { title: "Hospital Tour — Inside SKH Hospital", duration: "3:24", tag: "Tour", image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop" },
  { title: "Dr. N. K. Yadav on Knee Replacement", duration: "8:12", tag: "Doctor", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" },
  { title: "Life After Hip Replacement Surgery", duration: "6:40", tag: "Patient", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
  { title: "Understanding Slip Disc — Care Guide", duration: "4:18", tag: "Education", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop" },
  { title: "How Arthroscopy Keyhole Surgery Works", duration: "5:02", tag: "Education", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" },
  { title: "Emergency & Trauma 24×7 Response", duration: "2:55", tag: "Emergency", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop" },
];

export function VideosSection() {
  return (
    <section id="videos" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Videos"
          title="See the Hospital in Action"
          description="Watch our hospital tour, doctor interviews, surgical innovations and patient stories."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.title} delay={0.06 * i}>
              <Link href="/gallery#videos" className="group block overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/25" />
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur border border-white/30 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-primary">
                    <PlayCircle className="h-8 w-8" />
                  </span>
                  <span className="absolute bottom-3 right-3 z-10 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    <Clock3 className="h-3.5 w-3.5" /> {v.duration}
                  </span>
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur border border-white/20">
                    {v.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold transition-colors group-hover:text-primary">{v.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
