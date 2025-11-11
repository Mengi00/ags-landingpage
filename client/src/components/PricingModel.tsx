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
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Modelo flexible y vinculado a resultados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solo pagamos cuando recuperamos. Sin costos ocultos, sin riesgos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 hover-elevate transition-all duration-300 ${
                tier.highlighted ? 'border-primary border-2' : ''
              }`}
              data-testid={`card-pricing-${index}`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-3">{tier.title}</h3>
                {tier.percentage !== null && (
                  <div className="text-5xl font-bold text-primary mb-2">{tier.percentage}</div>
                )}
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact} data-testid="button-solicitar-diagnostico">
            Solicitar Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
}
