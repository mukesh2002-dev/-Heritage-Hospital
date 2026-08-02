"use client";

import * as React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Ambulance } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(3, "Please enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  subject: z.string().min(4, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-[0.3]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="We're Here to Help — Reach Out Anytime"
          description="Book a consultation, ask about a treatment, or get directions. Our team responds fast."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-background p-8 shadow-soft sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-16 text-center"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h3 className="font-display text-2xl font-bold">Message Sent Successfully!</h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thank you for contacting us. Our care coordinator will get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="e.g. Ramesh Kumar" {...register("name")} aria-invalid={!!errors.name} />
                      {errors.name && <p className="text-xs font-medium text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Mobile Number</Label>
                      <Input id="phone" type="tel" placeholder="10-digit mobile" {...register("phone")} aria-invalid={!!errors.phone} />
                      {errors.phone && <p className="text-xs font-medium text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={(v) => console.log(v)}>
                      <SelectTrigger id="subject"><SelectValue placeholder="What do you need help with?" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointment">Book an Appointment</SelectItem>
                        <SelectItem value="treatment">Treatment Enquiry</SelectItem>
                        <SelectItem value="insurance">Insurance / Cashless</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us briefly how we can help…" {...register("message")} aria-invalid={!!errors.message} />
                    {errors.message && <p className="text-xs font-medium text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className="h-4 w-4" /> {isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: Phone, title: "Call Us", lines: [site.phone.appointments, site.phone.emergency], href: site.phone.appointmentsHref },
              { icon: Ambulance, title: "24×7 Emergency & Ambulance", lines: [site.phone.ambulance], href: site.phone.emergencyHref },
              { icon: Mail, title: "Email Us", lines: [site.email], href: `mailto:${site.email}` },
              { icon: MapPin, title: "Visit Us", lines: [`${site.address.line1}`, `${site.address.line2}`], href: site.mapsUrl },
              { icon: Clock, title: "Timings", lines: ["Open 24 hours · 7 days a week"], href: undefined },
            ].map((c, i) => (
              <Reveal key={c.title} delay={0.06 * i}>
                <a
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{c.title}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-muted-foreground">{l}</p>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-3xl border border-border">
                <div className="relative flex aspect-[16/9] items-center justify-center bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop"
                    alt="Shree Keshav Heritage Hospital, Rahika"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="relative flex flex-col items-center gap-3 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/30">
                      <MapPin className="h-7 w-7" />
                    </span>
                    <p className="px-6 text-sm font-semibold text-white">{site.address.line1}</p>
                    <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">Open in Google Maps →</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
