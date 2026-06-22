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
    let finished = false;

    const tick = () => {
      setProgress((p) => (p < 90 ? p + Math.max(0.6, (92 - p) * 0.06) : p));
      if (!finished) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const finish = () => {
      finished = true;
      cancelAnimationFrame(frame);
      setProgress(100);
      window.setTimeout(() => setDone(true), 450);
    };

    const safety = window.setTimeout(finish, 3500);
    if (document.readyState === "complete") {
      window.setTimeout(finish, 650);
    } else {
      window.addEventListener("load", () => window.setTimeout(finish, 350), { once: true });
    }

    return () => {
      finished = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
    };
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
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 blur-[120px]" />
          </div>
          <div className="relative flex flex-col items-center gap-8 px-8">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float"
            >
              <Image
                src="/logo-horizontal.png"
                alt="Bali Majesty Tour"
                width={420}
                height={120}
                priority
                className="h-auto w-64 max-w-[78vw] sm:w-80"
              />
            </motion.div>
            <div className="h-1 w-64 max-w-[70vw] overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} transition={{ ease: "linear" }} />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-cream/50">Discover Bali</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
