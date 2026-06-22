"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const KEY = "mj-cookie-consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = window.setTimeout(() => setShow(true), 1400);
        return () => window.clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ value, at: Date.now() }));
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 z-[130] mx-auto max-w-md rounded-2xl border border-ink/10 bg-cream/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur-lg sm:left-6 sm:right-auto"
        >
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand text-gold-dark">
              <Cookie size={20} />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-ink">Kami menghargai privasi Anda</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">
                Kami menggunakan cookie untuk meningkatkan pengalaman browsing, menganalisis trafik,
                dan menyajikan konten yang relevan. Baca{" "}
                <Link href="/privacy-policy" className="font-medium text-gold-dark underline underline-offset-2">
                  Kebijakan Privasi
                </Link>
                .
              </p>
              <div className="mt-4 flex gap-2.5">
                <button
                  onClick={() => decide("accepted")}
                  className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink transition hover:bg-gold-soft"
                >
                  Terima Semua
                </button>
                <button
                  onClick={() => decide("rejected")}
                  className="rounded-full border border-ink/15 px-5 py-2 text-sm font-semibold text-ink/70 transition hover:bg-sand"
                >
                  Tolak
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
