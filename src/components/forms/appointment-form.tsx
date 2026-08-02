"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle2, User, Phone, MessageSquare, CalendarDays, Clock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { departments, treatments } from "@/lib/data";

const appointmentSchema = z.object({
  name: z.string().min(3, "Please enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  department: z.string().min(1, "Please choose a department"),
  treatment: z.string().optional(),
  date: z.string().min(1, "Please pick a date"),
  time: z.string().min(1, "Please pick a time slot"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

export function AppointmentForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { time: "", department: "" },
  });

  const department = watch("department");
  const time = watch("time");

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1100));
    toast.success("Appointment Request Received!", {
      description: "Our coordinator will call you shortly to confirm your slot.",
    });
    setSubmitted(true);
    reset({ time: "", department: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const next7Days = React.useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return {
        value: d.toISOString().split("T")[0],
        day: d.toLocaleDateString("en-IN", { weekday: "short" }),
        date: d.getDate(),
        month: d.toLocaleDateString("en-IN", { month: "short" }),
        disabled: i === 0,
      };
    });
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      {/* Form */}
      <div className="rounded-[2rem] border border-border bg-background p-8 shadow-soft sm:p-10">
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-20 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950">
              <CheckCircle2 className="h-10 w-10" />
            </span>
            <h3 className="font-display text-2xl font-bold">Appointment Requested!</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Thank you! Our team will call you shortly to confirm your appointment. For urgent needs, call us directly.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Book Another</Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">Book Your Appointment</h3>
                <p className="text-sm text-muted-foreground">Fill in the details — we&#39;ll confirm within minutes.</p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="name" className="pl-10" placeholder="Your full name" {...register("name")} aria-invalid={!!errors.name} />
                </div>
                {errors.name && <p className="text-xs font-medium text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="phone" type="tel" className="pl-10" placeholder="10-digit mobile" {...register("phone")} aria-invalid={!!errors.phone} />
                </div>
                {errors.phone && <p className="text-xs font-medium text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select value={department || undefined} onValueChange={(v) => setValue("department", v, { shouldValidate: true })}>
                  <SelectTrigger id="department"><SelectValue placeholder="Choose department" /></SelectTrigger>
                  <SelectContent>
                    {departments.map((d) => (
                      <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.department && <p className="text-xs font-medium text-red-500">{errors.department.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="treatment">Treatment (optional)</Label>
                <Select onValueChange={(v) => setValue("treatment", v)}>
                  <SelectTrigger id="treatment"><SelectValue placeholder="Any specific treatment?" /></SelectTrigger>
                  <SelectContent>
                    {treatments.map((t) => (
                      <SelectItem key={t.id} value={t.name}>{t.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date picker */}
            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                {next7Days.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    disabled={d.disabled}
                    onClick={() => setValue("date", d.value, { shouldValidate: true })}
                    className={cn(
                      "flex flex-col items-center rounded-xl border py-2.5 transition-all",
                      watch("date") === d.value
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                        : d.disabled
                          ? "cursor-not-allowed border-border bg-surface text-muted-foreground/50"
                          : "border-border bg-surface hover:border-primary/50 hover:text-primary",
                    )}
                  >
                    <span className="text-[10px] font-semibold uppercase">{d.day}</span>
                    <span className="font-display text-lg font-bold leading-tight">{d.date}</span>
                    <span className="text-[10px]">{d.month}</span>
                  </button>
                ))}
              </div>
              {errors.date && <p className="text-xs font-medium text-red-500">{errors.date.message}</p>}
            </div>

            {/* Time slots */}
            <div className="space-y-2">
              <Label>Preferred Time</Label>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setValue("time", slot, { shouldValidate: true })}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                      time === slot
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                        : "border-border bg-surface hover:border-primary/50 hover:text-primary",
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.time && <p className="text-xs font-medium text-red-500">{errors.time.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea id="message" placeholder="Briefly describe your condition…" {...register("message")} />
            </div>

            <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
              <CalendarCheck className="h-5 w-5" /> {isSubmitting ? "Submitting…" : "Confirm Appointment"}
            </Button>
          </form>
        )}
      </div>

      {/* Side info */}
      <div className="space-y-5">
        <div className="rounded-3xl border border-border bg-surface p-6">
          <h4 className="font-display flex items-center gap-2 text-base font-bold">
            <CalendarDays className="h-5 w-5 text-secondary" /> Doctor Availability
          </h4>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { day: "Monday – Saturday", time: "10:00 AM – 5:00 PM", tag: "OPD" },
              { day: "Sunday", time: "Emergency Only", tag: "24×7" },
              { day: "Emergency & Trauma", time: "24 Hours", tag: "Always" },
            ].map((s) => (
              <div key={s.day} className="flex items-center justify-between rounded-2xl bg-background p-3.5">
                <div>
                  <p className="font-semibold">{s.day}</p>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" /> {s.time}</p>
                </div>
                <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-[11px] font-bold text-secondary">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-secondary p-6 text-white">
          <ShieldCheck className="h-8 w-8" />
          <h4 className="font-display mt-3 text-lg font-bold">Instant Confirmation</h4>
          <p className="mt-1 text-sm text-white/80">Most appointments are confirmed by phone within 15 minutes of booking.</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-sm font-medium"><MessageSquare className="h-4 w-4" /> WhatsApp: +91 90000 00000</p>
            <p className="flex items-center gap-2 text-sm font-medium"><Phone className="h-4 w-4" /> Call: +91 90000 11111</p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-6">
          <h4 className="font-display text-base font-bold">Before You Visit</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {[
              "Carry previous reports and X-rays if any",
              "Reach 15 minutes before your slot time",
              "For follow-ups, bring your patient ID",
              "Emergency? Skip the queue — go straight to the trauma bay",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
