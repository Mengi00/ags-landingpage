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
    <section id="calculadora" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Calcule su riesgo de exposición</h2>
          <p className="text-xl text-muted-foreground">
            Estime cuánto podría estar perdiendo su empresa en subsidios no recuperados
          </p>
        </div>

        <Card className="p-8">
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-4">
              Tamaño de su dotación: <span className="text-primary">{dotacion.toLocaleString('es-CL')}</span> trabajadores
            </label>
            <Slider
              value={[dotacion]}
              onValueChange={(value) => setDotacion(value[0])}
              min={100}
              max={10000}
              step={100}
              className="mb-2"
              data-testid="slider-dotacion"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>100</span>
              <span>10,000</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card hover-elevate transition-all duration-300" data-testid="card-riesgo-mensual">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Riesgo Mensual</h3>
              </div>
              <div className="text-2xl font-bold text-primary mb-1">
                {formatCurrency(risk.riesgoMensual)}
              </div>
              <p className="text-sm text-muted-foreground">Exposición promedio mensual</p>
            </Card>

            <Card className="p-6 bg-card hover-elevate transition-all duration-300" data-testid="card-riesgo-anual">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-chart-3/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-chart-3" />
                </div>
                <h3 className="font-semibold">Riesgo Anual</h3>
              </div>
              <div className="text-2xl font-bold text-chart-3 mb-1">
                {formatCurrency(risk.riesgoAnual)}
              </div>
              <p className="text-sm text-muted-foreground">Exposición anual estimada</p>
            </Card>

            <Card className="p-6 bg-card hover-elevate transition-all duration-300" data-testid="card-riesgo-5anos">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-semibold">Pérdida por Prescripción</h3>
              </div>
              <div className="text-2xl font-bold text-destructive mb-1">
                {formatCurrency(risk.riesgo5Anos)}
              </div>
              <p className="text-sm text-muted-foreground">Riesgo acumulado a 5 años</p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Con {risk.licenciasAnuales.toLocaleString('es-CL')} licencias estimadas al año
            </p>
            <Button size="lg" onClick={scrollToContact} data-testid="button-recuperar-fondos">
              Recupere estos fondos - Contáctenos
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
