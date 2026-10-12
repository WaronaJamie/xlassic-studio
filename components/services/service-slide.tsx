"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Service } from "@/lib/services";

export function ServiceSlide({ service }: { service: Service }) {
  return (
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 px-6 md:px-10 py-4 md:py-10">
      {/* =====================================================
          LEFT COLUMN — desktop only (number + CTA)
          ===================================================== */}
      <div className="hidden lg:flex lg:col-span-2 flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="font-display text-[8vw] xl:text-[7vw] leading-none text-white tracking-tight block">
            {service.index}
          </span>
          <span className="mt-2 block w-3 h-3 rounded-full bg-white/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <Link
            href={service.cta.href}
            className="inline-flex items-center gap-2 border border-white/25 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            {service.cta.label}
          </Link>
        </motion.div>
      </div>

      {/* =====================================================
          MOBILE TITLE — mobile only
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="lg:hidden flex items-baseline justify-between gap-4"
      >
        <div className="min-w-0">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40 truncate">
            {service.subtitle}
          </p>
          <h2 className="font-display text-3xl uppercase leading-[0.9] tracking-tight text-white mt-1">
            {service.title}
          </h2>
        </div>
        <span className="font-display text-2xl leading-none text-white/30 shrink-0">
          {service.index}
        </span>
      </motion.div>

      {/* =====================================================
          IMAGE — short on mobile, fills column on desktop
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
        className="relative lg:col-span-6 border border-white/10 bg-white/[0.02] overflow-hidden h-[28vh] lg:h-full lg:aspect-auto"
      >
        <span className="absolute top-3 left-3 text-white/20 font-mono text-sm pointer-events-none z-10">
          +
        </span>
        <span className="absolute bottom-3 right-3 text-white/20 font-mono text-sm pointer-events-none z-10">
          +
        </span>

        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
      </motion.div>

      {/* =====================================================
          RIGHT COLUMN — desktop title + body content (both)
          ===================================================== */}
      <div className="lg:col-span-4 flex flex-col justify-between py-1 lg:py-2 gap-3 lg:gap-0 min-h-0">
        {/* Desktop-only title block */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:block"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
            {service.subtitle}
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[3.6vw] xl:text-[3vw] uppercase leading-[0.92] tracking-tight text-white">
            {service.title}
          </h2>
        </motion.div>

        {/* Body — description + sub-items */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-3 lg:gap-6 min-h-0"
        >
          <p className="font-sans text-xs md:text-base text-white/65 leading-relaxed max-w-prose">
            {service.description}
          </p>

          <ul className="flex flex-col border-t border-white/[0.08]">
            {service.items.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 md:gap-4 py-1.5 md:py-3 border-b border-white/[0.08] last:border-b-0"
              >
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-white/40 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-xs md:text-sm text-white/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* =====================================================
          MOBILE CTA — mobile only
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="lg:hidden"
      >
        <Link
          href={service.cta.href}
          className="inline-flex items-center gap-2 border border-white/25 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          {service.cta.label}
        </Link>
      </motion.div>
    </div>
  );
}