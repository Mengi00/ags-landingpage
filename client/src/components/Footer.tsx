export default function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">AGS WEB-SIL</h3>
            <p className="text-sm text-muted-foreground">
              Maximizamos la eficiencia en la gestión y recuperación de licencias médicas en Chile
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problema" className="text-muted-foreground hover:text-primary transition-colors">
                  El Problema
                </a>
              </li>
              <li>
                <a href="#solucion" className="text-muted-foreground hover:text-primary transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tel: 2-2696 8905</li>
              <li>
                <a
                  href="https://agschile.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.agschile.cl
                </a>
              </li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AGS WEB-SIL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
