import { Card } from '@/components/ui/card';
import { Building2, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const stats = [
    {
      icon: Building2,
      value: '+70',
      label: 'Clientes',
    },
    {
      icon: TrendingUp,
      value: 'MM$16.000',
      label: 'Recuperados',
    },
    {
      icon: Award,
      value: '+48',
      label: 'Certificados de conformidad',
    },
    {
      icon: CheckCircle2,
      value: '+3M',
      label: 'Licencias gestionadas',
    },
  ];

  const clients = [
    { name: 'Minería', examples: 'Collahuasi' },
    { name: 'Consumo masivo', examples: 'Embonor, Koandina, CCU' },
    { name: 'Banca', examples: 'Itaú' },
    { name: 'Otros', examples: 'Metro de Santiago, Oxiquim' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestra experiencia</h2>
          <p className="text-xl text-muted-foreground">
            Más de 10 años sirviendo al sector público y privado en Chile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-all duration-300"
                data-testid={`card-stat-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8" data-testid="card-sector-publico">
            <h3 className="text-xl font-bold mb-4">Sector Público</h3>
            <p className="text-primary font-semibold mb-4">Desde 2014</p>
            <p className="text-muted-foreground">
              Experiencia comprobada en la gestión de licencias médicas para instituciones del Estado
              chileno, con procesos optimizados y cumplimiento normativo garantizado.
            </p>
          </Card>

          <Card className="p-8" data-testid="card-sector-privado">
            <h3 className="text-xl font-bold mb-4">Sector Privado</h3>
            <p className="text-chart-2 font-semibold mb-4">Desde octubre 2024</p>
            <div className="space-y-3">
              {clients.map((client, index) => (
                <div key={index} className="flex gap-2" data-testid={`client-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">{client.name}:</span>{' '}
                    <span className="text-muted-foreground">{client.examples}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
