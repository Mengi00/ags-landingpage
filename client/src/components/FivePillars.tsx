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
    <section id="beneficios" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Beneficios WEB-SIL: Unificación en 5 pilares</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Un sistema integral que transforma la gestión de licencias médicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
                data-testid={`card-pilar-${index}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-400/30">
                    <Icon className="w-6 h-6 text-pink-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-blue-100">{pillar.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
