"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

/**
 * Lightweight scroll-reveal using IntersectionObserver, with safety fallbacks so
 * a section can never stay invisible (reveals immediately if already on-screen,
 * if IO is unavailable, or after a short timeout).
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    // Already in (or near) the viewport at mount → reveal right away.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    // Absolute fallback: never leave content hidden.
    const fallback = window.setTimeout(show, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag ref={ref as never} data-reveal="" style={{ transitionDelay: `${delay}ms` }} className={cn(className)}>
      {children}
    </Tag>
  );
}
