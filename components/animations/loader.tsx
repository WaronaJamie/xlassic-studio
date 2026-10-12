"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only show once per browser session
    if (typeof window !== "undefined" && sessionStorage.getItem("xls-loaded")) {
      setVisible(false);
      return;
    }

    const duration = 1800;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // ease-out-quart
      setCount(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          sessionStorage.setItem("xls-loaded", "1");
          setVisible(false);
        }, 300);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl tracking-wider text-white text-center"
            >
              XlassicStudio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/40"
            >
              Code is craft · Design is intent
            </motion.p>

            <div className="mt-12 flex flex-col items-center gap-4 w-64 md:w-80">
              <div className="flex items-baseline gap-1 font-nav text-white">
                <span className="text-4xl md:text-6xl tabular-nums leading-none">
                  {String(count).padStart(3, "0")}
                </span>
                <span className="text-base md:text-xl text-white/40">%</span>
              </div>

              <div className="w-full h-px bg-white/10 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-white transition-[width] duration-100 ease-out"
                  style={{ width: `${count}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}