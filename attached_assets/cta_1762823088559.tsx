interface CTAProps {
  cta1: boolean
}

export default function CTA({ cta1 }: CTAProps) {
  if (cta1) {
    return (
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-700 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10 gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-white mb-6 max-w-2xl text-balance leading-tight">
              Las empresas pierden hasta el 40% de sus recuperaciones
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
              AGS – WebSIL automatiza, centraliza y optimiza todo el proceso de gestión de licencias médicas,
              transformando pérdidas en ganancias comprobables.
            </p>
          </div>
          <button className="flex-shrink-0 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 font-bold whitespace-nowrap rounded-xl shadow-lg hover:shadow-pink-500/50 flex items-center gap-2 transition-all duration-300 hover:scale-105">
            SOLICITA DIAGNÓSTICO
            <span>→</span>
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10 gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-3">Conversa con nuestros expertos.</h2>
          <p className="text-blue-100">Recibe una evaluación personalizada y conoce tu potencial de recuperación.</p>
        </div>
        <button className="flex-shrink-0 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 font-bold whitespace-nowrap rounded-xl shadow-lg hover:shadow-pink-500/50 flex items-center gap-2 transition-all duration-300 hover:scale-105">
          AGENDA ASESORÍA
          <span>→</span>
        </button>
      </div>
    </section>
  )
}
