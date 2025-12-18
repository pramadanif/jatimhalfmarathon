
import { RaceCategory, Sponsor, RuleSection } from './types';

export const EVENT_DATE = new Date('2026-02-01T04:00:00');

export const RACE_CATEGORIES: RaceCategory[] = [
  {
    id: '5k',
    name: 'Fun Run',
    distance: '5K',
    price: 220000,
    earlyBird: 180000,
    minAge: 12,
    color: 'bg-green',
    features: ['BIB Number', 'Jersey', 'Finisher Medal', 'Goodie Bag', 'Refreshment']
  },
  {
    id: '10k',
    name: 'Run Race',
    distance: '10K',
    price: 330000,
    earlyBird: 250000,
    minAge: 15,
    color: 'bg-orange',
    features: ['BIB Number', 'Jersey', 'Finisher Medal', 'Goodie Bag', 'Refreshment', 'Insurance']
  },
  {
    id: '21k',
    name: 'Half Marathon',
    distance: '21K',
    price: 399000,
    earlyBird: 300000,
    minAge: 17,
    color: 'bg-red',
    features: ['BIB Number', 'Jersey', 'Finisher Medal', 'Goodie Bag', 'Refreshment', 'Insurance', 'Timing Chip']
  }
];

export const SPONSORS: Sponsor[] = [
  { name: 'KiosTix', logo: 'https://picsum.photos/200/100?random=1' },
  { name: 'Solecampus', logo: 'https://picsum.photos/200/100?random=2' },
  { name: 'Prodia', logo: 'https://picsum.photos/200/100?random=3' },
  { name: 'Cimory', logo: 'https://picsum.photos/200/100?random=4' },
  { name: 'Garam Cap Kapal', logo: 'https://picsum.photos/200/100?random=5' },
  { name: 'Physio PJ', logo: 'https://picsum.photos/200/100?random=6' }
];

export const RULES: RuleSection[] = [
  {
    title: "Ketentuan Umum",
    items: [
      "Event lari jalan raya untuk kampanye hidup sehat & sportivitas.",
      "Terbuka untuk umum, pelajar, komunitas, atlet (lokal & internasional).",
      "Dengan mendaftar, peserta dianggap setuju semua aturan.",
      "Keputusan Panitia bersifat final & tidak bisa diganggu gugat."
    ]
  },
  {
    title: "Kategori & Batas Usia",
    items: [
      "5K: Minimal 12 tahun.",
      "10K: Minimal 15 tahun.",
      "21K: Minimal 17 tahun.",
      "Peserta < 18 tahun wajib melampirkan surat izin orang tua.",
      "Wajib membawa identitas resmi saat pengambilan race pack."
    ]
  },
  {
    title: "Ketentuan Peserta (Paling Krusial)",
    items: [
      "Wajib dalam kondisi sehat fisik & mental.",
      "Memakai BIB resmi di dada (tidak boleh dipindah tangankan).",
      "Datang 30 menit sebelum waktu start (04:00 WIB).",
      "Dilarang membawa senjata, alkohol, atau narkoba.",
      "BIB palsu atau tukar peserta berakibat diskualifikasi langsung."
    ]
  },
  {
    title: "Pembatalan & Refund",
    items: [
      "TIDAK ADA REFUND dengan alasan apa pun.",
      "Tidak bisa pindah nama atau dialihkan ke orang lain.",
      "Dalam situasi force majeure, panitia berhak melakukan reschedule."
    ]
  }
];
