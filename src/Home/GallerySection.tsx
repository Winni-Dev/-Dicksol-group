// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, X } from 'lucide-react';
// import SectionTitle from '../components/UI/SectionTitle';
// import Lightbox from '../components/UI/Lightbox';

// const GallerySection: React.FC = () => {
//   const [filter, setFilter] = useState('all');
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const categories = [
//     { id: 'all', label: 'Tous' },
//     { id: 'route', label: 'Routes' },
//     { id: 'amenagement', label: 'Aménagement' },
//     { id: 'immobilier', label: 'Immobilier' },
//   ];

//   const galleryImages = [
//     { id: 1, src: '/images/galerie/route1.jpg', title: 'Construction routière', category: 'route', location: 'Abidjan' },
//     { id: 2, src: '/images/galerie/route2.jpg', title: 'Bitumage', category: 'route', location: 'Yamoussoukro' },
//     { id: 3, src: '/images/galerie/amenagement1.jpg', title: 'Terrassement', category: 'amenagement', location: 'Bingerville' },
//     { id: 4, src: '/images/galerie/amenagement2.jpg', title: 'Lotissement', category: 'amenagement', location: 'Anyama' },
//     { id: 5, src: '/images/galerie/immobilier1.jpg', title: 'Résidence', category: 'immobilier', location: 'Cocody' },
//     { id: 6, src: '/images/galerie/immobilier2.jpg', title: 'Construction', category: 'immobilier', location: 'Marcory' },
//     { id: 7, src: '/images/galerie/route3.jpg', title: 'Pont', category: 'route', location: 'Grand-Bassam' },
//     { id: 8, src: '/images/galerie/amenagement3.jpg', title: 'VRD', category: 'amenagement', location: 'Abobo' },
//   ];

//   const filteredImages = filter === 'all' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === filter);

//   const openLightbox = (index: number) => {
//     setCurrentImageIndex(index);
//     setLightboxOpen(true);
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
//   };

//   const handlePrev = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
//   };

//   return (
//     <section id="galerie" className="section-padding bg-primary-black">
//       <div className="container-custom">
//         <SectionTitle
//           title="Galerie des Réalisations"
//           subtitle="Portfolio"
//           center
//         />

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setFilter(cat.id)}
//               className={`px-6 py-2 font-medium transition-all duration-300 ${
//                 filter === cat.id
//                   ? 'bg-primary-yellow text-primary-black'
//                   : 'bg-primary-charcoal text-primary-offwhite/70 hover:text-primary-yellow border border-primary-yellow/10'
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Gallery Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
//         >
//           <AnimatePresence>
//             {filteredImages.map((image, index) => (
//               <motion.div
//                 key={image.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative aspect-square group cursor-pointer overflow-hidden"
//                 onClick={() => openLightbox(index)}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-black/60">
//                   <h3 className="text-white font-semibold">{image.title}</h3>
//                   <p className="text-primary-offwhite/80 text-sm">{image.location}</p>
//                   <div className="absolute top-4 right-4 w-10 h-10 bg-primary-yellow/90 flex items-center justify-center">
//                     <Search className="w-5 h-5 text-primary-black" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Lightbox */}
//         <Lightbox
//           images={filteredImages}
//           currentIndex={currentImageIndex}
//           isOpen={lightboxOpen}
//           onClose={() => setLightboxOpen(false)}
//           onNext={handleNext}
//           onPrev={handlePrev}
//         />
//       </div>
//     </section>
//   );
// };

// export default GallerySection;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import des images (ajustez les chemins)
import route1 from '../Images/rout1.jpeg';
import route2 from '../Images/rout4.jpeg';
import route3 from '../Images/rout2.jpeg';
import route4 from '../Images/rout5.jpeg';
import route5 from '../Images/rout.jpeg';
import route6 from '../Images/ROUT111.jpeg';
import route7 from '../Images/ROUT222.jpeg';
import route8 from '../Images/ROUT3333.jpeg';
import amenagement1 from '../Images/FON1.jpeg';
import amenagement2 from '../Images/FON2.jpeg';
import amenagement3 from '../Images/FON3.jpeg';
import amenagement4 from '../Images/FON4.jpeg';
import immobilier1 from '../Images/IMO1.jpeg';
import immobilier2 from '../Images/IMO2.jpeg';
import immobilier3 from '../Images/IMO3.jpeg';
import immobilier4 from '../Images/IMO4.jpeg';
import immobilier5 from '../Images/IMO5.jpeg';

