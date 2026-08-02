"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Phone,
  CalendarCheck,
  Siren,
  ChevronDown,
  ChevronRight,
  Stethoscope,
  Bone,
  Dna,
  Ambulance,
  Dumbbell,
  HeartPulse,
  ScanLine,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { site, nav } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const MEGA_LINKS = [
  { label: "Orthopaedics", href: "/departments#orthopaedics", icon: Bone },
  { label: "Spine Center", href: "/departments#spine", icon: Dna },
  { label: "Joint Replacement", href: "/treatments#joint-replacement", icon: Stethoscope },
  { label: "Trauma & Emergency", href: "/emergency", icon: Ambulance },
  { label: "Arthroscopy", href: "/treatments#arthroscopy", icon: Dumbbell },
  { label: "Physiotherapy", href: "/departments#physiotherapy", icon: HeartPulse },
  { label: "ICU", href: "/departments#icu", icon: HeartPulse },
  { label: "MRI & Diagnostics", href: "/departments#diagnostics", icon: ScanLine },
];

const compactNav = nav.filter((i) => ["Home", "About", "Departments", "Treatments", "Emergency", "Contact"].includes(i.label));
const moreLinks = nav.filter((i) => ["Services", "Gallery", "Media"].includes(i.label));

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const searchResults = (() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return MEGA_LINKS.filter((l) => l.label.toLowerCase().includes(q)).slice(0, 6);
  })();

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong shadow-lg shadow-slate-900/5" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />

          {/* Desktop nav — full (2xl+) */}
          <nav className="hidden items-center gap-0.5 2xl:flex" aria-label="Main navigation">
            {nav.map((item) => (
              <div key={item.label} className="relative">
                <button
                  className={cn(
                    "group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary",
                  )}
                  onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
                  onClick={() => (item.children ? setOpenMenu(openMenu === item.label ? null : item.label) : null)}
                >
                  {item.children ? (
                    <>
                      <Link href={item.href} onClick={closeMenus} className="hover:text-primary">{item.label}</Link>
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", openMenu === item.label && "rotate-180")} />
                    </>
                  ) : (
                    <Link href={item.href} onClick={closeMenus}>{item.label}</Link>
                  )}
                </button>
                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                      className="absolute left-0 top-full pt-3"
                    >
                      <div className="glass-strong min-w-60 overflow-hidden rounded-2xl p-2 shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className="flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-white"
                          >
                            {child.label}
                            <ChevronRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Compact nav + More (xl to 2xl) */}
          <nav className="hidden items-center gap-0.5 xl:flex 2xl:hidden" aria-label="Main navigation">
            {compactNav.map((item) => (
              <div key={item.label} className="relative">
                <button
                  className={cn(
                    "group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary",
                  )}
                  onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
                  onClick={() => (item.children ? setOpenMenu(openMenu === item.label ? null : item.label) : null)}
                >
                  {item.children ? (
                    <>
                      <Link href={item.href} onClick={closeMenus} className="hover:text-primary">{item.label}</Link>
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", openMenu === item.label && "rotate-180")} />
                    </>
                  ) : (
                    <Link href={item.href} onClick={closeMenus}>{item.label}</Link>
                  )}
                </button>
                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                      className="absolute left-0 top-full pt-3"
                    >
                      <div className="glass-strong min-w-60 overflow-hidden rounded-2xl p-2 shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className="flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-white"
                          >
                            {child.label}
                            <ChevronRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="relative">
              <button
                className="group relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                onMouseEnter={() => setOpenMenu("more")}
                onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
              >
                More
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", openMenu === "more" && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openMenu === "more" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setOpenMenu("more")}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute right-0 top-full pt-3"
                  >
                    <div className="glass-strong min-w-64 overflow-hidden rounded-2xl p-2 shadow-2xl">
                      {moreLinks.map((link) => (
                        <div key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeMenus}
                            className="flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-white"
                          >
                            {link.label}
                            <ChevronRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMenus}
                              className="block rounded-xl py-2 pl-8 pr-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Departments trigger (lg to xl) */}
          <div className="hidden items-center gap-1 lg:flex xl:hidden">
            <button
              onMouseEnter={() => setOpenMenu("mega")}
              onMouseLeave={() => setOpenMenu(null)}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:text-primary"
            >
              <Bone className="h-4 w-4" /> Departments
            </button>
          </div>

          <AnimatePresence>
            {openMenu === "mega" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute inset-x-0 top-full hidden px-6 lg:block"
              >
                <div className="glass-strong mx-auto grid max-w-6xl grid-cols-4 gap-2 rounded-3xl p-4 shadow-2xl">
                  {MEGA_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} onClick={closeMenus} className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-primary/5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-transform group-hover:scale-110">
                        <link.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="iconSm" onClick={() => setSearchOpen(true)} aria-label="Search" className="hidden sm:inline-flex">
              <Search className="h-[18px] w-[18px]" />
            </Button>
            <Button
              variant="ghost"
              size="iconSm"
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </Button>
            <Button asChild variant="destructive" size="sm" className="hidden md:inline-flex gap-2">
              <Link href="/emergency">
                <Siren className="h-4 w-4 animate-pulse" /> Emergency
              </Link>
            </Button>
            <Button asChild size="sm" className="hidden gap-2 lg:inline-flex">
              <Link href="/appointment">
                <CalendarCheck className="h-4 w-4" /> Book Appointment
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-strong overflow-hidden border-t border-border/50 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="max-h-[70vh] space-y-1 overflow-y-auto p-4">
                {nav.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-primary hover:text-white"
                    >
                      {item.label}
                      {item.children && <ChevronRight className="h-4 w-4 opacity-40" />}
                    </Link>
                    {item.children && (
                      <div className="ml-4 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} onClick={closeMenus} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex gap-2 pt-3">
                  <Button asChild variant="destructive" size="sm" className="flex-1">
                    <Link href="/emergency"><Siren className="h-4 w-4" /> Emergency 24×7</Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/appointment"><CalendarCheck className="h-4 w-4" /> Appointment</Link>
                  </Button>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={site.phone.emergencyHref}><Phone className="h-4 w-4" /> {site.phone.emergency}</Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Search dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="top-[20%] max-w-xl translate-y-0">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search departments, treatments, doctor…"
              className="h-14 rounded-2xl pl-12 text-base"
            />
          </div>
          {query.trim() ? (
            <div className="space-y-1">
              <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quick results</p>
              {searchResults.length ? (
                searchResults.map((r) => (
                  <Link key={r.label} href={r.href} onClick={() => setSearchOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent">
                    <r.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{r.label}</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                ))
              ) : (
                <p className="px-1 py-2 text-sm text-muted-foreground">No results for “{query}”</p>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {MEGA_LINKS.slice(0, 6).map((r) => (
                <Link key={r.label} href={r.href} onClick={() => setSearchOpen(false)} className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary">
                  {r.label}
                </Link>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
