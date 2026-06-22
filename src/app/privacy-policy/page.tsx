import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalShell } from "@/components/site/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kebijakan privasi PT. Bali Majesty Tour mengenai pengumpulan, penggunaan, dan perlindungan data pribadi Anda.",
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function Page() {
  return (
    <LegalShell title="Kebijakan Privasi" updated="22 Juni 2026">
      <p>
        {site.legalName} (&ldquo;kami&rdquo;) menghormati privasi Anda dan berkomitmen melindungi data
        pribadi yang Anda berikan saat menggunakan situs <a href={site.url}>{site.url}</a> maupun layanan
        kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
        informasi Anda.
      </p>

      <h2>1. Informasi yang Kami Kumpulkan</h2>
      <ul>
        <li>Data identitas: nama, nomor telepon/WhatsApp, dan alamat email saat Anda melakukan reservasi atau mengisi formulir.</li>
        <li>Detail pemesanan: paket yang dipilih, jumlah peserta, tanggal perjalanan, dan permintaan khusus.</li>
        <li>Data teknis: alamat IP, jenis perangkat, dan cookie untuk analitik serta peningkatan layanan.</li>
      </ul>

      <h2>2. Penggunaan Informasi</h2>
      <p>Informasi Anda kami gunakan untuk:</p>
      <ul>
        <li>Memproses reservasi dan menyusun itinerary perjalanan.</li>
        <li>Berkomunikasi terkait pemesanan, konfirmasi, dan dukungan pelanggan.</li>
        <li>Meningkatkan kualitas layanan dan pengalaman pengguna situs.</li>
      </ul>

      <h2>3. Cookie</h2>
      <p>
        Situs kami menggunakan cookie untuk menyimpan preferensi dan menganalisis lalu lintas. Anda
        dapat menerima atau menolak cookie melalui banner persetujuan, serta mengelolanya kapan saja
        melalui pengaturan browser Anda.
      </p>

      <h2>4. Perlindungan Data</h2>
      <p>
        Kami menerapkan langkah keamanan yang wajar untuk melindungi data Anda. Semua pembayaran yang
        diproses dijamin aman dan terenkripsi. Kami tidak menjual data pribadi Anda kepada pihak ketiga.
      </p>

      <h2>5. Pembagian kepada Pihak Ketiga</h2>
      <p>
        Data dapat dibagikan kepada mitra operasional (hotel, transport, vendor aktivitas) hanya sebatas
        yang diperlukan untuk menjalankan layanan yang Anda pesan.
      </p>

      <h2>6. Hak Anda</h2>
      <p>
        Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda. Hubungi kami di{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> untuk permintaan tersebut.
      </p>

      <h2>7. Kontak</h2>
      <p>
        Untuk pertanyaan terkait kebijakan ini, hubungi {site.legalName}, {site.address}, telepon{" "}
        {site.phoneDisplay}, email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
