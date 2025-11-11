import { useState, useEffect } from 'react';

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`w-full sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-blue-100 shadow-sm' : 'bg-white border-b border-blue-100'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            A
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">AGS</div>
            <div className="text-xs font-semibold text-gray-600">WebSIL</div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('problema')}
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors"
            data-testid="link-problema"
          >
            El Problema
          </button>
          <button
            onClick={() => scrollToSection('solucion')}
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors"
            data-testid="link-solucion"
          >
            Solución
          </button>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors"
            data-testid="link-calculadora"
          >
            Calculadora
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            data-testid="button-cta-header"
          >
            Solicitar Diagnóstico
          </button>
        </div>
      </div>
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"></div>
    </header>
  );
}
