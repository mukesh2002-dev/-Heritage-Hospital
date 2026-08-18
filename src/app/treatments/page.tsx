import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { treatments } from "@/lib/data";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Treatments",
  description:
    "Hip & knee replacement, spine surgery, arthroscopy, fracture care, trauma and accident care, sports injuries, pain management and rehabilitation.",
  alternates: { canonical: "/treatments" },
});

export default function TreatmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Treatments", path: "/treatments" }])) }} />
      <PageHero
        title="Treatments & Procedures"
        subtitle="From routine fracture care to complex spinal reconstruction — every treatment delivered with precision and compassion."
        breadcrumbs={[{ name: "Treatments", path: "/treatments" }]}
        image="https://images.unsplash.com/photo-1579165466994-3f2b29e0ca2c?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Advanced orthopaedic surgery in progress"
      />
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {treatments.map((t, i) => (
            <div key={t.id} id={t.id} className="scroll-mt-28 grid gap-6 rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/30 hover:bg-background hover:shadow-soft lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
                <t.icon className="h-7 w-7" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-xl font-bold">{t.name}</h2>
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-primary">#{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">{t.description}</p>
              </div>
              <div className="flex shrink-0 gap-6 text-sm font-medium text-muted-foreground lg:flex-col lg:gap-1 lg:text-right">
                <p className="flex items-center gap-1.5"><span className="text-secondary">⏱</span> Duration: <span className="font-bold text-foreground">{t.duration}</span></p>
                <p className="flex items-center gap-1.5"><span className="text-secondary">↻</span> Recovery: <span className="font-bold text-foreground">{t.recovery}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <TreatmentsSection />
      <CTABand />
    </>
  );
}
