"use client";

import React from 'react';
import Image from 'next/image';

interface GallerySectionProps {
  id: string;
}

const SectionGallery: React.FC<GallerySectionProps> = ({ id }) => {
  const galleryImages = [
    { src: '/gallery-1.jpg', alt: 'Pastel de Boda' },
    { src: '/gallery-2.jpg', alt: 'Cupcakes Decorados' },
    { src: '/gallery-3.jpg', alt: 'Mesa de Postres' },
    { src: '/gallery-4.jpg', alt: 'Pastel de Cumpleaños' },
    { src: '/gallery-5.jpg', alt: 'Galletas Artesanales' },
    { src: '/gallery-6.jpg', alt: 'Macarons Variados' },
  ];

  return (
    <section id={id} className="py-16 bg-pink-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">Nuestra Galería</h2>
        <p className="text-lg text-gray-700 mb-10">
          Un vistazo a algunas de nuestras creaciones más hermosas y deliciosas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;