"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    lada: "Chile (+56)",
    email: "",
    empresa: "",
    tamaño: "",
    pais: "Chile",
    acepta: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28 relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-700 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

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

              <div className="grid grid-cols-3 gap-8 mt-10">
                <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <p className="text-pink-300 font-bold text-3xl mb-2 group-hover:text-pink-200">16B+</p>
                  <p className="text-blue-100 text-xs">pesos recuperados.</p>
                </div>
                <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <p className="text-pink-300 font-bold text-3xl mb-2 group-hover:text-pink-200">+70</p>
                  <p className="text-blue-100 text-xs">empresas confían en nosotros.</p>
                </div>
                <div className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <p className="text-pink-300 font-bold text-3xl mb-2 group-hover:text-pink-200">60%</p>
                  <p className="text-blue-100 text-xs">máximo ahorro por empresa.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Solicita tu diagnóstico gratuito</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Nombre</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Apellido</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Tu apellido"
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">País/Código</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    value={formData.lada}
                    onChange={(e) => setFormData({ ...formData, lada: e.target.value })}
                  >
                    <option>Chile (+56)</option>
                    <option>Colombia (+57)</option>
                    <option>Perú (+51)</option>
                  </select>
                </div>
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Tu teléfono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-semibold block mb-3">Correo empresarial</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="tu@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="text-white text-sm font-semibold block mb-3">Nombre de tu empresa</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Tu empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">Tamaño empresa</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    value={formData.tamaño}
                    onChange={(e) => setFormData({ ...formData, tamaño: e.target.value })}
                  >
                    <option value="">Selecciona</option>
                    <option>Pequeña (50-200)</option>
                    <option>Mediana (200-1000)</option>
                    <option>Grande (+1000)</option>
                  </select>
                </div>
                <div>
                  <label className="text-white text-sm font-semibold block mb-3">País/región</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                    value={formData.pais}
                    onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  >
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Perú</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input
                  type="checkbox"
                  id="acepta"
                  checked={formData.acepta}
                  onChange={(e) => setFormData({ ...formData, acepta: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded-lg accent-pink-500"
                />
                <label htmlFor="acepta" className="text-white text-xs leading-relaxed">
                  Acepto recibir información sobre AGS y sus servicios. He leído la{" "}
                  <span className="text-pink-300 font-semibold hover:text-pink-200 transition-colors cursor-pointer">
                    Política de Privacidad
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 mt-8"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
