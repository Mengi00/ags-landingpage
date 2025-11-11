import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      company: 'Collahuasi',
      text: 'AGS nos permitió recuperar más de 2,500 millones en solo 6 meses. El proceso fue transparente y el equipo muy profesional.',
      result: '+MM$2.500',
    },
    {
      company: 'CCU',
      text: 'Redujimos tiempos de tramitación en un 80% con WebSIL. La automatización transformó nuestra operación.',
      result: '-80%',
    },
    {
      company: 'Metro de Santiago',
      text: 'Sistema completamente transparente y confiable para nuestra gestión. Excelente soporte técnico.',
      result: 'Excelencia',
    },
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-20 text-center">
          Resultados Comprobables
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-testimonial-${idx}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">{testimonial.text}</p>
              <div className="border-t border-blue-200 pt-4">
                <p className="text-xs text-gray-600 mb-2">Empresa:</p>
                <p className="font-bold text-gray-900 mb-3">{testimonial.company}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
