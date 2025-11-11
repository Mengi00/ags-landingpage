import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { insertLeadSchema, type InsertLead } from '@shared/schema';

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
    <section id="contacto" className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28 relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8 text-balance leading-tight">
              Transforma la gestión de licencias de tu empresa
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-12">
              Nuestro equipo de expertos diseña soluciones personalizadas para maximizar tu recuperación y mejorar
              operativamente tu gestión.
            </p>

            <div className="mb-12">
              <div className="flex -space-x-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-slate-900 flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 hover:z-50 transition-all duration-300 cursor-pointer"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-pink-300 font-bold mb-3 text-lg">+3 millones de licencias gestionadas exitosamente</p>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <p className="text-pink-300 font-bold text-2xl mb-2 group-hover:text-pink-200 break-words">MM$16.000</p>
                  <p className="text-blue-100 text-xs">recuperados</p>
                </div>
                <div className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <p className="text-pink-300 font-bold text-2xl mb-2 group-hover:text-pink-200 break-words">+70</p>
                  <p className="text-blue-100 text-xs">empresas confían</p>
                </div>
                <div className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <p className="text-pink-300 font-bold text-2xl mb-2 group-hover:text-pink-200 break-words">60%</p>
                  <p className="text-blue-100 text-xs">máximo ahorro</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Solicita tu diagnóstico gratuito</h3>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Nombre *</label>
                  <input
                    type="text"
                    {...form.register('nombre')}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Tu nombre"
                    data-testid="input-nombre"
                  />
                  {form.formState.errors.nombre && (
                    <p className="text-pink-300 text-xs mt-1">{form.formState.errors.nombre.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Apellido *</label>
                  <input
                    type="text"
                    {...form.register('apellido')}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Tu apellido"
                    data-testid="input-apellido"
                  />
                  {form.formState.errors.apellido && (
                    <p className="text-pink-300 text-xs mt-1">{form.formState.errors.apellido.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">País/Código *</label>
                  <select
                    {...form.register('lada')}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    data-testid="select-lada"
                  >
                    <option>Chile (+56)</option>
                    <option>Colombia (+57)</option>
                    <option>Perú (+51)</option>
                  </select>
                </div>
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Teléfono *</label>
                  <input
                    type="tel"
                    {...form.register('telefono')}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Tu teléfono"
                    data-testid="input-telefono"
                  />
                  {form.formState.errors.telefono && (
                    <p className="text-pink-300 text-xs mt-1">{form.formState.errors.telefono.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-semibold block mb-3">Correo empresarial *</label>
                <input
                  type="email"
                  {...form.register('email')}
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="tu@empresa.com"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-pink-300 text-xs mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-white text-sm font-semibold block mb-3">Nombre de tu empresa *</label>
                <input
                  type="text"
                  {...form.register('empresa')}
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Tu empresa"
                  data-testid="input-empresa"
                />
                {form.formState.errors.empresa && (
                  <p className="text-pink-300 text-xs mt-1">{form.formState.errors.empresa.message}</p>
                )}
              </div>

              <div>
                <label className="text-white text-sm font-semibold block mb-3">Cargo (Opcional)</label>
                <input
                  type="text"
                  {...form.register('cargo')}
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Tu cargo"
                  data-testid="input-cargo"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Tamaño empresa</label>
                  <select
                    {...form.register('dotacion')}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
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
                  <label className="text-white text-sm font-semibold block mb-3">País/región *</label>
                  <select
                    {...form.register('pais')}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    data-testid="select-pais"
                  >
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Perú</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={createLeadMutation.isPending}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
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
