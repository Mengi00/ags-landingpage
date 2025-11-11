import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function ModernHeader() {
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
    <header className={`w-full sticky top-0 z-40 transition-all duration-200 ${isScrolled ? 'elevation-2 backdrop-blur-xl bg-card/90' : 'bg-card'} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
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

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Sheet */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left">Navegación</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection('problema')}
                className="text-left text-body-large text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                data-testid="link-mobile-problema"
              >
                El Problema
              </button>
              <button
                onClick={() => scrollToSection('solucion')}
                className="text-left text-body-large text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                data-testid="link-mobile-solucion"
              >
                Solución
              </button>
              <button
                onClick={() => scrollToSection('calculadora')}
                className="text-left text-body-large text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                data-testid="link-mobile-calculadora"
              >
                Calculadora
              </button>
              
              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-secondary hover:elevation-2 text-secondary-foreground px-6 py-3 rounded-[100px] text-label-large font-medium elevation-1 transition-all duration-200 mt-4"
                data-testid="button-mobile-cta"
              >
                Solicitar Diagnóstico
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
