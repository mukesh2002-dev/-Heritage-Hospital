"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X } from "lucide-react";
import { galleryImages, type GalleryItem } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [filter, setFilter] = React.useState("All");
  const [activeImage, setActiveImage] = React.useState<GalleryItem | null>(null);

  const categories = ["All", ...Array.from(new Set(galleryImages.map((g) => g.tag)))];
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.tag === filter);

  return (
    <section id="gallery" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.3]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery & Tour"
          title="A Look Inside Shree Keshav Heritage Hospital"
          description="Explore our world-class modular operation theatres, ICU, diagnostics, rehabilitation center and hospital campus."
        />

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                filter === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 scale-105"
                  : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveImage(img)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-background shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={img.image}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                      {img.tag}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 shadow-lg">
                      <ZoomIn className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-base font-bold drop-shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                      {img.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-background border border-white/20 shadow-2xl"
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative aspect-[16/10] w-full bg-black">
                  <Image
                    src={activeImage.image}
                    alt={activeImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border">
                  <div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {activeImage.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold text-foreground">{activeImage.title}</h3>
                  </div>
                  <Button onClick={() => setActiveImage(null)} variant="outline" size="sm">
                    Close Preview
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <RevealFooter />
      </div>
    </section>
  );
}

function RevealFooter() {
  return (
    <div className="mt-12 text-center">
      <Button asChild variant="outline" size="lg" className="group gap-2">
        <Link href="/gallery">
          <Camera className="h-5 w-5 text-primary" /> View Full Gallery & Campus
        </Link>
      </Button>
    </div>
  );
}
