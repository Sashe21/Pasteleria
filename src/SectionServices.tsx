"use client";

import React from 'react';
import { Cake, Gift, HeartHandshake, UtensilsCrossed } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-pink-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
    <Icon size={48} className="text-pink-600 mx-auto mb-4" />
    <h3 className="text-2xl font-semibold text-pink-800 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

interface ServicesSectionProps {
  id: string;
}

const SectionServices: React.FC<ServicesSectionProps> = ({ id }) => {
  const services = [
    {
      icon: Cake,
      title: 'Pasteles Personalizados',
      description: 'Diseñamos el pastel de tus sueños para cualquier ocasión especial.',
    },
    {
      icon: Gift,
      title: 'Cestas de Regalo',
      description: 'Sorprende a tus seres queridos con nuestras deliciosas cestas de dulces.',
    },
    {
      icon: HeartHandshake,
      title: 'Eventos Especiales',
      description: 'Endulzamos tus bodas, cumpleaños y celebraciones con nuestra repostería.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering Dulce',
      description: 'Ofrecemos una variedad de postres y dulces para tus eventos corporativos.',
    },
  ];

  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-700 mb-10">
          Más allá de los pasteles, ofrecemos una gama completa de servicios para endulzar cada momento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionServices;