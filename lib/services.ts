export type Service = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    id: "web-design",
    index: "01",
    title: "Web Design",
    subtitle: "Design that earns trust",
    description:
      "Every successful website starts with a clear plan. Guided by that plan, I design sites that evoke emotion, load fast, and turn visitors into customers — not just pretty pages that sit there.",
    items: [
      "Discovery & Strategy",
      "Wireframes & Prototypes",
      "Responsive Development",
      "Motion & Interaction",
    ],
    image: "/images/service-webdesign.webp",
    cta: { label: "Start a project", href: "/contact" },
  },
  {
    id: "branding",
    index: "02",
    title: "Branding + Strategy",
    subtitle: "Identity that holds together",
    description:
      "A brand is more than a logo. It's every touchpoint — typography, tone, color, motion. I build identity systems that stay coherent across screens, print, and pitches, and that your team can actually use.",
    items: [
      "Identity Systems",
      "Voice & Tone",
      "Design Tokens & Guidelines",
      "Rollout Strategy",
    ],
    image: "/images/service-branding.webp",
    cta: { label: "Start a project", href: "/contact" },
  },
  {
    id: "seo",
    index: "03",
    title: "SEO",
    subtitle: "Ranking is engineering",
    description:
      "I audit, optimize, and structure sites so search engines understand them — and so people actually find you. No snake oil, no shortcuts. Just the fundamentals done thoroughly and consistently.",
    items: [
      "Technical Audits",
      "On-Page Optimization",
      "Content & Keyword Strategy",
      "Performance Tuning",
    ],
    image: "/images/service-seo.webp",
    cta: { label: "Start a project", href: "/contact" },
  },
];