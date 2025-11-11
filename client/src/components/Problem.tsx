import { Card } from '@/components/ui/card';
import { AlertTriangle, Users, DollarSign, Clock } from 'lucide-react';
import workflowImage from '@assets/generated_images/Workflow_transformation_visualization_1f06f61e.png';

export default function Problem() {
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

  const steps = [
    'Recibir información desde 3 emisores distintos',
    'Consultar cada RUT en la mutualidad',
    'Verificar en la caja de compensación',
    'Revisar históricos de 5 años',
    'Validar contra isapres',
    'Conciliar con RRHH, administración, tesorería y cobranza',
  ];

  return (
    <section id="problema" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* M3 Headline Large */}
        <div className="text-center mb-16">
          <h2 className="text-headline-large mb-4">El problema: Un sistema que diluye</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Los costos de cada licencia médica se acumulan silenciosamente y con impacto compartido
          </p>
        </div>

        {/* M3 Problem cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-200 rounded-[24px] bg-card border-border"
                data-testid={`card-problem-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-destructive/10 rounded-[16px] flex items-center justify-center elevation-1">
                    <Icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-title-large">{problem.title}</h3>
                  <p className="text-body-small text-muted-foreground">{problem.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* M3 Impact stats card */}
        <div className="mb-24 bg-destructive/5 border border-destructive/20 rounded-[24px] p-8 elevation-1">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-display-small font-normal text-destructive mb-2">60%</div>
              <p className="text-body-medium text-muted-foreground">
                Cobertura promedio de entidades pagadoras
              </p>
            </div>
            <div>
              <div className="text-display-small font-normal text-destructive mb-2">40%</div>
              <p className="text-body-medium text-muted-foreground">Se acumula silenciosamente día a día</p>
            </div>
            <div>
              <div className="text-display-small font-normal text-destructive mb-2">5 años</div>
              <p className="text-body-medium text-muted-foreground">
                Plazo de prescripción - pérdida total
              </p>
            </div>
          </div>
        </div>

        {/* M3 Process complexity section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-headline-medium mb-4">Cada licencia es un laberinto administrativo</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Un flujo masivo de datos que se dispersa y se vuelve complejo de controlar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* M3 Image container */}
            <div className="rounded-[24px] overflow-hidden elevation-2">
              <img
                src={workflowImage}
                alt="Complejidad del proceso"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {/* M3 Steps card */}
              <Card className="p-8 bg-primary/5 border-primary/20 rounded-[24px]">
                <h3 className="text-title-large mb-6">Para rastrear una sola licencia:</h3>
                <ul className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex gap-3" data-testid={`step-${index}`}>
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-label-medium font-medium">
                        {index + 1}
                      </span>
                      <span className="text-body-medium">{step}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* M3 Time stats card */}
              <Card className="p-8 bg-destructive/5 border-destructive/20 rounded-[24px]">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-headline-small font-semibold text-destructive mb-2">~33 min</div>
                    <p className="text-body-small text-muted-foreground">Por licencia</p>
                  </div>
                  <div>
                    <div className="text-headline-small font-semibold text-destructive mb-2">426 hrs</div>
                    <p className="text-body-small text-muted-foreground">Mensuales (775 licencias)</p>
                  </div>
                  <div>
                    <div className="text-headline-small font-semibold text-destructive mb-2">≈3 personas</div>
                    <p className="text-body-small text-muted-foreground">Tiempo completo</p>
                  </div>
                  <div>
                    <div className="text-headline-small font-semibold text-destructive mb-2">25,500 hrs</div>
                    <p className="text-body-small text-muted-foreground">Acumuladas en 5 años</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
