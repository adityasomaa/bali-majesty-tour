"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type Option = { label: string; value: string };

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  ariaLabel?: string;
  leadingIcon?: React.ReactNode;
};

/** Fully custom, styled dropdown — no native <select> chrome anywhere. */
export function Select({
  value,
  onChange,
  options,
  placeholder = "Pilih…",
  className,
  buttonClassName,
  ariaLabel,
  leadingIcon,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center gap-2 rounded-[0.85rem] border border-ink/14 bg-white px-4 py-3 text-left text-sm font-medium text-ink outline-none transition focus-visible:border-gold focus-visible:ring-4 focus-visible:ring-gold/25",
          buttonClassName
        )}
      >
        {leadingIcon && <span className="text-ink/40">{leadingIcon}</span>}
        <span className={cn("flex-1 truncate", !selected && "text-ink/45")}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown size={18} className={cn("shrink-0 text-gold-dark transition-transform duration-300", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            id={id}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-50 mt-2 max-h-72 w-full min-w-max overflow-auto rounded-2xl border border-ink/10 bg-cream p-1.5 shadow-[var(--shadow-soft)]"
          >
            {options.map((o) => {
              const active = o.value === value;
              return (
                <li key={o.value} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition",
                      active ? "bg-gold/15 font-semibold text-gold-dark" : "text-ink/75 hover:bg-sand"
                    )}
                  >
                    {o.label}
                    {active && <Check size={15} className="shrink-0 text-gold-dark" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
