import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { EmergencySection } from "@/components/sections/emergency-section";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Emergency & Trauma Care 24×7",
  description:
    "24×7 emergency department, ambulance service, trauma bay and Level-2 ICU in Madhubani. Golden-hour trauma care across North Bihar.",
  alternates: { canonical: "/emergency" },
});

export default function EmergencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Emergency", path: "/emergency" }])) }} />
      <PageHero
        title="Emergency & Trauma Care"
        subtitle="Open 24 hours, 365 days. When every minute counts, our trauma team is ready before you arrive."
        breadcrumbs={[{ name: "Emergency", path: "/emergency" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={site.phone.emergencyHref} className="flex items-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-bold shadow-xl shadow-red-600/30 transition-transform hover:scale-105">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
            Emergency: {site.phone.emergency}
          </a>
          <a href={site.phone.emergencyHref} className="rounded-2xl bg-secondary px-6 py-4 font-bold text-[#04141d] shadow-xl shadow-secondary/30 transition-transform hover:scale-105">
            Book Ambulance
          </a>
        </div>
      </PageHero>
      <EmergencySection />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold">When to Come to the Emergency Room</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Road traffic accidents & polytrauma",
              "Suspected fractures — open or closed",
              "Sudden inability to bear weight",
              "Severe back or neck injury",
              "Numbness or loss of limb strength",
              "Wounds, dislocations & sprains",
              "Post-surgery complications",
              "Any sudden severe bone or joint pain",
            ].map((c) => (
              <div key={c} className="rounded-2xl border border-border bg-surface p-5 text-sm font-medium">
                <span className="mr-2 text-secondary">●</span>{c}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
