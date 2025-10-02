import React from 'react';

const SectionAboutUs = () => {
  return (
    <section id="about-us" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl">
        {/* Columna de la Imagen (Izquierda) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Images/Cake3.jpg" // Ruta de la imagen, puedes cambiarla
            alt="Pastelería Ines - Sobre Nosotros"
            className="rounded-lg shadow-lg max-w-full h-auto object-cover md:max-h-[500px]"
          />
        </div>

        {/* Columna de Información (Derecha) */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold mb-4 text-pink-600" style={{ fontFamily: "Playfair Display, serif" }}>Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed">
            En Pastelería Ines, cada creación es una obra de arte hecha con pasión y los ingredientes más frescos. Desde 20XX, nos hemos dedicado a endulzar los momentos especiales de nuestros clientes, ofreciendo pasteles artesanales y postres únicos que deleitan el paladar y el corazón.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestra misión es superar tus expectativas con sabores inolvidables y diseños personalizados. Ya sea para un cumpleaños, una boda o simplemente un capricho dulce, en Pastelería Ines encontrarás la perfección en cada bocado. ¡Ven y descubre la magia de nuestros postres!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;