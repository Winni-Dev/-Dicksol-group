// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Menu, X, Building2, Phone, Mail } from 'lucide-react';
// // import Button from '../UI/Button';

// // const Header: React.FC = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     setIsMobileMenuOpen(false);
// //   }, [location]);

// //   const navLinks = [
// //     { href: '/', label: 'Accueil' },
// //     { href: '/#expertise', label: 'Expertise' },
// //     { href: '/#projets', label: 'Projets' },
// //     { href: '/#galerie', label: 'Galerie' },
// //     { href: '/#gouvernance', label: 'Gouvernance' },
// //     { href: '/contact', label: 'Contact' },
// //   ];

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// //         isScrolled
// //           ? 'bg-primary-black/95 backdrop-blur-md py-4 shadow-lg'
// //           : 'bg-transparent py-6'
// //       }`}
// //     >
// //       <div className="container-custom">
// //         <div className="flex items-center justify-between">
// //           <Link to="/" className="flex items-center space-x-2">
// //             <Building2 className="w-8 h-8 text-primary-yellow" />
// //             <div>
// //               <span className="text-xl font-bold text-white">DICKSOL</span>
// //               <span className="block text-xs text-primary-yellow tracking-wider">GROUPE SARL</span>
// //             </div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center space-x-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.href}
// //                 to={link.href}
// //                 className={`text-sm font-medium transition-colors hover:text-primary-yellow ${
// //                   location.pathname === link.href
// //                     ? 'text-primary-yellow'
// //                     : 'text-primary-offwhite'
// //                 }`}
// //               >
// //                 {link.label}
// //               </Link>
// //             ))}
// //             <Button size="sm" href="/contact" variant="primary">
// //               Devis gratuit
// //             </Button>
// //           </nav>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="md:hidden text-primary-offwhite hover:text-primary-yellow"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation */}
// //       <AnimatePresence>
// //         {isMobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             className="md:hidden bg-primary-charcoal border-t border-primary-yellow/10"
// //           >
// //             <div className="container-custom py-6">
// //               <nav className="flex flex-col space-y-4">
// //                 {navLinks.map((link) => (
// //                   <Link
// //                     key={link.href}
// //                     to={link.href}
// //                     className={`text-base font-medium transition-colors hover:text-primary-yellow ${
// //                       location.pathname === link.href
// //                         ? 'text-primary-yellow'
// //                         : 'text-primary-offwhite'
// //                     }`}
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 ))}
// //                 <div className="pt-4 border-t border-primary-yellow/10">
// //                   <Button href="/contact" variant="primary" className="w-full">
// //                     Demander un devis
// //                   </Button>
// //                 </div>
// //                 <div className="flex items-center space-x-4 pt-4">
// //                   <a href="tel:+22500000000" className="text-primary-offwhite hover:text-primary-yellow">
// //                     <Phone className="w-5 h-5" />
// //                   </a>
// //                   <a href="mailto:contact@dicksol-groupe.com" className="text-primary-offwhite hover:text-primary-yellow">
// //                     <Mail className="w-5 h-5" />
// //                   </a>
// //                 </div>
// //               </nav>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// // export default Header;


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// // Use runtime URL for the image asset so Vite treats it as an asset (works with .PNG/.png)
// const Logo = new URL('../../assect/logo.PNG', import.meta.url).href;
// import { 
//   Menu, 
//   X, 
//   Phone, 
//   Mail, 
//   ChevronDown,
//   ArrowRight
// } from 'lucide-react';
// import Button from '../UI/Button';
// import { useScroll } from '../../contexts/ScrollContext';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState<string | null>(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { activeSection, scrollToSection } = useScroll();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Bloquer le scroll du body quand le menu mobile est ouvert
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location]);

//   const handleNavigation = (sectionId: string) => {
//     setIsMobileMenuOpen(false);

//     if (sectionId === 'contact') {
//       navigate('/contact');
//       return;
//     }

//     if (sectionId === 'home') {
//       if (location.pathname === '/') {
//         setTimeout(() => {
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }, 100);
//       } else {
//         navigate('/');
//       }
//       return;
//     }

//     if (location.pathname !== '/') {
//       navigate('/', { state: { scrollTo: sectionId } });
//     } else {
//       scrollToSection(sectionId);
//     }
//   };

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
//     e.preventDefault();
//     handleNavigation(sectionId);
//   };

