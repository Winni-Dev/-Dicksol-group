// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import ContactForm from '../components/Contact/ContactForm';
// import Card from '../components/UI/Card';

// const ContactPage: React.FC = () => {
//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: "Adresse",
//       content: ["Abidjan, Côte d'Ivoire", "Cocody, Rue des Jardins"],
//     },
//     {
//       icon: Phone,
//       title: "Téléphone",
//       content: ["+225 00 00 00 00", "+225 00 00 00 01"],
//       link: "tel:+22500000000",
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       content: ["contact@dicksol-groupe.com", "direction@dicksol-groupe.com"],
//       link: "mailto:contact@dicksol-groupe.com",
//     },
//     {
//       icon: Clock,
//       title: "Horaires",
//       content: ["Lundi - Vendredi: 8h00 - 18h00", "Samedi: 9h00 - 13h00"],
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-16"
//     >
//       {/* Hero Section */}
//       <section className="relative py-20 bg-primary-charcoal">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//           <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//         </div>

//         <div className="container-custom relative z-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="heading-1 text-white mb-4"
//           >
//             Contactez-nous
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-xl text-primary-offwhite/80 max-w-2xl mx-auto"
//           >
//             Notre équipe est à votre écoute pour tous vos projets
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="section-padding bg-primary-black">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32">
//             {contactInfo.map((info, index) => {
//               const Icon = info.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//                 >
//                   <Card className="text-center h-full bg-primary-charcoal border-primary-yellow/10">
//                     <div className="flex justify-center mb-4">
//                       <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center">
//                         <Icon className="w-8 h-8 text-primary-yellow" />
//                       </div>
//                     </div>
//                     <h3 className="text-lg font-semibold text-white mb-2">
//                       {info.title}
//                     </h3>
//                     {info.content.map((line, i) => (
//                       <p key={i} className="text-primary-offwhite/70 text-sm">
//                         {info.link ? (
//                           <a href={info.link} className="hover:text-primary-yellow">
//                             {line}
//                           </a>
//                         ) : (
//                           line
//                         )}
//                       </p>
//                     ))}
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Map */}
//       <section className="section-padding bg-primary-black">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <ContactForm />

//             {/* Map */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="bg-primary-charcoal p-8 border border-primary-yellow/10"
//             >
//               <h2 className="text-2xl font-bold text-white mb-6">Notre localisation</h2>
//               <div className="aspect-video bg-primary-black">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789!2d-4.012345!3d5.323456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTknMjQuNCJOIDTCsDAwJzQ0LjQiVw!5e0!3m2!1sfr!2sci!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   className="filter grayscale invert-[10%]"
//                   title="Carte de localisation DICKSOL GROUPE"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default ContactPage;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import ContactForm from '../components/Contact/ContactForm';
// import Card from '../components/UI/Card';

// const ContactPage: React.FC = () => {
//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: "Adresse",
//       content: ["Abidjan, Côte d'Ivoire", "Cocody, Rue des Jardins"],
//     },
//     {
//       icon: Phone,
//       title: "Téléphone",
//       content: ["+225 0708937763", "+225 00 00 00 01"],
//       link: "tel:+2250708937763",
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       content: ["contact@dicksol-groupe.com", "direction@dicksol-groupe.com"],
//       link: "mailto:contact@dicksol-groupe.com",
//     },
//     {
//       icon: Clock,
//       title: "Horaires",
//       content: ["Lundi - Vendredi: 8h00 - 18h00", "Samedi: 9h00 - 13h00"],
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-16"
//     >
//       {/* Section Contact avec ID */}
//       <section id="contact">
//         {/* Hero Section */}
//         <div className="relative py-20 bg-primary-charcoal">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-0 left-0 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//           </div>

//           <div className="container-custom relative z-10 text-center">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="heading-1 text-white mb-4"
//             >
//               Contactez-nous
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-xl text-primary-offwhite/80 max-w-2xl mx-auto"
//             >
//               Notre équipe est à votre écoute pour tous vos projets
//             </motion.p>
//           </div>
//         </div>

//         {/* Contact Info Cards */}
//         <div className="section-padding bg-primary-black">
//           <div className="container-custom">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32">
//               {contactInfo.map((info, index) => {
//                 const Icon = info.icon;
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//                   >
//                     <Card className="text-center h-full bg-primary-charcoal border-primary-yellow/10">
//                       <div className="flex justify-center mb-4">
//                         <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center">
//                           <Icon className="w-8 h-8 text-primary-yellow" />
//                         </div>
//                       </div>
//                       <h3 className="text-lg font-semibold text-white mb-2">
//                         {info.title}
//                       </h3>
//                       {info.content.map((line, i) => (
//                         <p key={i} className="text-primary-offwhite/70 text-sm">
//                           {info.link ? (
//                             <a href={info.link} className="hover:text-primary-yellow">
//                               {line}
//                             </a>
//                           ) : (
//                             line
//                           )}
//                         </p>
//                       ))}
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Contact Form & Map */}
//         <div className="section-padding bg-primary-black pt-0">
//           <div className="container-custom">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <ContactForm />

//               {/* Map */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="bg-primary-charcoal p-8 border border-primary-yellow/10"
//               >
//                 <h2 className="text-2xl font-bold text-white mb-6">Notre localisation</h2>
//                 <div className="aspect-video bg-primary-black">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789!2d-4.012345!3d5.323456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTknMjQuNCJOIDTCsDAwJzQ0LjQiVw!5e0!3m2!1sfr!2sci!4v1234567890"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     className="filter grayscale invert-[10%]"
//                     title="Carte de localisation DICKSOL GROUPE"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default ContactPage;