// Composant Lightbox avec navigation
const Lightbox: React.FC<{
  images: any[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  // Gestion des touches du clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-primary-black/98 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Bouton fermeture */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-primary-offwhite/30 hover:text-primary-offwhite/60 transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Bouton précédent */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 text-primary-offwhite/30 hover:text-primary-offwhite/60 transition-colors p-2"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Bouton suivant */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 text-primary-offwhite/30 hover:text-primary-offwhite/60 transition-colors p-2"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="h-full flex items-center justify-center p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </motion.div>

      {/* Légende avec compteur */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-primary-offwhite/60 text-xs font-light">
          {images[currentIndex].title} · {images[currentIndex].location}
        </p>
        <p className="text-primary-offwhite/30 text-[10px] font-light mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Indicateurs de navigation (points) */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              const steps = idx - currentIndex;
              if (steps > 0) {
                for (let i = 0; i < steps; i++) onNext();
              } else {
                for (let i = 0; i < Math.abs(steps); i++) onPrev();
              }
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-4 bg-primary-yellow/60'
                : 'w-1 bg-primary-offwhite/20 hover:bg-primary-offwhite/40'
            }`}
            aria-label={`Aller à l'image ${idx + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'route', label: 'Routes' },
    { id: 'amenagement', label: 'Foncier' },
    { id: 'immobilier', label: 'Immobilier' },
  ];

  // const galleryImages = [
  //   { id: 1, src: route1, title: 'Route bitumée', category: 'route', location: 'Abidjan' },
  //   { id: 2, src: route2, title: 'Travaux de bitumage', category: 'route', location: 'Yamoussoukro' },
  //   { id : 3, src: route3, title: 'Ouvrage d\'art', category: 'route', location: 'Grand-Bassam' },
  //   { id: 4, src: route4, title: 'Aménagement', category: 'route', location: 'Daloa' },
  //   { id: 5, src: route5, title: 'Infrastructure', category: 'route', location: 'San-Pedro' },
  //   { id: 6, src: route6, title: 'Réseau routier', category: 'route', location: 'Bouaké' },
  //   { id: 7, src: route7, title: 'Piste d\'atterrissage', category: 'route', location: 'Abidjan' },
  //   { id: 8, src: route8, title: 'Ouvrage d\'art', category: 'route', location: 'Grand-Bassam' },
  //   { id: 9, src: amenagement3, title: 'VRD', category: 'amenagement', location: 'Abobo' },
  //   {id : 10 , src: immobilier1, title: 'Résidence', category: 'immobilier', location: 'Cocody' },
  //   {id : 11 , src: immobilier2, title: 'Construction', category: 'immobilier', location: 'Marcory' },
  //   {id : 12 , src: immobilier3, title: 'Immeuble de bureaux', category: 'immobilier', location: 'Plateau' },
  //   {id : 13 , src: immobilier4, title: 'Complexe résidentiel', category: 'immobilier', location: 'Cocody' },
  //   {id : 14 , src: immobilier5, title: 'Bâtiment commercial', category: 'immobilier', location: 'Abidjan' },
  //   {id : 15 , src: amenagement4, title: 'Aménagement urbain', category: 'amenagement', location: 'Abidjan' },
  //   {id : 16 , src: amenagement1, title: 'Terrassement', category: 'amenagement', location: 'Bingerville' },
  //   {id : 17 , src: amenagement2, title: 'Lotissement', category: 'amenagement', location: 'Anyama' },
  // ];


  const galleryImages = [
    { id: 1, src: route1,  category: 'route' },
    { id: 2, src: route2, category: 'route' },
    { id : 3, src: route3,category: 'route' },
    { id: 4, src: route4, category: 'route' },
    { id: 5, src: route5, category: 'route' },
    { id: 6, src: route6, category: 'route' },
    { id: 7, src: route7, category: 'route' },
    { id: 8, src: route8, category: 'route' },
    { id: 9, src: amenagement3, category: 'amenagement' },
    {id : 10 , src: immobilier1, category: 'immobilier' },
    {id : 11 , src: immobilier2, category: 'immobilier' },
    {id : 12 , src: immobilier3, category: 'immobilier' },
    {id : 13 , src: immobilier4, category: 'immobilier' },
    {id : 14 , src: immobilier5, category: 'immobilier' },
    {id : 15 , src: amenagement4, category: 'amenagement' },
    {id : 16 , src: amenagement1, category: 'amenagement' },
    {id : 17 , src: amenagement2, category: 'amenagement' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="galerie" className="relative py-24 bg-primary-black overflow-hidden">
      {/* Éléments de fond minimalistes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
        <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-yellow/40 text-xs font-light tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-3">
            Réalisations
          </h2>
          <div className="w-12 h-px bg-primary-yellow/20 mx-auto mt-6" />
        </motion.div>

        {/* Filtres ultra-discrets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-xs font-light tracking-wide transition-all duration-300 ${
                filter === cat.id
                  ? 'text-primary-yellow/80'
                  : 'text-primary-offwhite/30 hover:text-primary-offwhite/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grille de galerie - style épuré */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                {/* Image avec opacité réduite */}
                <img
                  src={image.src}
                  // alt={image.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Overlay au survol - version corrigée */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Légende au survol - repositionnée pour être visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="bg-primary-black/60 backdrop-blur-sm p-3 rounded">
                    {/* <p className="text-white text-sm font-light">{image.title}</p> */}
                    {/* <p className="text-primary-yellow/60 text-xs font-light mt-1">{image.location}</p> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Compteur minimaliste */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-offwhite/20 text-[10px] font-light mt-8"
        >
          {filteredImages.length} réalisation{filteredImages.length > 1 ? 's' : ''}
        </motion.p>
      </div>

      {/* Lightbox avec navigation */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={filteredImages}
            currentIndex={currentImageIndex}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;