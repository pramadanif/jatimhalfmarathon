
import React from 'react';
import { RACE_CATEGORIES } from '../constants.tsx';
import { Tag, TrendingUp } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-maroon-900 tracking-tight">Investasi Kesehatan</h2>
        <p className="text-maroon-900/50 font-medium text-lg">Amankan slotmu sekarang dengan harga terbaik dalam balutan marun.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {RACE_CATEGORIES.map((cat) => (
          <div key={cat.id} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-maroon-900/5 border border-maroon-900/5 relative flex flex-col items-center text-center overflow-hidden">
             {cat.id === '21k' && (
               <div className="absolute top-6 right-6 bg-gold text-maroon-900 text-[10px] font-black py-1 px-3 rounded-full uppercase tracking-widest">
                  POPULAR
               </div>
             )}
             <div className="w-16 h-16 rounded-3xl bg-cream flex items-center justify-center mb-8">
               <Tag className="w-8 h-8 text-maroon-900 opacity-50" />
             </div>
             
             <h3 className="text-xl font-bold text-maroon-900/40 uppercase tracking-[0.2em] mb-2">{cat.name}</h3>
             <div className="text-6xl font-black text-maroon-900 mb-8">{cat.distance}</div>

             <div className="space-y-6 w-full mb-10">
               <div className="p-6 rounded-2xl bg-maroon-900/5 border border-maroon-900/5">
                 <p className="text-maroon-900/40 text-xs font-bold uppercase tracking-widest mb-1">Normal Price</p>
                 <div className="text-2xl font-bold text-maroon-900">
                    Rp {cat.price.toLocaleString('id-ID')}
                 </div>
               </div>

               <div className="p-6 rounded-2xl bg-cream-dark border border-maroon-900/10 relative">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-maroon-600 text-cream text-[9px] font-black px-2 py-1 rounded">PROMO EARLY BIRD</div>
                 <p className="text-maroon-900/50 text-xs font-bold uppercase tracking-widest mb-1">Limited Slots</p>
                 <div className="text-3xl font-black text-maroon-600">
                    Rp {cat.earlyBird.toLocaleString('id-ID')}
                 </div>
               </div>
             </div>

             <button className="w-full bg-maroon-900 hover:bg-maroon-700 text-cream py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-maroon-900/20 mt-auto">
                DAFTAR SEKARANG
             </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
         <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg text-maroon-900/60 font-bold border border-maroon-900/5">
            <TrendingUp className="text-maroon-600 w-6 h-6" />
            Harga Early Bird tersedia terbatas hingga kuota promo terpenuhi!
         </div>
      </div>
    </div>
  );
};

export default Pricing;
