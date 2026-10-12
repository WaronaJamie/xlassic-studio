"use client";

import { motion } from "motion/react";

export type LegalSection = {
  id: string;
  index: string;
  title: string;
  content: React.ReactNode;
};

export function LegalLayout({
  label,
  title,
  updated,
  intro,
  sections,
}: {
  label: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-black text-white">
      {/* ---------- HERO ---------- */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 border-b border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span className="h-px w-10 md:w-16 bg-white/30" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">
            {label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[14vw] md:text-[8vw] leading-[0.85] uppercase tracking-tight text-white"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
            Last updated · {updated}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-sm md:text-base text-white/60 leading-relaxed max-w-2xl mt-8"
        >
          {intro}
        </motion.p>
      </section>

      {/* ---------- BODY ---------- */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* SIDEBAR — TABLE OF CONTENTS */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-5">
              Contents
            </p>
            <nav>
              <ul className="flex flex-col gap-3 border-l border-white/[0.08] pl-5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-3 text-white/50 hover:text-white transition-colors duration-200"
                    >
                      <span className="font-mono text-[10px] tracking-widest text-white/30 group-hover:text-white/60 shrink-0 mt-0.5 transition-colors">
                        {s.index}
                      </span>
                      <span className="font-sans text-sm leading-snug">
                        {s.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* CONTENT */}
          <article className="lg:col-span-9 lg:col-start-4 flex flex-col gap-14 md:gap-20">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-32 border-t border-white/[0.06] pt-8 md:pt-10"
              >
                <div className="flex items-baseline gap-4 mb-6 md:mb-8">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 shrink-0">
                    {s.index}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight text-white">
                    {s.title}
                  </h2>
                </div>

                <div className="legal-content flex flex-col gap-4 text-white/70 font-sans text-sm md:text-base leading-relaxed">
                  {s.content}
                </div>
              </section>
            ))}

            {/* FOOTER NOTE */}
            <div className="border-t border-white/[0.06] pt-8 md:pt-10">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30">
                Questions? hello@xlassicstudio.com
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}