// "use client";

// import { CheckCircle2, HeartPulse } from "lucide-react";
// import { packages } from "@/lib/data";
// import { SectionHeading } from "@/components/shared/section-heading";
// import { Reveal } from "@/components/shared/reveal";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

// export function PackagesSection() {
//   return (
//     <section className="relative overflow-hidden bg-background py-24 sm:py-32">
//       <div className="bg-mesh absolute inset-0 opacity-60" />
//       <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
//       <div className="relative mx-auto max-w-7xl px-6">
//         <SectionHeading
//           eyebrow="Health Packages"
//           title="Preventive Care, Priced Fairly"
//           description="Annual health packages designed to catch bone, joint and lifestyle problems early — with clear, honest pricing."
//         />

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {packages.map((p, i) => (
//             <Reveal key={p.name} delay={0.07 * i}>
//               <div
//                 className={cn(
//                   "relative flex h-full flex-col rounded-3xl border bg-surface p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft",
//                   p.popular ? "border-primary/40 bg-gradient-to-b from-accent to-background shadow-soft" : "border-border",
//                 )}
//               >
//                 {p.popular && (
//                   <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1">
//                     Most Popular
//                   </Badge>
//                 )}
//                 <div className="flex items-center justify-between">
//                   <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
//                     <HeartPulse className="h-5 w-5" />
//                   </span>
//                   <span className="text-xs font-semibold text-muted-foreground line-through">₹{p.oldPrice.toLocaleString("en-IN")}</span>
//                 </div>
//                 <h3 className="font-display mt-5 text-lg font-bold">{p.name}</h3>
//                 <p className="font-display mt-2 text-3xl font-extrabold text-gradient">
//                   ₹{p.price.toLocaleString("en-IN")}
//                 </p>
//                 <ul className="mt-5 flex-1 space-y-2.5">
//                   {p.items.map((item) => (
//                     <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
//                       <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button asChild className="mt-7" variant={p.popular ? "default" : "outline"}>
//                   <a href="/appointment?package=1">Book This Package</a>
//                 </Button>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
