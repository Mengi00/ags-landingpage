import {
  Zap,
  Database,
  BarChart3,
  TrendingUp,
  Lock,
  Users,
  FileText,
  CheckCircle,
  Settings,
} from "lucide-react";

export default function Expertise() {
  const services = [
    {
      icon: Zap,
      title: "Automatización de Procesos",
      description: "algo bkn",
    },
    {
      icon: Database,
      title: "Gestión Centralizada",
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
    },
    {
      icon: TrendingUp,
      title: "Recuperación Financiera",
    },
    {
      icon: Lock,
      title: "Trazabilidad Total",
    },
    {
      icon: Users,
      title: "Soporte Especializado",
    },
    {
      icon: FileText,
      title: "Reportes Detallados",
    },
    {
      icon: CheckCircle,
      title: "Control de Calidad",
    },
    {
      icon: Settings,
      title: "Integración de Sistemas",
    },
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6 max-w-3xl">
          Los 5 Pilares de AGS – WebSIL
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl text-lg">
          Nuestra solución integra tecnología y reglas de negocio para maximizar
          la recuperacion de licencias medicas en empresas y organizaciones de
          mediano y gran tamaño
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent hover:from-blue-100 hover:to-blue-50 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-3 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </p>
                </div>
                <div>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
