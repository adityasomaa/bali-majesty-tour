"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Smooth scrolling via Lenis.
 *  - Enabled only on desktop/large screens (>= 1024px). On tab & mobile we keep
 *    native scrolling (better for touch + nested scroll areas).
 *  - Stopped whenever a popup locks the page (body.no-scroll) so the popup's own
 *    scroll container works. Resumed on close.
 */
export default function LenisProvider() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let raf = 0;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mql = window.matchMedia(DESKTOP_QUERY);

    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (lenis || reduced || !mql.matches) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      });
      document.documentElement.classList.add("lenis");
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!lenis) return;
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenis = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };

    start();

    // Recreate on breakpoint change.
    const onBreakpoint = () => (mql.matches ? start() : stop());
    mql.addEventListener("change", onBreakpoint);

    // Pause/resume around popups (they add body.no-scroll).
    const onLock = () => lenis?.stop();
    const onUnlock = () => lenis?.start();
    window.addEventListener("mj:lock", onLock);
    window.addEventListener("mj:unlock", onUnlock);

    return () => {
      mql.removeEventListener("change", onBreakpoint);
      window.removeEventListener("mj:lock", onLock);
      window.removeEventListener("mj:unlock", onUnlock);
      stop();
    };
  }, []);

  return null;
}

/** Lock/unlock helpers used by every popup so Lenis + body scroll stay in sync. */
export function lockScroll() {
  document.body.classList.add("no-scroll");
  window.dispatchEvent(new Event("mj:lock"));
}
export function unlockScroll() {
  document.body.classList.remove("no-scroll");
  window.dispatchEvent(new Event("mj:unlock"));
}
