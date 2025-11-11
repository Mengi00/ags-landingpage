import { Lightbulb, Target, Zap, Flag } from "lucide-react"

export default function ImpactLevels() {
  const levels = [
    {
      icon: Lightbulb,
      number: "Nivel 1",
      title: "Reacción",
      description: "Conecta con los participantes y genera una respuesta positiva desde el inicio.",
    },
    {
      icon: Target,
      number: "Nivel 2",
      title: "Conocimiento",
      description: "Aprende conceptos clave y adquiere herramientas aplicables de rol.",
    },
    {
      icon: Zap,
      number: "Nivel 3",
      title: "Comportamiento",
      description: "Aplica lo aprendido en el trabajo y fortalece competencias clave.",
    },
    {
      icon: Flag,
      number: "Nivel 4",
      title: "Resultado",
      description: "Transforma el aprendizaje en resultados medibles para el negocio.",
    },
  ]

  return (
    <section className="w-full bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image collage */}
          <div className="relative h-96 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl"></div>
            <div className="absolute inset-0 p-4">
              <div className="grid grid-cols-3 gap-3 h-full">
                <img
                  src="/placeholder.svg?height=200&width=150"
                  alt=""
                  className="rounded-lg object-cover col-span-1 row-span-2"
                />
                <img src="/placeholder.svg?height=140&width=150" alt="" className="rounded-lg object-cover" />
                <div className="bg-pink-500 rounded-full"></div>
                <img src="/placeholder.svg?height=140&width=150" alt="" className="rounded-lg object-cover" />
                <img src="/placeholder.svg?height=140&width=150" alt="" className="rounded-lg object-cover" />
                <div className="bg-cyan-400 rounded-full row-span-2"></div>
                <div className="bg-blue-400 rounded-full"></div>
                <img src="/placeholder.svg?height=140&width=150" alt="" className="rounded-lg object-cover" />
              </div>
            </div>
          </div>

          {/* Right side - Impact levels */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-balance">
              Descubre los 4 niveles del impacto que abarcan nuestras soluciones
            </h2>
            <div className="space-y-4">
              {levels.map((level, idx) => {
                const Icon = level.icon
                return (
                  <div key={idx} className="bg-white p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-blue-600 font-bold text-sm">
                          {level.number}: {level.title}
                        </p>
                        <p className="text-gray-700 text-sm mt-1">{level.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
