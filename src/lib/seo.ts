import type { Metadata } from "next";
import { site } from "@/lib/site";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  const base: Metadata = {
    title: {
      default: `${site.name} | ${site.doctor} — Orthopaedic Super Specialty Hospital, Madhubani`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: [
      "orthopaedic hospital Madhubani",
      "bone hospital Bihar",
      "Dr. N. K. Yadav",
      "knee replacement Madhubani",
      "hip replacement Bihar",
      "spine surgery",
      "joint replacement",
      "trauma care",
      "fracture treatment",
      "Shree Keshav Heritage Hospital",
    ],
    metadataBase: new URL(site.website),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${site.name} | ${site.doctor}`,
      description: site.description,
      url: site.website,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | ${site.doctor}`,
      description: site.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: site.doctor }],
    creator: site.name,
    category: "Hospital",
  };
  return { ...base, ...overrides };
}

export function hospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: site.name,
    alternateName: "Shree Keshav Heritage Hospital",
    url: site.website,
    telephone: site.phone.appointments,
    email: site.email,
    foundingDate: String(site.founded),
    medicalSpecialty: ["Orthopaedic", "Spine", "Trauma", "Joint Replacement"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pin,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleRating,
      reviewCount: site.googleReviews,
    },
    openingHours: "Mo-Su 00:00-24:00",
    availableService: {
      "@type": "MedicalProcedure",
      name: "Emergency, Orthopaedics, Spine, Joint Replacement",
    },
  };
}

export function doctorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.doctor,
    url: `${site.website}/doctor`,
    medicalSpecialty: "OrthopaedicSurgery",
    memberOf: {
      "@type": "Hospital",
      name: site.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pin,
      addressCountry: "IN",
    },
    telephone: site.phone.appointments,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.website}${item.path}`,
    })),
  };
}
