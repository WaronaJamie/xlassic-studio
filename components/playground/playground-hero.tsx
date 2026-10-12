"use client";

import { motion } from "motion/react";

export function PlaygroundHero() {
  return (
    <section className="relative bg-black text-white px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Line 1 — MY */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[28vw] md:text-[16vw] leading-[0.82] tracking-tight text-white uppercase"
        >
          My
        </motion.h1>

        {/* Line 2 — PLAYGROUND */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[13vw] md:text-[8.5vw] leading-[0.9] tracking-tight text-white/30 uppercase -mt-2 md:-mt-4"
        >
          Playground
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="font-sans text-sm md:text-base text-white/60 leading-relaxed max-w-md md:max-w-lg mt-10 md:mt-14"
        >
          A live archive of things I&apos;ve shipped, scrapped, and shipped
          again. Click any project below to take a closer look.
        </motion.p>
      </div>
    </section>
  );
}