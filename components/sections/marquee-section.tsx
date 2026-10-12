"use client";

import { motion } from "motion/react";

const rowOne = [
  { text: "Designs with clarity", font: "aboreto", variant: "filled" },
  { text: "No jargon", font: "rubik", variant: "outlined" },
  { text: "Systems over trends", font: "aboreto", variant: "filled" },
  { text: "Built to last", font: "rubik", variant: "outlined" },
] as const;

const rowTwo = [
  { text: "Code is Craft", font: "rubik", variant: "outlined" },
  { text: "Design is Intent", font: "aboreto", variant: "filled" },
  { text: "No templates", font: "rubik", variant: "outlined" },
  { text: "Every line on purpose", font: "aboreto", variant: "filled" },
] as const;

type Item = {
  text: string;
  font: "aboreto" | "rubik";
  variant: "filled" | "outlined";
};

function WordMark({ item }: { item: Item }) {
  const fontClass =
    item.font === "aboreto" ? "font-aboreto" : "font-rubik-lines";

  const variantClass =
    item.variant === "filled" ? "text-white" : "text-outline";

  return (
    <span
      className={`${fontClass} ${variantClass} whitespace-nowrap leading-none tracking-tight uppercase text-[9vw] md:text-[6vw]`}
    >
      {item.text}
    </span>
  );
}

function Diamond({ dim = false }: { dim?: boolean }) {
  return (
    <span
      aria-hidden
      className={`shrink-0 mx-[4vw] md:mx-[3vw] inline-block ${
        dim ? "opacity-40" : "opacity-100"
      }`}
      style={{
        width: "clamp(10px, 1.2vw, 20px)",
        height: "clamp(10px, 1.2vw, 20px)",
        background: "white",
        transform: "rotate(45deg)",
      }}
    />
  );
}

function MarqueeRow({
  items,
  duration = 45,
  reverse = false,
}: {
  items: readonly Item[];
  duration?: number;
  reverse?: boolean;
}) {
  // Render the sequence twice for a seamless loop
  const sequence = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {sequence.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <WordMark item={item as Item} />
            <Diamond dim={i % 2 === 1} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="relative bg-black overflow-hidden border-y border-white/[0.06] py-14 md:py-24 select-none">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="relative flex flex-col gap-6 md:gap-10">
        <MarqueeRow items={rowOne} duration={55} />
        <MarqueeRow items={rowTwo} duration={38} />
      </div>
    </section>
  );
}