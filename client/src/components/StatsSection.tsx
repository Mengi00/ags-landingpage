import { BarChart3, Building2, Award, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: BarChart3, number: 'MM$16.000', label: 'Recuperados', highlight: 'Millones en pesos' },
    { icon: Building2, number: '+70', label: 'Clientes', highlight: 'Empresas satisfechas' },
    { icon: Award, number: '+3M', label: 'Licencias', highlight: 'Gestionadas' },
    { icon: TrendingUp, number: '+60%', label: 'Máximo ahorro', highlight: 'Por empresa' },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* M3 decorative background elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col gap-4 p-8 bg-white hover:bg-slate-50 rounded-[24px] border border-border hover:border-primary/30 transition-all duration-200 hover:-translate-y-1 elevation-1 hover:elevation-3"
                data-testid={`card-stat-${idx}`}
              >
                {/* M3 Icon container */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 elevation-1 group-hover:elevation-2 group-hover:scale-110 transition-all duration-200">
                  <Icon size={28} className="text-primary" />
                </div>
                
                {/* M3 Typography - Display Medium for numbers */}
                <div className="text-display-medium font-normal bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                  {stat.number}
                </div>
                
                {/* M3 Title Large for label */}
                <div className="text-title-large text-foreground">{stat.label}</div>
                
                {/* M3 Body Small for highlight */}
                <div className="text-body-small text-muted-foreground mt-1">{stat.highlight}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
