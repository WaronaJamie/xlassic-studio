export type Product = {
  slug: string;
  name: string;
  price: number;
  category: "email-templates" | "premade-websites";
  image: string;
  short: string;
  description: string;
  features: string[];
  includes: string[];
  format: string;
  tags: string[];
  /** Paid products: Lemon Squeezy checkout URL */
  checkoutUrl?: string;
  /** Free products: direct download link (usually a file in /public) */
  downloadUrl?: string;
};

export const categoryMeta = {
  "email-templates": {
    id: "email-templates" as const,
    label: "Email Templates",
    tagline: "HTML emails that land in the inbox and get opened.",
  },
  "premade-websites": {
    id: "premade-websites" as const,
    label: "Premade Websites",
    tagline: "Production-ready sites. Ship in a weekend.",
  },
};

export const products: Product[] = [
  {
    slug: "welcome-flow",
    name: "Welcome Flow",
    price: 0,
    category: "email-templates",
    image: "/images/products/welcome-flow.webp",
    short: "A 5-email onboarding sequence — free download.",
    description:
      "The exact sequence that turns new signups into active users. Five hand-coded emails designed to introduce your product, build trust, and move people toward their first real win. Every email is tested across Gmail, Outlook, and Apple Mail — so it looks right where it matters.",
    features: [
      "5 hand-coded HTML emails",
      "Welcome, feature intro, social proof, Q&A, re-engage",
      "Mobile-first, tested in Gmail / Outlook / Apple Mail",
      "Merge-tag ready for Mailchimp, Klaviyo, Resend, Loops",
      "Dark mode compatible",
    ],
    includes: [
      "5 HTML files (production-ready)",
      "MJML source files for easy editing",
      "README with setup + merge-tag guide",
      "Figma design file",
    ],
    format: "HTML + MJML",
    tags: ["SaaS", "Onboarding", "5 emails", "Free"],
    downloadUrl: "/downloads/welcome-flow-v1.0.0.zip",
  },
];

export function getProductsByCategory(category: Product["category"]) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function isFreeProduct(product: Product) {
  return product.price === 0 && !!product.downloadUrl;
}