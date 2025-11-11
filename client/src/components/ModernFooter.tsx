import { Facebook, Instagram, Linkedin, Twitter, Globe, Mail, Phone } from 'lucide-react';

export default function ModernFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-foreground relative overflow-hidden">
      {/* M3 decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 border-b border-border/30 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold elevation-1 group-hover:elevation-2 transition-all duration-200">
                A
              </div>
              <div className="text-title-medium font-medium">AGS WebSIL</div>
            </div>
            <p className="text-body-medium text-muted-foreground">
              Soluciones inteligentes para la recuperación de licencias médicas en Chile
            </p>
          </div>

          {/* Solutions column */}
          <div>
            <h4 className="text-title-medium text-foreground mb-6">Soluciones</h4>
            <ul className="space-y-3 text-body-medium text-muted-foreground">
              <li>
                <a href="#problema" className="hover:text-primary transition-colors duration-200">
                  El Problema
                </a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-primary transition-colors duration-200">
                  Nuestra Solución
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-primary transition-colors duration-200">
                  Calculadora de Riesgo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-title-medium text-foreground mb-6">Contacto</h4>
            <ul className="space-y-4 text-body-medium text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-primary" />
                </div>
                <a href="tel:+56226968905" className="hover:text-primary transition-colors duration-200">
                  +56 2 2696 8905
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-primary" />
                </div>
                <a href="mailto:info@agschile.cl" className="hover:text-primary transition-colors duration-200">
                  info@agschile.cl
                </a>
              </li>
              <li className="pt-2">
                <p className="text-title-small text-foreground mb-1">Andrea Gajardo S.</p>
                <p className="text-label-small">Gerencia de Negocios</p>
              </li>
              <li>
                <p className="text-title-small text-foreground mb-1">Cristián Sánchez</p>
                <p className="text-label-small">Subgerente de Negocios</p>
              </li>
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h4 className="text-title-medium text-foreground mb-6">Síguenos</h4>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-3 rounded-[16px] bg-card/50 hover:bg-primary border border-border hover:border-primary text-muted-foreground hover:text-primary-foreground transition-all duration-200 elevation-1 hover:elevation-2"
                  title={label}
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* M3 Bottom section */}
        <div className="border-t border-border/30 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-label-medium text-muted-foreground">&copy; {new Date().getFullYear()} AGS WebSIL. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-label-medium flex-wrap justify-center">
            {['Aviso de Privacidad', 'Términos de Servicio', 'Política de Datos'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* M3 Bottom CTA section */}
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/85 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <a
            href="https://agschile.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-white/90 text-title-medium transition-colors duration-200"
            data-testid="link-website"
          >
            <Globe size={20} />
            Visita agschile.cl
          </a>
        </div>
      </div>
    </footer>
  );
}
