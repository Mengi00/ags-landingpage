import { Zap, BarChart3 } from "lucide-react"

export default function Services() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-blue-50 py-24 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-20">
          Maximiza la recuperación de licencias médicas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                    <Zap size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Automatización Inteligente
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    WebSIL automatiza el proceso de gestión y recuperación de licencias médicas, reduciendo tiempos de
                    tramitación y errores manuales.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                    <BarChart3 size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Control y Recuperación Financiera
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Obtén trazabilidad total, control financiero y recupera hasta el 60% de los montos que normalmente
                    se pierden por gestión ineficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-96 h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-300 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl group-hover:shadow-blue-300/50"></div>
              <img
                src="/placeholder.svg?height=384&width=384"
                alt="Gestión de licencias médicas"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
