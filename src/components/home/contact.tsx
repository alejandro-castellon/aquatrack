"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Building, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    buildingType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Formulario enviado", {
      description: "Nos pondremos en contacto con usted pronto.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      buildingType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="pt-18 sm:pt-12 pb-36 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:mt-10">
        <div className="text-center mb-16">
          <div className="inline-block rounded bg-sky-100 px-3 py-1 text-sm text-sky-700 mb-4">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctenos <span className="text-sky-600">Hoy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Solicite una demostración o consulte sobre nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Solicitar Información
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="buildingType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tipo de Edificio
                  </label>
                  <select
                    id="buildingType"
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="apartment">Edificio de Apartamentos</option>
                    <option value="condo">Condominio</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                ></textarea>
              </div>

              <Button type="submit" className="w-full water-gradient">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-sky-600 rounded-2xl shadow-md p-8 text-white mb-8">
              <h3 className="text-2xl font-semibold mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Correo Electrónico:</p>
                    <a
                      href="mailto:info@aquatrack.net"
                      className="hover:underline"
                    >
                      info@aquatrack.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Teléfono:</p>
                    <a href="tel:+123456789" className="hover:underline">
                      +591 (653) 69944
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Dirección:</p>
                    <p>Av. Waldo Ballivian 1023, Ciudad Cochabamba</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-teal-600" />
                <h3 className="text-xl font-semibold text-gray-900 ml-2">
                  Clientes que Confían en Nosotros
                </h3>
              </div>

              <p className="text-gray-700 mb-6">
                Más de 150 edificios y condominios en toda la región han
                implementado nuestra tecnología para la gestión eficiente del
                agua.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-700 font-bold border border-gray-200">
                  Edificio A
                </div>
                <div className="h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-700 font-bold border border-gray-200">
                  Torre B
                </div>
                <div className="h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-700 font-bold border border-gray-200">
                  Condo C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
