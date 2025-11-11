export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-20 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center relative z-10 gap-12">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl text-balance leading-tight">
            Las empresas pierden hasta el 40% de sus recuperaciones
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            AGS WEB-SIL automatiza, centraliza y optimiza todo el proceso de gestión de licencias médicas,
            transformando pérdidas en ganancias comprobables.
          </p>
        </div>
        <button
          onClick={scrollToContact}
          className="flex-shrink-0 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 font-bold whitespace-nowrap rounded-xl shadow-lg hover:shadow-pink-500/50 flex items-center gap-2 transition-all duration-300 hover:scale-105"
          data-testid="button-cta-solicitar"
        >
          SOLICITA DIAGNÓSTICO
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
