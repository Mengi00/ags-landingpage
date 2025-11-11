import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';

export default function RiskCalculator() {
  const [dotacion, setDotacion] = useState(3000);

  const calculateRisk = (employees: number) => {
    const licenciasAnuales = employees * 3.1;
    const riesgoMensual = (employees * 3.1 * 33333) / 12;
    const riesgoAnual = employees * 3.1 * 33333;
    const riesgo5Anos = riesgoAnual * 5;

    return {
      licenciasAnuales: Math.round(licenciasAnuales),
      riesgoMensual: Math.round(riesgoMensual),
      riesgoAnual: Math.round(riesgoAnual),
      riesgo5Anos: Math.round(riesgo5Anos),
    };
  };

  const risk = calculateRisk(dotacion);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculadora" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* M3 Headline Large */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-headline-large mb-3 md:mb-4">Calcule su riesgo de exposición</h2>
          <p className="text-base md:text-body-large text-muted-foreground px-4">
            Estime cuánto podría estar perdiendo su empresa en subsidios no recuperados
          </p>
        </div>

        {/* M3 surface container (not a Card to avoid nesting) */}
        <div className="p-6 md:p-8 lg:p-10 rounded-[24px] elevation-2 bg-card border border-border">
          <div className="mb-8 md:mb-10">
            <label className="block text-lg md:text-title-large mb-4 md:mb-6">
              Tamaño de su dotación: <span className="text-primary font-semibold">{dotacion.toLocaleString('es-CL')}</span> trabajadores
            </label>
            <Slider
              value={[dotacion]}
              onValueChange={(value) => setDotacion(value[0])}
              min={100}
              max={10000}
              step={100}
              className="mb-3 h-3 cursor-pointer touch-pan-x"
              data-testid="slider-dotacion"
            />
            <div className="flex justify-between text-sm md:text-label-medium text-muted-foreground">
              <span>100</span>
              <span>10,000</span>
            </div>
          </div>

          {/* M3 Result cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <Card className="p-6 bg-card rounded-[24px] hover-elevate transition-all duration-200 border-border" data-testid="card-riesgo-mensual">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-[16px] flex items-center justify-center elevation-1">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-title-medium">Riesgo Mensual</h3>
              </div>
              <div className="text-headline-small font-semibold text-primary mb-2">
                {formatCurrency(risk.riesgoMensual)}
              </div>
              <p className="text-body-small text-muted-foreground">Exposición promedio mensual</p>
            </Card>

            <Card className="p-6 bg-card rounded-[24px] hover-elevate transition-all duration-200 border-border" data-testid="card-riesgo-anual">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-chart-3/10 rounded-[16px] flex items-center justify-center elevation-1">
                  <TrendingUp className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-title-medium">Riesgo Anual</h3>
              </div>
              <div className="text-headline-small font-semibold text-chart-3 mb-2">
                {formatCurrency(risk.riesgoAnual)}
              </div>
              <p className="text-body-small text-muted-foreground">Exposición anual estimada</p>
            </Card>

            <Card className="p-6 bg-card rounded-[24px] hover-elevate transition-all duration-200 border-border" data-testid="card-riesgo-5anos">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-[16px] flex items-center justify-center elevation-1">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-title-medium">Pérdida por Prescripción</h3>
              </div>
              <div className="text-headline-small font-semibold text-destructive mb-2">
                {formatCurrency(risk.riesgo5Anos)}
              </div>
              <p className="text-body-small text-muted-foreground">Riesgo acumulado a 5 años</p>
            </Card>
          </div>

          {/* M3 CTA */}
          <div className="text-center">
            <p className="text-body-medium text-muted-foreground mb-6">
              Con {risk.licenciasAnuales.toLocaleString('es-CL')} licencias estimadas al año
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="rounded-[100px] text-label-large px-8 elevation-1 hover:elevation-2"
              data-testid="button-recuperar-fondos"
            >
              Recupere estos fondos - Contáctenos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
