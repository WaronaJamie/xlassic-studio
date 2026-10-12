"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---------- PHASE 1: black box growth (progress 0 → 0.65) ---------- */
  const width = useTransform(scrollYProgress, [0, 0.65], ["34%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 0.65], ["26%", "100%"]);
  const radius = useTransform(scrollYProgress, [0, 0.65], ["28px", "0px"]);

  /* ---------- PHASE 2: content reveal (progress 0.6 → 0.9) ---------- */
  const contentOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.6, 0.9], [28, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-white"
    >
      <div className="sticky top-0 md:top-20 h-screen md:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-white">
        {/* ---------- BLACK BOX ---------- */}
        <motion.div
          style={{ width, height, borderRadius: radius }}
          className="bg-black absolute"
        />

        {/* ---------- CONTENT (sits above the box, fades in) ---------- */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-10"
        >
          <div className="w-full max-w-5xl flex flex-col gap-10 md:gap-14">
            {/* TOP: image + headline */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Image */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
  <Image
    src="/images/logoandname.webp"
    alt="XlassicStudio"
    fill
    sizes="(max-width: 768px) 160px, 256px"
    className="object-contain"
  />
</div>
              </div>

              {/* Headline */}
              <div className="md:col-span-7 text-center md:text-left">
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-white">
                  Hey — we&apos;re
                  <br />
                  EXCITED TO MEET YOU
                </h2>
              </div>
            </div>

            {/* BOTTOM: tag + paragraph */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 bg-white/[0.08] border border-white/10 px-3 py-1.5 shrink-0">
                About us
              </span>

              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-2xl text-center md:text-left">
                A good website is more than a pretty appearance. It creates
                clarity, builds trust, and turns visitors into customers.
                We&apos;re a small studio based in Botswana, building websites
                and digital products for people all over the world — with the
                kind of care you&apos;d expect from a friend who happens to be
                very, very good at code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}