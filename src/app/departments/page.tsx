import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { departments } from "@/lib/data";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Departments",
  description:
    "Explore our specialised orthopaedic departments — Orthopaedics, Spine Center, Joint Replacement, Trauma, Physiotherapy, ICU and Diagnostics.",
  alternates: { canonical: "/departments" },
});

export default function DepartmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Departments", path: "/departments" }])) }} />
      <PageHero
        title="Our Departments"
        subtitle="Every department is purpose-built — combining technology, expertise and compassion for complete orthopaedic recovery."
        breadcrumbs={[{ name: "Departments", path: "/departments" }]}
      />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {departments.map((d, i) => (
            <div key={d.id} id={d.id} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-surface">
              <div className="grid lg:grid-cols-[1fr_1.4fr]">
                <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent to-secondary/10 p-10">
                  <div className="bg-grid absolute inset-0 opacity-30" />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/25">
                    <d.icon className="h-10 w-10" />
                  </span>
                </div>
                <div className="p-8 sm:p-10">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                    Department 0{i + 1}
                  </span>
                  <h2 className="font-display mt-2 text-2xl font-bold">{d.name}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {d.treatments.map((t) => (
                      <span key={t} className="rounded-full border border-primary/20 bg-accent/60 px-3.5 py-1.5 text-xs font-semibold text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <DepartmentsSection />
      <CTABand />
    </>
  );
}
