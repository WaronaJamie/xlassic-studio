"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Every successful website starts with a clear plan. Guided by that plan, I design sites that evoke emotion, load fast, and turn visitors into customers.",
    items: [
      "Discovery & Strategy",
      "Wireframes & Prototypes",
      "Responsive Development",
    ],
  },
  {
    id: "02",
    title: "Branding + Strategy",
    description:
      "A brand is more than a logo. It's every touchpoint — typography, tone, color, motion. I build identity systems that hold together across screens, print, and pitches.",
    items: [
      "Identity Systems",
      "Voice & Tone",
      "Design Tokens & Guidelines",
    ],
  },
  {
    id: "03",
    title: "SEO",
    description:
      "Ranking is engineering. I audit, optimize, and structure sites so search engines understand them — and so people actually find you.",
    items: [
      "Technical Audits",
      "On-Page Optimization",
      "Content & Keyword Strategy",
    ],
  },
];

export function ServicesSection() {
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
      className="relative bg-white text-black"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 md:top-20 h-screen md:h-[calc(100vh-5rem)] overflow-hidden flex flex-col">
        {/* ---------- HEADER (single line) ---------- */}
        <div className="shrink-0 px-6 md:px-10 pt-5 md:pt-8 pb-3 md:pb-5">
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <span className="h-px w-8 md:w-12 bg-black/30" />
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-black/50">
              Services
            </span>
          </div>

          <h2 className="font-display text-[9vw] md:text-[4vw] leading-[0.95] uppercase tracking-tight text-black">
            How can I help you?
          </h2>
        </div>

        {/* ---------- ACCORDION ---------- */}
        <div className="flex-1 min-h-0 overflow-hidden border-t border-black/10 flex flex-col">
          {services.map((s, i) => {
            const open = activeIndex === i;

            return (
              <div
                key={s.id}
                className={`border-b border-black/10 last:border-b-0 transition-all duration-500 ${
                  open ? "flex-1" : ""
                }`}
              >
                {/* ROW HEADER */}
                <div className="flex items-center gap-3 md:gap-5 px-6 md:px-10 py-3 md:py-3.5">
                  <span
                    className={`shrink-0 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full border font-mono text-[9px] md:text-[10px] transition-all duration-500 ${
                      open
                        ? "border-black bg-black text-white"
                        : "border-black/20 text-black/50"
                    }`}
                  >
                    {i + 1}
                  </span>

                  <h3
                    className={`flex-1 font-display text-xl md:text-3xl lg:text-4xl tracking-tight uppercase leading-none transition-colors duration-500 ${
                      open ? "text-black" : "text-black/30"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <span
                    className={`shrink-0 relative w-4 h-4 md:w-5 md:h-5 transition-all duration-500 ${
                      open ? "rotate-45 opacity-100" : "rotate-0 opacity-40"
                    }`}
                  >
                    <span className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-black" />
                    <span className="absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-black" />
                  </span>
                </div>

                {/* EXPANDING BODY */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, ease: "easeOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-12 gap-3 md:gap-6 px-6 md:px-10 pb-4 md:pb-6">
                        <div className="hidden md:block md:col-span-3" />

                        <p className="md:col-span-5 font-sans text-[11px] md:text-sm text-black/70 leading-relaxed max-w-prose">
                          {s.description}
                        </p>

                        <ul className="md:col-span-4 border-t border-black/10">
                          {s.items.map((item, idx) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.12 + idx * 0.05,
                                duration: 0.35,
                                ease: "easeOut",
                              }}
                              className="flex items-baseline gap-3 py-1.5 border-b border-black/10 last:border-b-0"
                            >
                              <span className="font-mono text-[9px] text-black/40 shrink-0">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span className="font-sans text-[11px] md:text-sm font-medium text-black">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ---------- PROGRESS BAR ---------- */}
        <div className="shrink-0 flex items-center justify-between px-6 md:px-10 py-2.5 border-t border-black/10">
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-black/40">
            Scroll to explore
          </span>
          <span className="font-mono text-[10px] md:text-xs text-black/60">
            <span className="text-black tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-black/30"> / </span>
            {String(services.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}