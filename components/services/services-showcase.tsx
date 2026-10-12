"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { services } from "@/lib/services";
import { ServiceSlide } from "./service-slide";

export function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(v * services.length))
    );
    setActiveIndex(idx);
  });

  return (
    <section
      ref={containerRef}
      style={{ height: `${services.length * 100}vh` }}
      className="relative bg-black text-white"
    >
      <div className="sticky top-0 md:top-20 h-screen md:h-[calc(100vh-5rem)] overflow-hidden flex flex-col">
        {/* ---------- TOP BAR ---------- */}
        <div className="shrink-0 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 pb-4 md:pb-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 md:w-14 bg-white/30" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">
              What I do
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-white/40">
            <span className="tabular-nums text-white">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(services.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* ---------- SLIDES ---------- */}
        <div className="relative flex-1 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[activeIndex].id}
              className="absolute inset-0"
            >
              <ServiceSlide service={services[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- BOTTOM PROGRESS BAR ---------- */}
        <div className="shrink-0 px-6 md:px-10 py-4 border-t border-white/[0.06] flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 shrink-0 hidden md:block">
            Scroll to explore
          </span>

          <div className="flex-1 h-px bg-white/[0.08] relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white/60"
              style={{
                width: `${((activeIndex + 1) / services.length) * 100}%`,
                transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {services.map((s, i) => (
              <span
                key={s.id}
                className={`block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? "bg-white" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}