import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          to_email: 'directeur@dicksol-groupe.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      line1: "Abidjan, Marcory ",
      line2: " La Madone, Immeuble Malachite - 1ère Porte",
    },
    {
      icon: Phone,
      title: "Téléphone",
      line1: "+225 05 03 77 01 82",
      line2: "+225  27 21 564 050",
      link: "tel:+2250503770182",
    },
    {
      icon: Mail,
      title: "Email",
      line1: "Dicksol.groupe@gmail.com",
      line2: "direction@dicksol.groupe",
      link: "mailto:Dicksol.groupe@gmail.com",
    },
    {
      icon: Clock,
      title: "Horaires",
      line1: "Lun-Ven: 8h30 - 16h30",
      line2: "Sam&Dim: Fermé",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary-black pt-20 md:pt-24"
    >
      {/* Éléments de fond */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary-yellow/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary-yellow/40 text-xs font-light tracking-[0.3em] uppercase">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3 mb-4">
            Parlons de votre <span className="text-primary-yellow/80">projet</span>
          </h1>
          <p className="text-primary-offwhite/40 text-sm md:text-base font-light max-w-2xl mx-auto">
            Une question ? Un devis ? Notre équipe vous répond sous 24h
          </p>
          <div className="w-12 h-px bg-primary-yellow/20 mx-auto mt-6" />
        </motion.div>

        {/* Cartes d'information - redesign élégant */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-primary-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-primary-yellow/5 hover:border-primary-yellow/20 transition-all duration-500 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
                    <div className="w-12 h-12 bg-primary-yellow/5 rounded-full flex items-center justify-center group-hover:bg-primary-yellow/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary-yellow/50 group-hover:text-primary-yellow/70 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-white/60 text-xs font-light uppercase tracking-wider mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <>
                          <a href={info.link} className="block text-white/80 hover:text-primary-yellow/70 text-sm font-light transition-colors">
                            {info.line1}
                          </a>
                          <p className="text-primary-offwhite/40 text-xs font-light mt-1">
                            {info.line2}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-white/80 text-sm font-light">{info.line1}</p>
                          <p className="text-primary-offwhite/40 text-xs font-light mt-1">{info.line2}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Formulaire de contact - pleine largeur */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-b from-primary-charcoal/50 to-primary-black/50 backdrop-blur-sm rounded-2xl border border-primary-yellow/10 p-6 md:p-8 lg:p-10">
            
            {/* Message de statut */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg text-green-500/70 flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-light">Message envoyé avec succès</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg text-red-500/70 flex items-center justify-center space-x-2"
              >
                <span className="text-sm font-light">Erreur d'envoi. Veuillez réessayer.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Grille 2 colonnes sur desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label className="block text-primary-offwhite/40 text-xs font-light uppercase tracking-wider mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-yellow/10 focus:border-primary-yellow/30 rounded-lg outline-none text-white/80 text-sm font-light transition-colors placeholder:text-primary-offwhite/20"
                    placeholder="Jean Kouassi"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500/50 text-[10px]">Champ requis</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-primary-offwhite/40 text-xs font-light uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-yellow/10 focus:border-primary-yellow/30 rounded-lg outline-none text-white/80 text-sm font-light transition-colors placeholder:text-primary-offwhite/20"
                    placeholder="jean@exemple.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500/50 text-[10px]">Email invalide</p>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-primary-offwhite/40 text-xs font-light uppercase tracking-wider mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-yellow/10 focus:border-primary-yellow/30 rounded-lg outline-none text-white/80 text-sm font-light transition-colors placeholder:text-primary-offwhite/20"
                    placeholder="+225 00 00 00 00"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500/50 text-[10px]">Champ requis</p>
                  )}
                </div>

                {/* Objet */}
                <div>
                  <label className="block text-primary-offwhite/40 text-xs font-light uppercase tracking-wider mb-2">
                    Objet
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: true })}
                    className="w-full px-4 py-3 bg-primary-black/50 border border-primary-yellow/10 focus:border-primary-yellow/30 rounded-lg outline-none text-white/80 text-sm font-light transition-colors placeholder:text-primary-offwhite/20"
                    placeholder="Demande de devis"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-500/50 text-[10px]">Champ requis</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-primary-offwhite/40 text-xs font-light uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  {...register('message', { required: true })}
                  className="w-full px-4 py-3 bg-primary-black/50 border border-primary-yellow/10 focus:border-primary-yellow/30 rounded-lg outline-none text-white/80 text-sm font-light transition-colors placeholder:text-primary-offwhite/20 resize-none"
                  placeholder="Décrivez votre projet..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-500/50 text-[10px]">Champ requis</p>
                )}
              </div>

              {/* Bouton d'envoi */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-3 bg-transparent border border-primary-yellow/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary-yellow/60 disabled:opacity-50"
                >
                  <span className="relative z-10 text-primary-yellow/80 group-hover:text-primary-yellow text-sm font-light flex items-center space-x-2">
                    <span>{isSubmitting ? 'Envoi...' : 'Envoyer le message'}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary-yellow/5"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </div>
            </form>

            {/* Note de bas de formulaire */}
            <p className="text-center text-primary-offwhite/20 text-[8px] font-light mt-6">
              * Tous les champs sont requis. Réponse garantie sous 24h.
            </p>
          </div>
        </motion.div>

        {/* Lien de retour à l'accueil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-primary-offwhite/20 hover:text-primary-offwhite/40 text-xs font-light transition-colors group"
          >
            <span>Retour à l'accueil</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Ligne décorative de bas de page */}
      <div className="relative mt-16">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-yellow/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export default ContactPage;