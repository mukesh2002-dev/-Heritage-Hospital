import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { PatientJourney } from "@/components/sections/patient-journey";
import { InsuranceSection } from "@/components/sections/insurance-section";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Facilities & Infrastructure",
  description:
    "Modular operation theatres, Level-2 ICU, MRI, CT scan, digital X-ray, in-house laboratory, pharmacy, ambulance and rehabilitation gym.",
  alternates: { canonical: "/facilities" },
});

export default function FacilitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Facilities", path: "/facilities" }])) }} />
      <PageHero
        title="Our Facilities"
        subtitle="World-class infrastructure built around one goal — your safe, comfortable and complete recovery."
        breadcrumbs={[{ name: "Facilities", path: "/facilities" }]}
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Advanced MRI and diagnostic imaging facility"
      />
      <FacilitiesSection />
      <PatientJourney />
      <InsuranceSection />
    </>
  );
}
