import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import officeImage from '@assets/generated_images/Corporate_office_building_exterior_5475b43a.png';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    dotacion: '',
    acceptPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: remove mock functionality - integrate with Twenty CRM API
    console.log('Form submitted:', formData);
    
    toast({
      title: '¡Solicitud enviada!',
      description: 'Nos pondremos en contacto con usted pronto.',
    });

    setFormData({
      nombre: '',
      empresa: '',
      cargo: '',
      email: '',
      telefono: '',
      dotacion: '',
      acceptPolicy: false,
    });
  };

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-muted-foreground">
            Agende su diagnóstico gratuito y comience a recuperar fondos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Conectado con Twenty CRM</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    data-testid="input-nombre"
                  />
                </div>

                <div>
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    required
                    data-testid="input-empresa"
                  />
                </div>

                <div>
                  <Label htmlFor="cargo">Cargo</Label>
                  <Input
                    id="cargo"
                    value={formData.cargo}
                    onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    data-testid="input-cargo"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                    data-testid="input-telefono"
                  />
                </div>

                <div>
                  <Label htmlFor="dotacion">Tamaño de dotación *</Label>
                  <Select
                    value={formData.dotacion}
                    onValueChange={(value) => setFormData({ ...formData, dotacion: value })}
                    required
                  >
                    <SelectTrigger data-testid="select-dotacion">
                      <SelectValue placeholder="Seleccione rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-500">100 - 500 trabajadores</SelectItem>
                      <SelectItem value="500-1000">500 - 1,000 trabajadores</SelectItem>
                      <SelectItem value="1000-3000">1,000 - 3,000 trabajadores</SelectItem>
                      <SelectItem value="3000-6000">3,000 - 6,000 trabajadores</SelectItem>
                      <SelectItem value="6000+">Más de 6,000 trabajadores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="policy"
                    checked={formData.acceptPolicy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, acceptPolicy: checked as boolean })
                    }
                    data-testid="checkbox-policy"
                  />
                  <label htmlFor="policy" className="text-sm text-muted-foreground cursor-pointer">
                    Acepto la política de privacidad y el tratamiento de mis datos personales
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={!formData.acceptPolicy}
                  data-testid="button-submit-form"
                >
                  Agendar Diagnóstico Gratuito
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <img
              src={officeImage}
              alt="Oficinas AGS"
              className="w-full rounded-lg shadow-lg"
            />

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Andrea Gajardo S.</p>
                    <p className="text-sm text-muted-foreground">Gerencia de Negocios</p>
                    <p className="text-sm">Tel: 2-2696 8905</p>
                    <p className="text-sm">Cel: +569 4213 9942</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-chart-2/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Cristián Sánchez</p>
                    <p className="text-sm text-muted-foreground">Subgerente de Negocios</p>
                    <p className="text-sm">Tel: 2-2696 8905</p>
                    <p className="text-sm">Cel: +569 8975 4707</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-chart-3/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Sitio web</p>
                    <a
                      href="https://agschile.cl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      https://agschile.cl
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Integración con Twenty CRM</h4>
                  <p className="text-sm text-muted-foreground">
                    Sus datos serán registrados automáticamente en nuestro sistema CRM para brindarle
                    un seguimiento personalizado y eficiente.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
