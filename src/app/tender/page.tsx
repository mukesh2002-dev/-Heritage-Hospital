import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { FileText, Mail, Download, ShieldCheck, Clock, Handshake } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Tenders",
  description:
    "Active tenders and procurement notices of Shree Keshav Heritage Hospital, Madhubani. Medical equipment, construction, services and supply tenders.",
  alternates: { canonical: "/tender" },
});

const tenders = [
  {
    ref: "SKH/OT/2026/001",
    title: "Supply & Installation of Modular Operation Theatre Equipment",
    category: "Medical Equipment",
    published: "12 Aug 2026",
    due: "05 Sep 2026",
    emd: "₹1,00,000",
    status: "Open",
  },
  {
    ref: "SKH/DIAG/2026/002",
    title: "Supply of 1.5T MRI Machine with 3-Year AMC",
    category: "Diagnostics",
    published: "10 Aug 2026",
    due: "02 Sep 2026",
    emd: "₹2,50,000",
    status: "Open",
  },
  {
    ref: "SKH/PHAR/2026/003",
    title: "Rate Contract for Orthopaedic Implants & Consumables",
    category: "Pharmacy & Consumables",
    published: "28 Jul 2026",
    due: "28 Aug 2026",
    emd: "₹1,50,000",
    status: "Open",
  },
  {
    ref: "SKH/CIV/2026/004",
    title: "Construction of Patient Ward Extension & Parking Area",
    category: "Civil Works",
    published: "20 Jul 2026",
    due: "25 Aug 2026",
    emd: "₹3,00,000",
    status: "Open",
  },
  {
    ref: "SKH/AMB/2026/005",
    title: "Ambulance Services — 24×7 Emergency Fleet (Lease)",
    category: "Services",
    published: "15 Jul 2026",
    due: "20 Aug 2026",
    emd: "₹75,000",
    status: "Closing Soon",
  },
  {
    ref: "SKH/IT/2026/006",
    title: "Hospital Management Information System (HMIS) Implementation",
    category: "IT & Software",
    published: "05 Jul 2026",
    due: "18 Aug 2026",
    emd: "₹50,000",
    status: "Closed",
  },
];

const process = [
  {
    icon: FileText,
    title: "Download Tender Documents",
    text: "Download the complete tender document and specifications for the notice you wish to bid for.",
  },
  {
    icon: Mail,
    title: "Submit Your Bid",
    text: "Submit your sealed bid along with EMD and required documents before the due date and time.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Evaluation",
    text: "Our procurement committee evaluates all bids for technical compliance, quality and eligibility.",
  },
  {
    icon: Handshake,
    title: "Award & Contract",
    text: "Successful bidders are intimated and the contract is awarded following a transparent process.",
  },
];

export default function TenderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Tenders", path: "/tender" }])) }} />
      <PageHero
        title="Tenders & Procurement"
        subtitle="Transparent, fair and timely procurement of quality equipment, services and supplies for better patient care."
        breadcrumbs={[{ name: "Tenders", path: "/tender" }]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Tender and procurement documents being signed"
      />
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold">Active Tenders</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Interested vendors can download the tender documents and submit their bids before the due date. For queries, write to{" "}
            <a href="mailto:tenders@skhheritagehospital.com" className="font-semibold text-primary">tenders@skhheritagehospital.com</a>.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tenders.map((t) => (
              <div key={t.ref} className="flex flex-col rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{t.category}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${t.status === "Open" ? "bg-emerald-500/10 text-emerald-600" : t.status === "Closing Soon" ? "bg-amber-500/10 text-amber-600" : "bg-muted text-muted-foreground"}`}>
                    {t.status}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg font-bold leading-snug">{t.title}</h3>
                <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <p>Reference: <span className="font-semibold text-foreground">{t.ref}</span></p>
                  <p>Published: {t.published}</p>
                  <p>Due Date: <span className="font-semibold text-foreground">{t.due}</span></p>
                  <p>EMD: {t.emd}</p>
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="mailto:tenders@skhheritagehospital.com" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">
                    <Download className="h-4 w-4" /> Documents
                  </a>
                  <a href="mailto:tenders@skhheritagehospital.com" className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold">How to Bid</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">A simple, transparent four-step process to participate in our tenders.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="relative rounded-3xl border border-border bg-surface p-7">
                <span className="font-display absolute right-6 top-6 text-4xl font-extrabold text-accent">0{i + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-border bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-bold">Ready to partner with us?</h3>
              <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> New tenders are added regularly. Get in touch to be notified.
              </p>
            </div>
            <a href="mailto:tenders@skhheritagehospital.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
              <Mail className="h-4 w-4" /> tenders@skhheritagehospital.com
            </a>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}