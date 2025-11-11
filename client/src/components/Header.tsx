import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">AGS WEB-SIL</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problema')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-problema"
            >
              El Problema
            </button>
            <button
              onClick={() => scrollToSection('solucion')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-solucion"
            >
              Solución
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-beneficios"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('calculadora')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-calculadora"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contacto"
            >
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => scrollToSection('contacto')} data-testid="button-cta-header">
              Agendar Demo
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <button
              onClick={() => scrollToSection('problema')}
              className="text-left py-2 hover:text-primary transition-colors"
              data-testid="link-mobile-problema"
            >
              El Problema
            </button>
            <button
              onClick={() => scrollToSection('solucion')}
              className="text-left py-2 hover:text-primary transition-colors"
              data-testid="link-mobile-solucion"
            >
              Solución
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-left py-2 hover:text-primary transition-colors"
              data-testid="link-mobile-beneficios"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('calculadora')}
              className="text-left py-2 hover:text-primary transition-colors"
              data-testid="link-mobile-calculadora"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-left py-2 hover:text-primary transition-colors"
              data-testid="link-mobile-contacto"
            >
              Contacto
            </button>
            <Button className="mt-2" onClick={() => scrollToSection('contacto')} data-testid="button-mobile-cta">
              Agendar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
