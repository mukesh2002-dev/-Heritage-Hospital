import type { Metadata } from "next";
import { PageHero } from "@/components/layout/breadcrumbs";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book Appointment",
  alternates: { canonical: "/appointment" },
});

export default function AppointmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Appointment", path: "/appointment" }])) }} />
      <PageHero
        title="Book an Appointment"
        subtitle="Same-day consultations with Dr. N. K. Yadav. Quick, easy and confirmed within minutes."
        breadcrumbs={[{ name: "Appointment", path: "/appointment" }]}
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Doctor consultation for appointment booking"
      />
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
