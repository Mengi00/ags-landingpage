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
    <header className={`w-full sticky top-0 z-40 transition-all duration-200 ${isScrolled ? 'elevation-2 backdrop-blur-xl bg-card/90' : 'bg-card'} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* M3 Logo */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-title-large elevation-1 group-hover:elevation-2 transition-all duration-200">
            A
          </div>
          <div>
            <div className="text-label-large text-foreground">AGS</div>
            <div className="text-label-small text-muted-foreground">WebSIL</div>
          </div>
        </button>

        {/* M3 Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('problema')}
            className="text-label-large text-foreground hover:text-primary transition-colors duration-200"
            data-testid="link-problema"
          >
            El Problema
          </button>
          <button
            onClick={() => scrollToSection('solucion')}
            className="text-label-large text-foreground hover:text-primary transition-colors duration-200"
            data-testid="link-solucion"
          >
            Solución
          </button>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="text-label-large text-foreground hover:text-primary transition-colors duration-200"
            data-testid="link-calculadora"
          >
            Calculadora
          </button>
          
          {/* M3 FAB CTA */}
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-secondary hover:elevation-2 text-secondary-foreground px-6 py-2.5 rounded-[100px] text-label-large font-medium elevation-1 transition-all duration-200 hover:scale-[1.02]"
            data-testid="button-cta-header"
          >
            Solicitar Diagnóstico
          </button>
        </div>
      </div>
    </header>
  );
}
