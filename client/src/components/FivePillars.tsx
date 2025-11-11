import { Card } from '@/components/ui/card';
import { Zap, Search, LayoutGrid, Shield, DollarSign } from 'lucide-react';

export default function FivePillars() {
  const pillars = [
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Minimiza tareas manuales y errores',
      color: 'primary',
    },
    {
      icon: Search,
      title: 'Trazabilidad',
      description: 'Seguimiento completo de cada licencia',
      color: 'chart-2',
    },
    {
      icon: LayoutGrid,
      title: 'Gestión',
      description: 'Organización centralizada y priorización',
      color: 'chart-3',
    },
    {
      icon: Shield,
      title: 'Control',
      description: 'Supervisión proactiva para evitar pérdidas',
      color: 'chart-4',
    },
    {
      icon: DollarSign,
      title: 'Recuperación de Fondos',
      description: 'Optimiza recursos y recupera fondos',
      color: 'chart-5',
    },
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beneficios WEB-SIL: Unificación en 5 pilares</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un sistema integral que transforma la gestión de licencias médicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-pilar-${index}`}
              >
                <div className="flex flex-col gap-4">
                  <div className={`w-12 h-12 bg-${pillar.color}/10 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${pillar.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
