import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { categoryMeta, getProductsByCategory } from "@/lib/store";
import { ProductCard } from "@/components/store/product-card";
import { CTACustom } from "@/components/sections/cta-custom";

type CategoryKey = keyof typeof categoryMeta;

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category as CategoryKey];
  if (!meta) return {};

  return {
    title: `${meta.label} — XlassicStore`,
    description: meta.tagline,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoryMeta[category as CategoryKey];
  if (!meta) notFound();

  const items = getProductsByCategory(meta.id);
  const isEmpty = items.length === 0;

  return (
    <>
      <MobileMenu />
      <DesktopNav />

      {/* HERO — centered */}
      <section className="bg-black text-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <h1 className="font-display text-[14vw] md:text-[8vw] leading-[0.85] uppercase tracking-tight text-white mx-auto">
          {meta.label}
        </h1>
        <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed max-w-md mx-auto mt-8 md:mt-10">
          {meta.tagline}
        </p>
      </section>

      {/* GRID OR COMING SOON */}
      <section className="bg-black px-6 md:px-10 pb-20 md:pb-28">
        {isEmpty ? (
          <div className="border border-dashed border-white/15 py-16 md:py-24 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
              In development
            </span>
            <p className="font-display text-4xl md:text-6xl uppercase leading-none tracking-tight text-white/70">
              Coming soon
            </p>
            <p className="font-sans text-sm text-white/40 mt-5 max-w-xs mx-auto leading-relaxed">
              New products in this category are on the way.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>

      <CTACustom />
    </>
  );
}