//   const navLinks = [
//     { href: '/', section: 'home', label: 'Accueil' },
//     { href: '/#expertise', section: 'expertise', label: 'Expertise' },
//     { href: '/#projets', section: 'projets', label: 'Projets' },
//     { href: '/#galerie', section: 'galerie', label: 'Galerie' },
//     { href: '/#gouvernance', section: 'gouvernance', label: 'Gouvernance' },
//     { href: '/contact', section: 'contact', label: 'Contact' },
//   ];

//   const isActive = (section: string) => {
//     if (section === 'contact') {
//       return location.pathname === '/contact';
//     }
//     if (location.pathname !== '/') {
//       return false;
//     }
//     return activeSection === section;
//   };

//   // Variants pour les animations
//   const logoVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const navVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.6,
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       y: -20,
//       transition: {
//         duration: 0.2,
//         ease: "easeIn"
//       }
//     },
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   const itemVariants = {
//     closed: { opacity: 0, x: -20 },
//     open: (i: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.05,
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     })
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled || isMobileMenuOpen
//             ? 'bg-primary-black/95 backdrop-blur-xl py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-b border-primary-yellow/10'
//             : 'bg-gradient-to-b from-primary-black/90 via-primary-black/60 to-transparent backdrop-blur-sm py-5'
//         }`}
//       >
//         {/* Ligne lumineuse animée en haut */}
//         <motion.div 
//           className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-yellow to-transparent"
//           animate={{
//             x: ['-100%', '100%'],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         <div className="container-custom">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <motion.div
//               variants={logoVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <Link 
//                 to="/" 
//                 className="flex items-center space-x-2 sm:space-x-3 group z-50"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavigation('home');
//                 }}
//               >
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-primary-yellow/20 blur-lg rounded-full group-hover:bg-primary-yellow/30 transition-all duration-300" />
                 
//                   <img src={Logo} alt="Logo DICKSOL" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
//                 </div>
//                 <div className="relative">
//                   <span className="text-lg sm:text-2xl font-bold text-white tracking-tight block leading-tight">
//                     DICKSOL
//                   </span>
//                   <span className="text-[8px] sm:text-[10px] text-primary-yellow/90 tracking-[0.2em] sm:tracking-[0.3em] block uppercase font-medium">
//                     Groupe SARL
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>

//             {/* Desktop Navigation - RESTAURÉ */}
//             <motion.nav 
//               variants={navVariants}
//               initial="hidden"
//               animate="visible"
//               className="hidden lg:flex items-center space-x-1"
//             >
//               {navLinks.map((link) => (
//                 <motion.div
//                   key={link.href}
//                   variants={navItemVariants}
//                   onMouseEnter={() => setHoveredLink(link.section)}
//                   onMouseLeave={() => setHoveredLink(null)}
//                   className="relative"
//                 >
//                   <a
//                     href={link.href}
//                     onClick={(e) => handleNavClick(e, link.section)}
//                     className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center space-x-1 group ${
//                       isActive(link.section)
//                         ? 'text-primary-yellow'
//                         : 'text-primary-offwhite/90 hover:text-primary-yellow'
//                     }`}
//                   >
//                     <span>{link.label}</span>
//                     {link.section !== 'contact' && link.section !== 'home' && (
//                       <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
//                         hoveredLink === link.section ? 'rotate-180' : ''
//                       }`} />
//                     )}
                    
//                     {/* Effet de fond au hover */}
//                     <motion.div
//                       className="absolute inset-0 bg-primary-yellow/5 rounded-lg -z-10"
//                       initial={false}
//                       animate={{
//                         scale: hoveredLink === link.section ? 1 : 0.8,
//                         opacity: hoveredLink === link.section ? 1 : 0,
//                       }}
//                       transition={{ duration: 0.2 }}
//                     />
//                   </a>

//                   {/* Indicateur de section active */}
//                   {isActive(link.section) && (
//                     <motion.div
//                       layoutId="activeNavIndicator"
//                       className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-yellow to-primary-yellow/50 rounded-full"
//                       transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                     />
//                   )}
//                 </motion.div>
//               ))}

//               {/* Bouton Devis */}
//               <motion.div
//                 variants={navItemVariants}
//                 className="ml-4"
//               >
//                 <Button 
//                   size="md" 
//                   variant="primary"
//                   // icon={Sparkles}
//                   className="relative overflow-hidden group"
//                   onClick={() => handleNavigation('contact')}
//                 >
//                   <span className="relative z-10">Devis gratuit</span>
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-primary-yellow to-yellow-500"
//                     initial={{ x: '-100%' }}
//                     whileHover={{ x: 0 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </Button>
//               </motion.div>

