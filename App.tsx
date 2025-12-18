
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Guest from './components/Guest';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Rules from './components/Rules';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'categories', 'schedule', 'rules'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar activeTab={activeTab} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="categories" className="py-20 bg-cream">
          <Categories />
        </section>

        <section id="guest" className="py-20 bg-maroon-900 text-cream overflow-hidden">
          <Guest />
        </section>

        <section id="schedule" className="py-20 bg-white shadow-inner">
          <Schedule />
        </section>

        <section id="pricing" className="py-20 bg-cream-dark">
          <Pricing />
        </section>

        <section id="rules" className="py-20 bg-white">
          <Rules />
        </section>

        <section id="sponsors" className="py-12 bg-cream/30 border-t border-maroon-900/10">
          <Sponsors />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
