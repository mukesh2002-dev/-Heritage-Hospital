import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { GallerySection } from "@/components/sections/gallery-section";
import { VideosSection } from "@/components/sections/videos-section";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery & Videos",
  description:
    "Explore our modern campus, modular operation theatres, ICU, diagnostics, patient rooms and hospital videos.",
  alternates: { canonical: "/gallery" },
});

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])) }} />
      <PageHero
        title="Gallery & Videos"
        subtitle="A glimpse inside our world-class facilities — modern, clean and designed around your comfort."
        breadcrumbs={[{ name: "Gallery", path: "/gallery" }]}
      />
      <GallerySection />
      <VideosSection />
      <CTABand />
    </>
  );
}