//               {/* Contacts rapides */}
//               <motion.div 
//                 variants={navItemVariants}
//                 className="flex items-center space-x-2 ml-4 pl-4 border-l border-primary-yellow/20"
//               >
//                 <a
//                   href="tel:+22500000000"
//                   className="p-2 text-primary-offwhite/70 hover:text-primary-yellow transition-colors relative group"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   <Phone className="w-4 h-4" />
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] bg-primary-charcoal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                     Appeler
//                   </span>
//                 </a>
//                 <a
//                   href="mailto:contact@dicksol-groupe.com"
//                   className="p-2 text-primary-offwhite/70 hover:text-primary-yellow transition-colors relative group"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   <Mail className="w-4 h-4" />
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] bg-primary-charcoal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                     Email
//                   </span>
//                 </a>
//               </motion.div>
//             </motion.nav>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Menu"
//             >
//               <div className={`absolute inset-0 bg-primary-yellow/10 rounded-lg transition-all duration-300 ${
//                 isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//               }`} />
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6 text-primary-yellow" />
//               ) : (
//                 <Menu className="w-6 h-6 text-primary-offwhite" />
//               )}
//             </button>
//           </div>
//         </div>
//       </motion.header>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-primary-black z-40 lg:hidden"
//             style={{ 
//               paddingTop: '80px',
//               height: '100dvh',
//               overflow: 'hidden'
//             }}
//           >
//             <div className="h-full overflow-y-auto">
//               <div className="container-custom py-6">
//                 <nav className="flex flex-col space-y-2">
//                   {navLinks.map((link, index) => (
//                     <motion.div
//                       key={link.href}
//                       custom={index}
//                       variants={itemVariants}
//                       initial="closed"
//                       animate="open"
//                       exit="closed"
//                     >
//                       <a
//                         href={link.href}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleNavigation(link.section);
//                         }}
//                         className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
//                           isActive(link.section)
//                             ? 'bg-primary-yellow/10 text-primary-yellow border-l-4 border-primary-yellow'
//                             : 'text-primary-offwhite hover:bg-primary-yellow/5 hover:text-primary-yellow'
//                         }`}
//                       >
//                         <span className="font-medium text-base">{link.label}</span>
//                         <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
//                           isActive(link.section) ? 'translate-x-1' : ''
//                         }`} />
//                       </a>
//                     </motion.div>
//                   ))}

//                   {/* Bouton Devis mobile */}
//                   <motion.div
//                     custom={navLinks.length}
//                     variants={itemVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                     className="pt-4"
//                   >
//                     <button
//                       onClick={() => handleNavigation('contact')}
//                       className="w-full px-6 py-4 bg-primary-yellow text-primary-black font-medium hover:bg-primary-yellow/90 transition-colors rounded-lg flex items-center justify-center space-x-2"
//                     >
//                       {/* <Sparkles className="w-5 h-5" /> */}
//                       <span>Demander un devis</span>
//                     </button>
//                   </motion.div>

