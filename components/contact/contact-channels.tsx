"use client";

import { motion } from "motion/react";

/* ----------------------------------------------------------------
   WhatsApp — opens the app (or web) with a pre-typed message.
   Replace 26771234567 with your real number (country code + number).
   ---------------------------------------------------------------- */
const whatsappMessage = encodeURIComponent(
  "Hi XlassicStudio, I'd like to talk about a project I'm working on."
);
const whatsappLink = `https://wa.me/26776154106?text=${whatsappMessage}`;

const channels = [
  {
    index: "01",
    label: "Email",
    value: "xlassicandcodie@gmail.com",
    description: "Best for detailed briefs, documents, and long messages.",
    href: "mailto:xlassicandcodie@gmail.com",
    cta: "Send an email",
    external: false,
  },
  {
    index: "02",
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    description:
      "Fastest way to reach us. Opens with a message ready to send — just edit and hit go.",
    href: whatsappLink,
    cta: "Open chat",
    external: true,
  },
  {
    index: "03",
    label: "Follow",
    value: "@xlassicstudio",
    description:
      "Behind-the-scenes work, design experiments, and occasional opinions.",
    href: "https://instagram.com/xlassicstudio",
    cta: "See the feed",
    external: true,
  },
];

export function ContactChannels() {
  return (
    <section className="bg-black text-white px-6 md:px-10 py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* LEFT — sticky intro */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 md:w-14 bg-white/30" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">
              Reach out
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] uppercase tracking-tight text-white">
            Three ways
            <br />
            to <span className="text-white/40">connect.</span>
          </h2>

          <p className="font-sans text-sm text-white/60 leading-relaxed mt-8 max-w-sm">
            Pick whichever feels easiest. We read everything that comes in —
            even the one-line messages.
          </p>
        </div>

        {/* RIGHT — channel cards */}
        <div className="lg:col-span-8">
          <div className="flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {channels.map((c, i) => (
              <motion.a
                key={c.index}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-7 md:py-9 hover:bg-white/[0.02] transition-colors duration-300 px-2 md:px-4"
              >
                {/* Index */}
                <span className="font-mono text-[10px] tracking-widest text-white/40 shrink-0">
                  {c.index}
                </span>

                {/* Label */}
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 shrink-0 md:w-28">
                  {c.label}
                </span>

                {/* Value + description */}
                <div className="flex-1 min-w-0">
                  <p className="font-display text-xl md:text-2xl uppercase tracking-tight text-white group-hover:text-white/70 transition-colors truncate">
                    {c.value}
                  </p>
                  <p className="font-sans text-sm text-white/50 mt-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                {/* CTA */}
                <span className="shrink-0 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors">
                  {c.cta}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}