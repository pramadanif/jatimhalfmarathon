
import React from 'react';
import { Music, PlayCircle } from 'lucide-react';

const Guest: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-maroon-600 rounded-[2rem] rotate-3 opacity-30"></div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80" 
              alt="DJ Brena" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
              <div>
                <p className="text-gold font-bold tracking-widest uppercase text-sm mb-1">FEATURED ARTIST</p>
                <h3 className="text-4xl font-black text-cream">DJ BRENA</h3>
              </div>
              <div className="bg-maroon-600/40 backdrop-blur-md p-4 rounded-full border border-white/20">
                <Music className="w-8 h-8 text-gold" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-gold font-bold">
            ENTERTAINMENT STAGE
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight text-cream">
            Race Hard, <br />
            <span className="text-gold">Celebrate Harder!</span>
          </h2>
          <p className="text-xl text-cream/70 leading-relaxed font-medium">
            Tutup hari marathonmu dengan dentuman musik yang memompa adrenalin. Penampilan live dari <span className="text-gold font-bold underline decoration-maroon-600 underline-offset-4">DJ BRENA</span> siap menyambutmu di garis finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-maroon-900" alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-maroon-900 bg-maroon-600 text-cream flex items-center justify-center font-bold text-sm">+2k</div>
             </div>
             <p className="text-cream/50 text-sm font-semibold italic">Join thousands of happy runners!</p>
          </div>
          <button className="flex items-center gap-3 bg-cream text-maroon-900 px-8 py-4 rounded-2xl font-bold hover:bg-gold transition-all mx-auto lg:mx-0">
             <PlayCircle className="w-6 h-6" />
             WATCH PROMO VIDEO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
