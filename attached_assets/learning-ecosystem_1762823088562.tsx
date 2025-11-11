"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export default function LearningEcosystem() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="w-full bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <span className="bg-blue-900/50 text-blue-100 text-xs px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm">
            Conoce nuestro nuevo ecosistema de aprendizaje
          </span>
        </div>

        <h2 className="text-5xl font-bold text-white mb-8 max-w-3xl mx-auto text-balance leading-tight">
          Conoce nuestro nuevo ecosistema de aprendizaje
        </h2>

        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
          Ante un mundo volátil, inciero, con fuertes tendencias de transformación digital y globalización, mantenerse
          relevante y competitivo se vuelve más retador e indispensable, pues cada vez se acortan los tiempos de
          vigencia de habilidades para ser competitivos.
        </p>

        <div
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/50 group cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src="/placeholder.svg?height=500&width=900"
            alt="Learning ecosystem"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-blue-500 rounded-full blur-xl transition-all duration-300 ${
                  isHovering ? "scale-150 opacity-75" : "scale-100 opacity-50"
                }`}
              ></div>
              <button className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all duration-300">
                <Play size={32} className="ml-1" fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
