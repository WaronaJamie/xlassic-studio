import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { StoreCategory } from "@/components/store/store-category";
import { CTACustom } from "@/components/sections/cta-custom";

export const metadata: Metadata = {
  title: "Store — XlassicStudio",
  description:
    "HTML email templates and premade websites. Production-ready, built to ship.",
};

export default function StorePage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />

      {/* ---------- HERO ---------- */}
      <section className="bg-black text-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.85] uppercase tracking-tight text-white mx-auto">
          Xlassic
          <br />
          <span className="text-white/40">Store</span>
        </h1>

        <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed max-w-md mx-auto mt-8 md:mt-10">
          Digital products designed to save you weeks. Buy, download, ship.
          Everything is built with the same care as custom work — just at a
          fraction of the price.
        </p>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <StoreCategory category="email-templates" />
      <StoreCategory category="premade-websites" />

      {/* ---------- CTA ---------- */}
      <CTACustom />
    </>
  );
}