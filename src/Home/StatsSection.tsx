// import React, { useEffect, useState, useRef } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import { Building2, Users, Award, Clock } from 'lucide-react';

// interface CounterProps {
//   end: number;
//   duration?: number;
//   suffix?: string;
// }

// const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '' }) => {
//   const [count, setCount] = useState(0);
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   useEffect(() => {
//     if (isInView) {
//       let startTime: number;
//       let animationFrame: number;

//       const animate = (timestamp: number) => {
//         if (!startTime) startTime = timestamp;
//         const progress = timestamp - startTime;
//         const percentage = Math.min(progress / duration, 1);
        
//         setCount(Math.floor(end * percentage));

//         if (percentage < 1) {
//           animationFrame = requestAnimationFrame(animate);
//         } else {
//           setCount(end);
//         }
//       };

//       animationFrame = requestAnimationFrame(animate);

//       return () => {
//         if (animationFrame) {
//           cancelAnimationFrame(animationFrame);
//         }
//       };
//     }
//   }, [isInView, end, duration]);

//   return (
//     <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
//       {count}{suffix}
//     </span>
//   );
// };

// const StatsSection: React.FC = () => {
//   const stats = [
//     { icon: Building2, value: 150, label: "Projets réalisés", suffix: "+" },
//     { icon: Clock, value: 15, label: "Années d'expérience", suffix: "+" },
//     { icon: Users, value: 98, label: "Taux de satisfaction", suffix: "%" },
//     { icon: Award, value: 45, label: "Partenaires", suffix: "+" },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-primary-black to-primary-charcoal relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-yellow rounded-full filter blur-3xl" />
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-4">
//                   <div className="w-20 h-20 bg-primary-yellow/10 rounded-full flex items-center justify-center">
//                     <Icon className="w-10 h-10 text-primary-yellow" />
//                   </div>
//                 </div>
//                 <Counter end={stat.value} suffix={stat.suffix} />
//                 <p className="text-primary-offwhite/70 mt-2 text-lg">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, Award, Clock, TrendingUp, Target, CheckCircle, Sparkles } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
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
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, end, duration, delay]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-light text-white tabular-nums">
      {count}{suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  // Données principales - épurées
  const mainStats = [
    { icon: Building2, value: 150, label: "Projets réalisés", suffix: "+", description: "Toutes catégories confondues" },
    { icon: Clock, value: 15, label: "Années d'expérience", suffix: "+", description: "Depuis 2008" },
    { icon: Users, value: 98, label: "Clients satisfaits", suffix: "%", description: "Taux de recommandation" },
    { icon: Award, value: 45, label: "Partenaires actifs", suffix: "+", description: "Collaborateurs et fournisseurs" },
  ];

  // Données secondaires - pour la grille du bas
  const secondaryStats = [
    { icon: TrendingUp, value: 500, label: "km de routes", suffix: "+" },
    { icon: Target, value: 200, label: "Emplois créés", suffix: "+" },
    { icon: CheckCircle, value: 100, label: "Certifications", suffix: "" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-black to-primary-charcoal overflow-hidden">
      {/* Éléments de fond minimalistes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-yellow/10 to-transparent" />
      </div>

      {/* Cercles décoratifs très subtils */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-primary-yellow/10 rounded-full"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 border border-primary-yellow/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-yellow/60 text-xs font-light tracking-[0.3em] uppercase mb-3 block">
            Chiffres clés
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Une <span className="text-primary-yellow font-normal">expertise</span> quantifiable
          </h2>
          <div className="w-12 h-px bg-primary-yellow/30 mx-auto" />
        </motion.div>

        {/* Grille principale - 4 statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Ligne décorative au survol */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-yellow/0 via-primary-yellow/5 to-primary-yellow/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative text-center">
                  {/* Icône minimaliste */}
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary-yellow/5 flex items-center justify-center mx-auto group-hover:bg-primary-yellow/10 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-primary-yellow/70 group-hover:text-primary-yellow transition-colors" />
                    </div>
                    {/* Petit point décoratif */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-yellow/30 rounded-full" />
                  </div>

                  {/* Valeur avec compteur */}
                  <Counter end={stat.value} suffix={stat.suffix} delay={index * 100} />
                  
                  {/* Label */}
                  <p className="text-primary-offwhite/80 text-sm font-light mt-2 mb-1">
                    {stat.label}
                  </p>
                  
                  {/* Description subtile */}
                  <p className="text-primary-offwhite/30 text-xs font-light">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Séparateur élégant */}
        <div className="relative py-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-primary-yellow/20 to-transparent" />
        </div>

        {/* Grille secondaire - 3 statistiques supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {secondaryStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-primary-black/20 backdrop-blur-sm border border-primary-white/5"
              >
                <Icon className="w-4 h-4 text-primary-yellow/50" />
                <div className="flex items-baseline space-x-1">
                  <Counter end={stat.value} suffix={stat.suffix} delay={500 + index * 100} />
                  <span className="text-primary-offwhite/50 text-xs font-light ml-1">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note de bas de page */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-primary-offwhite/20 text-[10px] uppercase tracking-wider mt-12"
        >
          * Données cumulées depuis 2008
        </motion.p>
      </div>

      {/* Élément décoratif flottant */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-10 text-primary-yellow/10"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default StatsSection;