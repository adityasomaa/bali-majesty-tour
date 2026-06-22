"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { homeStats, site, waLink } from "@/lib/site";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function HomeHero() {
  const root = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background on scroll.
      gsap.to(bg.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const fade = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }),
  };

  return (
    <section ref={root} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div ref={bg} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image src="/images/Ulun-Danu-Beratan.jpg" alt="Bali" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-16">
        <motion.span custom={0} variants={fade} initial="hidden" animate="show" className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cream backdrop-blur">
          <Star size={13} className="fill-gold text-gold" /> Trusted Bali Tour & Travel Since {site.founded}
        </motion.span>

        <motion.h1 custom={1} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-cream text-balance sm:text-6xl lg:text-7xl">
          Welcome To{" "}
          <span className="relative whitespace-nowrap text-gold">
            Bali Majesty Tour
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Paket tour harian, bulan madu, tour group, Nusa Penida, hingga wisata adventure di Bali —
          dikemas dengan itinerary menarik bersama guide & driver yang ramah dan berpengalaman.
        </motion.p>

        <motion.div custom={3} variants={fade} initial="hidden" animate="show" className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={waLink("Halo Bali Majesty Tour, saya ingin memesan paket tour Bali.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-soft">
            <Phone size={16} /> Book Now
          </a>
          <a href="#explore" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-white/5 px-8 py-4 text-sm font-semibold text-cream backdrop-blur transition hover:bg-white/15">
            Jelajahi Paket <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div custom={4} variants={fade} initial="hidden" animate="show" className="mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/10 sm:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.label} className="bg-ink/30 px-5 py-4 text-center backdrop-blur">
              <div className="font-display text-2xl font-bold text-gold sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-cream/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cream/40 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  );
}
