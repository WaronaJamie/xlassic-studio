import Link from "next/link";
import { categoryMeta, getProductsByCategory } from "@/lib/store";
import { ProductCard } from "./product-card";

export function StoreCategory({
  category,
}: {
  category: keyof typeof categoryMeta;
}) {
  const meta = categoryMeta[category];
  const items = getProductsByCategory(category);
  const isEmpty = items.length === 0;

  return (
    <section className="px-6 md:px-10 py-14 md:py-20 border-t border-white/[0.06]">
      {/* CATEGORY HEADER — centered */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
          {meta.label}
        </h2>
        <p className="font-sans text-sm text-white/50 mt-4 max-w-md mx-auto">
          {meta.tagline}
        </p>
      </div>

      {/* GRID OR COMING SOON */}
      {isEmpty ? (
        <ComingSoon />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          {/* VIEW ALL — centered below */}
          <div className="mt-10 md:mt-14 text-center">
            <Link
              href={`/store/category/${meta.id}`}
              className="inline-block font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------
   Coming soon placeholder — shown when a category has no products
   ------------------------------------------------------------------ */
function ComingSoon() {
  return (
    <div className="border border-dashed border-white/15 py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
        In development
      </span>

      <p className="font-display text-4xl md:text-6xl uppercase leading-none tracking-tight text-white/70">
        Coming soon
      </p>

      <p className="font-sans text-sm text-white/40 mt-5 max-w-xs mx-auto leading-relaxed">
        New products drop regularly. Check back soon — or start a custom
        project and skip the wait.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/70 hover:bg-white hover:text-black transition-colors duration-300"
      >
        Start a project →
      </Link>
    </div>
  );
}