
import React from 'react';
import { SPONSORS } from '../constants.tsx';

const Sponsors: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-8">
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">OFFICIAL PARTNERS & SPONSORS</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {SPONSORS.map((sponsor, idx) => (
             <img 
               key={idx}
               src={sponsor.logo} 
               alt={sponsor.name} 
               className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
               title={sponsor.name}
             />
           ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
