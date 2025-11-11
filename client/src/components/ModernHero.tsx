import heroImage from '@assets/generated_images/Hero_business_analytics_office_466b2eb0.png';

export default function ModernHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full bg-gradient-to-br from-white via-blue-50/50 to-white py-32 lg:py-40 relative overflow-hidden min-h-[85vh] flex items-center">
      {/* M3 Background decorative elements */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* M3 Chip badge */}
            <div className="inline-block">
              <span className="bg-primary/10 text-primary text-label-large px-5 py-2.5 rounded-full border border-primary/20 backdrop-blur-sm">
                Software + Servicios Profesionales
              </span>
            </div>

            {/* M3 Display Large Headline */}
            <h1 className="text-display-large lg:text-[64px] lg:leading-[72px] font-normal text-foreground mb-6 text-balance">
              Maximizamos la eficiencia en la{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">gestión y recuperación</span>{' '}
              de licencias médicas
            </h1>

            {/* M3 Body Large description */}
            <p className="text-body-large text-muted-foreground leading-relaxed max-w-xl">
              Recupere millones en subsidios perdidos con tecnología inteligente y asesoría profesional especializada
            </p>

            {/* M3 FAB-style CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('calculadora')}
                className="bg-primary hover:elevation-2 text-primary-foreground text-label-large font-medium py-4 px-8 rounded-3xl transition-all duration-200 hover:scale-[1.02]"
                data-testid="button-calcular-riesgo"
              >
                CALCULAR MI RIESGO
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-outline hover:border-primary/50 text-foreground text-label-large font-medium py-4 px-8 rounded-3xl backdrop-blur-sm hover:bg-surface-variant/10 transition-all duration-200"
                data-testid="button-agendar-demo"
              >
                AGENDAR DEMO
              </button>
            </div>

            {/* Social proof - single message only */}
            <div className="pt-6">
              <p className="text-title-medium text-secondary font-medium">
                +3 millones de licencias gestionadas exitosamente
              </p>
            </div>
          </div>

          {/* Image Column - M3 elevated card */}
          <div className="hidden lg:block">
            <div className="relative w-full h-[480px] group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 rounded-[24px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              {/* M3 Surface container with elevation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-card rounded-[24px] elevation-3 overflow-hidden border border-border/50">
                <img
                  src={heroImage}
                  alt="Gestión de licencias médicas"
                  className="w-full h-full object-cover"
                />
                {/* M3 surface tint overlay */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
