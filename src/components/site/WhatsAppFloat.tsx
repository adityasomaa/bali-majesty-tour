"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink("Halo Bali Majesty Tour, saya tertarik dengan paket tour Bali. Bisa info lebih lanjut?")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="group fixed bottom-5 right-5 z-[110] flex items-center gap-3 rounded-full bg-[#25D366] py-4 pl-4 pr-6 text-white shadow-[0_16px_38px_-8px_rgba(37,211,102,0.65)] sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
          <MessageCircle size={28} className="shrink-0" />
          <span className="hidden text-base font-bold sm:block">Chat Kami</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
