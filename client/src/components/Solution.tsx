import { Card } from '@/components/ui/card';
import { Cpu, Users, CheckCircle2 } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solucion" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">La solución: AGS WEB-SIL</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimizamos la gestión y recuperación de fondos a través de una combinación única de
            tecnología y experiencia profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-software">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Software Inteligente</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Automatiza el seguimiento y gestión de licencias médicas con tecnología de punta
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Recopilación automática de información</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Seguimiento en tiempo real de cada licencia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Trazabilidad completa del proceso</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Alertas proactivas para evitar prescripción</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-servicios">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-2xl font-bold">Equipo Especializado</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Profesionales que maximizan la recuperación con un servicio a medida
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gestión profesional de trámites complejos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Asesoría continua y personalizada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Recuperación histórica de subsidios</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Cero estrés para su equipo interno</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-3">Resultado</h3>
          <p className="text-lg">
            Apoyo integral y confiable al área de Recursos Humanos, asegurando{' '}
            <span className="font-semibold text-primary">eficiencia y ahorro</span> para la empresa
          </p>
        </Card>
      </div>
    </section>
  );
}
