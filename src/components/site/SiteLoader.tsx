"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/** Full-screen branded loader shown once while the site boots. */
export function SiteLoader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      setProgress((p) => (p < 90 ? p + Math.max(1, (92 - p) * 0.08) : p));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const finish = () => {
      setProgress(100);
      window.setTimeout(() => setDone(true), 450);
    };

    if (document.readyState === "complete") {
      window.setTimeout(finish, 700);
    } else {
      window.addEventListener("load", () => window.setTimeout(finish, 400), { once: true });
      // Safety timeout in case `load` never fires.
      const safety = window.setTimeout(finish, 4000);
      return () => {
        cancelAnimationFrame(frame);
        window.clearTimeout(safety);
      };
    }
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 blur-[120px]" />
          </div>
          <div className="relative flex flex-col items-center gap-7 px-8">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float"
            >
              <Image src="/logo-mark.png" alt="Bali Majesty Tour" width={96} height={96} priority className="h-20 w-auto" />
            </motion.div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gold"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-cream/50">
              Discover Bali
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
