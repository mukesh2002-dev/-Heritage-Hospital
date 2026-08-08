export const site = {
  name: "Shree Keshav Heritage Hospital",
  shortName: "SKH Hospital",
  doctor: "Dr. N. K. Yadav",
  tagline: "Advanced Bone • Joint • Spine Care",
  type: "Bone | Joint | Spine | Trauma | Orthopaedic Super Specialty Hospital",
  description:
    "Shree Keshav Heritage Hospital is a trusted orthopaedic and trauma care hospital located in Madhubani, Bihar. Led by Dr. N. K. Yadav, the hospital provides advanced treatment for bone, joint, spine, fracture, trauma and rehabilitation with patient-centered care, modern operation theatres, advanced diagnostics, 24×7 emergency services and experienced medical professionals.",
  address: {
    line1: "Shree Keshav Nagar, Sapta, Pupri-Madhubani Road",
    line2: "Rahika, Madhubani, Bihar, India",
    city: "Rahika",
    district: "Madhubani",
    state: "Bihar",
    pin: "847238",
    country: "IN",
  },
  phone: {
    emergency: "+91 90000 00000",
    appointments: "+91 90000 11111",
    reception: "+91 90000 22222",
    ambulance: "+91 90000 33333",
    emergencyHref: "tel:+919000000000",
    appointmentsHref: "tel:+919000011111",
  },
  whatsapp: "919000000000",
  email: "care@skhheritagehospital.com",
  googleRating: "4.9",
  googleReviews: 1240,
  founded: 2015,
  website: "https://shreekeshavheritagehospital.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shree+Keshav+Heritage+Hospital+Rahika+Madhubani+Bihar",
  hours: "Open 24 × 7",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
  },
  stats: [
    { label: "Surgeries Performed", value: 15000 },
    { label: "Happy Patients", value: 85000 },
    { label: "Years of Experience", value: 18 },
    { label: "Bed Capacity", value: 120 },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Hospital", href: "/about" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Orthopaedics", href: "/departments#orthopaedics" },
      { label: "Spine Center", href: "/departments#spine" },
      { label: "Trauma & Emergency", href: "/departments#trauma" },
      { label: "Physiotherapy", href: "/departments#physiotherapy" },
      { label: "ICU", href: "/departments#icu" },
      { label: "Diagnostics & Imaging", href: "/departments#diagnostics" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Joint Replacement", href: "/treatments#joint-replacement" },
      { label: "Spine Surgery", href: "/treatments#spine" },
      { label: "Arthroscopy", href: "/treatments#arthroscopy" },
      { label: "Fracture Care", href: "/treatments#fracture" },
      { label: "Trauma & Accident Care", href: "/treatments#trauma" },
      { label: "Sports Injury", href: "/treatments#sports" },
    ],
  },
  { label: "Services", href: "/services" },
 
  { label: "Gallery", href: "/gallery" },
  {
    label: "Blogs",
    href: "/blogs",
    
  },
  { label: "Contact", href: "/contact" },
];
