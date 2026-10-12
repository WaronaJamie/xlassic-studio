"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const questions = [
  {
    id: "01",
    q: "What does XlassicStudio do?",
    a: "We're a small studio building websites, brands, and digital products — from custom code to premade templates. Web design, branding, SEO, and everything in between. If it lives on the internet, we probably make it.",
  },
  {
    id: "02",
    q: "Do you work with international clients?",
    a: "Yes. We're based in Botswana, but most of our work is for clients in the US, UK, Australia, and across Africa. Timezones have never been a problem — clear communication beats proximity every time.",
  },
  {
    id: "03",
    q: "Can you handle a full brand launch?",
    a: "Absolutely. From naming and identity through to a finished website and product assets — we can take a brand from a blank page to a live, functioning product. Or jump in at any stage you need.",
  },
  {
    id: "04",
    q: "How long does a project usually take?",
    a: "A landing page can ship in 2–3 weeks. A full brand + site build typically runs 6–10 weeks depending on scope. Email templates and premade sites ship instantly — you buy, you download, you're live.",
  },
  {
    id: "05",
    q: "Do you offer ongoing support?",
    a: "Yes. After launch, most clients keep us on retainer for tweaks, new pages, and small features. We're not the type of studio that disappears after the invoice clears.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="relative bg-white text-black"
    >
      <div className="px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* ---------- LEFT: HEADER ---------- */}
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-10 md:w-16 bg-black/30" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/50">
                Questions
              </span>
            </div>

            <h2 className="font-display text-[13vw] md:text-[5.5vw] leading-[0.85] uppercase tracking-tight text-black">
              What brands
              <br />
              ask first
            </h2>

            <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed mt-6 md:mt-10 max-w-sm">
              Still curious after reading this? Head to the contact page and
              ask us anything — no pressure, no sales pitch.
            </p>
          </div>

          {/* ---------- RIGHT: ACCORDION ---------- */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-black/10">
              {questions.map((item, i) => {
                const open = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-black/10 last:border-b-0"
                  >
                    {/* HEADER ROW */}
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={open}
                      className={`group w-full flex items-center gap-4 md:gap-8 px-5 md:px-8 py-6 md:py-8 text-left transition-colors duration-300 ${
                        open ? "bg-black" : "hover:bg-black/[0.03]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] md:text-xs tracking-widest shrink-0 transition-colors duration-300 ${
                          open ? "text-white/50" : "text-black/40"
                        }`}
                      >
                        {item.id}
                      </span>

                      <h3
                        className={`flex-1 font-display text-2xl md:text-4xl uppercase leading-[0.95] tracking-tight transition-colors duration-300 ${
                          open ? "text-white" : "text-black"
                        }`}
                      >
                        {item.q}
                      </h3>

                      {/* Plus / X indicator */}
                      <span
                        className={`shrink-0 relative w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${
                          open ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <span
                          className={`absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 transition-colors duration-300 ${
                            open ? "bg-white" : "bg-black"
                          }`}
                        />
                        <span
                          className={`absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 transition-colors duration-300 ${
                            open ? "bg-white" : "bg-black"
                          }`}
                        />
                      </span>
                    </button>

                    {/* EXPANDING ANSWER */}
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
                          className="overflow-hidden bg-black"
                        >
                          <div className="px-5 md:px-8 pb-8 md:pb-10 pt-2 md:pt-3">
                            <div className="md:pl-[calc(2rem+2rem)]">
                              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}