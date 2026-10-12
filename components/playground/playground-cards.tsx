"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { projects, type Project } from "@/lib/projects";
import { ProjectModal } from "./project-modal";

/* ==================================================================
   Build a fan layout for N projects.
   Spread is total horizontal span (in vw) across all cards.
   Each card gets a position, a slight vertical lift, and a rotation.
   ================================================================== */
function buildLayout(count: number) {
  const spread = 38; // total half-width in vw
  const gap = count > 1 ? (spread * 2) / (count - 1) : 0;

  return Array.from({ length: count }, (_, i) => {
    const offset = i - (count - 1) / 2;
    return {
      x: `${offset * gap}vw`,
      y: `${Math.abs(offset) * 0.8}vh`,
      rotate: offset * 4.5,
    };
  });
}

export function PlaygroundCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const layout = buildLayout(projects.length);

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-black lg:h-[250vh]"
      >
        <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-hidden flex flex-col">
          {/* HEADER (desktop only) */}
          <div className="hidden lg:flex items-center justify-between px-10 pt-8 pb-2 shrink-0">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-white/30" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                Selected work
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              Scroll to unfold · Click any card
            </span>
          </div>

          {/* CARDS */}
          {isDesktop ? (
            <div className="relative flex-1">
              {projects.map((p, i) => (
                <FanCard
                  key={p.id}
                  project={p}
                  index={i}
                  total={projects.length}
                  cfg={layout[i]}
                  progress={scrollYProgress}
                  onSelect={() => setSelected(p)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6 px-6 py-10">
              {projects.map((p) => (
                <StaticCard
                  key={p.id}
                  project={p}
                  onSelect={() => setSelected(p)}
                />
              ))}
            </div>
          )}

          {/* BOTTOM HINT (desktop only) */}
          <div className="hidden lg:flex items-center justify-center pb-6 shrink-0">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
              {projects.length} projects
            </span>
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

/* ==================================================================
   FAN CARD
   ================================================================== */

function FanCard({
  project,
  index,
  total,
  cfg,
  progress,
  onSelect,
}: {
  project: Project;
  index: number;
  total: number;
  cfg: { x: string; y: string; rotate: number };
  progress: MotionValue<number>;
  onSelect: () => void;
}) {
  /* Staggered reveal — each card starts slightly after the previous */
  const start = index * 0.04;
  const end = start + 0.68;

  const x = useTransform(progress, [start, end], ["0vw", cfg.x]);
  const y = useTransform(progress, [start, end], ["0vh", cfg.y]);
  const rotate = useTransform(progress, [start, end], [0, cfg.rotate]);

  /* Card width shrinks a touch when there are more cards */
  const widthClass =
    total >= 5
      ? "w-[17vw] h-[54vh]"
      : total === 4
        ? "w-[19vw] h-[58vh]"
        : "w-[22vw] h-[60vh]";

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.button
        onClick={onSelect}
        style={{ x, y, rotate }}
        aria-label={`Open ${project.title}`}
        className={`group block ${widthClass} bg-white text-black text-left overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
      >
        <CardVisual project={project} />
      </motion.button>
    </div>
  );
}

/* ==================================================================
   STATIC CARD (mobile)
   ================================================================== */

function StaticCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      onClick={onSelect}
      aria-label={`Open ${project.title}`}
      className="block w-full bg-white text-black text-left overflow-hidden"
    >
      <CardVisual project={project} />
    </motion.button>
  );
}

/* ==================================================================
   SHARED CARD UI
   ================================================================== */

function CardVisual({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full flex flex-col p-5 md:p-7">
      {/* decorative dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
      </div>

      {/* index */}
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/40 mb-auto">
        {project.index}
      </span>

      {/* title */}
      <h3 className="font-display text-3xl md:text-4xl lg:text-[2.2vw] uppercase leading-[0.92] tracking-tight text-black mt-6">
        {project.title}
      </h3>

      {/* short */}
      <p className="font-sans text-xs md:text-sm text-black/60 leading-snug mt-3 max-w-[24ch]">
        {project.short}
      </p>

      {/* footer */}
      <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/50">
          {project.category}
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 group-hover:text-black transition-colors">
          View ↗
        </span>
      </div>
    </div>
  );
}