"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    id: "01",
    q: "What's your typical process?",
    a: "Discovery call → written proposal → 50% deposit → design sprint → build → launch. We work in weekly check-ins so you always know where things stand. No black boxes, no waiting weeks for a status update.",
  },
  {
    id: "02",
    q: "Do you work with clients outside Botswana?",
    a: "Yes — the majority of our work is with international clients. We're set up for remote collaboration across timezones and take payment in USD, EUR, and GBP.",
  },
  {
    id: "03",
    q: "How much does a project cost?",
    a: "Smaller sites start around $1,500. Full brand + website builds typically run $4,000–$15,000. Custom work above $15k is priced per-project. Every quote is fixed-scope, so there are no surprise invoices.",
  },
  {
    id: "04",
    q: "Do you offer payment plans?",
    a: "For projects over $3,000, we split into 3 milestones: 50% up front, 25% at mid-project, 25% before launch. We can also set up monthly instalments for longer engagements.",
  },
  {
    id: "05",
    q: "Can I see the store products first?",
    a: "Absolutely. If you just need something that ships fast, the store has premade websites and email templates you can buy and deploy in a weekend. Custom work is for when your requirements don't fit the templates.",
  },
];

export function ContactFAQ() {
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
      className="relative bg-black text-white border-t border-white/[0.06]"
    >
      <div className="px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* LEFT — header */}
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-px w-10 md:w-16 bg-white/30" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">
                Before you ask
              </span>
            </div>

            <h2 className="font-display text-[13vw] md:text-[5.5vw] leading-[0.85] uppercase tracking-tight text-white">
              Common
              <br />
              questions
            </h2>

            <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed mt-6 md:mt-10 max-w-sm">
              Still curious about something not on this list? Just write it in
              the form above — we&apos;ll answer honestly.
            </p>
          </div>

          {/* RIGHT — accordion */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-white/[0.08]">
              {faqs.map((item) => {
                const open = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-white/[0.08] last:border-b-0"
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={open}
                      className={`group w-full flex items-center gap-4 md:gap-8 px-5 md:px-8 py-6 md:py-8 text-left transition-colors duration-300 ${
                        open ? "bg-white" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] md:text-xs tracking-widest shrink-0 transition-colors duration-300 ${
                          open ? "text-black/40" : "text-white/40"
                        }`}
                      >
                        {item.id}
                      </span>

                      <h3
                        className={`flex-1 font-display text-2xl md:text-4xl uppercase leading-[0.95] tracking-tight transition-colors duration-300 ${
                          open ? "text-black" : "text-white"
                        }`}
                      >
                        {item.q}
                      </h3>

                      <span
                        className={`shrink-0 relative w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${
                          open ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <span
                          className={`absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 transition-colors duration-300 ${
                            open ? "bg-black" : "bg-white"
                          }`}
                        />
                        <span
                          className={`absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 transition-colors duration-300 ${
                            open ? "bg-black" : "bg-white"
                          }`}
                        />
                      </span>
                    </button>

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
                          className="overflow-hidden bg-white"
                        >
                          <div className="px-5 md:px-8 pb-8 md:pb-10 pt-2 md:pt-3">
                            <div className="md:pl-[calc(2rem+2rem)]">
                              <p className="font-sans text-sm md:text-base text-black/70 leading-relaxed max-w-2xl">
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