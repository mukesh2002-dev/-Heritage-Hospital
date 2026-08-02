import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { SuccessStories } from "@/components/sections/success-stories";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { CTABand } from "@/components/sections/cta-band";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Patient Stories",
  description:
    "Real stories of recovery — knee replacements, spine surgeries, trauma care and more from patients at Shree Keshav Heritage Hospital.",
  alternates: { canonical: "/patient-stories" },
});

export default function PatientStoriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Patient Stories", path: "/patient-stories" }])) }} />
      <PageHero
        title="Patient Stories"
        subtitle="Every recovery is a story of courage — and a reason we do what we do."
        breadcrumbs={[{ name: "Patient Stories", path: "/patient-stories" }]}
      />
      <SuccessStories />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <CTABand />
    </>
  );
}
