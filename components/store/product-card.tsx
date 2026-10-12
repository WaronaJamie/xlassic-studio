import Link from "next/link";
import Image from "next/image";
import { isFreeProduct, type Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const free = isFreeProduct(product);

  return (
    <Link
      href={`/store/${product.slug}`}
      className="group block border border-white/[0.06] hover:border-white/20 transition-colors duration-300"
    >
      {/* IMAGE PANEL */}
      <div className="relative aspect-square bg-white overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-3 border border-black/[0.06] pointer-events-none" />

        {/* FREE badge */}
        {free && (
          <span className="absolute top-4 left-4 bg-black text-white font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
            Free
          </span>
        )}
      </div>

      {/* META BAR */}
      <div className="flex items-center justify-between gap-4 px-4 md:px-5 py-4 border-t border-white/[0.06]">
        <span className="font-sans text-sm md:text-base text-white/90 group-hover:text-white transition-colors truncate">
          {product.name}
        </span>
        <span className="font-mono text-xs md:text-sm text-white/60 group-hover:text-white tabular-nums shrink-0">
          {free ? "Free" : `$${product.price}`}
        </span>
      </div>
    </Link>
  );
}