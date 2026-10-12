import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import {
  categoryMeta,
  getProductBySlug,
  products,
  isFreeProduct,
} from "@/lib/store";
import { ProductCard } from "@/components/store/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: `${product.name} — XlassicStore`,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const category = categoryMeta[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const free = isFreeProduct(product);

  return (
    <>
      <MobileMenu />
      <DesktopNav />

      {/* ---------- BREADCRUMB ---------- */}
      <div className="bg-black text-white px-6 md:px-10 pt-8 md:pt-10">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
          <Link href="/store" className="hover:text-white transition-colors">
            Store
          </Link>
          <span>/</span>
          <Link
            href={`/store/category/${category.id}`}
            className="hover:text-white transition-colors"
          >
            {category.label}
          </Link>
          <span>/</span>
          <span className="text-white/80">{product.name}</span>
        </div>
      </div>

      {/* ---------- PRODUCT ---------- */}
      <section className="bg-black text-white px-6 md:px-10 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          {/* IMAGE */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square bg-white overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-4 border border-black/[0.06] pointer-events-none" />

              {/* FREE badge */}
              {free && (
                <span className="absolute top-4 left-4 bg-black text-white font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
                  Free
                </span>
              )}
            </div>
          </div>

          {/* DETAILS */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Category tag */}
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {category.label} · {product.format}
            </span>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tight text-white mt-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              {free ? (
                <>
                  <span className="font-display text-4xl md:text-5xl text-white tabular-nums">
                    Free
                  </span>
                  <span className="font-mono text-xs text-white/40">
                    · No signup required
                  </span>
                </>
              ) : (
                <>
                  <span className="font-display text-4xl md:text-5xl text-white tabular-nums">
                    ${product.price}
                  </span>
                  <span className="font-mono text-xs text-white/40">
                    USD · instant download
                  </span>
                </>
              )}
            </div>

            {/* Short description */}
            <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed mt-6">
              {product.description}
            </p>

            {/* CTA — Download (free) or Buy (paid) */}
            <div className="mt-8">
              {free && product.downloadUrl ? (
                <>
                  <a
                    href={product.downloadUrl}
                    download
                    className="group inline-flex items-center justify-between gap-4 w-full bg-white text-black px-6 py-4 font-mono text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-white/90 transition-colors"
                  >
                    <span>Download free</span>
                    <span className="text-lg leading-none">↓</span>
                  </a>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mt-3 text-center">
                    Instant download · No email required
                  </p>
                </>
              ) : product.checkoutUrl ? (
                <>
                  <a
                    href={product.checkoutUrl}
                    className="group inline-flex items-center justify-between gap-4 w-full bg-white text-black px-6 py-4 font-mono text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-white/90 transition-colors"
                  >
                    <span>Buy now</span>
                    <span className="text-lg leading-none">→</span>
                  </a>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mt-3 text-center">
                    Secure checkout · Instant delivery
                  </p>
                </>
              ) : null}
            </div>

            {/* Features */}
            <div className="mt-10 border-t border-white/[0.08]">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 pt-5 pb-3">
                What you get
              </p>
              <ul className="flex flex-col">
                {product.features.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3 border-b border-white/[0.08] last:border-b-0"
                  >
                    <span className="font-mono text-[10px] text-white/40 shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-sm text-white/85 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="mt-8 border-t border-white/[0.08]">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 pt-5 pb-3">
                In the download
              </p>
              <ul className="flex flex-col gap-2">
                {product.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-center gap-3 font-sans text-sm text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border border-white/15 text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- RELATED ---------- */}
      {related.length > 0 && (
        <section className="bg-black text-white px-6 md:px-10 py-16 md:py-24 border-t border-white/[0.06]">
          <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-none tracking-tight">
              More from {category.label}
            </h2>
            <Link
              href={`/store/category/${category.id}`}
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors shrink-0 pb-1"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}