import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Ambulance, ShieldCheck, Star, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { quickLinks, departments } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon, LinkedinIcon } from "@/components/layout/social-icons";

const insuranceRow = [
  "National Insurance",
  "New India Assurance",
  "Star Health",
  "HDFC ERGO",
  "ICICI Lombard",
  "Bajaj Allianz",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#04141d] to-[#020b12] text-white">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />

      {/* Emergency CTA strip */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <div className="gradient-border glass overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-6">
              <div className="relative hidden h-20 w-20 items-center justify-center rounded-2xl bg-red-500/15 sm:flex">
                <span className="absolute inset-0 rounded-2xl animate-pulse-ring bg-red-500/30" />
                <Ambulance className="relative h-10 w-10 text-red-400" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">Need Emergency Care?</h3>
                <p className="mt-1 text-white/60">Our trauma team is ready 24×7, 365 days a year.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="destructive" size="lg" className="gap-2">
                <Link href={site.phone.emergencyHref}><Phone className="h-5 w-5" /> Call Now</Link>
              </Button>
              <Button asChild variant="white" size="lg">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:border-secondary hover:text-secondary">
                <Link href={site.mapsUrl} target="_blank">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5">
        {/* Brand */}
        <div className="space-y-6 lg:col-span-2">
          <Logo dark />
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            {site.name} — a Bone | Joint | Spine | Trauma | Orthopaedic Super Specialty Hospital led by {site.doctor}, delivering world-class orthopaedic care in the heart of North Bihar.
          </p>
          <div className="space-y-3 text-sm">
            <a href={site.mapsUrl} target="_blank" className="flex items-start gap-3 text-white/70 transition-colors hover:text-secondary">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              {site.address.line1},<br />
              {site.address.line2}
            </a>
            <a href={site.phone.appointmentsHref} className="flex items-center gap-3 text-white/70 transition-colors hover:text-secondary">
              <Phone className="h-4 w-4 shrink-0 text-secondary" /> {site.phone.appointments}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/70 transition-colors hover:text-secondary">
              <Mail className="h-4 w-4 shrink-0 text-secondary" /> {site.email}
            </a>
            <div className="flex items-center gap-3 text-white/70">
              <Clock className="h-4 w-4 shrink-0 text-secondary" /> {site.hours}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            {[
              { icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
              { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
              { icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
              { icon: TwitterIcon, href: site.social.twitter, label: "Twitter" },
              { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-secondary hover:bg-secondary hover:text-[#04141d]"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display mb-5 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.slice(0, 8).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group flex items-center gap-2 text-white/65 transition-colors hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5 text-secondary opacity-0 transition-all group-hover:opacity-100" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h4 className="font-display mb-5 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Departments</h4>
          <ul className="space-y-3 text-sm">
            {departments.slice(0, 7).map((d) => (
              <li key={d.id}>
                <Link href={`/departments#${d.id}`} className="text-white/65 transition-colors hover:text-white">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map + insurance */}
        <div className="space-y-6">
          <div>
            <h4 className="font-display mb-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Find Us</h4>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-white/10">
              <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                  alt="Shree Keshav Heritage Hospital location"
                  fill
                  sizes="(max-width: 1024px) 50vw, 240px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="relative flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-[#04141d] shadow-lg shadow-secondary/40">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span className="px-6 text-xs font-medium text-white/90">
                    Shree Keshav Nagar, Rahika, Madhubani
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <h4 className="font-display mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              <ShieldCheck className="h-4 w-4" /> Cashless Insurance
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {insuranceRow.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60">
                  {c}
                </span>
              ))}
              <span className="flex items-center gap-1 rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-bold text-secondary">
                <Star className="h-3 w-3" /> Rated {site.googleRating}/5
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name} · {site.doctor}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-secondary">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-secondary">Terms of Use</Link>
            <Link href="/career" className="transition-colors hover:text-secondary">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
