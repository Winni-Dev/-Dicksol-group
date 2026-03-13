// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Construction, 
//   Mountain, 
//   Building2, 
//   Hammer, 
//   LandPlot, 
//   Home,
//   Wrench,
//   Trees
// } from 'lucide-react';
// import SectionTitle from '../components/UI/SectionTitle';
// import Card from '../components/UI/Card';

// const ExpertiseSection: React.FC = () => {
//   const expertiseData = [
//     {
//       title: "BTP & Infrastructures Routières",
//       icon: Construction,
//       items: [
//         "Construction de routes",
//         "Bitumage",
//         "Reprofilage",
//         "VRD & assainissement"
//       ]
//     },
//     {
//       title: "Aménagement Foncier",
//       icon: LandPlot,
//       items: [
//         "Terrassement",
//         "Lotissement",
//         "Ouverture de voies"
//       ]
//     },
//     {
//       title: "Immobilier",
//       icon: Building2,
//       items: [
//         "Gestion locative",
//         "Construction",
//         "Rénovation"
//       ]
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   return (
//     <section id="expertise" className="section-padding bg-primary-black">
//       <div className="container-custom">
//         <SectionTitle
//           title="Notre Expertise"
//           subtitle="Domaines d'activité"
//           center
//         />

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {expertiseData.map((exp, index) => {
//             const Icon = exp.icon;
            
//             return (
//               <motion.div key={index} variants={itemVariants}>
//                 <Card hover className="h-full group">
//                   <div className="mb-6">
//                     <div className="w-16 h-16 bg-primary-yellow/10 flex items-center justify-center group-hover:bg-primary-yellow/20 transition-colors">
//                       <Icon className="w-8 h-8 text-primary-yellow" />
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-semibold text-white mb-4">
//                     {exp.title}
//                   </h3>
                  
//                   <ul className="space-y-2">
//                     {exp.items.map((item, i) => (
//                       <li key={i} className="flex items-center text-primary-offwhite/70">
//                         <span className="w-1.5 h-1.5 bg-primary-yellow rounded-full mr-3" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExpertiseSection;



// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { 
//   Construction, 
//   Building2, 
//   LandPlot,
//   ArrowRight,
//   MapPin,
//   HardHat,
//   Ruler
// } from 'lucide-react';
// import SectionTitle from '../components/UI/SectionTitle';

// // Importer les images
// import routeImage from '../Images/acc2.png';
// import foncierImage from '../Images/ac.jpg';
// import immobilierImage from '../Images/pa2.jpg';

// const ExpertiseSection: React.FC = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

//   const expertiseData = [
//     {
//       id: 1,
//       title: "BTP & Infrastructures",
//       icon: Construction,
//       image: routeImage,
//       stats: [
//         { value: "150+", label: "km de routes" },
//         { value: "45", label: "projets" },
//       ],
//       services: [
//         "Construction de routes",
//         "Bitumage de la voie ",
//         "VRD & Assainissement & Drainage ",
//       ],
//       projects: [
//         { name: " Bitumage de la voie ", location: "Modeste " },
//       ]
//     },
//     {
//       id: 2,
//       title: "Aménagement Foncier",
//       icon: LandPlot,
//       image: foncierImage,
//       stats: [
//         { value: "500+", label: "hectares" },
//         { value: "35", label: "lotissements" },
//       ],
//       services: [
//         "remblayage",
//         "⁠terrassement",
//         "Ouverture de voies",
//       ],
//       projects: [
//         { name: "Décapage &  Ouverture de voie", location: "Anyama" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Immobilier",
//       icon: Building2,
//       image: immobilierImage,
//       stats: [
//         { value: "300+", label: "logements" },
//         { value: "25", label: "résidences" },
//       ],
//       services: [
//         "Gestion locative",
//         "Construction",
//         "Rénovation",
//       ],
//       projects: [
//         { name: "Cité M'Batto", location: "Bingerville" }
//       ]
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.1, 1]
//       }
//     }
//   };

//   return (
//     <section id="expertise" className="relative py-24 bg-gradient-to-b from-primary-black to-primary-charcoal overflow-hidden">
//       {/* Éléments de fond subtils */}
//       <div className="absolute inset-0">
//         <motion.div 
//           style={{ y }}
//           className="absolute top-40 left-20 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl"
//         />
//         <motion.div 
//           style={{ y: -y }}
//           className="absolute bottom-40 right-20 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl"
//         />
//       </div>

//       <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* En-tête de section épuré */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <span className="text-primary-yellow/80 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
//             Notre Expertise
//           </span>
          
//           <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
//             Des métiers <span className="text-primary-yellow font-normal">complémentaires</span>
//           </h2>
          
//           <p className="text-primary-offwhite/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
//             Une maîtrise complète des domaines clés du BTP pour des solutions intégrées et performantes.
//           </p>
//         </motion.div>

//         {/* Grille des cartes */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//         >
//           {expertiseData.map((exp) => {
//             const Icon = exp.icon;
            
//             return (
//               <motion.div
//                 key={exp.id}
//                 variants={itemVariants}
//                 className="group relative"
//               >
//                 {/* Carte élégante et aérée */}
//                 <div className="relative bg-primary-charcoal/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary-white/5 group-hover:border-primary-yellow/20 transition-all duration-700">
                  
//                   {/* Image minimaliste en fond très léger */}
//                   <div className="absolute inset-0 opacity-20">
//                     <img
//                       src={exp.image}
//                       alt=""
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-primary-charcoal via-primary-charcoal/80 to-primary-charcoal" />
//                   </div>

//                   {/* Contenu */}
//                   <div className="relative p-8">
//                     {/* En-tête avec icône */}
//                     <div className="flex items-start justify-between mb-8">
//                       <div>
//                         <div className="w-14 h-14 bg-primary-yellow/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-yellow/20 transition-colors">
//                           <Icon className="w-7 h-7 text-primary-yellow" />
//                         </div>
//                         <h3 className="text-2xl font-light text-white group-hover:text-primary-yellow transition-colors">
//                           {exp.title}
//                         </h3>
//                       </div>
                      
//                       {/* Ligne décorative */}
//                       <div className="w-12 h-[1px] bg-primary-yellow/30 mt-3" />
//                     </div>

//                     {/* Statistiques minimales */}
//                     <div className="flex space-x-6 mb-8">
//                       {exp.stats.map((stat, idx) => (
//                         <div key={idx} className="text-center">
//                           <div className="text-xl font-light text-white">{stat.value}</div>
//                           <div className="text-[10px] text-primary-offwhite/40 uppercase tracking-wider">
//                             {stat.label}
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Services */}
//                     <div className="space-y-3 mb-8">
//                       {exp.services.map((service, idx) => (
//                         <div key={idx} className="flex items-center text-sm">
//                           <span className="w-1 h-1 bg-primary-yellow/50 rounded-full mr-3" />
//                           <span className="text-primary-offwhite/70 font-light">{service}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Projet récent */}
//                     <div className="pt-4 border-t border-primary-white/5">
//                       <p className="text-xs text-primary-offwhite/40 mb-2">Projet récent</p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-white text-sm font-light">
//                           {exp.projects[0].name}
//                         </span>
//                         <div className="flex items-center text-primary-offwhite/40 text-xs">
//                           <MapPin className="w-3 h-3 mr-1" />
//                           {exp.projects[0].location}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Lien discret */}
//                     <a
//                       href={`/expertise#${exp.id}`}
//                       className="inline-flex items-center text-primary-yellow/50 hover:text-primary-yellow transition-colors mt-6 text-xs group/link"
//                     >
//                       <span className="mr-2">Découvrir</span>
//                       <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Éléments de synthèse élégants */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
//         >
//           {[
//             { icon: HardHat, text: "Équipes certifiées" },
//             { icon: Ruler, text: "Précision technique" },
//             { icon: Building2, text: "Références solides" }
//           ].map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div key={idx} className="flex items-center justify-center space-x-3 text-primary-offwhite/40">
//                 <Icon className="w-4 h-4" />
//                 <span className="text-xs font-light tracking-wide">{item.text}</span>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExpertiseSection;


import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Construction, 
  Building2, 
  LandPlot,
  MapPin,
  HardHat,
  Ruler,
  Key
} from 'lucide-react';

// Importer les images
import routeImage from '../Images/acc2.png';
import foncierImage from '../Images/ac.jpg';
import immobilierImage from '../Images/pa2.jpg';

const ExpertiseSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const expertiseData = [
    {
      id: 1,
      title: "BTP & Infrastructures",
      icon: Construction,
      image: routeImage,
      stats: [
        { value: "27", label: "km de routes" },
        { value: "2", label: "projets" },
      ],
      services: [
        "Construction de route",
        "Bitumage de la voie",
        "Reprofilage de voie",
        "VRD & Assainissement & Drainage",
      ],
      projects: [
        { name: "Bitumage de la voie", location: "Modeste" },
        { name: "Construction de route", location: "Motobé" }
      ],
      details: [
        { label: "Tronçon 1", value: "17 km" },
        { label: "Tronçon 2", value: "10 km" }
      ]
    },
    {
      id: 2,
      title: "Aménagement Foncier",
      icon: LandPlot,
      image: foncierImage,
      stats: [
        { value: "160", label: "hectares" },
        { value: "3", label: "lotissements" },
      ],
      services: [
        "Décapage",
        "Remblayage",
        "Terrassement",
        "Ramassage",
        "Bornage",
        "Pose des poteaux",
        "Ouverture de voie",
        "Rechargement de voie",
        "Lotissement",
      ],
      projects: [
        { name: "Décapage & Ouverture de voie", location: "Botindé & Zossonkoi" },
        { name: "Terrassement", location: "M'Batto Bouaké" },
        { name: "Remblayage", location: "Motobé" }
      ]
    },
    {
      id: 3,
      title: "Immobilier",
      icon: Building2,
      image: immobilierImage,
      stats: [
        { value: "4", label: "résidences" },
        { value: "3", label: "AIRBNB" },
      ],
      services: [
        "Gestions locatives (maisons, appartements, cours communs, résidences meublées, Airbnb, entrepôts)",
        "Ventes (sites, terrains, appartements, cours communs, entrepôts)",
        "Rénovation & Réhabilitation",
        "Construction",
      ],
      projects: [
        { name: "Gestion locative", location: "Yamoussoukro & Bingerville" },
        { name: "Résidences", location: "Yamoussoukro & Bingerville" },
        { name: "AIRBNB", location: "Marcory" },
        { name: "Rénovation", location: "Koumassi" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.1, 1]
      }
    }
  };

  return (
    <section id="expertise" className="relative py-24 bg-gradient-to-b from-primary-black to-primary-charcoal overflow-hidden">
      {/* Éléments de fond subtils */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y }}
          className="absolute top-40 left-20 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl"
        />
        <motion.div 
          style={{ y: -y }}
          className="absolute bottom-40 right-20 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section épuré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-yellow/80 text-sm font-light tracking-[0.3em] uppercase mb-4 block">
            Notre Expertise
          </span>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Des métiers <span className="text-primary-yellow font-normal">complémentaires</span>
          </h2>
          
          <p className="text-primary-offwhite/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Une maîtrise complète des domaines clés du BTP pour des solutions intégrées et performantes.
          </p>
        </motion.div>

        {/* Grille des cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {expertiseData.map((exp) => {
            const Icon = exp.icon;
            
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="group relative h-full"
              >
                {/* Carte élégante et aérée - Hauteur fixe avec flex column */}
                <div className="relative bg-primary-charcoal/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary-white/5 group-hover:border-primary-yellow/20 transition-all duration-700 h-full flex flex-col">
                  
                  {/* Image minimaliste en fond très léger */}
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={exp.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-charcoal via-primary-charcoal/80 to-primary-charcoal" />
                  </div>

                  {/* Contenu avec flex-grow pour remplir l'espace */}
                  <div className="relative p-8 flex flex-col flex-grow">
                    {/* En-tête avec icône */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <div className="w-14 h-14 bg-primary-yellow/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-yellow/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary-yellow" />
                        </div>
                        <h3 className="text-2xl font-light text-white group-hover:text-primary-yellow transition-colors">
                          {exp.title}
                        </h3>
                      </div>
                      
                      {/* Ligne décorative */}
                      <div className="w-12 h-[1px] bg-primary-yellow/30 mt-3" />
                    </div>

                    {/* Statistiques minimales */}
                    <div className="flex space-x-6 mb-8">
                      {exp.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-light text-white">{stat.value}</div>
                          <div className="text-[10px] text-primary-offwhite/40 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Détails supplémentaires pour BTP */}
                    {exp.details && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.details.map((detail, idx) => (
                          <div key={idx} className="bg-primary-yellow/5 px-3 py-1 rounded-full text-xs">
                            <span className="text-primary-offwhite/60">{detail.label}: </span>
                            <span className="text-primary-yellow font-light">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Services avec hauteur maximale contrôlée */}
                    <div className="space-y-2 mb-8 flex-grow">
                      <div className="max-h-[180px] overflow-y-auto custom-scrollbar pr-2">
                        {exp.services.map((service, idx) => (
                          <div key={idx} className="flex items-start text-sm mb-2">
                            <span className="w-1 h-1 bg-primary-yellow/50 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-primary-offwhite/70 font-light leading-relaxed">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projets récents - Toujours en bas */}
                    <div className="pt-4 border-t border-primary-white/5 mt-auto">
                      <p className="text-xs text-primary-offwhite/40 mb-3">Projets récents</p>
                      <div className="space-y-2">
                        {exp.projects.slice(0, 3).map((project, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-white text-sm font-light truncate max-w-[140px]">
                              {project.name}
                            </span>
                            <div className="flex items-center text-primary-offwhite/40 text-xs flex-shrink-0">
                              <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                              <span className="truncate max-w-[100px]">{project.location}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Éléments de synthèse élégants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: HardHat, text: "Équipes certifiées" },
            { icon: Ruler, text: "Précision technique" },
            { icon: Key, text: "Gestion complète" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center justify-center space-x-3 text-primary-offwhite/40">
                <Icon className="w-4 h-4" />
                <span className="text-xs font-light tracking-wide">{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Styles pour la scrollbar personnalisée */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(234, 179, 8, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(234, 179, 8, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;