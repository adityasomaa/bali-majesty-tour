"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { categories, waLink } from "@/lib/site";

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pkg: "",
    pax: "2",
    date: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Halo Bali Majesty Tour, saya ingin booking:\n` +
      `• Nama: ${form.name}\n` +
      `• Email: ${form.email}\n` +
      `• No. HP: ${form.phone}\n` +
      `• Paket: ${form.pkg || "Belum ditentukan"}\n` +
      `• Jumlah Peserta: ${form.pax} orang\n` +
      `• Tanggal Tour: ${form.date || "Fleksibel"}\n` +
      `• Catatan: ${form.message || "-"}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-ink/10 bg-cream p-10 text-center shadow-[var(--shadow-soft)]">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold-dark">
          <CheckCircle2 size={32} />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">Terima kasih!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          Permintaan booking Anda sedang dibuka di WhatsApp. Tim kami akan segera membalas. Jika
          belum terbuka, hubungi kami langsung.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-sand"
        >
          Kirim lagi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-ink/10 bg-cream p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <h2 className="font-display text-2xl font-bold text-ink">Booking Form</h2>
      <p className="mt-1 text-sm text-ink/55">Isi detail di bawah, kami balas secepatnya via WhatsApp.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink/80">Nama Lengkap</label>
          <input required value={form.name} onChange={set("name")} placeholder="Nama Anda" className="field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80">Email</label>
          <input type="email" value={form.email} onChange={set("email")} placeholder="email@contoh.com" className="field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80">No. WhatsApp</label>
          <input required value={form.phone} onChange={set("phone")} placeholder="08xxxxxxxxxx" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink/80">Pilih Paket</label>
          <select value={form.pkg} onChange={set("pkg")} className="field">
            <option value="">— Pilih paket / layanan —</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.title}>{c.title}</option>
            ))}
            <option value="Sewa Mobil">Sewa Mobil</option>
            <option value="Sewa Bus">Sewa Bus</option>
            <option value="Custom Itinerary">Custom Itinerary</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80">Jumlah Peserta</label>
          <select value={form.pax} onChange={set("pax")} className="field">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
              <option key={n} value={n}>{n} orang</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80">Tanggal Tour</label>
          <input type="date" value={form.date} onChange={set("date")} className="field" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink/80">Catatan / Permintaan Khusus</label>
          <textarea rows={4} value={form.message} onChange={set("message")} placeholder="Ceritakan rencana liburan Anda…" className="field resize-none" />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-soft sm:w-auto"
      >
        <Send size={16} /> Send Booking
      </button>
    </form>
  );
}
