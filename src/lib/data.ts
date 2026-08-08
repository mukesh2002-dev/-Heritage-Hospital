import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  Clapperboard,
  ClipboardCheck,
  Cross,
  Dna,
  Dumbbell,
  FlaskConical,
  Heart,
  HeartPulse,
  Hospital,
  Image as ImageIcon,
  Microscope,
  MonitorCheck,
  Pill,
  Radiation,
  Scan,
  ScanLine,
  ScanSearch,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTube2,
  Thermometer,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Department = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  treatments: string[];
  image: string;
};

export const departments: Department[] = [
  {
    id: "orthopaedics",
    name: "Orthopaedics",
    icon: Bone,
    description:
      "Comprehensive bone and joint care covering fractures, deformities and reconstructive surgery with precision outcomes.",
    treatments: ["Fracture Fixation", "Deformity Correction", "Bone Grafting", "Minimally Invasive Surgery"],
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "spine",
    name: "Spine Center",
    icon: Dna,
    description:
      "Advanced diagnosis and surgical care for slip disc, spinal stenosis, scoliosis and complex spinal trauma.",
    treatments: ["Microdiscectomy", "Spinal Fusion", "Kyphoplasty", "Minimally Invasive Spine Surgery"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "joint",
    name: "Joint Replacement",
    icon: Cross,
    description:
      "State-of-the-art hip and knee replacement with computer-assisted alignment, faster recovery and longer implant life.",
    treatments: ["Total Hip Replacement", "Total Knee Replacement", "Revision Replacement", "Unicondylar Knee"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "trauma",
    name: "Trauma & Emergency",
    icon: Ambulance,
    description:
      "24×7 trauma bay with on-call surgeons, emergency operation theatre and advanced accident and polytrauma care.",
    treatments: ["Polytrauma Care", "Road Accident Care", "Pelvic Trauma", "Limb Salvage"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "arthroscopy",
    name: "Arthroscopy & Sports",
    icon: Activity,
    description:
      "Keyhole surgery for shoulder, knee and ankle injuries helping athletes and active patients return to sport faster.",
    treatments: ["ACL Reconstruction", "Meniscal Repair", "Rotator Cuff Repair", "Shoulder Stabilisation"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehab",
    icon: Dumbbell,
    description:
      "Personalised rehab programmes combining manual therapy, exercise science and modern modalities for full recovery.",
    treatments: ["Post-Surgical Rehab", "Sports Rehab", "Pain Management", "Gait Training"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "icu",
    name: "Intensive Care Unit",
    icon: HeartPulse,
    description:
      "Level-2 ICU with ventilator support, cardiac monitoring and round-the-clock critical care specialists.",
    treatments: ["Ventilator Care", "Post-Operative ICU", "Multiorgan Monitoring", "Critical Nursing"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "diagnostics",
    name: "Diagnostics & Imaging",
    icon: ScanLine,
    description:
      "Digital X-ray, MRI, CT scan and full laboratory services delivering rapid, accurate reports for faster decisions.",
    treatments: ["MRI Scan", "CT Scan", "Digital X-Ray", "Pathology Lab"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "pediatric",
    name: "Paediatric Orthopaedics",
    icon: Baby,
    description:
      "Specialised care for childhood bone conditions, growth deformities and congenital orthopaedic problems.",
    treatments: ["CTEV Correction", "Growth Deformity", "Hip Dysplasia", "Limb Lengthening"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "pain",
    name: "Pain Clinic",
    icon: Thermometer,
    description:
      "Multidisciplinary approach to chronic back, neck and joint pain using injections, nerve blocks and medication.",
    treatments: ["Epidural Steroid", "Nerve Blocks", "Trigger Point Therapy", "Pharmacotherapy"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
  },
];

export type Treatment = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  recovery: string;
};

export const treatments: Treatment[] = [
  { id: "hip", name: "Hip Replacement", icon: Cross, description: "Total hip replacement restoring pain-free mobility using modular, high-durability implants.", duration: "1–1.5 hours", recovery: "Walk next day" },
  { id: "knee", name: "Knee Replacement", icon: Bone, description: "Total & partial knee replacement with computer-assisted alignment for natural knee motion.", duration: "1–1.5 hours", recovery: "Stand next day" },
  { id: "shoulder", name: "Shoulder Surgery", icon: Scan, description: "Rotator cuff, instability and replacement procedures returning full shoulder function.", duration: "45–90 mins", recovery: "3 weeks sling" },
  { id: "spine", name: "Spine Surgery", icon: Dna, description: "Microdiscectomy to complex fusion — precise, nerve-preserving and minimally invasive.", duration: "1–3 hours", recovery: "Walk in 24h" },
  { id: "slip-disk", name: "Slip Disc Care", icon: ScanSearch, description: "Non-surgical and surgical relief from disc bulge, sciatica and radicular pain.", duration: "Varies", recovery: "Fast relief" },
  { id: "arthroscopy", name: "Arthroscopy", icon: Activity, description: "Keyhole diagnostic and therapeutic joint surgery through pencil-sized incisions.", duration: "30–60 mins", recovery: "Return in days" },
  { id: "sports", name: "Sports Injury", icon: Dumbbell, description: "ACL, meniscus, ligament and muscle injury treatment for athletes of every level.", duration: "45–90 mins", recovery: "Sport in 6–9 m" },
  { id: "fracture", name: "Fracture Care", icon: Bone, description: "Casting, nailing, plating and external fixation for all complex fracture patterns.", duration: "1–2 hours", recovery: "Union 6–12 wks" },
  { id: "trauma", name: "Trauma & Accident", icon: Ambulance, description: "Golden-hour polytrauma management by a dedicated emergency orthopaedic team.", duration: "24×7 ready", recovery: "Critical care" },
  { id: "bone-tumor", name: "Bone Tumor Surgery", icon: Microscope, description: "Benign and malignant bone tumour management with limb-salvage approaches.", duration: "2–4 hours", recovery: "Oncology plan" },
  { id: "hand", name: "Hand Surgery", icon: Stethoscope, description: "Tendon, nerve and micro-vascular repair for the hand and wrist injuries.", duration: "1–2 hours", recovery: "Splint weeks" },
  { id: "foot-ankle", name: "Foot & Ankle", icon: Activity, description: "Bunion, flat-foot and ankle arthritis care with functional return.", duration: "1 hour", recovery: "Weeks" },
  { id: "pain", name: "Pain Management", icon: Thermometer, description: "Chronic back and joint pain treated through non-invasive and interventional care.", duration: "Clinic based", recovery: "Ongoing" },
  { id: "physio", name: "Physiotherapy", icon: Dumbbell, description: "Structured rehabilitation with manual therapy, exercises and modalities.", duration: "30–60 mins", recovery: "Programme" },
  { id: "rehab", name: "Rehabilitation", icon: HeartPulse, description: "Complete recovery journey from bed to daily life with guided rehabilitation.", duration: "Personalised", recovery: "Milestones" },
  { id: "emergency", name: "24×7 Emergency", icon: Ambulance, description: "Round-the-clock trauma, accident and fracture emergencies with instant response.", duration: "Always open", recovery: "Golden hour" },
];

export const services = [
  { name: "Orthopaedics", icon: Bone },
  { name: "Joint Replacement", icon: Cross },
  { name: "Hip Replacement", icon: Cross },
  { name: "Knee Replacement", icon: Bone },
  { name: "Shoulder Surgery", icon: Scan },
  { name: "Spine Surgery", icon: Dna },
  { name: "Back Pain Treatment", icon: Activity },
  { name: "Slip Disc", icon: ScanSearch },
  { name: "Arthroscopy", icon: MonitorCheck },
  { name: "Sports Injury", icon: Dumbbell },
  { name: "Fracture Treatment", icon: Bone },
  { name: "Trauma Care", icon: Ambulance },
  { name: "Accident Care", icon: Ambulance },
  { name: "Bone Tumor", icon: Microscope },
  { name: "Paediatric Orthopaedics", icon: Baby },
  { name: "Hand Surgery", icon: Stethoscope },
  { name: "Foot & Ankle Surgery", icon: Activity },
  { name: "Pain Clinic", icon: Thermometer },
  { name: "Physiotherapy", icon: Dumbbell },
  { name: "Rehabilitation", icon: HeartPulse },
  { name: "Emergency", icon: Heart },
  { name: "24×7 Ambulance", icon: Ambulance },
  { name: "ICU", icon: HeartPulse },
  { name: "Operation Theatre", icon: Hospital },
  { name: "MRI", icon: ScanLine },
  { name: "CT Scan", icon: ScanSearch },
  { name: "Digital X-Ray", icon: Scan },
  { name: "Laboratory", icon: FlaskConical },
  { name: "Pharmacy", icon: Pill },
  { name: "Health Checkup", icon: ClipboardCheck },
];

export const facilities = [
  { name: "Modular Operation Theatres", icon: Hospital, desc: "Laminar airflow, OT-ready trauma theatre with advanced anaesthesia.", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" },
  { name: "Level-2 ICU", icon: HeartPulse, desc: "Ventilators, central monitoring and dedicated critical nursing.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" },
  { name: "MRI & CT Scan", icon: ScanLine, desc: "High-field imaging with rapid, radiologist-verified reports.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" },
  { name: "Digital X-Ray", icon: Scan, desc: "Instant digital radiography with minimal radiation dose.", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop" },
  { name: "24×7 Pharmacy", icon: Pill, desc: "In-house pharmacy stocked with post-surgical essentials.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop" },
  { name: "Laboratory", icon: TestTube2, desc: "Full in-house pathology with same-day reporting.", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" },
  { name: "Ambulance Service", icon: Ambulance, desc: "Trained paramedic ambulance across Madhubani region.", image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=800&auto=format&fit=crop" },
  { name: "Rehabilitation Gym", icon: Dumbbell, desc: "Structured physiotherapy gym for complete recovery.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
  { name: "Cashless Insurance", icon: ShieldCheck, desc: "Direct cashless settlement with all major insurers.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
  { name: "Blood Bank Support", icon: Syringe, desc: "Round-the-clock blood bank tie-up for emergencies.", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=800&auto=format&fit=crop" },
  { name: "24×7 Emergency", icon: Activity, desc: "Trauma-ready emergency bay open day and night.", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop" },
  { name: "Modern Comfort", icon: Users, desc: "Well-appointed rooms and attentive nursing support.", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop" },
];

export const testimonials = [
  {
    name: "Ramesh Kumar Jha",
    location: "Rahika, Madhubani",
    treatment: "Total Knee Replacement",
    rating: 5,
    quote:
      "After years of knee pain I could barely walk. Dr. N. K. Yadav performed my knee replacement and I walked the very next day. The care here is world class.",
  },
  {
    name: "Sita Devi",
    location: "Sapta, Madhubani",
    treatment: "Hip Replacement",
    rating: 5,
    quote:
      "I was afraid of surgery but the whole team supported me. Today I can sit, stand and walk without pain. I thank the entire hospital family.",
  },
  {
    name: "Md. Aftab Alam",
    location: "Jhanjharpur",
    treatment: "Slip Disc Surgery",
    rating: 5,
    quote:
      "My back pain vanished after the microdiscectomy. The hospital is clean, modern and the doctors explain everything clearly.",
  },
  {
    name: "Priya Kumari",
    location: "Rahika",
    treatment: "ACL Reconstruction",
    rating: 5,
    quote:
      "I returned to the sports field 7 months after ACL surgery. The physiotherapy team built my strength step by step. Highly recommended.",
  },
  {
    name: "Narayan Yadav",
    location: "Pupri",
    treatment: "Trauma Care",
    rating: 5,
    quote:
      "My son was brought in after a road accident late at night. The emergency team acted instantly. They saved his leg — we are forever grateful.",
  },
  {
    name: "Manju Devi",
    location: "Madhubani",
    treatment: "Arthroscopy",
    rating: 4.5,
    quote:
      "Keyhole surgery meant a tiny scar and quick recovery. The nurses and doctors were kind and always available.",
  },
];

export const successStories = [
  {
    name: "Dharamveer Singh",
    age: 54,
    problem: "Bilateral Knee Arthritis",
    solution: "Same-session bilateral total knee replacement",
    outcome: "Walking 2 km daily within 8 weeks",
  },
  {
    name: "Shailendra Mishra",
    age: 38,
    problem: "L4–L5 Slip Disc",
    solution: "Minimally invasive microdiscectomy",
    outcome: "Back to work in 3 weeks",
  },
  {
    name: "Ram Naresh Sah",
    age: 47,
    problem: "Road accident – open tibia fracture",
    solution: "Emergency nailing + soft-tissue care",
    outcome: "Union achieved, resumed farming in 5 months",
  },
  {
    name: "Kavita Devi",
    age: 62,
    problem: "Osteoporotic hip fracture",
    solution: "Total hip replacement",
    outcome: "Independent daily routine in 4 weeks",
  },
  {
    name: "Rahul Kumar",
    age: 21,
    problem: "ACL tear on the football pitch",
    solution: "Arthroscopic ACL reconstruction",
    outcome: "Returned to competitive football",
  },
  {
    name: "Anita Jha",
    age: 45,
    problem: "Chronic neck pain & radiculopathy",
    solution: "Cervical epidural + rehab programme",
    outcome: "Pain-free by 90 days without surgery",
  },
];



export const insuranceCompanies = [
  "National Insurance",
  "New India Assurance",
  "Oriental Insurance",
  "United India Insurance",
  "Star Health",
  "HDFC ERGO",
  "ICICI Lombard",
  "Bajaj Allianz",
  "Reliance General",
  "Tata AIG",
  "ManipalCigna",
  "Niva Bupa",
  "Aditya Birla Health",
  "Acko General",
];

export const faqs = [
  {
    question: "When should I see an orthopaedic doctor?",
    answer:
      "See a specialist if you have persistent joint pain for more than two weeks, difficulty bearing weight, a suspected fracture, numbness or weakness in limbs, or pain that disturbs sleep and daily routine.",
  },
  {
    question: "How long do I stay in hospital after knee replacement?",
    answer:
      "Most patients are able to stand and take first steps within 24 hours and are discharged in 3 to 4 days. A structured home physiotherapy plan ensures smooth recovery.",
  },
  {
    question: "Does the hospital accept cashless insurance?",
    answer:
      "Yes. We offer direct cashless settlement with all major insurance companies and TPA networks. Our insurance desk assists with pre-approval and documentation.",
  },
  {
    question: "Is emergency and ambulance service available 24×7?",
    answer:
      "Yes. Our emergency department and ambulance service operate 24 hours a day, 365 days a year across Madhubani and surrounding areas.",
  },
  {
    question: "Will I be able to walk the same day after spine surgery?",
    answer:
      "For many minimally invasive spine procedures, patients are encouraged to walk within 6 to 12 hours of surgery under physiotherapy guidance, depending on the procedure.",
  },
  {
    question: "How do I book an appointment with Dr. N. K. Yadav?",
    answer:
      "You can book instantly using the online appointment form, call our appointment desk, or message us on WhatsApp. The doctor's availability calendar is updated daily.",
  },
];

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Orthopaedics" | "Spine" | "Wellness" | "News";
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  image: string;
};

export const blogs: Blog[] = [
  {
    slug: "knee-pain-after-50-when-to-consider-replacement",
    title: "Knee Pain After 50 — When Should You Consider Replacement?",
    excerpt:
      "Wear and tear of the knee is common with age, but persistent pain that limits daily activity may signal the right time for a joint replacement.",
    category: "Orthopaedics",
    date: "2026-06-18",
    readTime: "6 min read",
    author: "Dr. N. K. Yadav",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "slip-disc-vs-spinal-stenosis-difference",
    title: "Slip Disc vs Spinal Stenosis — What's the Difference?",
    excerpt:
      "Both cause back and leg pain but arise from different structures. Understanding the difference helps you choose the right treatment early.",
    category: "Spine",
    date: "2026-06-02",
    readTime: "7 min read",
    author: "Dr. N. K. Yadav",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "recovery-timeline-after-acl-reconstruction",
    title: "The Real Recovery Timeline After ACL Reconstruction",
    excerpt:
      "Returning to sport takes 7 to 9 months. Here is the week-by-week physiotherapy roadmap that gets athletes back safely.",
    category: "Orthopaedics",
    date: "2026-05-20",
    readTime: "8 min read",
    author: "Physiotherapy Team",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "vitamin-d-bone-health-guide",
    title: "Vitamin D & Bone Health — A Complete Guide",
    excerpt:
      "Low vitamin D silently weakens bones. Learn how much you need, the best sources and when testing makes sense.",
    category: "Wellness",
    date: "2026-05-05",
    readTime: "5 min read",
    author: "Dr. N. K. Yadav",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "emergency-first-aid-for-fractures",
    title: "First Aid for Fractures — What to Do Before Reaching Hospital",
    excerpt:
      "The minutes after a fracture matter. Learn simple splinting, immobilisation and when to call an ambulance.",
    category: "Wellness",
    date: "2026-04-22",
    readTime: "4 min read",
    author: "Trauma Team",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "arthroscopy-benefits-over-open-surgery",
    title: "Why Arthroscopy is Beating Open Surgery for Joint Injuries",
    excerpt:
      "Small incisions, less pain and faster return to sport — keyhole surgery is transforming orthopaedic care in Bihar.",
    category: "Orthopaedics",
    date: "2026-04-10",
    readTime: "6 min read",
    author: "Dr. N. K. Yadav",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
  },
];

export const news = [
  {
    title: "Shree Keshav Heritage Hospital opens new Modular Orthopaedic OT",
    excerpt: "State-of-the-art laminar airflow operation theatre inaugurated to serve North Bihar.",
    date: "2026-07-12",
  },
  {
    title: "Dr. N. K. Yadav performs 15,000th joint replacement surgery",
    excerpt: "A milestone in orthopaedic excellence for the Madhubani region.",
    date: "2026-06-28",
  },
  {
    title: "Free bone health camp conducted at Rahika",
    excerpt: "Over 700 people screened for osteoporosis and joint disorders.",
    date: "2026-06-05",
  },
];

export type GalleryItem = {
  title: string;
  tag: string;
  image: string;
};

export const galleryImages: GalleryItem[] = [
  { title: "Hospital Front View", tag: "Campus", image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop" },
  { title: "Modern Reception", tag: "Facilities", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Modular Operation Theatre", tag: "OT", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" },
  { title: "Level-2 ICU", tag: "ICU", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop" },
  { title: "MRI Suite", tag: "Diagnostics", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" },
  { title: "Digital X-Ray Room", tag: "Diagnostics", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop" },
  { title: "Physiotherapy Gym", tag: "Rehab", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Private Patient Rooms", tag: "Comfort", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" },
  { title: "Emergency Bay", tag: "Emergency", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop" },
  { title: "Ambulance Fleet", tag: "Emergency", image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1200&auto=format&fit=crop" },
  { title: "Dr. N. K. Yadav in Surgery", tag: "Doctor", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Pharmacy & Lab", tag: "Services", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop" },
];

export const healthCheckups = [
  { name: "Bone Density Screening", icon: Bone },
  { name: "Joint Pain Evaluation", icon: Activity },
  { name: "Spine Screening", icon: ScanLine },
  { name: "Diabetes & Bone Panel", icon: FlaskConical },
  { name: "Fitness & Rehab Plan", icon: Dumbbell },
  { name: "Senior Citizen Health Check", icon: HeartPulse },
];

export const quickLinks = [
  { name: "About Hospital", href: "/about" },
  
  { name: "Departments", href: "/departments" },
  { name: "Treatments", href: "/treatments" },
  { name: "Services", href: "/services" },
  { name: "Emergency", href: "/emergency" },
  { name: "Facilities", href: "/facilities" },
  { name: "Appointment", href: "/appointment" },
  { name: "Patient Stories", href: "/patient-stories" },
  { name: "Blogs", href: "/blogs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const icons = {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  Clapperboard,
  ClipboardCheck,
  Cross,
  Dna,
  Dumbbell,
  FlaskConical,
  Heart,
  HeartPulse,
  Hospital,
  ImageIcon,
  Microscope,
  MonitorCheck,
  Pill,
  Scan,
  Radiation,
  ScanLine,
  ScanSearch,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTube2,
  Thermometer,
  Users,
};
