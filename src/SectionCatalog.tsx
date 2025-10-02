import React from 'react';

export default function CatalogPage() {
  // Datos de ejemplo para los pasteles
  const pastries = [
    {
      id: '1',
      name: 'Pastel de Chocolate Clásico',
      description: 'Un clásico irresistible con capas de bizcocho de chocolate y ganache.',
      price: '25.00',
      imageUrl: '/pastry-chocolate.jpg', // Necesitarás añadir estas imágenes a tu carpeta public
    },
    {
      id: '2',
      name: 'Tarta de Fresa Fresca',
      description: 'Delicada tarta con crema pastelera y fresas frescas de temporada.',
      price: '28.50',
      imageUrl: '/pastry-strawberry.jpg',
    },
    {
      id: '3',
      name: 'Cheesecake de Arándanos',
      description: 'Cremoso cheesecake horneado con una capa de salsa de arándanos casera.',
      price: '30.00',
      imageUrl: '/pastry-cheesecake.jpg',
    },
    {
      id: '4',
      name: 'Cupcakes Variados',
      description: 'Caja de 6 cupcakes con sabores y decoraciones sorpresa.',
      price: '18.00',
      imageUrl: '/pastry-cupcakes.jpg',
    },
  ];

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Nuestro Delicioso Catálogo
      </h1>
    </div>
  );
}