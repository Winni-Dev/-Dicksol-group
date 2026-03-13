// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Quote } from 'lucide-react';
// // import p1 from '../Images/pa2.jpg'

// // const DirectorMessage: React.FC = () => {
// //   return (
// //     <section className="section-padding bg-primary-charcoal">
// //       <div className="container-custom">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Image */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="relative"
// //           >
// //             <div className="aspect-[4/5] bg-gradient-to-br from-primary-yellow/20 to-transparent">
// //               <img
// //                 src={p1}
// //                 alt="Directeur Général DICKSOL GROUPE"
// //                 className="w-full h-full object-cover mix-blend-luminosity"
// //               />
// //             </div>
// //             <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary-yellow/30 -z-10" />
// //           </motion.div>

// //           {/* Message */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="relative"
// //           >
// //             <Quote className="w-16 h-16 text-primary-yellow/20 absolute -top-8 -left-4" />
            
// //             <div className="yellow-accent pl-6">
// //               <h2 className="heading-2 text-white mb-6">
// //                 Mot du Directeur Général
// //               </h2>
              
// //               <div className="space-y-4 text-primary-offwhite/80">
// //                 <p>
// //                   Depuis la création de DICKSOL GROUPE SARL, notre mission est claire : 
// //                   contribuer au développement des infrastructures en Côte d'Ivoire avec 
// //                   excellence et intégrité.
// //                 </p>
                
// //                 <p>
// //                   Chaque projet que nous réalisons est une promesse tenue envers nos 
// //                   partenaires et les communautés. Notre équipe d'experts met tout en 
// //                   œuvre pour garantir des réalisations durables et conformes aux normes 
// //                   les plus strictes.
// //                 </p>
                
// //                 <p>
// //                   Nous croyons en une vision du BTP qui allie performance technique et 
// //                   responsabilité environnementale. C'est cette approche qui fait notre 
// //                   force et notre réputation.
// //                 </p>
// //               </div>

// //               <div className="mt-8">
// //                 <p className="text-primary-yellow font-semibold text-lg">
// //                   Kouassi Konan
// //                 </p>
// //                 <p className="text-primary-offwhite/60">
// //                   Directeur Général
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default DirectorMessage;


// import React, { useEffect, useState, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { 
//   Quote, 
//   Award, 
//   Target, 
//   Users, 
//   TrendingUp, 
//   Calendar,
//   MapPin,
//   Building2,
//   CheckCircle,
//   Star,
//   ChevronRight,
//   GraduationCap,
//   Briefcase,
//   Scale,
//   Globe
// } from 'lucide-react';

// // Importer l'image (ajustez le chemin selon votre structure)
// import directeurImage from '../Images/p1.jpg';

// // Composant Counter pour les animations de chiffres
// const Counter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
//   const [count, setCount] = useState(0);
//   const [isInView, setIsInView] = useState(false);
//   const counterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isInView) return;

//     let startTime: number;
//     let animationFrame: number;

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const percentage = Math.min(progress / duration, 1);
      
//       setCount(Math.floor(end * percentage));

//       if (percentage < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, [isInView, end, duration]);

//   return (
//     <span ref={counterRef} className="text-2xl md:text-3xl font-bold text-white">
//       {count}{suffix}
//     </span>
//   );
// };

// const DirectorMessage: React.FC = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

//   // Diplômes et qualifications
//   const diplomes = [
//     { icon: GraduationCap, title: "Diplôme d'Ingénieur", subtitle: "Génie Civil" },
//     { icon: Briefcase, title: "MBA", subtitle: "Commerce International" },
//     { icon: Scale, title: "Maîtrise", subtitle: "Droit des Affaires" },
//   ];

//   // Statistiques clés
//   const stats = [
//     { icon: Calendar, value: 15, label: "Années d'expérience", suffix: "+" },
//     { icon: Award, value: 45, label: "Projets réalisés", suffix: "+" },
//     { icon: Building2, value: 120, label: "Collaborateurs", suffix: "+" },
//     { icon: Globe, value: 8, label: "Pays partenaires", suffix: "" },
//   ];

//   // Citations inspirantes
//   const citation = {
//     text: "L'excellence n'est pas un acte, mais une habitude. Chez DICKSOL GROUPE, nous construisons l'avenir avec intégrité et passion.",
//     author: "Dick Anthony"
//   };

//   return (
//     <section className="relative section-padding bg-gradient-to-b from-primary-charcoal to-primary-black overflow-hidden">
//       {/* Éléments de fond décoratifs - plus subtils */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-yellow/20 rounded-full filter blur-3xl" />
//       </div>

//       {/* Motif géométrique léger */}
//       <div className="absolute inset-0 opacity-3">
//         <div className="absolute top-0 left-0 w-full h-full" 
//              style={{
//                backgroundImage: `radial-gradient(circle at 1px 1px, #FACC15 0.5px, transparent 0)`,
//                backgroundSize: '30px 30px'
//              }} 
//         />
//       </div>

