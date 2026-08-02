import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
});

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])) }} />
      <PageHero title="Privacy Policy" subtitle="How we collect, use and protect your information." breadcrumbs={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          {[
            {
              h: "1. Information We Collect",
              p: `When you use the ${site.name} website, we may collect your name, phone number, email address and medical details you choose to share in appointment or enquiry forms. We also collect basic, non-identifiable usage data to improve our website.`,
            },
            {
              h: "2. How We Use Your Information",
              p: "Your information is used solely to provide medical care services — confirming appointments, contacting you regarding treatment, processing insurance, and responding to your enquiries. We never sell or rent your personal data to third parties.",
            },
            {
              h: "3. Medical Records",
              p: "Medical records are kept strictly confidential in line with applicable laws. Access is limited to treating doctors, the care team and staff who require it for your treatment. Reports are shared with you or authorised representatives only.",
            },
            {
              h: "4. Data Security",
              p: "We use appropriate technical and organisational measures to safeguard your personal information against unauthorised access, alteration, disclosure or destruction.",
            },
            {
              h: "5. Cookies",
              p: "Our website may use cookies to enhance your browsing experience. You may disable cookies in your browser settings; however, some features may not function as intended.",
            },
            {
              h: "6. Your Rights",
              p: `You may request access to, correction of, or deletion of your personal information. Please contact us at ${site.email} or call ${site.phone.appointments} for any privacy-related request.`,
            },
            {
              h: "7. Updates to This Policy",
              p: "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.",
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