//                   {/* Contacts mobiles */}
//                   <motion.div
//                     custom={navLinks.length + 1}
//                     variants={itemVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                     className="pt-8 mt-4"
//                   >
//                     <div className="border-t border-primary-yellow/20 pt-8">
//                       <div className="flex items-center justify-around">
//                         <a 
//                           href="tel:+22500000000" 
//                           className="flex flex-col items-center space-y-2 text-primary-offwhite/70 hover:text-primary-yellow transition-colors"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             window.location.href = 'tel:+22500000000';
//                           }}
//                         >
//                           <div className="p-4 bg-primary-yellow/10 rounded-full">
//                             <Phone className="w-6 h-6" />
//                           </div>
//                           <span className="text-xs font-medium">Appeler</span>
//                         </a>
//                         <a 
//                           href="mailto:contact@dicksol-groupe.com" 
//                           className="flex flex-col items-center space-y-2 text-primary-offwhite/70 hover:text-primary-yellow transition-colors"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             window.location.href = 'mailto:contact@dicksol-groupe.com';
//                           }}
//                         >
//                           <div className="p-4 bg-primary-yellow/10 rounded-full">
//                             <Mail className="w-6 h-6" />
//                           </div>
//                           <span className="text-xs font-medium">Email</span>
//                         </a>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Informations supplémentaires */}
//                   <motion.div
//                     custom={navLinks.length + 2}
//                     variants={itemVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                     className="pt-8"
//                   >
//                     <div className="bg-primary-charcoal/50 rounded-lg p-4">
//                       <p className="text-center text-primary-offwhite/60 text-xs">
//                         Lun-Ven: 8h00 - 18h00
//                       </p>
//                       <p className="text-center text-primary-offwhite/60 text-xs mt-1">
//                         Abidjan, Côte d'Ivoire
//                       </p>
//                     </div>
//                   </motion.div>
//                 </nav>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Use runtime URL for the image asset so Vite treats it as an asset (works with .PNG/.png)
const Logo = new URL('../../assect/logo.PNG', import.meta.url).href;
import { 
  Menu, 
  X, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { useScroll } from '../../contexts/ScrollContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { activeSection, scrollToSection } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // CORRECTION: Pour la galerie, on utilise 'galerie' comme ID de section
    if (sectionId === 'contact') {
      navigate('/contact');
      return;
    }

    if (sectionId === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    // Pour toutes les sections (expertise, projets, galerie, gouvernance)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  const navLinks = [
    { href: '/', section: 'home', label: 'Accueil' },
    { href: '/#expertise', section: 'expertise', label: 'Expertise' },
    { href: '/#projets', section: 'projets', label: 'Projets' },
    { href: '/#galerie', section: 'galerie', label: 'Galerie' },
    { href: '/#gouvernance', section: 'gouvernance', label: 'Gouvernance' },
    { href: '/contact', section: 'contact', label: 'Contact' },
  ];

  const isActive = (section: string) => {
    if (section === 'contact') {
      return location.pathname === '/contact';
    }
    if (location.pathname !== '/') {
      return false;
    }
    return activeSection === section;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.1, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-primary-black/80 backdrop-blur-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Ligne très subtile en bas du header quand scrolled */}
        {isScrolled && (
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/20 to-transparent"
          />
        )}

        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - version minimaliste */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group z-50"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('home');
              }}
            >
              <img 
                src={Logo} 
                alt="DICKSOL" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
              />
              <span className="text-sm sm:text-base font-light text-white tracking-wide">
                DICKSOL
              </span>
            </Link>

            {/* Desktop Navigation - ultra minimaliste */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.section);
                  }}
                  className={`px-3 py-2 text-xs font-light tracking-wide transition-colors duration-300 ${
                    isActive(link.section)
                      ? 'text-primary-yellow/80'
                      : 'text-primary-offwhite/50 hover:text-primary-offwhite/80'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contacts rapides - très discrets */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+2252721564050"
                className="text-primary-offwhite/30 hover:text-primary-offwhite/60 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contact@dicksol-groupe.com"
                className="text-primary-offwhite/30 hover:text-primary-offwhite/60 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button - très simple */}
            <button
              className="lg:hidden relative w-8 h-8 flex items-center justify-center z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-primary-offwhite/60" />
              ) : (
                <Menu className="w-4 h-4 text-primary-offwhite/60" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation - ultra minimaliste */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-black/95 backdrop-blur-md z-40 lg:hidden"
            style={{ paddingTop: '70px' }}
          >
            <div className="container-custom h-full overflow-y-auto">
              <nav className="flex flex-col py-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.section);
                      }}
                      className={`block py-4 text-sm font-light border-b border-primary-white/5 ${
                        isActive(link.section)
                          ? 'text-primary-yellow/80'
                          : 'text-primary-offwhite/40 hover:text-primary-offwhite/70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-30" />
                      </div>
                    </a>
                  </motion.div>
                ))}

                {/* Contacts mobiles - tout en bas */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 pt-8 border-t border-primary-white/5"
                >
                  <div className="flex items-center justify-center space-x-8">
                    <a 
                      href="tel:+22500000000" 
                      className="flex flex-col items-center space-y-2 text-primary-offwhite/30 hover:text-primary-offwhite/50 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'tel:+22500000000';
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-[10px] font-light">Appeler</span>
                    </a>
                    <a 
                      href="mailto:contact@dicksol-groupe.com" 
                      className="flex flex-col items-center space-y-2 text-primary-offwhite/30 hover:text-primary-offwhite/50 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto:Dicksol.groupe@gmail.com';
                      }}
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-[10px] font-light">Email</span>
                    </a>
                  </div>
                  
                  <p className="text-center text-primary-offwhite/20 text-[8px] uppercase tracking-wider mt-8">
                    © 2024 DICKSOL GROUPE
                  </p>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;