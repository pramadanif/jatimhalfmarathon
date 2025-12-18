
import React, { useState, useEffect } from 'react';
import { EVENT_DATE } from '../constants.tsx';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon-900 pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80" 
          alt="Marathon Background" 
          className="w-full h-full object-cover opacity-15 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-maroon-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-cream space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-maroon-600/30 border border-maroon-600/50 px-4 py-2 rounded-full text-gold font-bold text-sm tracking-wide">
            <span className="animate-pulse">●</span> EVENT TERBESAR JAWA TIMUR 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            JATIM HALF <br />
            <span className="text-gold drop-shadow-lg text-glow">MARATHON 2026</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream/70 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Run Together, Fun Together! Bergabunglah dalam perhelatan olahraga ikonik di jantung Kota Surabaya.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Calendar className="text-gold w-5 h-5" />
              <span>1 FEBRUARI 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-gold w-5 h-5" />
              <span>TUGU PAHLAWAN, SURABAYA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-maroon-600 hover:bg-maroon-700 text-cream px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-maroon-900/40 flex items-center justify-center gap-2">
              DAFTAR SEKARANG <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-cream/10 hover:bg-cream/20 border border-cream/20 text-cream px-10 py-5 rounded-xl font-bold text-lg transition-all">
              LIHAT RUTE
            </button>
          </div>
        </div>

        {/* Countdown Card */}
        <div className="bg-maroon-700/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-cream text-center shadow-2xl relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold rounded-br-2xl"></div>
          
          <h3 className="text-xl font-bold mb-8 text-gold tracking-widest uppercase">COUNTDOWN TO RACE</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds },
            ].map((unit) => (
              <div key={unit.label} className="space-y-2">
                <div className="bg-maroon-900/50 border border-white/5 rounded-2xl p-4 md:p-6 text-3xl md:text-5xl font-black text-gold">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cream/40">{unit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
