"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/playground", label: "Playground" },
  { href: "/services", label: "Services" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contacts" },
];

/* =========================================================
   DESKTOP NAV — sticky row of 5 columns
   ========================================================= */
export function DesktopNav() {
  return (
    <nav className="hidden md:block sticky top-0 z-50 h-20 border-y border-white/[0.08] bg-black/80 backdrop-blur-md">
      <ul className="grid grid-cols-5 h-full">
        {links.map((link, i) => (
          <li
            key={link.href}
            className="border-r border-white/[0.08] last:border-r-0"
          >
            <Link
              href={link.href}
              className="group flex h-full items-center gap-3 px-5 lg:px-6 transition-colors duration-200 hover:bg-white/[0.04]"
            >
              <span className="font-mono text-[10px] lg:text-xs text-white/40 group-hover:text-white/70 transition-colors shrink-0">
                0{i + 1}
              </span>
              <span className="font-nav text-base lg:text-lg text-white/80 group-hover:text-white transition-colors truncate">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* =========================================================
   MOBILE MENU — floating button + fullscreen overlay
   ========================================================= */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed bottom-6 right-6 z-40 h-12 px-5 border border-white/20 bg-black/70 backdrop-blur-md font-nav text-sm tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
      >
        MENU
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[60] bg-black"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 h-12 px-5 border border-white/20 font-nav text-sm tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
            >
              CLOSE
            </button>

            <ul className="h-full flex flex-col justify-center px-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="border-b border-white/[0.08] last:border-b-0"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-5 py-5"
                  >
                    <span className="font-mono text-xs text-white/40">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl sm:text-5xl tracking-wider text-white group-hover:text-white/50 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}