//       <div className="container-custom relative z-10">
//         {/* Badge de section - plus élégant */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-6 md:mb-8"
//         >
//           <span className="px-3 py-1.5 bg-primary-yellow/10 border border-primary-yellow/30 text-primary-yellow text-xs font-medium rounded-full inline-flex items-center tracking-wide">
//             <Star className="w-3 h-3 mr-1.5" />
//             FONDATEUR & DIRECTEUR GÉNÉRAL
//           </span>
//         </motion.div>

//         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//           {/* Colonne image avec éléments flottants - optimisé mobile */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative w-full max-w-sm mx-auto lg:max-w-none"
//             style={{ y }}
//           >
//             {/* Cadre principal */}
//             <div className="relative z-10">
//               <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent z-10" />
//                 <img
//                   src={directeurImage}
//                   alt="Dick Anthony - Fondateur DICKSOL GROUPE"
//                   className="w-full h-full object-cover object-center"
//                 />
//               </div>

//               {/* Éléments flottants - repositionnés pour mobile */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-primary-yellow rounded-lg flex items-center justify-center shadow-lg z-20"
//               >
//                 <Building2 className="w-8 h-8 md:w-10 md:h-10 text-primary-black" />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//                 className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-primary-charcoal/90 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-primary-yellow/20 shadow-lg z-20"
//               >
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary-yellow" />
//                   <div>
//                     <p className="text-white text-xs md:text-sm font-medium">Abidjan, Côte d'Ivoire</p>
//                     <p className="text-primary-offwhite/60 text-[10px] md:text-xs">Depuis 2008</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Cadres décoratifs - plus subtils */}
//             <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 border border-primary-yellow/10 rounded-lg -z-10" />
//             <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border border-primary-yellow/5 rounded-lg -z-10" />
//           </motion.div>

//           {/* Colonne message - texte plus élégant et fin */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative w-full"
//           >
//             {/* Grande icône de citation décorative */}
//             <Quote className="absolute -top-8 -left-2 w-16 h-16 text-primary-yellow/5" />
            
//             <div className="relative z-10 space-y-4 md:space-y-6">
//               {/* Nom et titre - plus élégant */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//               >
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 tracking-tight">
//                   Dick Anthony
//                 </h2>
//                 <p className="text-primary-yellow text-sm md:text-base font-medium tracking-wide">
//                   Fondateur & Directeur Général
//                 </p>
//               </motion.div>

//               {/* Sous-titre/vision */}
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.25, duration: 0.6 }}
//                 className="text-primary-offwhite/70 text-sm md:text-base italic border-l-2 border-primary-yellow/30 pl-3"
//               >
//                 "Bâtir l'avenir avec excellence et intégrité"
//               </motion.p>

//               {/* Diplômes - grille responsive */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3"
//               >
//                 {diplomes.map((diplome, index) => {
//                   const Icon = diplome.icon;
//                   return (
//                     <div key={index} className="bg-primary-black/30 p-2.5 rounded border border-primary-yellow/5">
//                       <div className="flex items-center space-x-2">
//                         <Icon className="w-3.5 h-3.5 text-primary-yellow/70" />
//                         <div>
//                           <p className="text-white text-xs font-medium">{diplome.title}</p>
//                           <p className="text-primary-offwhite/50 text-[10px]">{diplome.subtitle}</p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </motion.div>

//               {/* Message principal - texte plus fin */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.35, duration: 0.6 }}
//                 className="space-y-3 text-primary-offwhite/80 text-sm md:text-base leading-relaxed"
//               >
//                 <p>
//                   <span className="text-primary-yellow font-medium">Ingénieur en Génie Civil</span>, titulaire d'un 
//                   <span className="text-primary-yellow font-medium"> MBA en Commerce International</span> et d'une 
//                   <span className="text-primary-yellow font-medium"> Maîtrise en Droit des Affaires</span>, j'ai fondé 
//                   DICKSOL GROUPE SARL avec une vision claire : contribuer au développement des infrastructures 
//                   ivoiriennes avec rigueur et professionnalisme.
//                 </p>
                
//                 <p className="text-primary-offwhite/70">
//                   Notre approche allie expertise technique, vision stratégique et conformité légale pour offrir 
//                   des solutions durables et innovantes à nos partenaires. Chaque projet est une opportunité de 
//                   démontrer notre engagement envers l'excellence.
//                 </p>
//               </motion.div>

//               {/* Statistiques avec compteurs */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-2"
//               >
//                 {stats.map((stat, index) => {
//                   const Icon = stat.icon;
//                   return (
//                     <div key={index} className="text-center">
//                       <div className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-primary-yellow/5 rounded-full mb-1.5">
//                         <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-yellow/70" />
//                       </div>
//                       <Counter end={stat.value} suffix={stat.suffix} />
//                       <p className="text-[10px] md:text-xs text-primary-offwhite/50 uppercase tracking-wider mt-0.5">
//                         {stat.label}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </motion.div>

