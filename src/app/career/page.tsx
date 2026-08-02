import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  alternates: { canonical: "/career" },
});

const openings = [
  { role: "Orthopaedic Surgeon", dept: "Surgery", type: "Full-time", location: "Rahika, Madhubani" },
  { role: "ICU Nurse", dept: "Critical Care", type: "Full-time · Rotational", location: "Rahika, Madhubani" },
  { role: "Physiotherapist", dept: "Rehabilitation", type: "Full-time", location: "Rahika, Madhubani" },
  { role: "Radiology Technician", dept: "Diagnostics", type: "Full-time", location: "Rahika, Madhubani" },
  { role: "OT Technician", dept: "Operation Theatre", type: "Full-time", location: "Rahika, Madhubani" },
  { role: "Front Office Executive", dept: "Patient Services", type: "Full-time", location: "Rahika, Madhubani" },
];

export default function CareerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Career", path: "/career" }])) }} />
      <PageHero
        title="Careers at Shree Keshav Heritage"
        subtitle="Join a team that treats every patient like family — and every colleague like a partner in care."
        breadcrumbs={[{ name: "Career", path: "/career" }]}
      />
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold">Current Openings</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            We&#39;re always looking for passionate healthcare professionals. Send your resume to{" "}
            <a href="mailto:careers@skhheritagehospital.com" className="font-semibold text-primary">careers@skhheritagehospital.com</a>.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {openings.map((job) => (
              <div key={job.role} className="rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{job.dept}</span>
                <h3 className="font-display mt-3 text-lg font-bold">{job.role}</h3>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p>Type: {job.type}</p>
                  <p>Location: {job.location}</p>
                </div>
                <a href="mailto:careers@skhheritagehospital.com" className="mt-5 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-border bg-background p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold">Why Join Us?</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                { t: "Purpose-driven work", d: "Care that genuinely transforms lives in your own community." },
                { t: "Growth & learning", d: "Training, modern technology and mentorship from senior specialists." },
                { t: "Respect & support", d: "A culture where every role — from housekeeping to surgery — is valued." },
              ].map((b) => (
                <div key={b.t}>
                  <p className="font-bold">{b.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
