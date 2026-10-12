"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/lib/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed z-[90] inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[min(94vw,1120px)] md:h-[min(85vh,660px)] bg-white text-black overflow-hidden flex flex-col md:flex-row"
          >
            {/* =====================================================
                IMAGE
                ===================================================== */}
            <div className="relative w-full md:w-[55%] h-56 md:h-auto shrink-0 bg-[#111111] flex items-center justify-center overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-contain p-4 md:p-6"
              />
            </div>

            {/* =====================================================
                CONTENT
                ===================================================== */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/40 mb-3">
                    {project.index} — {project.category} · {project.year}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase leading-none tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close project"
                  className="shrink-0 w-10 h-10 flex items-center justify-center border border-black/15 hover:bg-black hover:text-white transition-colors text-sm"
                >
                  ✕
                </button>
              </div>

              <p className="font-sans text-sm md:text-base text-black/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border border-black/15 text-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 font-mono text-xs tracking-[0.2em] uppercase hover:bg-black/80 transition-colors"
                  >
                    {link.label}
                    <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}