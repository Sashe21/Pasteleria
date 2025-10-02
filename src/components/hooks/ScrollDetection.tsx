import { useState, useEffect, useCallback } from 'react';

// Altura aproximada del Navbar para ajustar la detección
const NAVBAR_HEIGHT = 100; 

export function useScrollDetection(sectionsToTriggerDarkNavbar: string[]) {
  const [shouldUseDarkNavbar, setShouldUseDarkNavbar] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    let triggerDarkNavbar = false;

    for (const sectionId of sectionsToTriggerDarkNavbar) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Comprueba si el Navbar está actualmente superponiendo esta sección
        // Ajustamos la detección para que ocurra cuando el Navbar entra en la sección
        if (scrollY >= sectionTop - NAVBAR_HEIGHT && scrollY < sectionBottom - NAVBAR_HEIGHT / 2) {
          triggerDarkNavbar = true;
          break;
        }
      }
    }
    setShouldUseDarkNavbar(triggerDarkNavbar);
  }, [sectionsToTriggerDarkNavbar]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta la comprobación inicial al cargar la página
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return shouldUseDarkNavbar;
}