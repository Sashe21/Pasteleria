"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SearchDialog from '../Search';
import LikedCakesSheet from '../LikedCakes';
import AuthDropdown from '../AuthDropdown';
import ShoppingCartSheet from '../ShoppingCart';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionHome = document.getElementById('welcome-section');
    if (!sectionHome) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si SectionHome no está intersectando (es decir, hemos bajado), isScrolled es true
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null, // El viewport es el elemento raíz
        rootMargin: '0px',
        threshold: 0.1, // Se activa cuando el 10% de SectionHome está fuera de vista
      }
    );

    observer.observe(sectionHome);

    return () => {
      if (sectionHome) {
        observer.unobserve(sectionHome);
      }
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-screen-lg z-50 rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300",
      isScrolled ? "bg-gray-700/70 shadow-xl backdrop-blur-sm" : "bg-gray-800/20 shadow-md backdrop-blur-sm" // Revertido a bg-gray-700/70 para scrolled, manteniendo bg-gray-800/20 para el inicio
    )}>
      {/* Left Nav Links */}
      <div className="hidden md:flex space-x-6 text-white text-base font-medium">
        <a href="#about-us" className="hover:text-pink-500 transition-colors">Nosotros</a>
        <a href="#catalog" className="hover:text-pink-500 transition-colors">Catálogo</a>
        <a href="#how-to-buy" className="hover:text-pink-500 transition-colors">¿Cómo Comprar?</a>
      </div>

      {/* Logo (Centered) */}
      <div className="flex-grow flex justify-center">
        import Link from "next/link"

<Link href="/" className={cn(
  "text-4xl font-extrabold text-pink-500 flex-shrink-0"
)} style={{ fontFamily: "Playfair Display, serif" }}>
  Pasteleria Ines
</Link>

      </div>

      {/* Right Icons */}
      <div className="flex space-x-2 sm:space-x-5 text-gray-300">
        <SearchDialog />
        <LikedCakesSheet />
        <AuthDropdown />
        <ShoppingCartSheet />
      </div>

      {/* Mobile Menu Button (for smaller screens) - Placeholder for now */}
      <div className="md:hidden absolute left-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;