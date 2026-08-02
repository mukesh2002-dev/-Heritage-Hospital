import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { services } from "@/lib/data";
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
      />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">Service 0{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
