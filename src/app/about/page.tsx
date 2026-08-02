import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PatientJourney } from "@/components/sections/patient-journey";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  alternates: { canonical: "/about" },
});

const values = [
  {
    title: "Our Mission",
    text: "To bring world-class bone, joint and spine care to every home in North Bihar — with clinical excellence, honesty and compassion.",
  },
  {
    title: "Our Vision",
    text: "To be the most trusted orthopaedic and trauma destination of Bihar — where no patient ever needs to travel to a metro city again.",
  },
  {
    title: "Our Promise",
    text: "Clear diagnosis, transparent pricing, empathetic care and follow-up support until you are fully recovered.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }} />
      <PageHero
        title="About Shree Keshav Heritage Hospital"
        subtitle="A modern super-specialty orthopaedic hospital serving the people of Madhubani and North Bihar."
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />
      <AboutSection />
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.title} className="rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <span className="font-display text-5xl font-extrabold text-accent">0{i + 1}</span>
              <h3 className="font-display mt-4 text-xl font-bold">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <WhyChooseUs />
      <PatientJourney />
      <CTABand />
    </>
  );
}
