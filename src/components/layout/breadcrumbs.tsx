import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm">
      <Link href="/" className="flex items-center gap-1 text-white/70 transition-colors hover:text-white">
        <Home className="h-3.5 w-3.5" /> Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-white/40" />
          {item.path ? (
            <Link href={item.path} className={cn("transition-colors", i === items.length - 1 ? "font-semibold text-secondary" : "text-white/70 hover:text-white")}>
              {item.name}
            </Link>
          ) : (
            <span className={cn(i === items.length - 1 ? "font-semibold text-secondary" : "text-white/70")}>{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: { name: string; path?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04141d] via-[#0b2f44] to-[#04141d] pb-16 pt-16 text-white">
      <div className="bg-grid absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
