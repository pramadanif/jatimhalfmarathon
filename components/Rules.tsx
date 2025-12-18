
import React, { useState } from 'react';
import { RULES } from '../constants.tsx';
import { ShieldAlert, Plus, Minus, FileText } from 'lucide-react';

const Rules: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-maroon-600/10 w-20 h-20 rounded-3xl flex items-center justify-center">
             <ShieldAlert className="w-10 h-10 text-maroon-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-maroon-900 leading-tight">Syarat & Ketentuan</h2>
          <p className="text-maroon-900/60 font-medium leading-relaxed">
            Keamanan Anda adalah prioritas kami. Seluruh aturan dirancang untuk menjamin sportivitas dan kenyamanan.
          </p>
          <div className="p-6 bg-cream/40 rounded-2xl border border-dashed border-maroon-900/20 space-y-4">
             <div className="flex items-center gap-3">
                <FileText className="text-maroon-900 w-5 h-5" />
                <span className="font-bold text-maroon-900">Legal Statement</span>
             </div>
             <p className="text-xs text-maroon-900/50 italic">
                Pendaftaran menyatakan persetujuan mutlak atas semua regulasi Jatim Run 2026.
             </p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {RULES.map((rule, idx) => (
            <div key={idx} className={`rounded-3xl border transition-all ${openIndex === idx ? 'border-maroon-900 shadow-xl shadow-maroon-900/5 bg-white' : 'border-maroon-900/5 bg-cream/10'}`}>
              <button 
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                   <span className="bg-maroon-900 text-cream w-10 h-10 rounded-xl flex items-center justify-center font-bold">{idx + 1}</span>
                   <h3 className="text-xl font-bold text-maroon-900">{rule.title}</h3>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm border border-maroon-900/5 text-maroon-900">
                   {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                  <ul className="space-y-4">
                    {rule.items.map((item, i) => (
                      <li key={i} className="flex gap-4 text-maroon-900/70 font-medium leading-relaxed">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-maroon-600 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
