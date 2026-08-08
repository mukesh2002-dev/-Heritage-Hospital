"use client";

import * as React from "react";
import { CalendarCheck, Phone, MessageSquare, Clock4, Zap, ShieldCheck, Star, User, UserRound } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { departments } from "@/lib/data";
import { site } from "@/lib/site";

const appointmentBenefits = [
  { icon: Zap, title: "Same-Day Slots", text: "Most appointment requests are confirmed within 15 minutes." },
  { icon: Clock4, title: "No Long Waiting", text: "Fixed slot timings so you never wait for hours." },
  { icon: ShieldCheck, title: "Expert Doctors", text: "Super-specialty knee, hip, spine and trauma surgeons." },
  { icon: Star, title: "Trusted Care", text: "4.9★ rated on Google by patients across North Bihar." },
];

const TIME_SLOTS = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

export function InsuranceSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^[6-9]\d{9}$/.test(phone) || !department || !time) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    toast.success("Appointment Request Received!", {
      description: "Our coordinator will call you shortly to confirm your slot.",
    });
    setSubmitted(true);
    setName("");
    setPhone("");
    setDepartment("");
    setTime("");
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="appointment" className="relative overflow-hidden bg-gradient-to-br from-[#04141d] via-[#0b2f44] to-[#04141d] py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-secondary/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Book An Appointment"
              title="Your Recovery Starts With One Appointment"
              description={`Reserve your consultation with ${site.doctor} and our super-specialty team. Fill in the form and we'll confirm your visit by phone — no queues, no waiting.`}
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {appointmentBenefits.map((b, i) => (
                <Reveal key={b.title} delay={0.07 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors hover:border-secondary/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{b.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">{b.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="gap-2" variant="secondary">
                  <a href={site.phone.appointmentsHref}><Phone className="h-5 w-5" /> Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-white/25 bg-transparent text-white hover:border-secondary hover:text-secondary">
                  <a href={`https://wa.me/${site.whatsapp}`}><MessageSquare className="h-5 w-5" /> WhatsApp Us</a>
                </Button>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <Clock4 className="h-4 w-4 text-secondary" /> OPD: Mon–Sat · 10 AM – 5 PM
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="gradient-border glass overflow-hidden rounded-[2rem] p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  <CalendarCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">Book Appointment</h3>
                  <p className="text-xs text-muted-foreground">Fill it in — we confirm within minutes</p>
                </div>
              </div>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-surface p-8 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <ShieldCheck className="h-8 w-8" />
                  </span>
                  <p className="font-display text-lg font-bold">Request Received!</p>
                  <p className="text-sm text-muted-foreground">Our coordinator will call you shortly to confirm your slot.</p>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="ap-name">Full Name</Label>
                      <div className="relative">
                        <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="ap-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-9"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ap-phone">Mobile Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="ap-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-9"
                          placeholder="10-digit mobile"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Department</Label>
                    <Select value={department || undefined} onValueChange={(v) => setDepartment(v)}>
                      <SelectTrigger className="bg-surface"><SelectValue placeholder="Choose department" /></SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => (
                          <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Preferred Time</Label>
                    <div className="flex flex-wrap gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                            time === slot
                              ? "border-secondary bg-secondary text-white shadow-lg shadow-secondary/25"
                              : "border-white/15 bg-white/[0.04] text-white/70 hover:border-secondary/50 hover:text-white",
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <CalendarCheck className="h-5 w-5" /> Book Appointment
                  </Button>
                  <p className="text-center text-xs text-white/40">Free consultation · No hidden charges</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Book Online · Call · WhatsApp — Your Choice
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Phone, label: `Call ${site.phone.appointments}` },
                { icon: MessageSquare, label: `WhatsApp ${site.whatsapp}` },
                { icon: Clock4, label: "Mon–Sat · 10 AM – 5 PM" },
                { icon: ShieldCheck, label: "100% Private & Confidential" },
              ].map((c) => (
                <span key={c.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/70">
                  <c.icon className="h-4 w-4 text-secondary" /> {c.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}