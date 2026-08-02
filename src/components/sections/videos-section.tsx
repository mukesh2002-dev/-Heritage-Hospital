// "use client";

// import Link from "next/link";
// import { PlayCircle, Clock3 } from "lucide-react";
// import { SectionHeading } from "@/components/shared/section-heading";
// import { Reveal } from "@/components/shared/reveal";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const videos = [
//   { title: "Hospital Tour — Inside SKH Hospital", duration: "3:24", tag: "Tour", gradient: "from-primary to-secondary" },
//   { title: "Dr. N. K. Yadav on Knee Replacement", duration: "8:12", tag: "Doctor", gradient: "from-secondary to-emerald-500" },
//   { title: "Life After Hip Replacement Surgery", duration: "6:40", tag: "Patient", gradient: "from-blue-600 to-indigo-500" },
//   { title: "Understanding Slip Disc — Animation", duration: "4:18", tag: "Education", gradient: "from-amber-500 to-orange-500" },
//   { title: "How Arthroscopy Works", duration: "5:02", tag: "Education", gradient: "from-rose-500 to-pink-500" },
//   { title: "Emergency & Trauma Response", duration: "2:55", tag: "Emergency", gradient: "from-red-500 to-orange-500" },
// ];

// export function VideosSection() {
//   return (
//     <section id="videos" className="relative overflow-hidden bg-background py-24 sm:py-32">
//       <div className="bg-mesh absolute inset-0 opacity-60" />
//       <div className="relative mx-auto max-w-7xl px-6">
//         <SectionHeading
//           eyebrow="Videos"
//           title="See the Hospital in Action"
//           description="Watch our hospital tour, doctor interviews and treatment animations."
//         />

//         <div className="mt-10">
//           <Tabs defaultValue="all" className="flex flex-col items-center">
//             <TabsList>
//               <TabsTrigger value="all">All Videos</TabsTrigger>
//               <TabsTrigger value="tour">Hospital Tour</TabsTrigger>
//               <TabsTrigger value="education">Education</TabsTrigger>
//               <TabsTrigger value="doctor">Doctor</TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {videos.map((v, i) => (
//             <Reveal key={v.title} delay={0.06 * i}>
//               <Link href="/gallery#videos" className="group block overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
//                 <div className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${v.gradient}`}>
//                   <div className="bg-grid absolute inset-0 opacity-20" />
//                   <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-white/90 group-hover:text-primary">
//                     <PlayCircle className="h-8 w-8" />
//                   </span>
//                   <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
//                     <Clock3 className="h-3.5 w-3.5" /> {v.duration}
//                   </span>
//                   <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
//                     {v.tag}
//                   </span>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-sm font-bold transition-colors group-hover:text-primary">{v.title}</h3>
//                 </div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
