import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { DoctorSection } from "@/components/sections/doctor-section";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Dr. N. K. Yadav — Orthopaedic & Spine Surgeon",
  alternates: { canonical: "/doctor" },
});

const qualifications = [
  { period: "MBBS", title: "Bachelor of Medicine & Surgery", note: "Gold medallist" },
  { period: "MS (Ortho)", title: "Master of Surgery — Orthopaedics", note: "Super-specialty training" },
  { period: "Fellowship", title: "Joint Replacement & Spine Surgery", note: "Advanced surgical training" },
  { period: "Practice", title: "18+ Years of Orthopaedic Excellence", note: "15,000+ surgeries" },
];

export default function DoctorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Doctor", path: "/doctor" }])) }} />
      <PageHero
        title={site.doctor}
        subtitle="MBBS, MS (Orthopaedics) — Bone, Joint, Spine & Trauma Surgeon. The most trusted orthopaedic name in North Bihar."
        breadcrumbs={[{ name: "Doctor", path: "/doctor" }]}
      />
      <DoctorSection />
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold">Qualifications & Experience</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualifications.map((q) => (
              <div key={q.period} className="relative rounded-3xl border border-border bg-background p-6">
                <span className="font-display absolute right-5 top-5 text-4xl font-extrabold text-accent">{q.period.charAt(0)}</span>
                <p className="font-display text-lg font-bold text-primary">{q.period}</p>
                <p className="mt-2 text-sm font-semibold">{q.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{q.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-border bg-background p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold">A Note From the Doctor</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For over 18 years I have treated the people of this region like my own family. My belief is simple —
              every patient deserves honest advice, a clear plan and the best technology available — without having to
              travel               hundreds of kilometres. At Shree Keshav Heritage Hospital, we&#39;ve built exactly that: world-class
              orthopaedic care in the heart of Madhubani.
            </p>
            <p className="mt-4 font-semibold text-primary">— {site.doctor}, MS (Orthopaedics)</p>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
