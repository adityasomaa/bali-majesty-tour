import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalShell } from "@/components/site/LegalShell";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan layanan serta pemesanan paket tour PT. Bali Majesty Tour.",
  alternates: { canonical: `${site.url}/syarat-dan-ketentuan` },
};

export default function Page() {
  return (
    <LegalShell title="Syarat & Ketentuan" updated="22 Juni 2026">
      <p>
        Dengan melakukan pemesanan layanan {site.legalName}, Anda dianggap telah membaca, memahami, dan
        menyetujui syarat dan ketentuan berikut.
      </p>

      <h2>1. Reservasi & Pembayaran</h2>
      <ul>
        <li>Sebagai garansi booking, pembayaran deposit wajib dilakukan pada saat pemesanan paket liburan.</li>
        <li>Deposit diperlukan karena kami juga melakukan pembayaran deposit ke pihak hotel dan vendor pendukung lainnya.</li>
        <li>Sisa pembayaran dapat dilakukan setelah tiba di Bali, sesuai kesepakatan.</li>
      </ul>

      <h2>2. Layanan Private Tour</h2>
      <p>
        Seluruh paket bersifat <strong>private tour</strong> — tidak digabung dengan peserta lain.
        Pengaturan waktu fleksibel dan dapat disesuaikan dengan kebutuhan Anda. Untuk peserta 1 orang
        tetap dapat dilayani, namun dengan penyesuaian harga.
      </p>

      <h2>3. Perubahan Itinerary</h2>
      <p>
        Anda dapat mengubah susunan acara atau menyusun program tour sesuai keinginan. Silakan sampaikan
        kepada customer service kami untuk penyesuaian harga dan ketersediaan.
      </p>

      <h2>4. Harga</h2>
      <ul>
        <li>Harga yang tercantum adalah harga mulai dari (start from) dan dapat berubah sesuai musim, jumlah peserta, serta pilihan hotel/fasilitas.</li>
        <li>Harga final akan dikonfirmasi saat reservasi.</li>
      </ul>

      <h2>5. Pembatalan</h2>
      <p>
        Kebijakan pembatalan dan pengembalian deposit mengikuti ketentuan masing-masing paket serta
        kebijakan hotel/vendor terkait. Hubungi kami sesegera mungkin apabila terjadi perubahan rencana.
      </p>

      <h2>6. Tanggung Jawab</h2>
      <p>
        Kami berkomitmen memberikan layanan terbaik dengan mengutamakan kenyamanan dan keselamatan.
        Namun kami tidak bertanggung jawab atas keterlambatan atau gangguan akibat keadaan di luar kendali
        kami (force majeure) seperti cuaca, bencana alam, atau kebijakan pemerintah.
      </p>

      <h2>7. Kontak</h2>
      <p>
        Untuk informasi dan reservasi, hubungi {site.legalName}, {site.address}, telepon {site.phoneDisplay},
        email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
