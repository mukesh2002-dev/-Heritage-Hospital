"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, Newspaper } from "lucide-react";
import { blogs, news } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function BlogsSection() {
  const featured = blogs.find((b) => b.featured) ?? blogs[0];
  const rest = blogs.filter((b) => b.slug !== featured.slug).slice(0, 3);

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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Reveal>
            <Link href={`/blogs/${featured.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md shadow">Featured</span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-primary">{featured.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                </div>
                <h3 className="font-display mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-primary sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-secondary">
                  Read Article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </p>
              </div>
            </Link>
          </Reveal>

          {/* Others */}
          <div className="flex flex-col gap-5">
            {rest.map((b, i) => (
              <Reveal key={b.slug} delay={0.07 * i}>
                <Link href={`/blogs/${b.slug}`} className="group flex gap-5 rounded-3xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                  <div className="relative hidden h-28 w-32 shrink-0 overflow-hidden rounded-2xl bg-slate-900 sm:block">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="rounded-full bg-accent px-2 py-0.5 font-semibold text-primary">{b.category}</span>
                      <span>{b.date}</span>
                    </div>
                    <h3 className="font-display mt-2 text-base font-bold leading-snug transition-colors group-hover:text-primary">{b.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">{b.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* News ticker */}
        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background">
            <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary to-secondary px-6 py-3 text-white">
              <Newspaper className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Hospital News</span>
            </div>
            <div className="divide-y divide-border">
              {news.map((n) => (
                <div key={n.title} className="group flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-sm font-semibold transition-colors group-hover:text-primary">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.excerpt}</p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-muted-foreground">{n.date}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
