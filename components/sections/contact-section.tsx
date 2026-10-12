"use client";

import { useState } from "react";
import { motion } from "motion/react";

const budgets = ["$1k – $5k", "$5k – $15k", "$15k+"] as const;

const services = [
  "Web Design",
  "Branding + Strategy",
  "SEO",
  "Email Templates",
  "Premade Website",
  "Something else",
];

const contactItems = [
  {
    icon: "@",
    label: "Email",
    value: "hello@xlassicstudio.com",
    href: "mailto:hello@xlassicstudio.com",
  },
  {
    icon: "C",
    label: "Call",
    value: "Book a discovery call",
    href: "#",
  },
  {
    icon: "G",
    label: "Location",
    value: "Based in Botswana — working worldwide",
    href: null,
  },
];

export function ContactSection() {
  const [budget, setBudget] = useState<string>(budgets[1]);

  return (
    <section
      id="contact"
      className="relative bg-black text-white border-t border-white/[0.06]"
    >
      <div className="grid lg:grid-cols-12">
        {/* =====================================================
            LEFT — HEADLINE + CONTACT CARDS
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-5 lg:border-r border-white/[0.06] px-6 md:px-10 py-16 md:py-24 flex flex-col"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 md:w-14 bg-white/30" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50">
              Project brief
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-[13vw] md:text-[6vw] lg:text-[4vw] leading-[0.88] uppercase tracking-tight text-white">
            Tell us what
            <br />
            you are
            <br />
            <span className="text-white/40">building.</span>
          </h2>

          {/* Contact cards */}
          <div className="mt-12 md:mt-16 flex flex-col divide-y divide-white/[0.08] border-t border-white/[0.08]">
            {contactItems.map((c) => (
              <div key={c.label} className="flex items-center gap-4 py-5">
                <span className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white/15 font-mono text-sm text-white/70">
                  {c.icon}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-sans text-sm md:text-base text-white hover:text-white/60 transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-sans text-sm md:text-base text-white">
                      {c.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT — FORM (FormSubmit)
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-7 px-6 md:px-10 py-16 md:py-24 bg-white/[0.015]"
        >
          <form
            action="https://formsubmit.co/YOUR_EMAIL_HERE"
            method="POST"
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New brief — XlassicStudio" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="Budget" value={budget} />

            {/* Row 1 — Name + Email */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <Field label="Your name" name="Name" placeholder="Your name" required />
              <Field
                label="Email"
                name="Email"
                type="email"
                placeholder="hello@company.com"
                required
              />
            </div>

            {/* Row 2 — Service select */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                What do you need?
              </label>
              <select
                name="Service"
                required
                defaultValue=""
                className="w-full bg-white/[0.03] border border-white/[0.12] text-white px-4 py-3.5 font-sans text-sm md:text-base outline-none focus:border-white/40 transition-colors appearance-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='white' stroke-opacity='0.5' stroke-width='1.5'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                }}
              >
                <option value="" disabled className="bg-black text-white">
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-black text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 3 — Budget pills */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                Your budget
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
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white/60 border-white/15 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4 — Project details */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                Project details
              </label>
              <textarea
                name="Details"
                required
                rows={5}
                placeholder="Tell us what you are building, changing or preparing to launch."
                className="w-full bg-white/[0.03] border border-white/[0.12] text-white placeholder:text-white/25 px-4 py-3.5 font-sans text-sm md:text-base outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            {/* Row 5 — Submit */}
            <button
              type="submit"
              className="group relative w-full bg-white text-black py-4 md:py-5 font-mono text-xs md:text-sm tracking-[0.3em] uppercase overflow-hidden transition-colors duration-300 hover:bg-white/90"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span aria-hidden>◆</span>
                Send brief
                <span aria-hidden>◆</span>
              </span>
            </button>

            <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 text-center">
              Average response · within 24 hours
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

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
      <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/[0.12] text-white placeholder:text-white/25 px-4 py-3.5 font-sans text-sm md:text-base outline-none focus:border-white/40 transition-colors"
      />
    </div>
  );
}