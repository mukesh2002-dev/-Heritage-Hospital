import Link from "next/link";
import { Cross, Home, CalendarCheck, Phone, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#04141d] px-6 text-center text-white">
      <div className="bg-grid absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="relative">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/40">
          <Cross className="h-12 w-12" />
        </div>
        <h1 className="font-display mt-8 text-7xl font-extrabold text-gradient-light sm:text-8xl">404</h1>
        <h2 className="font-display mt-3 text-2xl font-bold">Page Not Found</h2>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          The page you&#39;re looking for has moved or doesn&#39;t exist. Let&#39;s get you back to care.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="/"><Home className="h-5 w-5" /> Back to Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:border-secondary hover:text-secondary">
            <Link href="/appointment"><CalendarCheck className="h-5 w-5" /> Book Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="destructive" className="gap-2">
            <a href={site.phone.emergencyHref}><Phone className="h-5 w-5" /> Emergency</a>
          </Button>
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/50">
          <Ambulance className="h-4 w-4 text-secondary" /> Still lost? Call {site.phone.appointments}
        </p>
      </div>
    </section>
  );
}
