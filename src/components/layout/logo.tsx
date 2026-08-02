import Link from "next/link";
import { Cross } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label="Shree Keshav Heritage Hospital — Home">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
        <Cross className="h-6 w-6 text-white" strokeWidth={2.4} />
        <span className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-sm font-extrabold uppercase tracking-tight", dark ? "text-white" : "text-foreground")}>
          Shree Keshav
        </span>
        <span className={cn("text-[10px] font-semibold uppercase tracking-[0.22em]", dark ? "text-secondary" : "text-secondary")}>
          Heritage Hospital
        </span>
      </span>
    </Link>
  );
}
