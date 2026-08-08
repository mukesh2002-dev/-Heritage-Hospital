"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Specialty = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  stats?: { label: string; value: string }[];
  image: string;
  badge: string;
};

const specialties: Specialty[] = [
  {
    id: "diagnostics",
    eyebrow: "MRI & Diagnostics",
    title: "Imaging & Labs That Never Delay Your Treatment",
    description:
      "High-field MRI, CT, digital X-ray and a full pathology laboratory deliver radiologist-verified reports fast — so your diagnosis and treatment happen without waiting.",
    points: ["1.5T MRI with spine protocol", "64-slice CT scan", "Digital X-ray", "In-house pathology lab"],
    stats: [
      { value: "<2h", label: "Report time" },
      { value: "24×7", label: "X-ray service" },
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    badge: "Advanced Imaging",
  },
  {
    id: "modular-ot",
    eyebrow: "Modular Operation Theatre",
    title: "Modular OTs Built for Surgical Precision",
    description:
      "Laminar airflow, positive pressure and advanced anaesthesia ensure sterile, safe surgery for every patient — from routine arthroscopy to complex spinal reconstruction.",
    points: ["Laminar airflow OT", "Advanced anaesthesia", "C-arm imaging support", "Emergency trauma OT"],
    stats: [
      { value: "0.2%", label: "Infection rate" },
      { value: "1000+", label: "Surgeries / year" },
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
    badge: "Ultra-Sterile OT",
  },
  {
    id: "icu",
    eyebrow: "Intensive Care",
    title: "Level-2 ICU & Round-the-Clock Critical Care",
    description:
      "Our ICU is built for the moments that matter — ventilators, continuous cardiac monitoring and dedicated critical-care nursing under one roof.",
    points: ["Ventilator support", "Continuous monitoring", "Post-operative ICU", "24×7 critical care team"],
    stats: [
      { value: "1:3", label: "Nurse ratio" },
      { value: "24×7", label: "Monitoring" },
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    badge: "Level-2 ICU",
  },
  {
    id: "physiotherapy",
    eyebrow: "Physiotherapy",
    title: "Structured Rehabilitation, Guided Recovery",
    description:
      "A dedicated rehab gym and physiotherapy team rebuild your strength step by step — from the first day after surgery to full return to daily life.",
    points: ["Post-surgical rehab", "Sports injury rehab", "Pain management", "Gait & balance training"],
    stats: [
      { value: "100%", label: "Guided recovery" },
      { value: "30+", label: "Weekly sessions" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    badge: "Rehab Gym",
  },
  {
    id: "fracture",
    eyebrow: "Fracture Care",
    title: "Complete Fracture & Trauma Fixation",
    description:
      "Casting to complex plating and nailing — our fracture unit handles everything from simple wrist breaks to polytrauma with limb-salvage expertise.",
    points: ["Intramedullary nailing & plating", "External fixation for open fractures", "Pelvic & acetabular trauma", "Bone grafting & deformity correction"],
    stats: [
      { value: "24×7", label: "OT availability" },
      { value: "95%", label: "Union success" },
    ],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    badge: "Trauma Ready",
  },
  {
    id: "arthroscopy",
    eyebrow: "Arthroscopy",
    title: "Keyhole Surgery For Faster Return to Sport",
    description:
      "Pencil-sized incisions, HD cameras and advanced instruments repair ACL, meniscus, shoulder and ankle injuries — getting athletes back on the field in record time.",
    points: ["ACL & PCL reconstruction", "Meniscal repair & trimming", "Rotator cuff repair", "Shoulder stabilisation"],
    stats: [
      { value: "7 mo", label: "Sport return" },
      { value: "<1cm", label: "Incision size" },
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    badge: "Minimally Invasive",
  },
  {
    id: "joint-replacement",
    eyebrow: "Joint Replacement",
    title: "Hip & Knee Replacement With Next-Day Walking",
    description:
      "Computer-assisted alignment, premium implants and a proven 'Walk Today' protocol make joint replacement predictable, durable and fast to recover from.",
    points: ["Total & partial knee replacement", "Minimally invasive hip replacement", "Revision & complex joint surgery", "Physiotherapy from day one"],
    stats: [
      { value: "98.5%", label: "Patient satisfaction" },
      { value: "24h", label: "First steps" },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    badge: "Walk Today",
  },
  {
    id: "spine",
    eyebrow: "Spine Center",
    title: "Advanced Spine Surgery & Back Pain Relief",
    description:
      "From slipped discs to complex scoliosis, our spine centre combines precision microsurgery with non-surgical care — so most patients are walking the same day.",
    points: ["Microdiscectomy & endoscopic surgery", "Minimally invasive spinal fusion", "Kyphoplasty for fractures", "Sciatica & back-pain management"],
    stats: [
      { value: "96%", label: "Pain-free outcomes" },
      { value: "24h", label: "Walk after surgery" },
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    badge: "Spine Speciality",
  },
];

export function SpecialtiesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = specialties[activeIndex];

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Centres of Excellence"
          title="Purpose-Built Super-Specialty Centres"
          description="Eight dedicated centres, each with its own technology, team and protocol — working together for your complete orthopaedic recovery."
        />

        {/* Tabs — one line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {specialties.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={i === activeIndex}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                i === activeIndex
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-primary"
              )}
            >
              {s.eyebrow}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-surface to-accent/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04141d]/80 via-[#04141d]/10 to-transparent" />
                <Badge className="absolute left-5 top-5 z-10" variant="secondary">
                  {active.badge}
                </Badge>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{active.eyebrow}</p>
                <h3 className="font-display mt-3 text-3xl font-bold text-foreground sm:text-4xl">{active.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{active.description}</p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {active.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      {p}
                    </li>
                  ))}
                </ul>

                {active.stats && (
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {active.stats.map((st) => (
                      <div key={st.label} className="rounded-2xl border border-border bg-surface p-4">
                        <p className="font-display text-2xl font-extrabold text-gradient">{st.value}</p>
                        <p className="mt-1 text-xs font-medium text-muted-foreground">{st.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <Button asChild className="group mt-8 gap-2">
                  <Link href={`/treatments#${active.id}`}>
                    Explore {active.eyebrow} <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}