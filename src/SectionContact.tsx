"use client";

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactSectionProps {
  id: string;
}

const SectionContact: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">Contáctanos</h2>
        <p className="text-lg text-gray-700 mb-10">
          ¿Tienes alguna pregunta o quieres hacer un pedido especial? ¡Estamos aquí para ayudarte!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-semibold text-pink-800 mb-6">Nuestra Información</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700 text-lg">
                <MapPin size={24} className="text-pink-600" />
                <span>Calle Falsa 123, Ciudad Ficticia, País</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 text-lg">
                <Phone size={24} className="text-pink-600" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 text-lg">
                <Mail size={24} className="text-pink-600" />
                <span>info@ladulceesquina.com</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-3xl font-semibold text-pink-800 mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu Correo Electrónico"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tu Mensaje"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white text-lg px-6 py-3 rounded-md hover:bg-pink-700 transition-colors shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;