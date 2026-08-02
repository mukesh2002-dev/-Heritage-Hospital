"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Search, BookOpenText, Newspaper } from "lucide-react";
import { blogs, news } from "@/lib/data";
import { PageHero } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CTABand } from "@/components/sections/cta-band";

export function BlogsView() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "news" ? "News" : "All";
  const [tab, setTab] = React.useState(initialTab);
  const [query, setQuery] = React.useState("");

  const categories = ["All", "Orthopaedics", "Spine", "Wellness", "News"];
  const filtered = blogs
    .filter((b) => (tab === "All" ? true : tab === "News" ? false : b.category === tab))
    .filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <PageHero
        title="Health Blog & News"
        subtitle="Practical, honest guidance on bones, joints, spine and recovery — from our doctors."
        breadcrumbs={[{ name: "Blogs", path: "/blogs" }]}
      />
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setTab(c)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    tab === c
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                      : "border border-border bg-background text-muted-foreground hover:text-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles…" className="pl-10" />
            </div>
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((b) => (
                <motion.div
                  key={b.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Link href={`/blogs/${b.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">{b.category}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {b.readTime}</span>
                      </div>
                      <h2 className="font-display mt-3 flex-1 text-lg font-bold leading-snug transition-colors group-hover:text-primary">{b.title}</h2>
                      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{b.excerpt}</p>
                      <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-secondary">
                        Read Article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <BookOpenText className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 font-semibold">No articles found</p>
              <p className="text-sm text-muted-foreground">Try a different search or category.</p>
            </div>
          )}

          {/* News list */}
          {tab === "All" && (
            <div className="mt-16 overflow-hidden rounded-[2rem] border border-border bg-background">
              <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary to-secondary px-6 py-4 text-white">
                <Newspaper className="h-5 w-5" />
                <h2 className="font-display text-lg font-bold">Hospital News & Updates</h2>
              </div>
              <div className="divide-y divide-border">
                {news.map((n) => (
                  <div key={n.title} className="flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-accent/40 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold">{n.title}</p>
                      <p className="text-sm text-muted-foreground">{n.excerpt}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-muted-foreground">{n.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <CTABand />
    </>
  );
}
