"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, ScanLine } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpineScene, KneeScene, DnaScene } from "@/components/three";
import { LazyCanvas } from "@/components/three/lazy-canvas";
import { cn } from "@/lib/utils";

type Specialty = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  stats?: { label: string; value: string }[];
  visual: "spine" | "knee" | "dna" | "scan";
  badge: string;
};

const specialties: Specialty[] = [
  {
    id: "spine",
    eyebrow: "Spine Center",
    title: "Advanced Spine Surgery & Back Pain Relief",
    description:
      "From slipped discs to complex scoliosis, our spine centre combines precision microsurgery with non-surgical care — so most patients are walking the same day.",
    points: [
      "Microdiscectomy & endoscopic spine surgery",
      "Minimally invasive spinal fusion",
      "Kyphoplasty for osteoporotic fractures",
      "Sciatica & chronic back-pain management",
    ],
    stats: [
      { value: "96%", label: "Pain-free outcomes" },
      { value: "24h", label: "Walk after surgery" },
    ],
    visual: "spine",
    badge: "3D Spine Visualisation",
  },
  {
    id: "joint-replacement",
    eyebrow: "Joint Replacement",
    title: "Hip & Knee Replacement With Next-Day Walking",
    description:
      "Computer-assisted alignment, premium implants and a proven 'Walk Today' protocol make joint replacement predictable, durable and fast to recover from.",
    points: [
      "Total & partial knee replacement",
      "Minimally invasive hip replacement",
      "Revision & complex joint surgery",
      "Physiotherapy from day one",
    ],
    stats: [
      { value: "98.5%", label: "Patient satisfaction" },
      { value: "24h", label: "First steps" },
    ],
    visual: "knee",
    badge: "3D Knee Joint",
  },
  {
    id: "arthroscopy",
    eyebrow: "Arthroscopy",
    title: "Keyhole Surgery For Faster Return to Sport",
    description:
      "Pencil-sized incisions, HD cameras and advanced instruments repair ACL, meniscus, shoulder and ankle injuries — getting athletes back on the field in record time.",
    points: [
      "ACL & PCL reconstruction",
      "Meniscal repair & trimming",
      "Rotator cuff repair",
      "Shoulder stabilisation",
    ],
    stats: [
      { value: "7 mo", label: "Sport return" },
      { value: "<1cm", label: "Incision size" },
    ],
    visual: "dna",
    badge: "Minimally Invasive",
  },
  {
    id: "fracture",
    eyebrow: "Fracture Care",
    title: "Complete Fracture & Trauma Fixation",
    description:
      "Casting to complex plating and nailing — our fracture unit handles everything from simple wrist breaks to polytrauma with limb-salvage expertise.",
    points: [
      "Intramedullary nailing & plating",
      "External fixation for open fractures",
      "Pelvic & acetabular trauma",
      "Bone grafting & deformity correction",
    ],
    stats: [
      { value: "24×7", label: "OT availability" },
      { value: "95%", label: "Union success" },
    ],
    visual: "scan",
    badge: "Trauma Ready",
  },
];

const physioFracture: Specialty[] = [
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
    visual: "dna",
    badge: "Rehab Gym",
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
    visual: "scan",
    badge: "Level-2 ICU",
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
    visual: "scan",
    badge: "Ultra-Sterile OT",
  },
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
    visual: "scan",
    badge: "Advanced Imaging",
  },
];

function Visual({ type }: { type: Specialty["visual"] }) {
  if (type === "spine") return <SpineScene />;
  if (type === "knee") return <KneeScene />;
  if (type === "dna") return <DnaScene />;
  return (
    <div className="relative flex h-full min-h-[380px] items-center justify-center bg-gradient-to-br from-primary/10 via-accent to-secondary/10">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      <div className="relative flex flex-col items-center gap-5 text-center">
        <span className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/70 shadow-2xl backdrop-blur dark:bg-white/10">
          <ScanLine className="h-12 w-12 text-primary" />
        </span>
        <p className="font-display text-lg font-bold text-foreground">Rapid Diagnostics</p>
        <p className="max-w-xs text-sm text-muted-foreground">MRI · CT · Digital X-Ray · Laboratory</p>
      </div>
    </div>
  );
}

function SpecialtyRow({ s, index }: { s: Specialty; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <Reveal className={cn("relative", reversed && "lg:order-2")}>
        <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-surface to-accent/50">
          <LazyCanvas className="relative min-h-[380px]" rootMargin="400px 0px">
            <Visual type={s.visual} />
          </LazyCanvas>
          <Badge className="absolute left-5 top-5 z-10" variant="secondary">
            {s.badge}
          </Badge>
        </div>
      </Reveal>
      <div className={cn(reversed && "lg:order-1")}>
        <SectionHeading align="left" eyebrow={s.eyebrow} title={s.title} description={s.description} />
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              {p}
            </li>
          ))}
        </ul>
        {s.stats && (
          <div className="mt-8 grid grid-cols-2 gap-4">
            {s.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border border-border bg-surface p-4">
                <p className="font-display text-2xl font-extrabold text-gradient">{st.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{st.label}</p>
              </div>
            ))}
          </div>
        )}
        <Button asChild className="group mt-8 gap-2">
          <Link href={`/treatments#${s.id}`}>
            Explore {s.eyebrow} <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function SpecialtiesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl space-y-28 px-6">
        <SectionHeading
          eyebrow="Centres of Excellence"
          title="Purpose-Built Super-Specialty Centres"
          description="Eight dedicated centres, each with its own technology, team and protocol — working together for your complete orthopaedic recovery."
        />
        {specialties.map((s, i) => (
          <SpecialtyRow key={s.id} s={s} index={i} />
        ))}
        {physioFracture.map((s, i) => (
          <SpecialtyRow key={s.id} s={s} index={i + specialties.length} />
        ))}
      </div>
    </section>
  );
}
