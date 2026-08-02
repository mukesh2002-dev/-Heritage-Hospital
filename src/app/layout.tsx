import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { SmoothScrollProvider } from "@/providers/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TopBar } from "@/components/layout/top-bar";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { AnimatedCursor } from "@/components/layout/animated-cursor";
import { FloatingActions } from "@/components/layout/floating-actions";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { hospitalJsonLd, doctorJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
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
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B6E99" },
    { media: "(prefers-color-scheme: dark)", color: "#04141d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [hospitalJsonLd(), doctorJsonLd()];
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${sora.variable}`}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");document.documentElement.classList.add(t==="dark"?"dark":"light");document.documentElement.style.colorScheme=t==="dark"?"dark":"light";}catch(e){document.documentElement.classList.add("light");}})();`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            <SmoothScrollProvider>
              <LoadingScreen />
              <AnimatedCursor />
              <TopBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <FloatingActions />
            </SmoothScrollProvider>
          </TooltipProvider>
        </ThemeProvider>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
