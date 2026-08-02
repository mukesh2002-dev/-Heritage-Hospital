import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/layout/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Shree Keshav Heritage Hospital, Rahika, Madhubani. Call, WhatsApp, email or visit us — our team is available 24×7.",
  alternates: { canonical: "/contact" },
});

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])) }} />
      <PageHero
        title="Contact Us"
        subtitle="We're available around the clock. Reach out any time — a human will always answer."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <ContactSection />
    </>
  );
}
