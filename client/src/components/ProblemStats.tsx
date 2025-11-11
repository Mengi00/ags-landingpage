import { Card } from '@/components/ui/card';
import { AlertTriangle, Users, DollarSign, Clock } from 'lucide-react';

export default function ProblemStats() {
  const problems = [
    {
      icon: Users,
      title: 'Para el trabajador',
      description: 'Incertidumbre, retrasos en pagos, pérdida de confianza',
    },
    {
      icon: Clock,
      title: 'Para Recursos Humanos',
      description: 'Horas hombre invertidas en trámites, gestión fragmentada',
    },
    {
      icon: DollarSign,
      title: 'Para Finanzas',
      description: 'Flujos retenidos, pérdida de liquidez',
    },
    {
      icon: AlertTriangle,
      title: 'Para la empresa',
      description: 'Pérdidas millonarias invisibles, riesgo de prescripción',
    },
  ];

  return (
    <section id="problema" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">El problema: Un sistema que diluye</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Los costos de cada licencia médica se acumulan silenciosamente y con impacto compartido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-problem-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-destructive/5 border border-destructive/20 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">60%</div>
              <p className="text-sm text-muted-foreground">
                Cobertura promedio de entidades pagadoras
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Se acumula silenciosamente día a día</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">5 años</div>
              <p className="text-sm text-muted-foreground">
                Plazo de prescripción - pérdida total
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
