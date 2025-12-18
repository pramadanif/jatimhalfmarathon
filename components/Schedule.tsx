
import React from 'react';
import { Package, Flag, MapPin, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const events = [
    {
      date: '30 JAN 2026',
      time: '09:00 - 19:00 WIB',
      title: 'Race Pack Collection Day 1',
      location: 'Tugu Pahlawan, Surabaya',
      icon: Package,
      color: 'bg-maroon-700'
    },
    {
      date: '31 JAN 2026',
      time: '09:00 - 19:00 WIB',
      title: 'Race Pack Collection Day 2',
      location: 'Tugu Pahlawan, Surabaya',
      icon: Package,
      color: 'bg-maroon-700'
    },
    {
      date: '01 FEB 2026',
      time: '04:00 WIB - Selesai',
      title: 'Race Day: Jatim Run 2026',
      location: 'Start & Finish: Tugu Pahlawan',
      icon: Flag,
      color: 'bg-maroon-600'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-maroon-900 tracking-tight">Jadwal Penting</h2>
        <p className="text-maroon-900/50 font-medium text-lg">Persiapkan dirimu untuk petualangan lari terbaik tahun ini.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {events.map((event, idx) => (
          <div key={idx} className={`group bg-white p-6 md:p-8 rounded-3xl border border-maroon-900/5 shadow-xl hover:shadow-2xl transition-all flex flex-col md:flex-row items-center gap-8 border-l-8 hover:border-l-maroon-900 transition-all duration-300`} style={{ borderLeftColor: idx === 2 ? '#8C1007' : '#660B05' }}>
            <div className={`${event.color} p-5 rounded-2xl text-cream`}>
              <event.icon className="w-8 h-8" />
            </div>
            
            <div className="flex-grow space-y-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-2">
                <span className="bg-cream px-3 py-1 rounded-full text-maroon-900 font-bold text-xs">{event.date}</span>
                <span className="flex items-center gap-1 text-maroon-900/40 text-xs font-bold"><Clock className="w-4 h-4" /> {event.time}</span>
              </div>
              <h3 className="text-2xl font-bold text-maroon-900">{event.title}</h3>
              <p className="flex items-center justify-center md:justify-start gap-2 text-maroon-900/60 font-medium italic">
                <MapPin className="w-4 h-4 text-maroon-600" /> {event.location}
              </p>
            </div>

            <div className="hidden md:block">
               <button className="text-maroon-900 font-bold hover:text-maroon-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                 Add to Calendar →
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-cream/30 p-6 rounded-2xl text-center text-maroon-900/50 text-sm italic font-medium border border-maroon-900/10">
        * Lokasi pengambilan RPC & Start/Finish terpusat di Area Monumen Tugu Pahlawan Surabaya.
      </div>
    </div>
  );
};

export default Schedule;
