import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ChevronRight, ArrowLeft, Home } from "lucide-react";
import { blogs } from "@/lib/data";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return buildMetadata({
    title: blog.title,
    description: blog.excerpt,
    alternates: { canonical: `/blogs/${slug}` },
  });
}

const sections: Record<string, string[]> = {
  "knee-pain-after-50-when-to-consider-replacement": [
    "Knee pain after 50 is one of the most common complaints we see in our OPD. The knee joint bears body weight with every step, and decades of wear gradually thin the protective cartilage.",
    "Early signs include pain while climbing stairs, stiffness in the morning, and a grating sensation when bending the knee. Many patients also notice swelling after walking long distances.",
    "Treatment begins with weight management, physiotherapy and anti-inflammatory care. However, when X-rays show the cartilage has worn away completely and the bones are rubbing together, replacement becomes the right choice.",
    "The good news is that modern knee replacement — with computer-assisted alignment and premium implants — allows most patients to stand and take their first steps within 24 hours.",
  ],
  "slip-disc-vs-spinal-stenosis-difference": [
    "Back and leg pain are commonly grouped together, but the cause matters enormously. Two frequent culprits are a slipped (herniated) disc and spinal stenosis.",
    "A slipped disc happens when the soft cushion between vertebrae bulges out and presses on a nerve root — causing sharp radiating pain, often down one leg. It tends to strike younger, active people.",
    "Spinal stenosis is a narrowing of the spinal canal, usually due to age-related bone and ligament thickening. It causes heaviness, cramping or pain in both legs — often worse when walking and relieved by bending forward.",
    "An MRI clearly differentiates the two. Your doctor then tailors treatment — physiotherapy and injections for many, and minimally invasive surgery when nerves are significantly compressed.",
  ],
  "recovery-timeline-after-acl-reconstruction": [
    "An ACL tear is a feared injury for any athlete. Reconstruction rebuilds the ligament, but the ligament is only the beginning — the real work is rehabilitation.",
    "Week 0–2: Protecting the graft. You'll walk with crutches and regain full knee extension. Swelling is controlled with ice and elevation.",
    "Week 3–8: Restoring range of motion and beginning strengthening. You progress to walking without crutches and gentle cycling.",
    "Month 3–6: Building strength, balance and running. Plyometric and sport-specific drills prepare you for the final phase.",
    "Month 7–9: Most athletes return to competitive sport only after passing strength and hop tests — we never rush this, because a second tear is the outcome we fear most.",
  ],
  "vitamin-d-bone-health-guide": [
    "Vitamin D is not just a vitamin — it's a hormone that controls how your body absorbs calcium. Without it, bones silently soften and weaken.",
    "In North Bihar, where sun is abundant, it's surprising how many of our patients test low. Indoor lifestyles, sunscreen use and darker skin all reduce natural vitamin D production.",
    "Symptoms of deficiency are subtle: persistent joint pain, muscle weakness, fatigue and frequent fractures. A simple blood test settles the diagnosis.",
    "We recommend 10–20 minutes of midday sun most days, vitamin-D-rich foods, and supplementation only under medical guidance — because too much is as harmful as too little.",
  ],
  "emergency-first-aid-for-fractures": [
    "The first minutes after a fracture decide how easily it heals. Here is what to do before help arrives.",
    "Do not move the person unless they are in danger. Keep the injured limb still — a fracture that moves can damage nearby blood vessels and nerves.",
    "For a limb fracture, you can splint it using a board or rolled newspaper, padding it well. Apply a cold pack over a cloth to reduce swelling — never directly on the skin.",
    "Cover any open wound with clean cloth and press gently if it is bleeding. Do not attempt to push the bone back in.",
    "Call our 24×7 ambulance immediately. Our trauma team is prepared for polytrauma from the moment you call.",
  ],
  "arthroscopy-benefits-over-open-surgery": [
    "Arthroscopy, or keyhole surgery, has transformed orthopaedics. Through pencil-sized incisions, a camera and micro-instruments repair the joint — with remarkable advantages.",
    "Patients experience far less post-operative pain, because muscles and tissues are not cut through. The smaller wounds heal faster and leave minimal scarring.",
    "Hospital stays are dramatically shorter — many arthroscopy procedures are day-care, meaning you go home the same evening.",
    "Recovery is faster too. Whether it's an ACL, a torn meniscus or a rotator cuff, structured rehab gets you back to sport months earlier than traditional open surgery.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const content = sections[slug] ?? [blog.excerpt, "Read the full article at our hospital or book a consultation for personalised guidance on your condition."];
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blogs", path: "/blogs" }, { name: blog.title, path: `/blogs/${slug}` }]), { "@context": "https://schema.org", "@type": "BlogPosting", headline: blog.title, description: blog.excerpt, author: { "@type": "Person", name: blog.author }, datePublished: blog.date, publisher: { "@type": "Organization", name: site.name } }]) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#04141d] via-[#0b2f44] to-[#04141d] pb-16 pt-12 text-white">
        <div className="bg-grid absolute inset-0 opacity-[0.12]" />
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-3.5 w-3.5" /> Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
            <Link href="/blogs" className="hover:text-white">Blogs</Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/40" />
            <span className="font-semibold text-secondary">{blog.category}</span>
          </nav>
          <span className="mt-8 inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">{blog.category}</span>
          <h1 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{blog.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-secondary" /> {blog.author}</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-secondary" /> {blog.date}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> {blog.readTime}</span>
          </div>
        </div>
      </section>

      <article className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="mt-8 rounded-[2rem] border border-border bg-background p-8 sm:p-12">
            <p className="text-lg font-semibold leading-relaxed text-foreground">{blog.excerpt}</p>
            <div className="mt-6 space-y-5">
              {content.map((para, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">{para}</p>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white">
              <p className="font-display text-lg font-bold">Have a similar concern?</p>
              <p className="mt-1 text-sm text-white/80">Book a consultation with {site.doctor} for personalised guidance.</p>
              <Link href="/appointment" className="mt-4 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-primary transition-transform hover:scale-105">
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold">Related Articles</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blogs/${r.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <Image src={r.image} alt={r.title} fill sizes="(max-width: 1024px) 100vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-secondary">{r.category}</span>
                    <h3 className="mt-2 text-sm font-bold leading-snug transition-colors group-hover:text-primary">{r.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blogs" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
