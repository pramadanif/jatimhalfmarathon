
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-900 text-cream pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-maroon-600 p-2 rounded-lg shadow-inner">
                <Rocket className="text-cream w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter">
                JATIM<span className="text-gold">RUN</span> 2026
              </span>
            </div>
            <p className="text-cream/50 font-medium leading-relaxed">
              Mendorong gaya hidup sehat dan sportivitas. Mari berlari bersama di bawah kibaran semangat Jawa Timur!
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white/5 hover:bg-maroon-600 p-3 rounded-xl transition-all border border-white/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold uppercase tracking-widest">Link Cepat</h4>
            <ul className="space-y-4 text-cream/60 font-medium">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-gold transition-colors">Kategori Lomba</a></li>
              <li><a href="#schedule" className="hover:text-gold transition-colors">Jadwal Acara</a></li>
              <li><a href="#rules" className="hover:text-gold transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold uppercase tracking-widest">Kontak Kami</h4>
            <ul className="space-y-4 text-cream/60 font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <span>info@jatimrun2026.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 text-gold uppercase tracking-widest">Newsletter</h4>
            <p className="text-cream/50 text-sm">Dapatkan update terbaru seputar race.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email anda" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex-grow focus:outline-none focus:border-gold transition-colors text-cream placeholder:text-cream/20"
              />
              <button className="bg-maroon-600 hover:bg-maroon-700 px-4 rounded-xl font-bold transition-all text-cream border border-white/10">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-cream/30 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 JATIM HALF MARATHON. REGAL EXCELLENCE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-gold transition-colors">COOKIE POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
