// ============================================================================
// Bali Majesty Tour — single source of truth for all site content.
// Content faithfully mirrors the live www.balimajestytour.id site.
// ============================================================================

export const site = {
  name: "Bali Majesty Tour",
  legalName: "PT. Bali Majesty Tour",
  tagline: "Discover Your Perfect Holiday in Bali",
  description:
    "PT. Bali Majesty Tour menyediakan layanan paket tour harian untuk wisatawan keluarga, rombongan/instansi, paket bulan madu, tour group, gathering, outing/team building, paket tour Nusa Penida dan berbagai wisata petualangan (adventure) di Bali.",
  url: "https://balimajestytour.id",
  phoneDisplay: "+62 819-1628-9844",
  whatsapp: "6281916289844",
  email: "info@balimajestytour.id",
  address: "Jalan Palapa 7, No.1A, Sesetan, Denpasar — Bali",
  nib: "0704230019712",
  npwp: "40.549.886.6-908.000",
  founded: 2017,
  socials: {
    instagram: { handle: "@balimajestytour", url: "https://instagram.com/balimajestytour" },
    facebook: { handle: "Bali Majesty Tour", url: "https://facebook.com/balimajestytour" },
    tiktok: { handle: "@balimajestytour", url: "https://tiktok.com/@balimajestytour" },
  },
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// ---------------------------------------------------------------------------
// Navigation — mirrors the live menu exactly.
// ---------------------------------------------------------------------------
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Profil Kami", href: "/profil-kami" },
  {
    label: "Paket",
    href: "/paket",
    children: [
      { label: "Paket Bali Tour 3 Hari 2 Malam", href: "/paket-bali-tour-3h2m" },
      { label: "Paket Tour Bali 4 Hari 3 Malam", href: "/paket-bali-tour-4h3m" },
      { label: "Paket Bali Tour 5 Hari 4 Malam", href: "/paket-bali-tour-5h4m" },
      { label: "Paket Adventure", href: "/paket-pertualangan" },
      { label: "Paket Nusa Penida", href: "/paket-nusa-penida" },
      { label: "Paket Bulan Madu", href: "/tour-bulan-madu" },
      { label: "Paket Tour Group", href: "/paket-tour-group" },
      { label: "Paket Tour Harian", href: "/paket-tour-harian" },
    ],
  },
  { label: "Sewa Mobil", href: "/sewa" },
  { label: "Sewa Bus", href: "/paket-bus" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Package category pages.
// ---------------------------------------------------------------------------
export type Tour = {
  name: string;
  price: string;
  image: string;
  badge?: string;
};

export type Category = {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  hero: string;
  tags: string[];
  items: Tour[];
};

const img = (f: string) => `/images/${f}`;

export const categories: Category[] = [
  {
    slug: "paket-bali-tour-3h2m",
    title: "Paket Bali Tour 3 Hari 2 Malam",
    kicker: "Best Seller",
    intro:
      "Program liburan yang paling banyak dicari. Sangat cocok untuk weekend, tersedia beberapa pilihan paket dengan objek wisata kekinian. Fasilitas lengkap: hotel, transport, tiket objek wisata, makan, dan pemandu wisata.",
    hero: img("Ulun-Danu-Beratan.jpg"),
    tags: ["3D2N", "Private Tour", "All-in"],
    items: [
      { name: "Paket Bali Ekonomis", price: "Rp 1.330.000", badge: "/Pax", image: img("destination-la-plancha.jpg") },
      { name: "Paket Bali Regular", price: "Rp 1.950.000", badge: "/Pax", image: img("Spot-Foto-Taman-Belanda-di-The-Blooms-Garden-The-Blooms-Bali.jpg") },
      { name: "Paket Bali Fantastik", price: "Rp 2.200.000", badge: "/Pax", image: img("Pantai-Lovina-Salah-Satu-Pantai-Wisata-Lumba-Lumba-di-Bali-Utara.jpg") },
      { name: "Paket Bali Adventure", price: "Rp 2.220.000", badge: "/Pax", image: img("Quad-ATV-1200x800-1.jpg") },
    ],
  },
  {
    slug: "paket-bali-tour-4h3m",
    title: "Paket Tour Bali 4 Hari 3 Malam",
    kicker: "Most Popular",
    intro:
      "Paket liburan ke Bali 4 Hari 3 Malam dengan tour program paling baru dan banyak opsi pilihan tour. Fasilitas sudah lengkap termasuk hotel, makan, transport, tiket objek wisata, dan pemandu wisata.",
    hero: img("pura-tanah-lot-bali-600x400-1.jpg"),
    tags: ["4D3N", "Private Tour", "All-in"],
    items: [
      { name: "Paket Bali Ekonomis", price: "Rp 2.500.000", badge: "/Pax", image: img("FotoJet-2024-02-15T094939162-3246762531.webp") },
      { name: "Paket Bali Regular", price: "Rp 2.900.000", badge: "/Pax", image: img("pantai-melasti-3-35614248.webp") },
      { name: "Paket Bali Fantastik", price: "Rp 3.250.000", badge: "/Pax", image: img("pura-tanah-lot-bali-600x400-1.jpg") },
      { name: "Paket Bali Adventure", price: "Rp 2.800.000", badge: "/Pax", image: img("ayung-rafting-ubud-2.jpg") },
    ],
  },
  {
    slug: "paket-bali-tour-5h4m",
    title: "Paket Bali Tour 5 Hari 4 Malam",
    kicker: "Explore More",
    intro:
      "Ingin jelajahi Bali lebih banyak? Paket wisata Bali 5 Hari 4 Malam dengan 4 opsi pilihan program tour. Fasilitas sudah termasuk hotel, transport, makan, tiket objek wisata, dan pemandu.",
    hero: img("pemandangan-dari-atas-tebing-uluwatu-668f3a0a6d951.webp"),
    tags: ["5D4N", "Private Tour", "All-in"],
    items: [
      { name: "Paket Bali Ekonomis", price: "Rp 3.000.000", badge: "/Pax", image: img("41c5beb9-9def-43bb-b7f0-c080fba14ef9-1723108981953-79f3a05f61627608607fae259c4d278f.webp") },
      { name: "Paket Bali Regular", price: "Rp 3.820.000", badge: "/Pax", image: img("exploring-bali_s-tirta-gangga-water-palace-1024x683-1.jpg") },
      { name: "Paket Bali Fantastik", price: "Rp 3.900.000", badge: "/Pax", image: img("pemandangan-dari-atas-tebing-uluwatu-668f3a0a6d951.webp") },
      { name: "Paket Bali Adventure", price: "Rp 3.700.000", badge: "/Pax", image: img("BananaBoatinginBoracay-KlookIndonesia-1.jpg") },
    ],
  },
  {
    slug: "paket-pertualangan",
    title: "Paket Adventure",
    kicker: "Adrenaline",
    intro:
      "List popular Bali adventure. Pacu adrenalin Anda dengan aktivitas petualangan paling seru di Pulau Dewata, dipandu tim berpengalaman dan peralatan berstandar keselamatan.",
    hero: img("SunriseGunungBaturdengan4WDJeep.jpg"),
    tags: ["Adventure", "Daily", "Guided"],
    items: [
      { name: "Tanjung Benoa Water Sport", price: "Rp 215.000", badge: "/Pax", image: img("IMG_1351.jpg") },
      { name: "Gunung Batur Kintamani Sunrise Jeep Tour", price: "Rp 300.000", badge: "/Pax", image: img("SunriseGunungBaturdengan4WDJeep.jpg") },
      { name: "Rafting / Arung Jeram Ubud Sungai Ayung", price: "Rp 299.000", badge: "/Pax", image: img("ayung-rafting-ubud-2.jpg") },
      { name: "ATV Ubud Adventure", price: "Rp 390.000", badge: "/Pax", image: img("atv-bali-ubud-full2.jpg") },
    ],
  },
  {
    slug: "paket-nusa-penida",
    title: "Paket Nusa Penida",
    kicker: "Island Hopping",
    intro:
      "Ingin liburan ke Nusa Penida? Percayakan kepada kami untuk memandu liburan Anda. Driver yang ramah, bisa bantu photo sepuasnya. Temukan paket wisata Nusa Penida yang cocok untukmu.",
    hero: img("kelingking-beach-a-marvelous-wonder-in-the-southwest-of-nusa-penida2.jpg"),
    tags: ["Island", "Snorkeling", "Beaches"],
    items: [
      { name: "Nusa Penida Timur 1 Hari", price: "Rp 399.000", badge: "/Pax", image: img("Rumah-Pohon-Tree-House-Nusa-Penida-1.jpg") },
      { name: "Nusa Penida Barat 1 Hari", price: "Rp 360.000", badge: "/Pax", image: img("kelingking-beach-a-marvelous-wonder-in-the-southwest-of-nusa-penida2.jpg") },
      { name: "Nusa Penida Kombinasi (Barat & Timur)", price: "Rp 410.000", badge: "/Pax", image: img("Pantai-Tecantik-Diamond-Beach.webp") },
      { name: "Nusa Penida 2 Hari 1 Malam", price: "Rp 850.000", badge: "/Pax", image: img("326138890.jpg") },
      { name: "Nusa Penida 1 Hari + Snorkeling", price: "Rp 540.000", badge: "/Pax", image: img("c9.jpg") },
      { name: "Nusa Penida 2 Hari 1 Malam + Snorkeling", price: "Rp 999.000", badge: "/Pax", image: img("99.jpg") },
    ],
  },
  {
    slug: "tour-bulan-madu",
    title: "Paket Bulan Madu",
    kicker: "Romantic",
    intro:
      "Paket Bulan Madu Bali, exclusive dan terbaru. Ingin merasakan moment terindah bersama yang terkasih? Rasakan liburan di Bali bersama tim profesional kami dan ciptakan moment yang tak terlupakan.",
    hero: img("Intimate-1.webp"),
    tags: ["Honeymoon", "Couple", "Luxury"],
    items: [
      { name: "Luxury Paket Bulan Madu 5 Hari 4 Malam", price: "Rp 13.990.000", badge: "/Couple", image: img("Intimate-1.webp") },
      { name: "Bulan Madu 3 Hari 2 Malam", price: "Rp 5.100.000", badge: "/Couple", image: img("paket-bulan-madu-lombok.jpg") },
      { name: "Bulan Madu 4 Hari 3 Malam", price: "Rp 6.700.000", badge: "/Couple", image: img("67208aa23bdbc.png") },
      { name: "Bulan Madu 5 Hari 4 Malam", price: "Rp 8.100.000", badge: "/Couple", image: img("WhatsApp-Image-2021-10-29-at-10.36.25.jpeg") },
      { name: "Bali + Nusa Penida 4 Hari 3 Malam", price: "Rp 7.600.000", badge: "/Couple", image: img("Mas-Ibnu-4278-scaled-1.jpg") },
    ],
  },
  {
    slug: "paket-tour-group",
    title: "Paket Tour Group",
    kicker: "Corporate & Family",
    intro:
      "Paket wisata group atau rombongan untuk perusahaan, instansi pemerintah, dan keluarga besar yang ingin liburan ke Bali. Harga lebih murah dibanding paket reguler. Cukup siapkan tiket pesawat, selanjutnya serahkan kepada kami.",
    hero: img("Paket-Tour-Bali-Dengan-Bus-Pariwisata-ZHM-Hotels.jpg"),
    tags: ["Group", "MICE", "Gathering"],
    items: [
      { name: "Paket A (3 Hari 2 Malam)", price: "Rp 1.475.000", badge: "/Pax", image: img("Group-Bali-4-hari-paket-A-2048x1110-1.jpg") },
      { name: "Bali + Nusa Penida (4 Hari 3 Malam)", price: "Rp 2.625.000", badge: "/Pax", image: img("trip-ke-nusa-penida.jpg") },
      { name: "Paket A (4 Hari 3 Malam)", price: "Rp 2.100.000", badge: "/Pax", image: img("delegasi-gpdrr-saat-berkunjung-ke-pura-luhur-uluwatu-di-pecatu-kuta-selatan-badung-bali-sabtu-2852022_169.jpeg") },
      { name: "Paket B (3 Hari 2 Malam)", price: "Rp 1.750.000", badge: "/Pax", image: img("EDITED-18.jpg") },
      { name: "Paket B (4 Hari 3 Malam)", price: "Rp 2.290.000", badge: "/Pax", image: img("atv-green-bali-adventure-photo-artificial-waterfall.webp") },
      { name: "Paket C (3 Hari 2 Malam)", price: "Rp 1.975.000", badge: "/Pax", image: img("ayung-dewata-rafting-07.jpg") },
      { name: "Paket C (4 Hari 3 Malam)", price: "Rp 2.650.000", badge: "/Pax", image: img("group-nusa-penida.jpg") },
      { name: "Bali + Nusa Penida (3 Hari 2 Malam)", price: "Rp 2.100.000", badge: "/Pax", image: img("Paket-Tour-Bali-Dengan-Bus-Pariwisata-ZHM-Hotels.jpg") },
    ],
  },
  {
    slug: "paket-tour-harian",
    title: "Paket Tour Harian",
    kicker: "Daily Tour",
    intro:
      "Pilihan paket tour harian (one day tour) untuk menjelajahi destinasi terbaik Bali dalam sehari. Fleksibel, private, dan dipandu driver berpengalaman yang merangkap sebagai guide.",
    hero: img("penglipuran-1.webp"),
    tags: ["One Day", "Private", "Flexible"],
    items: [
      { name: "Ulundanu Beratan – Pura Tanah Lot", price: "Rp 320.000", badge: "/Pax", image: img("tabanan-1645587331-300x200-1.jpeg") },
      { name: "Ubud Tour", price: "Rp 470.000", badge: "/Pax", image: img("pasar-seni-ubud-profile1645549827.jpeg") },
      { name: "Desa Penglipuran – Kintamani Tour", price: "Rp 450.000", badge: "/Pax", image: img("penglipuran-1.webp") },
      { name: "Ubud – Kintamani Tour", price: "Rp 580.000", badge: "/Pax", image: img("AKASA-Specialty-Coffee-Kintamani-Viewpoint.jpg") },
      { name: "Dolphin Tour Pantai Lovina – Ulundanu Beratan", price: "Rp 550.000", badge: "/Pax", image: img("Pantai-Lovina-Salah-Satu-Pantai-Wisata-Lumba-Lumba-di-Bali-Utara.jpg") },
      { name: "Nusa Dua – Uluwatu Tour", price: "Rp 540.000", badge: "/Pax", image: img("pemandangan-dari-atas-tebing-uluwatu-668f3a0a6d951.webp") },
      { name: "ATV Ride Ubud – Rafting Sungai Ayung", price: "Rp 725.000", badge: "/Pax", image: img("gosekadventure_20211228_p_2738661070755718603_1_2738661070755718603-01.webp") },
      { name: "Pura Lempuyang – Tirta Gangga Tour Bali Timur", price: "Rp 450.000", badge: "/Pax", image: img("Sejarah-Pura-Lempuyang-Tempat-Wisata-Religi-yang-Sarat-Makna-di-Bali.jpg") },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

// ---------------------------------------------------------------------------
// Slugs & detail-page lookups.
// ---------------------------------------------------------------------------
export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function tourSlug(t: Tour) {
  return slugify(t.name);
}

export function getTour(categorySlug: string, itemSlug: string) {
  const category = getCategory(categorySlug);
  if (!category) return null;
  const item = category.items.find((t) => tourSlug(t) === itemSlug);
  if (!item) return null;
  return { category, item };
}

export function tourParams(categorySlug: string) {
  const c = getCategory(categorySlug);
  return c ? c.items.map((t) => ({ item: tourSlug(t) })) : [];
}

export function vehicleSlug(v: Vehicle) {
  return slugify(`${v.name} ${v.seats}`);
}

export function getVehicle(rentalSlug: string, itemSlug: string) {
  const rental = rentalSlug === rentalBus.slug ? rentalBus : rentalCars;
  const item = rental.vehicles.find((v) => vehicleSlug(v) === itemSlug);
  if (!item) return null;
  return { rental, item };
}

export function vehicleParams(rentalSlug: string) {
  const rental = rentalSlug === rentalBus.slug ? rentalBus : rentalCars;
  return rental.vehicles.map((v) => ({ item: vehicleSlug(v) }));
}

// ---------------------------------------------------------------------------
// Vehicle rentals.
// ---------------------------------------------------------------------------
export type Vehicle = { name: string; seats: string; type: string; image: string };

export const rentalCars = {
  slug: "sewa",
  title: "Sewa Mobil",
  kicker: "Car Charter",
  intro:
    "Jelajahi Bali tanpa ribet — sewa mobil Bali dengan sopir berpengalaman. Harga sudah termasuk mobil (sesuai pilihan), BBM, dan sopir yang merangkap sebagai pemandu Anda selama liburan di Bali. Armada terjaga kondisi dan kebersihannya.",
  hero: img("rama-krisna-tuban-14.jpg"),
  vehicles: [
    { name: "All New Xenia", seats: "6 Seat", type: "MPV", image: img("Travel-Tour-Agent-9.png") },
    { name: "All New Toyota Avanza", seats: "6 Seat", type: "MPV", image: img("Travel-Tour-Agent-10.png") },
    { name: "Suzuki APV", seats: "7 Seat", type: "MPV", image: img("Travel-Tour-Agent-11.png") },
    { name: "Mitsubishi Xpander", seats: "6 Seat", type: "MPV", image: img("Travel-Tour-Agent-18.png") },
    { name: "Toyota Innova Reborn", seats: "6 Seat", type: "Premium MPV", image: img("Travel-Tour-Agent-19.png") },
    { name: "Toyota Fortuner", seats: "6 Seat", type: "SUV", image: img("Travel-Tour-Agent-20.png") },
    { name: "Toyota Alphard", seats: "5 Seat", type: "Luxury", image: img("Travel-Tour-Agent-21.png") },
    { name: "Hiace Commuter", seats: "14 Seat", type: "Van", image: img("Travel-Tour-Agent-22.png") },
    { name: "Toyota Hiace Premio", seats: "12 Seat", type: "Luxury Van", image: img("Travel-Tour-Agent-24.png") },
    { name: "Isuzu Elf Short", seats: "12 Seat", type: "Minibus", image: img("Travel-Tour-Agent-31.png") },
    { name: "Isuzu Elf 19 Seater", seats: "19 Seat", type: "Minibus", image: img("Travel-Tour-Agent-32.png") },
  ] as Vehicle[],
};

export const rentalBus = {
  slug: "paket-bus",
  title: "Sewa Bus",
  kicker: "Bus Charter",
  intro:
    "Merencanakan perjalanan kelompok di Bali? Nikmati pengalaman tanpa repot dengan layanan sewa bus pariwisata berkualitas dan harga kompetitif. Dari fasilitas modern hingga sopir profesional, kami siap menjadikan perjalanan rombongan Anda lebih istimewa.",
  hero: img("Paket-Tour-Bali-Dengan-Bus-Pariwisata-ZHM-Hotels.jpg"),
  vehicles: [
    { name: "Big Bus", seats: "45 Seat", type: "Big Bus", image: img("Travel-Tour-Agent-29.png") },
    { name: "Medium Bus", seats: "35 Seat", type: "Medium Bus", image: img("Travel-Tour-Agent-27.png") },
    { name: "Medium Bus", seats: "30 Seat", type: "Medium Bus", image: img("bus-30-seat.png") },
    { name: "Medium Bus", seats: "23 Seat", type: "Medium Bus", image: img("Travel-Tour-Agent-30.png") },
    { name: "Hiace Commuter", seats: "14 Seat", type: "Van", image: img("Travel-Tour-Agent-22.png") },
    { name: "Toyota Hiace Premio", seats: "12 Seat", type: "Luxury Van", image: img("Travel-Tour-Agent-24.png") },
    { name: "Isuzu Elf 19 Seater", seats: "19 Seat", type: "Minibus", image: img("Travel-Tour-Agent-32.png") },
  ] as Vehicle[],
};

// ---------------------------------------------------------------------------
// Home / About supporting content.
// ---------------------------------------------------------------------------
export const whyChooseUs = [
  {
    title: "Jaringan Terluas",
    text: "Bali Majesty Tour menghadirkan berbagai pilihan produk dan layanan perjalanan ke berbagai destinasi di seluruh daerah Bali.",
    icon: "Network",
  },
  {
    title: "Terpercaya",
    text: "Transaksi perjalanan Anda dijamin aman, didukung sistem teknologi reservasi dan verifikasi terkini yang terpercaya.",
    icon: "ShieldCheck",
  },
  {
    title: "Pelayanan Terbaik",
    text: "Jaminan layanan perencanaan dan pemesanan produk perjalanan yang mudah dan murah, dengan konfirmasi singkat dan proses akurat.",
    icon: "Sparkles",
  },
  {
    title: "Hotline 24 Jam",
    text: "Jangan sungkan menghubungi kami. Travel consultant kami yang berpengalaman siap melayani 24 jam setiap hari, di mana pun Anda berada.",
    icon: "Clock",
  },
];

export const testimonials = [
  {
    name: "Ana Mantaw",
    location: "Jakarta",
    text: "Ketika saya di Bali selama 6 hari saya menggunakan jasa Bali Majesty Tour untuk rental mobil plus BBM & driver. Pengalaman saya cukup menyenangkan dengan driver Dodick, orangnya komunikatif & kooperatif. Sepanjang perjalanan kita banyak bercerita sehingga menambah wawasan mengenai Bali. Recommended nih 👍",
  },
  {
    name: "Karim B",
    location: "Singapore",
    text: "This summer holiday, we booked with Bali Majesty Tour, and they helped make our vacation as great as possible. The service from the staff, especially Putu, was excellent. If you want your holiday to be fully arranged by Bali's top specialists, book with Bali Majesty. Thank you so much!",
  },
  {
    name: "Meiliana HA",
    location: "Surabaya",
    text: "Chartered a car for a day for our pre-wedding photoshoot and the driver was on time. The car is well-maintained too. Bli Putu recommended really nice places and good local Bali food. We love the experience and plan to book again next time. Thank you Bli Putu!",
  },
  {
    name: "Nagraj G",
    location: "India",
    text: "Thank you Putu for all your help to show us around Bali. You are such an amazing personality. We had a great time in Bali. I recommend Bali Majesty Tour services to anyone visiting Bali.",
  },
];

export const faqs = [
  {
    q: "Apakah bisa untuk peserta 1 orang?",
    a: "Pelayanan kami adalah private tour, jadi tidak menggabungkan peserta dengan kelompok lain. Jika peserta hanya 1 orang bisa saja kami layani, akan tetapi harganya pasti akan lebih mahal karena kebutuhan utama seperti hotel dan transport akan ditanggung sendiri.",
  },
  {
    q: "Apakah kami bisa mengubah susunan acaranya?",
    a: "Sangat bisa! Anda bisa mengubah program paket wisata yang sudah ada sehingga bisa menyusun program tour sesuai keinginan. Silakan sampaikan kepada CS kami, dengan senang hati kami akan menyusun kembali.",
  },
  {
    q: "Cara dan proses pembayarannya bagaimana?",
    a: "Sebagai garansi booking, pembayaran deposit wajib dilakukan saat pemesanan paket liburan ke Bali, karena kami juga harus melakukan pembayaran deposit ke pihak hotel dan vendor pendukung lainnya. Sisa pembayaran bisa dilakukan setelah tiba di Bali.",
  },
  {
    q: "Apa itu Private Tour?",
    a: "Private tour artinya pelayanan tour Bali yang tidak digabung dengan peserta lain. Ini sangat memberikan kenyamanan ketika sedang melakukan perjalanan. Pengaturan waktu juga sangat fleksibel, disesuaikan dengan kebutuhan Anda.",
  },
  {
    q: "Bagaimana cara pemesanannya?",
    a: "Untuk informasi dan reservasi silakan hubungi salah satu CS kami. Pastikan menanyakan dulu semua aktivitas menyangkut pilihan tour, dengan senang hati kami akan menjelaskan secara detail. Anda juga bisa langsung menghubungi kami via WhatsApp.",
  },
];

export const homeStats = [
  { value: "7+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Pilihan Paket Tour" },
  { value: "10K+", label: "Wisatawan Bahagia" },
  { value: "24/7", label: "Layanan Hotline" },
];
