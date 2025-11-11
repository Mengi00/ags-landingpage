import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function PricingModel() {
  const tiers = [
    {
      title: 'Diagnóstico y Configuración Inicial',
      description: 'Identificamos los montos retenidos, revisamos historiales y preparamos la plataforma',
      percentage: null,
      features: [
        'Análisis completo de histórico',
        'Configuración de plataforma',
        'Capacitación del equipo',
      ],
    },
    {
      title: 'Activación y Recuperación Progresiva',
      description: 'Recuperación de subsidios históricos y gestión mensual de nuevos casos',
      percentage: '12%',
      features: [
        'Recuperación de histórico',
        'Gestión mensual continua',
        'Flujo permanente de fondos',
      ],
      highlighted: true,
    },
    {
      title: 'Soporte Integral y Gestión Continua',
      description: 'Asesoría profesional permanente y acceso completo a la plataforma',
      percentage: '0%',
      features: [
        'Asesoría profesional continua',
        'Tramitación ágil de licencias',
        'Acceso a plataforma para control',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* M3 Headline Large */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-headline-large mb-3 md:mb-4">Modelo flexible y vinculado a resultados</h2>
          <p className="text-base md:text-body-large text-muted-foreground max-w-3xl mx-auto px-4">
            Solo pagamos cuando recuperamos. Sin costos ocultos, sin riesgos.
          </p>
        </div>

        {/* M3 Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 rounded-[24px] hover-elevate transition-all duration-200 ${
                tier.highlighted ? 'border-primary border-2 elevation-2' : 'border-border'
              }`}
              data-testid={`card-pricing-${index}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-title-large mb-4">{tier.title}</h3>
                {tier.percentage !== null && (
                  <div className="text-display-small font-normal text-primary mb-3">{tier.percentage}</div>
                )}
                <p className="text-body-medium text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-body-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* M3 CTA button */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="rounded-[100px] text-label-large px-8 elevation-1 hover:elevation-2"
            data-testid="button-solicitar-diagnostico"
          >
            Solicitar Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
}
