"use client";

import { motion } from "motion/react";

export function ContactHero() {
  return (
    <section className="relative bg-black text-white px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <span className="h-px w-10 md:w-16 bg-white/30" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">
            Get in touch
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[16vw] md:text-[11vw] leading-[0.85] uppercase tracking-tight text-white"
        >
          Say hello.
        </motion.h1>

        {/* Subtext — two columns on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 md:gap-12 max-w-4xl"
        >
          <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
            Whether you have a fully-formed brief or a half-formed idea —
            we&apos;re listening. No sales scripts, no pressure. Just a real
            conversation about what you&apos;re trying to build.
          </p>
          <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed">
            Most projects start with a short email, then a 20-minute call to
            understand scope, timeline, and budget. From there, we send a
            written proposal within a couple of days.
          </p>
        </motion.div>

        {/* Tiny meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40"
        >
          <span>◆ Based in Botswana</span>
          <span>◆ Working worldwide</span>
          <span>◆ Respond within 24 hours</span>
        </motion.div>
      </div>
    </section>
  );
}