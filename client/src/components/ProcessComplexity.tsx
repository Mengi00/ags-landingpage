import { Card } from '@/components/ui/card';
import workflowImage from '@assets/generated_images/Workflow_transformation_visualization_1f06f61e.png';

export default function ProcessComplexity() {
  const steps = [
    'Recibir información desde 3 emisores distintos',
    'Consultar cada RUT en la mutualidad',
    'Verificar en la caja de compensación',
    'Revisar históricos de 5 años',
    'Validar contra isapres',
    'Conciliar con RRHH, administración, tesorería y cobranza',
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Cada licencia es un laberinto administrativo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un flujo masivo de datos que se dispersa y se vuelve complejo de controlar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={workflowImage}
              alt="Complejidad del proceso"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Para rastrear una sola licencia:</h3>
              <ul className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-3" data-testid={`step-${index}`}>
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">~33 min</div>
                  <p className="text-sm text-muted-foreground">Por licencia</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">426 hrs</div>
                  <p className="text-sm text-muted-foreground">Mensuales (775 licencias)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">≈3 personas</div>
                  <p className="text-sm text-muted-foreground">Tiempo completo</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">25,500 hrs</div>
                  <p className="text-sm text-muted-foreground">Acumuladas en 5 años</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