//               {/* Citation et signature */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.45, duration: 0.6 }}
//                 className="border-t border-primary-yellow/10 pt-4 mt-2"
//               >
//                 <div className="flex items-start space-x-3">
//                   <Quote className="w-6 h-6 text-primary-yellow/20 flex-shrink-0" />
//                   <div>
//                     <p className="text-primary-offwhite/60 text-xs md:text-sm italic mb-2">
//                       "{citation.text}"
//                     </p>
//                     <p className="text-primary-yellow/80 text-xs font-medium">
//                       — {citation.author}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Lien discret vers biographie */}
//               <motion.a
//                 href="/#biographie"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5, duration: 0.6 }}
//                 className="inline-flex items-center text-primary-yellow/60 hover:text-primary-yellow transition-colors text-xs group"
//               >
//                 <span>Parcours complet</span>
//                 <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DirectorMessage;


import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Quote, 
  MapPin,
  GraduationCap,
  Briefcase,
  Scale,
 
} from 'lucide-react';

// Importer l'image
import directeurImage from '../Images/dic.jpg';

// Composant Counter simplifié
const Counter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={counterRef} className="text-xl font-light text-white">
      {count}{suffix}
    </span>
  );
};

const DirectorMessage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Diplômes - épurés
  const diplomes = [
    { icon: GraduationCap, title: "Ingénieur Génie Civil" },
    { icon: Briefcase, title: "MBA Commerce International" },
    { icon: Scale, title: "Maîtrise Droit des Affaires" },
  ];

  // Une seule statistique significative
  const experience = 5;

  const citation = {
    text: "L'excellence n'est pas un acte, mais une habitude.",
    author: "Dick Anthony"
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-charcoal to-primary-black overflow-hidden">
      {/* Éléments de fond extrêmement subtils */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Colonne image - épurée */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.1, 1] }}
            className="relative"
            style={{ y }}
          >
            <div className="relative z-10">
              {/* Image avec cadre très simple */}
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src={directeurImage}
                  alt="Dick Anthony"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Seul élément décoratif - une ligne verticale */}
              <div className="absolute -right-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-primary-yellow/30 to-transparent" />
            </div>

            {/* Pas de cadres, pas d'éléments flottants */}
          </motion.div>

          {/* Colonne contenu - minimaliste */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.1, 1] }}
            className="relative"
          >
            {/* Petit repère visuel */}
            <div className="absolute -left-8 top-0 w-px h-12 bg-primary-yellow/20" />

            <div className="space-y-8">
              {/* En-tête minimal */}
              <div>
                <span className="text-primary-yellow/50 text-xs font-light tracking-[0.3em] uppercase block mb-3">
                  Fondateur
                </span>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-1">
                  Dick Anthony
                </h2>
                <div className="w-12 h-px bg-primary-yellow/30 mt-4" />
              </div>

              {/* Vision - une ligne */}
              <p className="text-primary-offwhite/60 text-sm font-light italic">
                "Bâtir l'avenir avec excellence et intégrité"
              </p>

              {/* Diplômes - disposition verticale élégante */}
              <div className="space-y-3">
                {diplomes.map((diplome, index) => {
                  const Icon = diplome.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="w-4 h-4 text-primary-yellow/40" />
                      <span className="text-primary-offwhite/70 text-sm font-light">
                        {diplome.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Message court et percutant */}
              <p className="text-primary-offwhite/60 text-sm font-light leading-relaxed">
                J'ai fondé DICKSOL GROUPE avec une vision claire : 
                contribuer au développement des infrastructures ivoiriennes 
                avec rigueur et professionnalisme.
              </p>

              {/* Expérience - seul chiffre */}
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-light text-white">
                  <Counter end={experience} suffix="+" />
                </div>
                <div className="text-xs text-primary-offwhite/40 font-light uppercase tracking-wider">
                  Années d'expérience
                </div>
              </div>

              {/* Citation courte */}
              <div className="pt-4 border-t border-primary-white/5">
                <div className="flex items-start space-x-2">
                  <Quote className="w-4 h-4 text-primary-yellow/20 flex-shrink-0 mt-0.5" />
                  <p className="text-primary-offwhite/40 text-xs font-light italic">
                    "{citation.text}"
                    <span className="block text-primary-yellow/60 text-[10px] mt-1">
                      — {citation.author}
                    </span>
                  </p>
                </div>
              </div>

              {/* Localisation discrète */}
              <div className="flex items-center space-x-2 text-primary-offwhite/30">
                <MapPin className="w-3 h-3" />
                <span className="text-[10px] font-light">Abidjan, Côte d'Ivoire</span>
              </div>

              {/* Lien très discret */}
              {/* <a
                href="/#biographie"
                className="inline-flex items-center text-primary-yellow/40 hover:text-primary-yellow/60 transition-colors text-[10px] uppercase tracking-wider group"
              >
                <span>Parcours</span>
                <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Élément final très subtil */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8"
      >
        
      </motion.div>
    </section>
  );
};

export default DirectorMessage;