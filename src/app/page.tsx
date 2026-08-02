import { Hero } from "@/components/sections/hero";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DoctorSection } from "@/components/sections/doctor-section";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { EmergencySection } from "@/components/sections/emergency-section";
import { SpecialtiesSection } from "@/components/sections/specialties-section";
import { PatientJourney } from "@/components/sections/patient-journey";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { SuccessStories } from "@/components/sections/success-stories";
// import { PackagesSection } from "@/components/sections/packages-section";
import { InsuranceSection } from "@/components/sections/insurance-section";
import { GallerySection } from "@/components/sections/gallery-section";
// import { VideosSection } from "@/components/sections/videos-section";
import { FAQSection } from "@/components/sections/faq-section";
import { BlogsSection } from "@/components/sections/blogs-section";
import { CTABand } from "@/components/sections/cta-band";
import { ContactSection } from "@/components/sections/contact-section";
import { faqJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/data";

export default function HomePage() {
  const faqSchema = faqJsonLd(faqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ServicesMarquee />
      <AboutSection />
      <WhyChooseUs />
      <DoctorSection />
      <DepartmentsSection />
      <TreatmentsSection />
      <EmergencySection />
      <SpecialtiesSection />
      <PatientJourney />
      <FacilitiesSection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <SuccessStories />
      {/* <PackagesSection /> */}
      <InsuranceSection />
      <GallerySection />
      {/* <VideosSection /> */}
      <FAQSection />
      <BlogsSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
