import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { insertLeadSchema, type InsertLead } from '@shared/schema';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      empresa: '',
      cargo: '',
      email: '',
      lada: 'Chile (+56)',
      telefono: '',
      dotacion: '',
      pais: 'Chile',
    },
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al enviar el formulario');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: '¡Solicitud enviada!',
        description: 'Nos pondremos en contacto con usted pronto.',
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    createLeadMutation.mutate(data);
  };

  return (
    <section id="contacto" className="w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-24 relative overflow-hidden">
      {/* M3 decorative background */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content only */}
          <div>
            <h2 className="text-headline-large text-foreground mb-6 text-balance leading-tight">
              Transforma la gestión de licencias de tu empresa
            </h2>

            <p className="text-body-large text-muted-foreground leading-relaxed mb-12">
              Nuestro equipo de expertos diseña soluciones personalizadas para maximizar tu recuperación y mejorar
              operativamente tu gestión.
            </p>

            {/* M3 Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-card/50 border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-label-large text-muted-foreground">Email</p>
                  <p className="text-body-medium text-foreground">contacto@agsgroup.cl</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-card/50 border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-label-large text-muted-foreground">Teléfono</p>
                  <p className="text-body-medium text-foreground">+56 2 2123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-card/50 border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-label-large text-muted-foreground">Ubicación</p>
                  <p className="text-body-medium text-foreground">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - M3 Form */}
          <div className="bg-card/80 backdrop-blur-xl p-10 rounded-[24px] border border-border elevation-3">
            <h3 className="text-title-large text-foreground mb-8">Solicita tu diagnóstico gratuito</h3>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-label-large text-foreground block mb-3">Nombre *</label>
                  <input
                    type="text"
                    {...form.register('nombre')}
                    className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                    placeholder="Tu nombre"
                    data-testid="input-nombre"
                  />
                  {form.formState.errors.nombre && (
                    <p className="text-destructive text-label-small mt-1">{form.formState.errors.nombre.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-label-large text-foreground block mb-3">Apellido *</label>
                  <input
                    type="text"
                    {...form.register('apellido')}
                    className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                    placeholder="Tu apellido"
                    data-testid="input-apellido"
                  />
                  {form.formState.errors.apellido && (
                    <p className="text-destructive text-label-small mt-1">{form.formState.errors.apellido.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-label-large text-foreground block mb-3">País/Código *</label>
                  <select
                    {...form.register('lada')}
                    className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                    data-testid="select-lada"
                  >
                    <option>Chile (+56)</option>
                    <option>Colombia (+57)</option>
                    <option>Perú (+51)</option>
                  </select>
                </div>
                <div>
                  <label className="text-label-large text-foreground block mb-3">Teléfono *</label>
                  <input
                    type="tel"
                    {...form.register('telefono')}
                    className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                    placeholder="Tu teléfono"
                    data-testid="input-telefono"
                  />
                  {form.formState.errors.telefono && (
                    <p className="text-destructive text-label-small mt-1">{form.formState.errors.telefono.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-label-large text-foreground block mb-3">Correo empresarial *</label>
                <input
                  type="email"
                  {...form.register('email')}
                  className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                  placeholder="tu@empresa.com"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-label-small mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-label-large text-foreground block mb-3">Nombre de tu empresa *</label>
                <input
                  type="text"
                  {...form.register('empresa')}
                  className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                  placeholder="Tu empresa"
                  data-testid="input-empresa"
                />
                {form.formState.errors.empresa && (
                  <p className="text-destructive text-label-small mt-1">{form.formState.errors.empresa.message}</p>
                )}
              </div>

              <div>
                <label className="text-label-large text-foreground block mb-3">Cargo (Opcional)</label>
                <input
                  type="text"
                  {...form.register('cargo')}
                  className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                  placeholder="Tu cargo"
                  data-testid="input-cargo"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-label-large text-foreground block mb-3">Tamaño empresa</label>
                  <select
                    {...form.register('dotacion')}
                    className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                    data-testid="select-dotacion"
                  >
                    <option value="">Selecciona</option>
                    <option>100 - 500</option>
                    <option>500 - 1,000</option>
                    <option>1,000 - 3,000</option>
                    <option>3,000 - 6,000</option>
                    <option>+6,000</option>
                  </select>
                </div>
                <div>
                  <label className="text-label-large text-foreground block mb-3">País/región *</label>
                  <select
                    {...form.register('pais')}
                    className="w-full bg-muted/50 border border-input text-foreground px-4 py-3 text-body-medium rounded-[12px] focus:outline-none focus:border-primary focus:bg-muted/70 transition-all duration-200"
                    data-testid="select-pais"
                  >
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Perú</option>
                  </select>
                </div>
              </div>

              {/* M3 FAB-style submit button */}
              <button
                type="submit"
                disabled={createLeadMutation.isPending}
                className="w-full bg-secondary hover:elevation-2 text-secondary-foreground text-label-large font-medium py-4 px-6 rounded-[100px] transition-all duration-200 hover:scale-[1.02] mt-8 disabled:opacity-50 disabled:cursor-not-allowed elevation-1"
                data-testid="button-submit-form"
              >
                {createLeadMutation.isPending ? 'Enviando...' : 'Enviar solicitud'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
