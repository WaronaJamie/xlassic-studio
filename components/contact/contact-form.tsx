"use client";

import { useState } from "react";
import { motion } from "motion/react";

const budgets = ["$1k – $5k", "$5k – $15k", "$15k+", "Not sure yet"] as const;

const services = [
  "Web Design",
  "Branding + Strategy",
  "SEO",
  "Custom build",
  "Email Templates",
  "Premade Website",
  "Something else",
];

const timelines = ["ASAP", "1–2 months", "3–6 months", "Just exploring"];

export function ContactForm() {
  const [budget, setBudget] = useState<string>(budgets[1]);
  const [timeline, setTimeline] = useState<string>(timelines[1]);

  return (
    <section
      id="brief"
      className="relative bg-white text-black border-t border-black/10"
    >
      <div className="grid lg:grid-cols-12">
        {/* =====================================================
            LEFT — INTRO
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-5 lg:border-r border-black/10 px-6 md:px-10 py-16 md:py-24 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 md:w-14 bg-black/30" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/50">
              Project brief
            </span>
          </div>

          <h2 className="font-display text-[13vw] md:text-[6vw] lg:text-[4vw] leading-[0.88] uppercase tracking-tight text-black">
            A few quick
            <br />
            questions,
            <br />
            <span className="text-black/35">then we talk.</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed mt-8 max-w-sm">
            No essay required. Answer what you can, skip what you can&apos;t,
            and we&apos;ll get back to you within a day with real thoughts —
            not a template reply.
          </p>

          <ul className="flex flex-col gap-3 mt-10 border-t border-black/10 pt-6">
            {[
              "Clear response within 24 hours",
              "No sales scripts, just real questions",
              "Fixed-scope proposal within 3 days",
              "NDA on request, always confidential",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 font-sans text-sm text-black/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* =====================================================
            RIGHT — QUESTIONNAIRE
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-7 px-6 md:px-10 py-16 md:py-24 bg-black/[0.02]"
        >
          <form
            action="https://formsubmit.co/xlassicandcodie@gmail.com"
            method="POST"
            className="flex flex-col gap-10 md:gap-12"
          >
            {/* FormSubmit config */}
            <input
              type="hidden"
              name="_subject"
              value="New brief — XlassicStudio"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="Budget" value={budget} />
            <input type="hidden" name="Timeline" value={timeline} />

            {/* ============================================
                SECTION 01 — ABOUT YOU
                ============================================ */}
            <fieldset className="flex flex-col gap-5">
              <SectionHeading index="01" title="About you" />

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Field
                  label="Your name"
                  name="Name"
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Email"
                  name="Email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Field label="Company" name="Company" placeholder="Optional" />
                <Field
                  label="Current website"
                  name="Website"
                  placeholder="Optional"
                />
              </div>
            </fieldset>

            {/* ============================================
                SECTION 02 — YOUR PROJECT
                ============================================ */}
            <fieldset className="flex flex-col gap-5">
              <SectionHeading index="02" title="Your project" />

              {/* Service select */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50">
                  What do you need?
                </label>
                <select
                  name="Service"
                  required
                  defaultValue=""
                  className="w-full bg-white border border-black/15 text-black px-4 py-3.5 font-sans text-sm md:text-base outline-none focus:border-black transition-colors appearance-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='black' stroke-opacity='0.6' stroke-width='1.5'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                  }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget pills */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50">
                  Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => {
                    const active = budget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`px-5 py-2.5 font-mono text-xs tracking-wide border transition-all duration-300 ${
                          active
                            ? "bg-black text-white border-black"
                            : "bg-transparent text-black/60 border-black/20 hover:border-black/50 hover:text-black"
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline pills */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50">
                  Timeline
                </label>
                <div className="flex flex-wrap gap-2">
                  {timelines.map((t) => {
                    const active = timeline === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`px-5 py-2.5 font-mono text-xs tracking-wide border transition-all duration-300 ${
                          active
                            ? "bg-black text-white border-black"
                            : "bg-transparent text-black/60 border-black/20 hover:border-black/50 hover:text-black"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            </fieldset>

            {/* ============================================
                SECTION 03 — THE DETAILS
                ============================================ */}
            <fieldset className="flex flex-col gap-5">
              <SectionHeading index="03" title="The details" />

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50">
                  Anything else you want us to know?
                </label>
                <textarea
                  name="Details"
                  required
                  rows={6}
                  placeholder="Tell us what you're building, what problem it solves, or anything else on your mind."
                  className="w-full bg-white border border-black/15 text-black placeholder:text-black/30 px-4 py-3.5 font-sans text-sm md:text-base outline-none focus:border-black transition-colors resize-none"
                />
              </div>
            </fieldset>

            {/* ============================================
                SUBMIT
                ============================================ */}
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="group relative w-full bg-black text-white py-4 md:py-5 font-mono text-xs md:text-sm tracking-[0.3em] uppercase overflow-hidden transition-colors duration-300 hover:bg-black/85"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span aria-hidden>◆</span>
                  Send brief
                  <span aria-hidden>◆</span>
                </span>
              </button>

              <p className="font-mono text-[10px] tracking-widest uppercase text-black/40 text-center">
                Average response · within 24 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Sub-components
   ------------------------------------------------------------------ */

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 pb-1 border-b border-black/10">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/40">
        {index}
      </span>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/70">
        {title}
      </span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-black/15 text-black placeholder:text-black/30 px-4 py-3.5 font-sans text-sm md:text-base outline-none focus:border-black transition-colors"
      />
    </div>
  );
}