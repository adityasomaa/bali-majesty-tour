"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/** Brief branded curtain shown on client-side route changes. */
export function RouteTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return; // skip on initial mount (SiteLoader handles that)
    }
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 620);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="route-curtain"
          className="pointer-events-none fixed inset-0 z-[150] grid place-items-center bg-ink"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <Image
              src="/logo-horizontal.png"
              alt="Bali Majesty Tour"
              width={420}
              height={120}
              className="h-auto w-56 max-w-[72vw] animate-float sm:w-72"
            />
            <span className="h-7 w-7 animate-[mj-spin_0.8s_linear_infinite] rounded-full border-2 border-gold/30 border-t-gold" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
