
import React from 'react';
import { RACE_CATEGORIES } from '../constants.tsx';
import { CheckCircle2, Map as MapIcon, Info } from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-maroon-900 tracking-tight">Kategori Lomba</h2>
        <p className="text-maroon-900/60 font-medium text-lg">
          Pilih tantanganmu sesuai dengan tingkat kesiapan. Semua kategori mendapatkan fasilitas eksklusif dalam balutan warna kemenangan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {RACE_CATEGORIES.map((cat) => (
          <div key={cat.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-maroon-900/5 border border-maroon-900/5 hover:border-maroon-600 transition-all hover:-translate-y-2">
            <div className={`h-3 ${cat.id === '21k' ? 'bg-maroon-900' : cat.id === '10k' ? 'bg-maroon-700' : 'bg-maroon-600'}`}></div>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black text-maroon-900">{cat.name}</h3>
                  <div className="flex items-center gap-1 text-maroon-600 font-bold text-3xl mt-1">
                    {cat.distance}
                  </div>
                </div>
                <div className="bg-cream p-3 rounded-2xl group-hover:bg-maroon-600 group-hover:text-cream transition-colors text-maroon-900">
                  <MapIcon className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Fasilitas & Keuntungan</p>
                {cat.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-maroon-900/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-maroon-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-maroon-900/5 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs text-maroon-900/40 font-bold uppercase">
                  <Info className="w-4 h-4" />
                  Minimal usia {cat.minAge} tahun
                </div>
                <button className="w-full bg-maroon-900 group-hover:bg-maroon-600 text-cream py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                  Pilih Kategori <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-maroon-900 text-cream p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-maroon-600 rounded-full blur-[100px] opacity-30 -mr-32 -mt-32"></div>
        <div className="space-y-2 relative z-10 text-center md:text-left">
          <h3 className="text-3xl font-bold">Butuh Bantuan Pendaftaran?</h3>
          <p className="text-cream/60 text-lg font-medium">Dapatkan diskon spesial untuk komunitas atau fithub.</p>
        </div>
        <a href="https://wa.me/#" className="bg-maroon-600 hover:bg-maroon-700 text-cream px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-maroon-900/40 relative z-10 transition-transform active:scale-95 border border-white/10">
          Hubungi via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Categories;
