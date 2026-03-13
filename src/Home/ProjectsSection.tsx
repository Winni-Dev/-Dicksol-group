// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin } from 'lucide-react';
// import SectionTitle from '../components/UI/SectionTitle';
// import Card from '../components/UI/Card';

// const ProjectsSection: React.FC = () => {
//   const projects = [
//     {
//       id: 1,
//       name: "Projet Motobé",
//       location: "Alépé",
//       image: "/images/projet-motobe.jpg",
//       category: "Infrastructure routière"
//     },
//     {
//       id: 2,
//       name: "Projet Botindé",
//       location: "Tiassalé",
//       image: "/images/projet-botinde.jpg",
//       category: "Aménagement"
//     },
//     {
//       id: 3,
//       name: "Projet Zonssonkoi",
//       location: "Anyama",
//       image: "/images/projet-zonssonkoi.jpg",
//       category: "Lotissement"
//     },
//     {
//       id: 4,
//       name: "Projet M'Batto Bouaké",
//       location: "Bingerville",
//       image: "/images/projet-mbatto.jpg",
//       category: "Cité résidentielle"
//     }
//   ];

//   return (
//     <section id="projets" className="section-padding bg-primary-charcoal">
//       <div className="container-custom">
//         <SectionTitle
//           title="Nos Projets Réalisés"
//           subtitle="Réalisations"
//           center
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <Card hover className="p-0 overflow-hidden group">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Overlay content on hover */}
//                   <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       {project.name}
//                     </h3>
//                     <p className="text-primary-offwhite/80 text-sm mb-2">
//                       {project.category}
//                     </p>
//                     <div className="flex items-center text-primary-yellow">
//                       <MapPin className="w-4 h-4 mr-1" />
//                       <span className="text-sm">{project.location}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Default content (visible when not hovered) */}
//                 <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
//                   <h3 className="text-lg font-semibold text-white">
//                     {project.name}
//                   </h3>
//                   <div className="flex items-center text-primary-offwhite/60 mt-1">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     <span className="text-sm">{project.location}</span>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

// Import des images (ajustez les chemins)
import motobeImage from '../Images/motobé.jpeg';
import botindeImage from '../Images/renomer.jpeg';
import zonssonkoiImage from '../Images/zosson.jpeg';
import mbattoImage from '../Images/bouaké.jpeg';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Motobé",
      location: "Alépé",
      image: motobeImage,
      category: "Infrastructure routière",
      description: "Route bitumée de 15 km"
    },
    {
      id: 2,
      name: "Botindé",
      location: "Tiassalé",
      image: botindeImage,
      category: "Aménagement foncier",
      description: "Lotissement de 50 hectares"
    },
    {
      id: 3,
      name: "Zonssonkoi",
      location: "Anyama",
      image: zonssonkoiImage,
      category: "Lotissement",
      description: "300 parcelles viabilisées"
    },
    {
      id: 4,
      name: "M'Batto Bouaké",
      location: "Bingerville",
      image: mbattoImage,
      category: "Cité résidentielle",
      description: "120 logements sociaux"
    }
  ];

  return (
    <section id="projets" className="relative py-24 bg-primary-charcoal overflow-hidden">
      {/* Éléments de fond minimalistes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-yellow/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-yellow/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête extrêmement minimal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-yellow/40 text-xs font-light tracking-[0.3em] uppercase">
            Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-3">
            Projets <span className="text-primary-yellow/80">récents</span>
          </h2>
          <div className="w-12 h-px bg-primary-yellow/20 mx-auto mt-6" />
        </motion.div>

        {/* Grille de projets - élégante et aérée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Carte minimaliste */}
              <div className="relative bg-primary-black/20 backdrop-blur-sm overflow-hidden">
                {/* Image en fond très léger */}
                <div className="relative aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700"
                  />
                  
                  {/* Overlay très subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/50 to-transparent" />
                  
                  {/* Contenu superposé - minimal */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    {/* Catégorie en tout petit */}
                    <span className="text-primary-yellow/50 text-[10px] font-light uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    
                    {/* Nom du projet */}
                    <h3 className="text-xl font-light text-white mb-1 group-hover:text-primary-yellow/90 transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    {/* Description courte */}
                    <p className="text-primary-offwhite/40 text-xs font-light mb-3">
                      {project.description}
                    </p>
                    
                    {/* Localisation avec icône très discrète */}
                    <div className="flex items-center space-x-1 text-primary-offwhite/30">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] font-light">{project.location}</span>
                    </div>
                    
                    {/* Lien discret au survol */}
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute bottom-5 right-5"
                    >
                      <ArrowRight className="w-4 h-4 text-primary-yellow/30 group-hover:text-primary-yellow/60 transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lien vers tous les projets - très discret */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/#galerie"
            className="inline-flex items-center space-x-2 text-primary-yellow/30 hover:text-primary-yellow/50 transition-colors text-xs font-light uppercase tracking-wider"
          >
            <span>Tous les projets</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>

      {/* Élément décoratif final */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/10 to-transparent" />
    </section>
  );
};

export default ProjectsSection;