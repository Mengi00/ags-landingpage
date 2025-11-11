import { Clock, CheckCircle2, TrendingUp } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: Clock,
      title: "Fase 1: Diagnóstico",
      description: "30-60 días de análisis exhaustivo de tu situación actual",
      details: "Identificamos oportunidades de recuperación y puntos de mejora",
    },
    {
      icon: CheckCircle2,
      title: "Fase 2: Implementación",
      description: "Deploying WebSIL con integración completa a tus sistemas",
      details: "Capacitación de equipo y configuración personalizada",
    },
    {
      icon: TrendingUp,
      title: "Fase 3: Gestión Continua",
      description: "Soporte profesional permanente y optimización",
      details: "Seguimiento, reportes y mejora continua de resultados",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
          Proceso de Implementación
        </h2>
        <p className="text-gray-600 mb-20 text-lg max-w-2xl">
          Tres etapas claras y comprobadas para maximizar tu recuperación
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                <div className="group p-8 rounded-2xl bg-white border border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {idx + 1}
                  </div>
                  <div className="flex gap-4 mb-4 mt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 font-semibold text-sm mb-3">{step.description}</p>
                  <p className="text-gray-600 text-sm">{step.details}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
