import { CheckCircle2 } from 'lucide-react';
import heroImage from '@assets/generated_images/Hero_business_analytics_office_466b2eb0.png';

export default function ModernHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28 relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="mb-8 inline-block">
              <span className="bg-blue-900/50 text-blue-100 text-xs px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm">
                Software + Servicios Profesionales
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight">
              Maximizamos la eficiencia en la{' '}
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">gestión y recuperación</span>{' '}
              de licencias médicas
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-12">
              Recupere millones en subsidios perdidos con tecnología inteligente y asesoría profesional especializada
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('calculadora')}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                data-testid="button-calcular-riesgo"
              >
                CALCULAR MI RIESGO
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                data-testid="button-agendar-demo"
              >
                AGENDAR DEMO
              </button>
            </div>

            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-slate-900 flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 hover:z-50 transition-all duration-300 cursor-pointer"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-pink-300 font-bold mb-6 text-lg">+3 millones de licencias gestionadas exitosamente</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <p className="text-pink-300 font-bold text-2xl mb-1 group-hover:text-pink-200">MM$16.000</p>
                <p className="text-blue-100 text-xs">Recuperados</p>
              </div>
              <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <p className="text-pink-300 font-bold text-2xl mb-1 group-hover:text-pink-200">+70</p>
                <p className="text-blue-100 text-xs">Clientes</p>
              </div>
              <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <p className="text-pink-300 font-bold text-2xl mb-1 group-hover:text-pink-200">60%</p>
                <p className="text-blue-100 text-xs">Ahorro máximo</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-pink-300 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl group-hover:shadow-blue-300/50 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Gestión de licencias médicas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
