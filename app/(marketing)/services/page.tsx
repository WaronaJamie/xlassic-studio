import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { ServicesShowcase } from "@/components/services/services-showcase";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services — XlassicStudio",
  description:
    "Web design, branding, and SEO. A small studio building brandworlds for the web.",
};

export default function ServicesPage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />
      <ServicesShowcase />
      <CTASection />
    </>
  );
}