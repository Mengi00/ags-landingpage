import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import heroImage from '@assets/generated_images/Hero_business_analytics_office_466b2eb0.png';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Análisis de datos profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Maximizamos la eficiencia en la{' '}
              <span className="text-primary">gestión y recuperación</span> de licencias médicas
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Software inteligente + servicios profesionales para optimizar recursos y recuperar fondos
              que su empresa merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base px-8"
                onClick={() => scrollToSection('calculadora')}
                data-testid="button-calcular-riesgo"
              >
                Calcular Mi Riesgo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                onClick={() => scrollToSection('contacto')}
                data-testid="button-agendar-demo"
              >
                Agendar Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">MM$16.000 recuperados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">+70 clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">+3M licencias gestionadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
