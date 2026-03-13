// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Building2, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-primary-charcoal border-t border-primary-yellow/10">
//       <div className="container-custom section-padding">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center space-x-2 mb-4">
//               <Building2 className="w-8 h-8 text-primary-yellow" />
//               <div>
//                 <span className="text-xl font-bold text-white">DICKSOL</span>
//                 <span className="block text-xs text-primary-yellow tracking-wider">GROUPE SARL</span>
//               </div>
//             </div>
//             <p className="text-primary-offwhite/70 mb-4">
//               Leader dans le BTP, l'aménagement foncier et l'immobilier en Côte d'Ivoire. 
//               "La qualité du service, notre passion"
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-primary-offwhite/70 hover:text-primary-yellow transition-colors">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-primary-offwhite/70 hover:text-primary-yellow transition-colors">
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-primary-offwhite/70 hover:text-primary-yellow transition-colors">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-primary-offwhite/70 hover:text-primary-yellow transition-colors">
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
//             <ul className="space-y-2">
//               {['Accueil', 'Expertise', 'Projets', 'Galerie', 'Gouvernance', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={item === 'Accueil' ? '/' : `/#${item.toLowerCase()}`}
//                     className="text-primary-offwhite/70 hover:text-primary-yellow transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 text-primary-yellow flex-shrink-0 mt-1" />
//                 <span className="text-primary-offwhite/70">
//                   Abidjan, Côte d'Ivoire<br />
//                   Cocody, Rue des Jardins
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-primary-yellow flex-shrink-0" />
//                 <a href="tel:+22500000000" className="text-primary-offwhite/70 hover:text-primary-yellow">
//                   +225 00 00 00 00
//                 </a>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-primary-yellow flex-shrink-0" />
//                 <a href="mailto:contact@dicksol-groupe.com" className="text-primary-offwhite/70 hover:text-primary-yellow">
//                   contact@dicksol-groupe.com
//                 </a>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Clock className="w-5 h-5 text-primary-yellow flex-shrink-0" />
//                 <span className="text-primary-offwhite/70">
//                   Lun-Ven: 8h00 - 18h00
//                 </span>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
//             <p className="text-primary-offwhite/70 mb-4">
//               Restez informé de nos actualités et projets
//             </p>
//             <form className="space-y-3">
//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="w-full px-4 py-3 bg-primary-black border border-primary-yellow/20 focus:border-primary-yellow outline-none text-primary-offwhite transition-colors"
//               />
//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-primary-yellow text-primary-black font-medium hover:bg-primary-yellow/90 transition-colors"
//               >
//                 S'abonner
//               </button>
//             </form>
//           </motion.div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-12 pt-8 border-t border-primary-yellow/10 text-center"
//         >
//           <p className="text-primary-offwhite/50">
//             &copy; {currentYear} DICKSOL GROUPE SARL. Tous droits réservés. 
//             Conçu et développé avec expertise en Côte d'Ivoire.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award, Shield, Users, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Expertise', path: '/#expertise' },
    { name: 'Projets', path: '/#projets' },
    { name: 'Galerie', path: '/#galerie' },
    { name: 'Gouvernance', path: '/#gouvernance' },
    { name: 'Contact', path: '/contact' },
  ];

  const engagements = [
    { icon: Award, text: 'ISO 9001' },
    { icon: Shield, text: 'Garantie décennale' },
    { icon: Users, text: 'Équipe 120+' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary-black to-primary-charcoal overflow-hidden">
      {/* Éléments de fond très subtils - repositionnés pour éviter les conflits */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary-yellow/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary-yellow/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bandeau supérieur décoratif - déplacé pour éviter le chevauchement */}
        <div className="relative pt-16 md:pt-20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/30 to-transparent" />
        </div>

        {/* Grille responsive - adaptation parfaite mobile/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8 py-12 md:py-16">
          {/* Colonne 1 - Identité */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-center md:text-left"
          >
            <div className="flex flex-col md:block items-center">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-yellow/20 blur-md rounded-full" />
                  {/* <Building2 className="w-8 h-8 md:w-10 md:h-10 text-primary-yellow/80 relative" /> */}
                  <img src="/images/logo.PNG" alt="DICKSOL Logo" className="w-8 h-8 md:w-10 md:h-10 relative" />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-light text-white tracking-tight">DICKSOL</span>
                  <span className="block text-[8px] md:text-[10px] text-primary-yellow/60 tracking-[0.3em] uppercase mt-0.5">
                    Groupe SARL
                  </span>
                </div>
              </div>

              <p className="text-primary-offwhite/50 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
                Expertise en BTP, aménagement foncier et immobilier en Côte d'Ivoire depuis 2025.
              </p>

              {/* Badges centrés sur mobile, alignés à gauche sur desktop */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {engagements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-1.5 bg-primary-black/30 px-3 py-1.5 rounded-full border border-primary-yellow/5">
                      <Icon className="w-3 h-3 text-primary-yellow/40" />
                      <span className="text-primary-offwhite/30 text-[10px] md:text-xs font-light">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 text-center md:text-left"
          >
            <h3 className="text-primary-yellow/60 text-xs md:text-sm font-light uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-offwhite/40 hover:text-primary-offwhite/70 text-sm md:text-base font-light transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-yellow/30 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 text-center md:text-left"
          >
            <h3 className="text-primary-yellow/60 text-xs md:text-sm font-light uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center md:items-start space-x-3 justify-center md:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-black/30 rounded-full flex items-center justify-center flex-shrink-0 border border-primary-yellow/10">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-yellow/50" />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm md:text-base font-light">Abidjan,Marcory</p>
                  <p className="text-primary-offwhite/30 text-xs md:text-sm font-light"> La Madone, Immeuble Malachite - 1ère Porte</p>
                </div>
              </li>
              
              <li className="flex items-center md:items-start space-x-3 justify-center md:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-black/30 rounded-full flex items-center justify-center flex-shrink-0 border border-primary-yellow/10">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-yellow/50" />
                </div>
                <div className="text-left">
                  <a href="tel:+2252721564050" className="text-white/70 hover:text-primary-yellow/70 text-sm md:text-base font-light transition-colors">
                    +225  27 21 564 050
                  </a>
                  <p className="text-primary-offwhite/30 text-xs md:text-sm font-light">Lun-Ven 8h30-16h30</p>
                </div>
              </li>
              
              <li className="flex items-center md:items-start space-x-3 justify-center md:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-black/30 rounded-full flex items-center justify-center flex-shrink-0 border border-primary-yellow/10">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-yellow/50" />
                </div>
                <div className="text-left">
                  <a href="mailto:Dicksol.groupe@gmail.com" className="text-white/70 hover:text-primary-yellow/70 text-sm md:text-base font-light transition-colors break-all">
                    Dicksol.groupe@gmail.com
                  </a>
                  <p className="text-primary-offwhite/30 text-xs md:text-sm font-light">Réponse sous 24h</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 4 - Réseaux & Info */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 text-center md:text-left"
          >
            <h3 className="text-primary-yellow/60 text-xs md:text-sm font-light uppercase tracking-wider mb-5">
              Suivez-nous
            </h3>
            
            <div className="flex justify-center md:justify-start space-x-3 mb-6">
              {[
                { icon: 'FB', label: 'Facebook' },
                { icon: 'IN', label: 'LinkedIn' },
                { icon: 'TW', label: 'Twitter' },
                { icon: 'YT', label: 'YouTube' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary-black/30 rounded-full flex items-center justify-center border border-primary-yellow/10 hover:border-primary-yellow/30 hover:bg-primary-yellow/5 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="text-primary-offwhite/30 group-hover:text-primary-yellow/60 text-xs md:text-sm font-light">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="bg-primary-black/30 p-4 md:p-5 rounded-lg border border-primary-yellow/5 max-w-sm mx-auto md:mx-0">
              <p className="text-primary-offwhite/20 text-[10px] md:text-xs font-light leading-relaxed">
                Membre de la Fédération Nationale du BTP de Côte d'Ivoire, engagé pour une construction durable et de qualité.
              </p>
            </div>
          </motion.div> */}
        </div>

        {/* Séparateur élégant - avec espacement suffisant */}
        <div className="relative py-6 md:py-8">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/20 to-transparent" />
        </div>

        {/* Bottom bar - empilée sur mobile, alignée sur desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 md:pb-10 space-y-4 md:space-y-0">
          <p className="text-primary-offwhite/20 text-[10px] md:text-xs font-light order-2 md:order-1 text-center md:text-left">
            © {currentYear} DICKSOL GROUPE SARL. Tous droits réservés.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
            <a href="#" className="text-primary-offwhite/20 hover:text-primary-offwhite/40 text-[10px] md:text-xs font-light transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-primary-offwhite/20 hover:text-primary-offwhite/40 text-[10px] md:text-xs font-light transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-primary-offwhite/20 hover:text-primary-offwhite/40 text-[10px] md:text-xs font-light transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>

      {/* Bandeau inférieur décoratif - bien séparé */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/30 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;