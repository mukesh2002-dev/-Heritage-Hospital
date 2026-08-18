import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
});

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms" }])) }} />
      <PageHero title="Terms of Use" subtitle="Please read these terms carefully before using our website." breadcrumbs={[{ name: "Terms of Use", path: "/terms" }]} image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop" imageAlt="Terms and conditions document" />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          {[
            {
              h: "1. Acceptance of Terms",
              p: `By accessing and using the ${site.name} website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.`,
            },
            {
              h: "2. Not Medical Advice",
              p: "The content on this website — including articles, treatment descriptions and FAQs — is for general information only and does not constitute medical advice, diagnosis or treatment. Always consult a qualified medical professional regarding your specific condition.",
            },
            {
              h: "3. Emergency",
              p: "This website is not intended for emergencies. If you have a medical emergency, call our 24×7 emergency line immediately or visit the nearest emergency facility.",
            },
            {
              h: "4. Appointments",
              p: "Appointment requests submitted through the website are subject to confirmation by our team. We reserve the right to reschedule or cancel appointments based on clinical priority.",
            },
            {
              h: "5. Intellectual Property",
              p: "All content, design, logos and materials on this website are the property of the hospital and protected by applicable intellectual property laws. You may not reproduce or redistribute content without written permission.",
            },
            {
              h: "6. Limitation of Liability",
              p: "The hospital makes every effort to keep information accurate and current, but does not warrant the completeness or accuracy of the content. The hospital shall not be liable for any loss arising from reliance on website content.",
            },
            {
              h: "7. Changes to Terms",
              p: "We may update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
            },
            {
              h: "8. Contact",
              p: `For questions about these terms, contact us at ${site.email} or ${site.phone.appointments}.`,
            },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
