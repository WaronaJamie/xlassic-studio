"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { projects } from "@/lib/projects";

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      projects.length,
      Math.max(1, Math.round(v * (projects.length - 1)) + 1)
    );
    setCurrentIndex(idx);
  });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      setScrollDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 md:top-20 h-screen md:h-[calc(100vh-5rem)] overflow-hidden flex flex-col">
        {/* HEADER */}
        <div className="flex items-end justify-between px-6 md:px-10 pt-8 md:pt-12 pb-5 md:pb-7 shrink-0">
          <div className="leading-none">
            <h2 className="font-display text-[14vw] md:text-[7.5vw] tracking-tight text-white uppercase leading-[0.85]">
              Work that
            </h2>
            <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 mt-3 md:mt-4 ml-1">
              Speaks for itself
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 pb-2 shrink-0">
            <span className="font-mono text-xs md:text-sm text-white/60">
              <span className="text-white tabular-nums">
                {String(currentIndex).padStart(2, "0")}
              </span>
              <span className="text-white/30"> / </span>
              {String(projects.length).padStart(2, "0")}
            </span>

            <Link
              href="/playground"
              className="hidden md:inline-block font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </div>

        {/* HORIZONTAL TRACK */}
        <div className="flex-1 min-h-0 relative">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="absolute inset-0 flex gap-4 md:gap-6 px-6 md:px-10 pb-6 md:pb-8 will-change-transform"
          >
            {projects.map((p, i) => (
              <Link
                key={p.id}
                href="/playground"
                aria-label={`View ${p.title} in the playground`}
                className="shrink-0 h-full w-[78vw] md:w-[42vw] relative overflow-hidden bg-white group block"
              >
                {/* ---------- IMAGE — fades in on hover ---------- */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 78vw, 42vw"
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[1400ms] ease-out"
                    priority={i === 0}
                  />
                  {/* dark overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
                </div>

                {/* ---------- BIG GHOST NUMBER (background) ---------- */}
                <span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[26vw] md:text-[15vw] leading-none text-black/[0.05] group-hover:text-white/[0.06] transition-colors duration-700 pointer-events-none select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* ---------- TOP META ---------- */}
                <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-start justify-between z-10">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/70 group-hover:text-white transition-colors duration-500">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 group-hover:text-white/60 transition-colors duration-500">
                    {p.year}
                  </span>
                </div>

                {/* ---------- BOTTOM TITLE ---------- */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <h3 className="font-display text-4xl md:text-6xl text-black group-hover:text-white uppercase leading-[0.9] tracking-wide transition-colors duration-500">
                    {p.title}
                  </h3>

                  <span className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-white/0 group-hover:text-white/80 transition-colors duration-500 delay-200">
                    View project
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}

            {/* tail spacer */}
            <div className="shrink-0 w-6 md:w-10" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
}