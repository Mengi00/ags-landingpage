import { Facebook, Instagram, Linkedin, Twitter, Globe, Mail, Phone } from 'lucide-react';

export default function ModernFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-950 via-gray-950 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-800 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-all duration-300">
                A
              </div>
              <div className="font-bold text-sm">AGS WebSIL</div>
            </div>
            <p className="text-gray-400 text-sm">
              Soluciones inteligentes para la recuperación de licencias médicas en Chile
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Soluciones</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#problema" className="hover:text-blue-400 transition-colors">
                  El Problema
                </a>
              </li>
              <li>
                <a href="#solucion" className="hover:text-blue-400 transition-colors">
                  Nuestra Solución
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-blue-400 transition-colors">
                  Calculadora de Riesgo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+56226968905" className="hover:text-blue-400 transition-colors">
                  +56 2 2696 8905
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@agschile.cl" className="hover:text-blue-400 transition-colors">
                  info@agschile.cl
                </a>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Andrea Gajardo S.</p>
                <p className="text-xs">Gerencia de Negocios</p>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Cristián Sánchez</p>
                <p className="text-xs">Subgerente de Negocios</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-400 text-gray-400 hover:text-white transition-all duration-300"
                  title={label}
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} AGS WebSIL. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-xs flex-wrap justify-center">
            {['Aviso de Privacidad', 'Términos de Servicio', 'Política de Datos'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <a
            href="https://agschile.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
            data-testid="link-website"
          >
            <Globe size={18} />
            Visita agschile.cl
          </a>
        </div>
      </div>
    </footer>
  );
}
