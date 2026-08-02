"use client";

import Link from "next/link";
import { Clock, Phone, Ambulance, Star, MapPin, Bell } from "lucide-react";
import { site } from "@/lib/site";
import { Marquee } from "@/components/shared/marquee";

export function TopBar() {
  const items = [
    { icon: Clock, label: "Open 24×7 Emergency", href: "/emergency" },
    { icon: Ambulance, label: "24×7 Ambulance: " + site.phone.ambulance, href: site.phone.emergencyHref },
    { icon: Phone, label: "Appointments: " + site.phone.appointments, href: site.phone.appointmentsHref },
    { icon: Star, label: `Google Rating ${site.googleRating}★ · ${site.googleReviews}+ reviews`, href: site.mapsUrl },
    { icon: MapPin, label: "Rahika, Madhubani, Bihar", href: site.mapsUrl },
    { icon: Bell, label: "Walk-in / Emergency — No appointment needed", href: "/emergency" },
  ];

  return (
    <div className="relative z-50 hidden border-b border-white/10 bg-gradient-to-r from-[#04141d] via-[#0b2f44] to-[#04141d] text-white/90 lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-6 px-6">
        <div className="flex flex-1 items-center overflow-hidden">
          <Marquee duration={45} className="[--gap:2rem]">
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex shrink-0 items-center gap-2 text-[12px] font-medium text-white/80 transition-colors hover:text-white"
              >
                <item.icon className="h-3.5 w-3.5 text-secondary" />
                {item.label}
              </Link>
            ))}
          </Marquee>
        </div>
        <div className="flex shrink-0 items-center gap-4 text-[12px]">
          <Link href={site.mapsUrl} className="flex items-center gap-1.5 transition-colors hover:text-secondary">
            <MapPin className="h-3.5 w-3.5 text-secondary" /> Get Directions
          </Link>
          <span className="h-4 w-px bg-white/20" />
          <span className="flex items-center gap-1.5 font-semibold text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Open 24×7
          </span>
        </div>
      </div>
    </div>
  );
}
