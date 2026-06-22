"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";

const initials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

export function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="flex flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-sm"
        >
          <Quote size={28} className="text-gold" />
          <div className="mt-3 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={14} className="fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
            {t.text}
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold-dark">
              {initials(t.name)}
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">{t.name}</div>
              <div className="text-xs text-ink/50">{t.location}</div>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
