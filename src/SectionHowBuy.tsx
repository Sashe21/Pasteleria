"use client";

import React from 'react';
import { ShoppingBag, User, CreditCard, Home } from 'lucide-react'; // Usaremos CreditCard y Home

const SectionHowToBuy = () => {
  const steps = [
    {
      icon: <ShoppingBag size={48} className="text-pink-600 dark:text-pink-400" />,
      title: "1. Agrega tus creaciones favoritas al carrito",
      description: "Explora nuestro delicioso catálogo y selecciona los pasteles que más te gusten. Añádelos a tu carrito con un simple clic."
    },
    {
      icon: <User size={48} className="text-pink-600 dark:text-pink-400" />,
      title: "2. Ingresa tus datos y elige tu forma de pago",
      description: "Completa tus datos de envío y selecciona el método de pago que prefieras de forma segura y sencilla."
    },
    {
      icon: <CreditCard size={48} className="text-pink-600 dark:text-pink-400" />,
      title: "3. Realiza el pago de tu pedido",
      description: "Confirma tu compra y procesa el pago. Recibirás una confirmación detallada por correo electrónico."
    },
    {
      icon: <Home size={48} className="text-pink-600 dark:text-pink-400" />,
      title: "4. ¡Recibe tus delicias en casa!",
      description: "Relájate y espera. Tus pasteles serán preparados con amor y entregados directamente en la puerta de tu hogar."
    },
  ];

  return (
    <section id="how-to-buy" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 py-20">
      <div className="text-center max-w-4xl mb-12">
        <h2 className="text-6xl font-extrabold mb-4 text-gray-900 dark:text-gray-50" style={{ fontFamily: "Playfair Display, serif" }}>
          ¿Cómo Comprar?
        </h2>
        {/* Elemento decorativo de diamantes */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-4 h-4 border-2 border-pink-300 transform rotate-45"></div>
          <div className="w-4 h-4 border-2 border-pink-300 transform rotate-45"></div>
          <div className="w-4 h-4 border-2 border-pink-300 transform rotate-45"></div>
          <div className="w-4 h-4 border-2 border-pink-300 transform rotate-45"></div>
        </div>

        {/* Banner informativo */}
        <div className="relative bg-pink-300 text-white py-3 px-8 text-center font-semibold uppercase tracking-wide text-lg inline-block rounded-full shadow-md">
          <span className="relative z-10" style={{ fontFamily: "Cormorant Garamond, serif" }}>Comprar en Pasteleria Ines es muy fácil</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            {/* Contenedor de icono elegante */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30 mb-6 shadow-md">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              {step.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHowToBuy;