// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Clock, 
//   Award, 
//   Leaf, 
//   Users, 
//   Shield, 
//   Heart, 
//   Lightbulb, 
//   Target 
// } from 'lucide-react';
// import SectionTitle from '../components/UI/SectionTitle';
// import Card from '../components/UI/Card';

// const GovernanceSection: React.FC = () => {
//   const engagements = [
//     {
//       title: "Respect des délais",
//       description: "Nous nous engageons à livrer nos projets dans les temps impartis",
//       icon: Clock
//     },
//     {
//       title: "Conformité technique",
//       description: "Respect strict des normes et standards internationaux",
//       icon: Award
//     },
//     {
//       title: "Durabilité",
//       description: "Construction durable et respectueuse de l'environnement",
//       icon: Leaf
//     },
//     {
//       title: "Satisfaction partenaires",
//       description: "Relation de confiance et transparence avec nos partenaires",
//       icon: Users
//     }
//   ];

//   const valeurs = [
//     {
//       title: "Professionnalisme",
//       description: "Excellence et rigueur dans toutes nos réalisations",
//       icon: Shield
//     },
//     {
//       title: "Intégrité",
//       description: "Transparence et éthique dans nos relations d'affaires",
//       icon: Heart
//     },
//     {
//       title: "Innovation",
//       description: "Veille technologique et solutions innovantes",
//       icon: Lightbulb
//     },
//     {
//       title: "Responsabilité sociale",
//       description: "Engagement envers les communautés locales",
//       icon: Target
//     }
//   ];

//   return (
//     <section id="gouvernance" className="section-padding bg-primary-charcoal">
//       <div className="container-custom">
//         <SectionTitle
//           title="Gouvernance & Valeurs"
//           subtitle="Notre engagement"
//           center
//         />

//         {/* Engagements */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold text-white text-center mb-8">
//             Nos Engagements
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {engagements.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <Card className="text-center h-full">
//                     <div className="flex justify-center mb-4">
//                       <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center">
//                         <Icon className="w-8 h-8 text-primary-yellow" />
//                       </div>
//                     </div>
//                     <h4 className="text-lg font-semibold text-white mb-2">
//                       {item.title}
//                     </h4>
//                     <p className="text-primary-offwhite/70 text-sm">
//                       {item.description}
//                     </p>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Valeurs */}
//         <div>
//           <h3 className="text-2xl font-semibold text-white text-center mb-8">
//             Nos Valeurs Fondamentales
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {valeurs.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                 >
//                   <Card className="text-center h-full border-primary-yellow/20">
//                     <div className="flex justify-center mb-4">
//                       <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center">
//                         <Icon className="w-8 h-8 text-primary-yellow" />
//                       </div>
//                     </div>
//                     <h4 className="text-lg font-semibold text-white mb-2">
//                       {item.title}
//                     </h4>
//                     <p className="text-primary-offwhite/70 text-sm">
//                       {item.description}
//                     </p>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GovernanceSection;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Award, 
  Leaf, 
  Users, 
  Shield, 
  Heart, 
  Lightbulb, 
  Target,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// Importer les images des membres de l'équipe (à ajuster selon vos fichiers)
// import directeurImage from '../Images/per1.jpeg';
import chefProjetImage from '../Images/per2.jpeg';
import ingenieurImage from '../Images/per3.jpeg';
import responsableImage from '../Images/per4.jpeg';
import chargeAffairesImage from '../Images/per5.jpeg';
import assistantImage from '../Images/per6.jpeg';
import jurist from '../Images/juriste.jpeg'

const GovernanceSection: React.FC = () => {
  const engagements = [
    {
      title: "Respect des délais",
      description: "Livraison dans les temps impartis",
      longDesc: "Notre rigorisme garantit le respect de nos engagements temporels",
      icon: Clock
    },
    {
      title: "Conformité technique",
      description: "Normes internationales",
      longDesc: "Standards ISO et certifications qualité",
      icon: Award
    },
    {
      title: "Durabilité",
      description: "Construction responsable",
      longDesc: "Matériaux écologiques et processus verts",
      icon: Leaf
    },
    {
      title: "Satisfaction",
      description: "Relation de confiance",
      longDesc: "98% de clients satisfaits et fidèles",
      icon: Users
    }
  ];

  const valeurs = [
    {
      title: "Professionnalisme",
      description: "Excellence et rigueur",
      longDesc: "Équipes certifiées et expérimentées",
      icon: Shield
    },
    {
      title: "Intégrité",
      description: "Transparence et éthique",
      longDesc: "Partenariats fondés sur la confiance",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "Solutions innovantes",
      longDesc: "Veille technologique permanente",
      icon: Lightbulb
    },
    {
      title: "Responsabilité",
      description: "Engagement local",
      longDesc: "Insertion et développement communautaire",
      icon: Target
    }
  ];

  // Données de l'équipe (6 membres)
  const teamMembers = [
    {
      id: 1,
      name: "Mr Tra Bi Guy Emmanuel Victorien",
      position: "Juriste",
      department: "Juridique",
      email: "d.anthony@dicksol.groupe",
      // linkedin: "#",
      // twitter: "#",
      image: jurist,
      expertise: "Ingénieur Génie Civil, MBA",
      experience: "15+ ans"
    },
    {
      id: 2,
      name: "Miss Yao Laeticia",
      position: "Responsable administrative ",
      department: "RHCOM",
      email: "m.konan@dicksol.groupe",
      // linkedin: "#",
      // twitter: "#",
      image: chefProjetImage,
      // expertise: "Chef de projet senior",
      // experience: "12 ans"
    },
    {
      id: 3,
      name: "Mr TEKI Willy",
      position: "Responsable Aménagement Foncier",
      department: "Aménagement foncier",
      email: "j.kouassi@dicksol.groupe",
      linkedin: "#",
      twitter: "#",
      image: ingenieurImage,
      // expertise: "Géomètre-expert",
      // experience: "10 ans"
    },
    {
      id: 4,
      name: "Miss Kouassi Olga",
      position: "Responsable Immobilier",
      department: "Promotion immobilière",
      email: "f.diallo@dicksol.groupe",
      linkedin: "#",
      twitter: "#",
      image: responsableImage,
      // expertise: "Gestion de patrimoine",
      // experience: "8 ans"
    },
    {
      id: 5,
      name: "Miss Doumbia Barakissa",
      position: "Réceptionniste",
      department: "Secretariat",
      email: "p.nguessan@dicksol.groupe",
      linkedin: "#",
      twitter: "#",
      image: chargeAffairesImage,
      // expertise: "MBA Commerce International",
      // experience: "7 ans"
    },
    {
      id: 6,
      name: "Mme Kouadio Olga",
      position: "La technicienne de surface",
      department: "Maintenance",
      email: "a.toure@dicksol.groupe",
      linkedin: "#",
      twitter: "#",
      image: assistantImage,
      // expertise: "Gestion & Communication",
      // experience: "5 ans"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.1, 1] }
    }
  };

  return (
    <section id="gouvernance" className="relative py-20 md:py-24 lg:py-28 bg-gradient-to-b from-primary-black to-primary-charcoal overflow-hidden">
      {/* Éléments de fond élégants */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary-yellow/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl" />
        
        {/* Lignes de structure */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary-yellow/40 text-xs font-light tracking-[0.3em] uppercase">
            Notre identité
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3 mb-4">
            Gouvernance & <span className="text-primary-yellow/80">valeurs</span>
          </h2>
          <p className="text-primary-offwhite/40 text-sm md:text-base font-light max-w-2xl mx-auto">
            Des principes forts qui guident nos actions au quotidien
          </p>
          <div className="w-12 h-px bg-primary-yellow/20 mx-auto mt-6" />
        </motion.div>

        {/* Section Engagements - 2 colonnes sur mobile, 4 sur desktop */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <span className="inline-flex items-center space-x-2 text-primary-offwhite/30 text-xs font-light uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Nos engagements</span>
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
          >
            {engagements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative h-full"
                >
                  {/* Carte redesignée */}
                  <div className="relative h-full bg-gradient-to-b from-primary-charcoal/50 to-primary-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-7 rounded-xl md:rounded-2xl border border-primary-yellow/10 hover:border-primary-yellow/30 transition-all duration-500 overflow-hidden">
                    
                    {/* Effet de lumière au survol */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Contenu */}
                    <div className="relative z-10 text-center">
                      {/* Icône avec design moderne */}
                      <div className="relative inline-block mb-2 md:mb-4">
                        <div className="absolute inset-0 bg-primary-yellow/20 blur-md rounded-full group-hover:bg-primary-yellow/30 transition-all duration-500" />
                        <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-primary-yellow/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary-yellow/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-yellow/80 group-hover:text-primary-yellow transition-colors" />
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className="text-xs md:text-base lg:text-lg font-light text-white mb-1 md:mb-2 group-hover:text-primary-yellow/90 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description courte */}
                      <p className="text-primary-offwhite/50 text-[8px] md:text-xs lg:text-sm font-light mb-2 md:mb-3">
                        {item.description}
                      </p>

                      {/* Description longue (apparaît au survol) - cachée sur mobile */}
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: 'auto' }}
                        className="hidden md:block text-primary-offwhite/30 text-[10px] lg:text-xs font-light overflow-hidden"
                      >
                        {item.longDesc}
                      </motion.p>

                      {/* Indicateur discret */}
                      <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-primary-yellow/30" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Séparateur élégant */}
        <div className="relative py-6 md:py-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-primary-yellow/30 to-transparent" />
        </div>

        {/* Section Valeurs - 2 colonnes sur mobile, 4 sur desktop */}
        <div className="mt-6 md:mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <span className="inline-flex items-center space-x-2 text-primary-offwhite/30 text-xs font-light uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Nos valeurs fondamentales</span>
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
          >
            {valeurs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative h-full"
                >
                  {/* Carte redesignée avec style légèrement différent */}
                  <div className="relative h-full bg-gradient-to-b from-primary-charcoal/30 to-primary-black/30 backdrop-blur-sm p-4 md:p-6 lg:p-7 rounded-xl md:rounded-2xl border border-primary-yellow/5 hover:border-primary-yellow/20 transition-all duration-500 overflow-hidden">
                    
                    {/* Effet de lumière au survol */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-primary-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Contenu */}
                    <div className="relative z-10 text-center">
                      {/* Icône avec design moderne - version différente */}
                      <div className="relative inline-block mb-2 md:mb-4">
                        <div className="absolute inset-0 bg-primary-yellow/10 blur-sm md:blur-md rounded-full group-hover:bg-primary-yellow/20 transition-all duration-500" />
                        <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-primary-black/50 rounded-lg md:rounded-xl flex items-center justify-center border border-primary-yellow/20 group-hover:border-primary-yellow/40 transition-all duration-500 transform group-hover:scale-105">
                          <Icon className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-yellow/60 group-hover:text-primary-yellow/80 transition-colors" />
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className="text-xs md:text-base lg:text-lg font-light text-white/90 mb-1 md:mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>

                      {/* Description courte */}
                      <p className="text-primary-offwhite/40 text-[8px] md:text-xs lg:text-sm font-light mb-2 md:mb-3">
                        {item.description}
                      </p>

                      {/* Description longue (apparaît au survol) - cachée sur mobile */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="hidden md:block text-primary-offwhite/20 text-[10px] lg:text-xs font-light"
                      >
                        {item.longDesc}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Séparateur élégant avant la section équipe */}
        <div className="relative py-12 md:py-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary-yellow/20 to-transparent" />
        </div>

        {/* Section Équipe - 1 colonne sur mobile, 2 sur tablette, 3 sur desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* En-tête de la section équipe */}
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary-yellow/40 text-xs font-light tracking-[0.3em] uppercase">
              Notre équipe
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3 mb-4">
              Des experts à <span className="text-primary-yellow/80">votre service</span>
            </h2>
            <p className="text-primary-offwhite/40 text-sm md:text-base font-light max-w-2xl mx-auto">
              Une équipe pluridisciplinaire passionnée par l'excellence
            </p>
            <div className="w-12 h-px bg-primary-yellow/20 mx-auto mt-6" />
          </div>

          {/* Grille des 6 membres de l'équipe - 1 colonne sur mobile, 2 sur tablette, 3 sur desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Carte membre */}
                <div className="relative bg-gradient-to-b from-primary-charcoal/40 to-primary-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-primary-yellow/5 hover:border-primary-yellow/20 transition-all duration-500">
                  
                  {/* Image avec overlay */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/50 to-transparent opacity-60" />
                    
                    {/* Badge expérience */}
                    {/* <div className="absolute top-3 right-3 bg-primary-black/60 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-primary-yellow/20">
                      <span className="text-primary-yellow/60 text-[8px] md:text-[10px] font-light">{member.experience}</span>
                    </div> */}
                    
                    {/* Réseaux sociaux au survol */}
                    {/* <div className="absolute inset-0 flex items-center justify-center space-x-2 md:space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a href={`mailto:${member.email}`} className="w-7 h-7 md:w-8 md:h-8 bg-primary-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-yellow/30 transition-colors">
                        <Mail className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-yellow/80" />
                      </a>
                      <a href={member.linkedin} className="w-7 h-7 md:w-8 md:h-8 bg-primary-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-yellow/30 transition-colors">
                        <Linkedin className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-yellow/80" />
                      </a>
                      <a href={member.twitter} className="w-7 h-7 md:w-8 md:h-8 bg-primary-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-yellow/30 transition-colors">
                        <Twitter className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary-yellow/80" />
                      </a>
                    </div> */}
                  </div>

                  {/* Informations */}
                  <div className="relative p-4 md:p-5 text-center">
                    <h3 className="text-base md:text-lg lg:text-xl font-light text-white mb-1 group-hover:text-primary-yellow/80 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary-yellow/60 text-[10px] md:text-xs font-light mb-1">
                      {member.position}
                    </p>
                    <p className="text-primary-offwhite/30 text-[8px] md:text-[10px] font-light mb-2">
                      {member.department}
                    </p>
                    <p className="text-primary-offwhite/20 text-[6px] md:text-[8px] font-light uppercase tracking-wider">
                      {/* {member.expertise} */}
                    </p>
                    
                    {/* Ligne décorative */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 md:group-hover:w-12 h-px bg-primary-yellow/30 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note de bas de section */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-primary-offwhite/10 text-[8px] md:text-[10px] font-light uppercase tracking-wider mt-8 md:mt-10"
          >
            Une équipe de 120+ professionnels à votre écoute
          </motion.p>
        </motion.div>

        {/* Note de bas de page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 md:mt-20"
        >
          <div className="inline-flex items-center space-x-2 text-primary-offwhite/10 text-[8px] md:text-[10px] font-light uppercase tracking-wider">
            <span>Des valeurs ancrées dans notre ADN depuis 2025</span>
          </div>
        </motion.div>
      </div>

      {/* Ligne décorative de bas de page */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/20 to-transparent" />
    </section>
  );
};

export default GovernanceSection;