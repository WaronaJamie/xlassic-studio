"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section className="relative bg-black text-white border-t border-white/[0.06] overflow-hidden">
      {/* subtle radial glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 45%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />

      <div className="relative px-6 md:px-10 py-28 md:py-40 flex flex-col items-center text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/50 mb-6 md:mb-10"
        >
          Let&apos;s talk
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[16vw] md:text-[10vw] leading-[0.85] uppercase tracking-tight text-white max-w-[16ch]"
        >
          Ready for your
          <br />
          new website?
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-10 md:mt-14"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-black px-6 py-4 font-mono text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-white/90 transition-colors"
          >
            <span
              aria-hidden
              className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-sans"
            >
              ✦
            </span>
            Book a call
          </Link>
        </motion.div>

        {/* Small caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-white/30"
        >
          Free 20-min intro · No commitment
        </motion.p>
      </div>
    </section>
  );
}