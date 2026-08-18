"use client";

import * as React from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { services } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function ServicesList() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const [phone, setPhone] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const openModal = (name: string) => {
    setSelected(name);
    setPhone("");
    setDone(false);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => setDone(false), 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
    toast.success("Request Received!", {
      description: `Our team will call you shortly about ${selected}.`,
    });
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => openModal(s.name)}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-soft"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
              <s.icon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-xs text-muted-foreground">Service 0{i + 1}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(o) => (o ? setOpen(true) : close())}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            {done ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <DialogTitle>Request Received!</DialogTitle>
                <DialogDescription>
                  Thank you! Our team will call you shortly regarding {selected}.
                </DialogDescription>
                <Button onClick={close} variant="outline">Done</Button>
              </div>
            ) : (
              <>
                <DialogTitle>Enquire About {selected}</DialogTitle>
                <DialogDescription>
                  Enter your mobile number and we&#39;ll call you back within minutes.
                </DialogDescription>
              </>
            )}
          </DialogHeader>
          {!done && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="svc-phone">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="svc-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={10}
                    className="pl-10"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full gap-2" disabled={submitting}>
                <Send className="h-4 w-4" /> {submitting ? "Submitting…" : "Submit"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}