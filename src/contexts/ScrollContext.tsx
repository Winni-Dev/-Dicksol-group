import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, on navigue d'abord vers l'accueil
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // Sinon on scroll directement vers la section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Hauteur du header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Observer pour détecter la section active pendant le scroll
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['home', 'expertise', 'projets', 'galerie', 'gouvernance', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // La section est considérée comme active quand 30% est visible
        rootMargin: '-80px 0px -80px 0px' // Ajustement pour le header
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [location.pathname]);

  // Gérer le hash dans l'URL au chargement
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Petit délai pour s'assurer que la page est chargée
    }
  }, [location]);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};