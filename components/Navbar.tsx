
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Categories', href: '#categories', id: 'categories' },
    { name: 'Schedule', href: '#schedule', id: 'schedule' },
    { name: 'Rules', href: '#rules', id: 'rules' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-maroon-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-maroon-600 p-2 rounded-lg">
            <Rocket className="text-cream w-6 h-6" />
          </div>
          <span className={`font-extrabold text-xl tracking-tighter ${isScrolled ? 'text-cream' : 'text-white'}`}>
            JATIM<span className="text-gold">RUN</span> 2026
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold text-sm transition-colors hover:text-gold ${
                activeTab === link.id 
                  ? 'text-gold' 
                  : (isScrolled ? 'text-cream/80' : 'text-white/80')
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-maroon-600 hover:bg-maroon-700 text-cream px-6 py-2 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-maroon-900/40">
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-cream' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-cream' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-maroon-900 absolute top-full left-0 right-0 shadow-xl border-t border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-cream font-bold text-lg border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-maroon-600 text-cream py-4 rounded-xl font-bold text-lg shadow-lg">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
