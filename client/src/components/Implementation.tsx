import { Card } from '@/components/ui/card';
import { FileSearch, Zap, Users, Banknote } from 'lucide-react';

export default function Implementation() {
  const phase1Steps = [
    {
      icon: FileSearch,
      title: 'Diagnóstico Inicial',
      description: 'Identificamos los montos recuperables históricos',
    },
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Nuestro software recopila y organiza la información',
    },
  ];

  const phase2Steps = [
    {
      icon: Users,
      title: 'Gestión Profesional',
      description: 'Nuestro equipo ejecuta el proceso de recuperación',
    },
    {
      icon: Banknote,
      title: 'Recepción de Fondos',
      description: 'Tu empresa recibe los fondos directamente',
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Implementación en dos etapas</h2>
          <p className="text-xl text-muted-foreground">
            Un proceso claro y estructurado para maximizar resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8" data-testid="card-fase-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Fase 1: Preparación y Automatización</h3>
              <p className="text-sm text-primary font-semibold">30 a 60 días</p>
            </div>
            <div className="space-y-6">
              {phase1Steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4" data-testid={`fase1-step-${index}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-8" data-testid="card-fase-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Fase 2: Gestión y Recepción</h3>
              <p className="text-sm text-chart-2 font-semibold">Desde día 60 en adelante</p>
            </div>
            <div className="space-y-6">
              {phase2Steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4" data-testid={`fase2-step-${index}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-chart-2" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
