"use client";

import { motion } from "motion/react";

export function AvailabilityStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="bg-black border-y border-white/[0.06]"
    >
      <div className="px-6 md:px-10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {/* Status */}
        <div className="flex items-center gap-3 md:pr-6 pb-6 md:pb-0">
          <span className="relative flex w-2 h-2 shrink-0">
            <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-70 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Status
            </span>
            <span className="font-sans text-sm text-white/90 mt-0.5">
              Booking new projects — Q3 2026
            </span>
          </div>
        </div>

        {/* Timezone */}
        <div className="flex items-center gap-3 md:px-6 py-6 md:py-0">
          <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-white/15 font-mono text-[10px] text-white/60">
            TZ
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Timezone
            </span>
            <span className="font-sans text-sm text-white/90 mt-0.5">
              CAT (GMT+2) — flexible with yours
            </span>
          </div>
        </div>

        {/* Response time */}
        <div className="flex items-center gap-3 md:pl-6 pt-6 md:pt-0">
          <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-white/15 font-mono text-[10px] text-white/60">
            24h
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Response
            </span>
            <span className="font-sans text-sm text-white/90 mt-0.5">
              Within one business day
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}