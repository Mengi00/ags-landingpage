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
    <section className="w-full bg-background py-12 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* M3 Headline Large */}
        <h2 className="text-3xl md:text-headline-large bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-12 md:mb-16 lg:mb-20 text-center">
          Resultados Comprobables
        </h2>

        {/* M3 Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-[24px] bg-card border border-border elevation-1 hover:elevation-3 transition-all duration-200 hover:-translate-y-1"
              data-testid={`card-testimonial-${idx}`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-body-medium text-muted-foreground mb-8 leading-relaxed">{testimonial.text}</p>
              
              <div className="border-t border-border pt-6">
                <p className="text-label-medium text-muted-foreground mb-2">Empresa:</p>
                <p className="text-title-large text-foreground mb-4">{testimonial.company}</p>
                <p className="text-headline-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
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
