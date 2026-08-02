"use client";

import { Star, ThumbsUp, ExternalLink, BadgeCheck } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { Marquee } from "@/components/shared/marquee";
import { Button } from "@/components/ui/button";

const googleReviews = [
  { name: "Vijay Kumar", rating: 5, text: "Best orthopaedic hospital in the region. Clean, organised and the staff is incredibly caring.", time: "2 weeks ago", condition: "Knee Surgery" },
  { name: "Rekha Devi", rating: 5, text: "My mother's hip replacement was done here. Dr. Yadav is a blessing. Fully satisfied.", time: "1 month ago", condition: "Hip Replacement" },
  { name: "Amit Ranjan", rating: 5, text: "24x7 emergency service saved my father after a road accident. Truly grateful.", time: "1 month ago", condition: "Trauma Care" },
  { name: "Sanjay Mishra", rating: 4, text: "Modern machines, fast reports and reasonable charges. Great experience overall.", time: "2 months ago", condition: "MRI & X-Ray" },
  { name: "Puja Jha", rating: 5, text: "Physiotherapy team is wonderful. They guided me through complete recovery.", time: "2 months ago", condition: "Rehabilitation" },
  { name: "Rakesh Sah", rating: 5, text: "Spine surgery at 45 and back to work in a month. Highly recommended.", time: "3 months ago", condition: "Spine Surgery" },
  { name: "Kiran Kumari", rating: 5, text: "Very clean hospital, supportive nurses, and transparent billing with insurance.", time: "3 months ago", condition: "Arthroscopy" },
];

export function GoogleReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="bg-mesh absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/25">
                <span className="text-center">
                  <span className="font-display block text-2xl font-extrabold">{site.googleRating}</span>
                  <span className="text-[10px] uppercase tracking-widest">Rating</span>
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-2 text-lg font-bold">
                  Based on <Counter value={site.googleReviews} />+ Google reviews
                </p>
                <p className="text-sm text-muted-foreground">Verified patients · Real experiences</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                Write a Review <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <Marquee duration={60}>
            {googleReviews.map((r, i) => (
              <div key={i} className="w-[340px] shrink-0 rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white">
                      {r.name.charAt(0)}
                    </span>
                    <span className="text-sm font-bold">{r.name}</span>
                    <BadgeCheck className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{r.text}</p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-primary">{r.condition}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> {r.time}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
