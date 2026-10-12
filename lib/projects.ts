export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  short: string;
  description: string;
  image: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "bewell",
    index: "01",
    title: "BeWell",
    category: "Social + Freelance App",
    year: "2025",
    short:
      "A mental-health community paired with a freelance marketplace.",
    description:
      "A dual-sided platform built around mental wellness. On the social side, people share their stories and support each other in a moderated, judgement-free space. On the freelance side, they can book time with vetted professionals — therapists, coaches, and counselors — through a secure onboarding and messaging flow. Built mobile-first with a calm, unhurried visual language. COMING SOON",
    image: "/images/bewellwebsite.webp",
    tags: ["App", "Social", "Marketplace", "Mental Health"],
    links: [
      { label: "Visit site", href: "#" },
    ],
  },
  {
    id: "freelance-app",
    index: "02",
    title: "FreelanceApp",
    category: "Freelance Platform",
    year: "2025",
    short:
      "A professional workspace for freelancers to onboard and manage clients.",
    description:
      "An all-in-one workspace for solo professionals. Freelancers build and share their portfolio, professionally onboard new clients, and manage projects end-to-end from a single secure dashboard. The whole experience replaces the spreadsheet-and-email chaos with one clean workflow — proposals, contracts, milestones, and payments. COMING SOON",
    image: "/images/freelancewebsite.webp",
    tags: ["App", "Freelance", "Dashboard", "Onboarding"],
    links: [
      { label: "Visit site", href: "www.freelanceportal.vercel.app" },
    ],
  },
  {
    id: "tjao-associates",
    index: "03",
    title: "Tjao & Associates",
    category: "Architecture",
    year: "2024",
    short:
      "A quiet, considered website for an architecture firm in Botswana.",
    description:
      "A full website for an architecture practice based in Botswana. Project archive, services overview, and an editorial layout that lets the work breathe. Restrained typography, generous whitespace, and a gallery system built to showcase buildings rather than distract from them.",
    image: "/images/tjaoandassociatesarchitechts.webp",
    tags: ["Architecture", "Portfolio", "Editorial"],
    links: [
      { label: "Visit site", href: "https://tjaoswebsite.vercel.app/" },
    ],
  },
  {
    id: "medismart-pharmacy",
    index: "04",
    title: "MediSmart Pharmacy",
    category: "Pharmacy",
    year: "2024",
    short:
      "A modern web presence for a Botswana-based pharmacy.",
    description:
      "Services, product categories, and a warm, trust-forward identity for a local pharmacy. The site puts essential information — opening hours, location, contact, prescription guidance — front and center, with a clean layout that works just as well on a phone as it does on a desktop.",
    image: "/images/medismartpharmacy.webp",
    tags: ["Pharmacy", "Healthcare", "Local Business"],
    links: [
      { label: "Visit site", href: "https://medismartpharmacy-4.vercel.app/" },
    ],
  },
];