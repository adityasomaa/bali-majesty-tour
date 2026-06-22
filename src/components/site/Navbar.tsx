"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav, site, waLink } from "@/lib/site";
import { lockScroll, unlockScroll } from "@/components/providers/LenisProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [paketOpen, setPaketOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change.
  useEffect(() => {
    setOpen(false);
    setPaketOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    if (open) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [open]);

  const solid = scrolled || open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        solid ? "bg-cream/90 backdrop-blur-lg shadow-[0_8px_30px_-18px_rgba(21,19,13,0.4)]" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex shrink-0 items-center" aria-label="Bali Majesty Tour">
          <Image
            src="/logo-horizontal.png"
            alt="Bali Majesty Tour"
            width={200}
            height={56}
            priority
            className={cn(
              "h-9 w-auto transition-all duration-500 sm:h-10",
              solid ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            )}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <li key={item.label} className="group relative">
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    solid ? "text-ink/80 hover:text-gold-dark" : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                  <ChevronDown size={15} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream p-2 shadow-[var(--shadow-soft)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/75 transition-colors hover:bg-sand hover:text-gold-dark",
                          isActive(child.href) && "bg-sand text-gold-dark"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                    solid
                      ? isActive(item.href)
                        ? "text-gold-dark"
                        : "text-ink/80 hover:text-gold-dark"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={waLink("Halo Bali Majesty Tour, saya ingin bertanya tentang paket tour.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-soft lg:inline-flex"
          >
            <Phone size={15} /> Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className={cn(
              "relative z-10 grid h-11 w-11 place-items-center rounded-full transition lg:hidden",
              solid ? "bg-sand text-ink" : "bg-white/15 text-white backdrop-blur"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div
              data-lenis-prevent
              className="max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain border-t border-ink/10 bg-cream px-4 pb-8 pt-2"
            >
              <ul className="flex flex-col">
                {nav.map((item) =>
                  item.children ? (
                    <li key={item.label} className="border-b border-ink/5">
                      <button
                        onClick={() => setPaketOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-ink"
                      >
                        {item.label}
                        <ChevronDown size={18} className={cn("transition-transform", paketOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {paketOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block rounded-xl px-3 py-2.5 text-[15px] text-ink/70 hover:bg-sand hover:text-gold-dark"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.href} className="border-b border-ink/5">
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-3.5 text-base font-semibold",
                          isActive(item.href) ? "text-gold-dark" : "text-ink"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <a
                href={waLink("Halo Bali Majesty Tour, saya ingin memesan paket tour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold text-ink shadow-[var(--shadow-gold)]"
              >
                <Phone size={16} /> Book Now via WhatsApp
              </a>
              <p className="mt-4 text-center text-xs text-ink/50">{site.phoneDisplay}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
