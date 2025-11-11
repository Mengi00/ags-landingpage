import { Card } from '@/components/ui/card';
import { Cpu, Users, CheckCircle2, Zap, Search, LayoutGrid, Shield, DollarSign } from 'lucide-react';

export default function SolutionBenefits() {
  const pillars = [
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Minimiza tareas manuales y errores',
    },
    {
      icon: Search,
      title: 'Trazabilidad',
      description: 'Seguimiento completo de cada licencia',
    },
    {
      icon: LayoutGrid,
      title: 'Gestión',
      description: 'Organización centralizada y priorización',
    },
    {
      icon: Shield,
      title: 'Control',
      description: 'Supervisión proactiva para evitar pérdidas',
    },
    {
      icon: DollarSign,
      title: 'Recuperación de Fondos',
      description: 'Optimiza recursos y recupera fondos',
    },
  ];

  return (
    <section id="solucion" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/85 relative overflow-hidden">
      {/* M3 decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* M3 Headline Large */}
        <div className="text-center mb-16">
          <h2 className="text-headline-large text-white mb-4">La solución: AGS WEB-SIL</h2>
          <p className="text-body-large text-white/90 max-w-3xl mx-auto">
            Optimizamos la gestión y recuperación de fondos a través de una combinación única de
            tecnología y experiencia profesional
          </p>
        </div>

        {/* M3 Solution cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 hover-elevate transition-all duration-200 rounded-[24px] bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15" data-testid="card-software">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-[16px] flex items-center justify-center elevation-1">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-title-large text-white">Software Inteligente</h3>
            </div>
            <p className="text-body-medium text-white/80 mb-6">
              Automatiza el seguimiento y gestión de licencias médicas con tecnología de punta
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Recopilación automática de información</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Seguimiento en tiempo real de cada licencia</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Trazabilidad completa del proceso</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Alertas proactivas para evitar prescripción</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-200 rounded-[24px] bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15" data-testid="card-servicios">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary/30 rounded-[16px] flex items-center justify-center elevation-1">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-title-large text-white">Equipo Especializado</h3>
            </div>
            <p className="text-body-medium text-white/80 mb-6">
              Profesionales que maximizan la recuperación con un servicio a medida
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Gestión profesional de trámites complejos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Asesoría continua y personalizada</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Recuperación histórica de subsidios</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-body-small text-white/90">Cero estrés para su equipo interno</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* M3 Five pillars section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-headline-medium text-white mb-4">5 pilares de beneficios</h3>
            <p className="text-body-large text-white/80 max-w-3xl mx-auto">
              Un sistema integral que transforma la gestión de licencias médicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-200 rounded-[24px] bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15"
                  data-testid={`card-pilar-${index}`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 bg-secondary/20 rounded-[16px] flex items-center justify-center border border-secondary/30 elevation-1">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-title-large text-white">{pillar.title}</h4>
                    <p className="text-body-medium text-white/80">{pillar.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* M3 Result card */}
        <Card className="p-10 bg-white/15 backdrop-blur-md border-white/30 rounded-[24px] text-center elevation-2">
          <h3 className="text-title-large text-white mb-4">Resultado</h3>
          <p className="text-body-large text-white/90">
            Apoyo integral y confiable al área de Recursos Humanos, asegurando{' '}
            <span className="font-semibold text-secondary">eficiencia y ahorro</span> para la empresa
          </p>
        </Card>
      </div>
    </section>
  );
}
