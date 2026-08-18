import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { ServicesList } from "@/components/sections/services-list";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Orthopaedics, joint replacement, spine surgery, trauma care, ICU, MRI, digital X-ray, laboratory, pharmacy, physiotherapy and 24×7 emergency services.",
  alternates: { canonical: "/services" },
});

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])) }} />
      <PageHero
        title="Our Services"
        subtitle="A complete spectrum of orthopaedic and support services — all under one roof, all available 24×7."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
        image="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Medical team providing healthcare services"
      />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ServicesList />
        </div>
      </section>
      <CTABand />
    </>
  );
}
