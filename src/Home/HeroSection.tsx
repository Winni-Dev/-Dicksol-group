// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Briefcase } from 'lucide-react';
// import Button from '../components/UI/Button';
// import  Acc from '../Images/acc5.png'

// const HeroSection: React.FC = () => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.8,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     }),
//   };

//   const words = ["La qualité", "du service,", "notre passion"];

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image avec overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={Acc}
//           alt="Chantier BTP"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/90 to-primary-black/80" />
//       </div>

//       {/* Contenu */}
//       <div className="relative container-custom text-center z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-6"
//         >
//           <span className="inline-block px-4 py-2 bg-primary-yellow/10 border border-primary-yellow/30 text-primary-yellow text-sm font-medium">
//             DICKSOL GROUPE SARL
//           </span>
//         </motion.div>

//         <h1 className="heading-1 text-white mb-6 max-w-4xl mx-auto">
//           {words.map((word, index) => (
//             <motion.span
//               key={index}
//               custom={index}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="inline-block mr-4"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="text-xl text-primary-offwhite/80 mb-10 max-w-2xl mx-auto"
//         >
//           Expert en infrastructures routières, aménagement foncier et immobilier en Côte d'Ivoire
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <Button
//             href="/contact"
//             variant="primary"
//             size="lg"
//             icon={ArrowRight}
//             iconPosition="right"
//           >
//             Demander un devis
//           </Button>
//           <Button
//             href="/#projets"
//             variant="outline"
//             size="lg"
//             icon={Briefcase}
//           >
//             Voir nos projets
//           </Button>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="w-6 h-10 border-2 border-primary-offwhite/30 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ height: [8, 16, 8] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//               className="w-1 bg-primary-yellow rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Acc from '../Images/acc5.png';

const HeroSection: React.FC = () => {
  // Animation extrêmement subtile pour le texte
  const textReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.1, 1]
      }
    }
  };

  // Pas d'animation mot par mot, juste un fade global élégant
  const words = ["La qualité du service,", "notre passion"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-black">
      {/* Image de fond avec overlay extrêmement subtil */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.1, 1] }}
          className="w-full h-full"
        >
          <img
            src={Acc}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlay très léger - presque imperceptible */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/40 to-primary-black/60" />
        
        {/* Ligne horizontale très fine qui apparaît */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow to-transparent"
        />
      </div>

      {/* Contenu - centré mais avec moins d'éléments */}
      <div className="relative container-custom max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Pas de badge, juste le nom très discret */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="text-primary-yellow/40 text-xs font-light tracking-[0.3em] uppercase">
              DICKSOL GROUPE SARL
            </span>
          </motion.div>

          {/* Titre principal - épuré */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sous-titre minimal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-primary-offwhite/40 text-sm font-light max-w-lg mx-auto mb-12"
          >
            Infrastructures · Aménagement · Immobilier
          </motion.p>

          {/* Un seul bouton principal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              href="/contact"
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="border-primary-yellow/30 text-primary-offwhite/80 hover:text-primary-yellow hover:border-primary-yellow/60 bg-transparent backdrop-blur-none"
            >
              Nous contacter
            </Button>
          </motion.div>

          {/* Indicateur de scroll - extrêmement discret */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-4 h-6 border border-primary-offwhite/10 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ height: [2, 4, 2], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-px bg-primary-yellow/30 rounded-full mt-1.5"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Éléments décoratifs ultra-minimaux */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-black to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-1/4 right-10 w-px h-20 bg-gradient-to-b from-transparent via-primary-yellow to-transparent"
      />
    </section>
  );
};

export default HeroSection;