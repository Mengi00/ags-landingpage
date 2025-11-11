import { BarChart3, Building2, Award, TrendingUp } from "lucide-react"

export default function Stats() {
  const stats = [
    { icon: BarChart3, number: "+16,000M", label: "Recuperados", highlight: "Millones en pesos" },
    { icon: Building2, number: "+70", label: "Clientes", highlight: "Empresas satisfechas" },
    { icon: Award, number: "+3M", label: "Licencias", highlight: "Gestionadas" },
    { icon: TrendingUp, number: "+60%", label: "Máximo ahorro", highlight: "Por empresa" },
  ]

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group flex flex-col gap-2 p-8 hover:bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 mb-4">
                  <Icon size={28} className="text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white text-sm font-medium">{stat.label}</div>
                <div className="text-blue-100 text-xs mt-2">{stat.highlight}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
