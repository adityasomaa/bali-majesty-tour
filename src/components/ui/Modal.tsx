"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { lockScroll, unlockScroll } from "@/components/providers/LenisProvider";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

/**
 * Accessible popup. Locks the page (Lenis pauses + body.no-scroll) while open,
 * and the dialog body itself remains scrollable via [data-lenis-prevent].
 */
export function Modal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            data-lenis-prevent
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-t-3xl bg-cream p-6 shadow-2xl sm:rounded-3xl sm:p-8"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              {title && <h3 className="font-display text-2xl text-ink">{title}</h3>}
              <button
                onClick={onClose}
                aria-label="Tutup"
                className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand text-ink/70 transition hover:bg-gold hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
