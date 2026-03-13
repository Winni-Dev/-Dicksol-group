// import React from 'react';
// import { motion } from 'framer-motion';
// import HeroSection from '../Home/HeroSection';
// import DirectorMessage from '../Home/DirectorMessage';
// import ExpertiseSection from '../Home/ExpertiseSection';
// import ProjectsSection from '../Home/ProjectsSection';
// import GallerySection from '../Home/GallerySection';
// import GovernanceSection from '../Home/GovernanceSection';
// import StatsSection from '../Home/StatsSection';

// const HomePage: React.FC = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="pt-16"
//     >
//       <HeroSection />
//       <DirectorMessage />
//       <StatsSection />
//       <ExpertiseSection />
//       <ProjectsSection />
//       <GallerySection />
//       <GovernanceSection />
//     </motion.div>
//   );
// };

// export default HomePage;

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../Home/HeroSection';
import DirectorMessage from '../Home/DirectorMessage';
import ExpertiseSection from '../Home/ExpertiseSection';
import ProjectsSection from '../Home/ProjectsSection';
import GallerySection from '../Home/GallerySection';
import GovernanceSection from '../Home/GovernanceSection';
import StatsSection from '../Home/StatsSection';


const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Section Accueil avec ID */}
      <section id="home">
        <HeroSection />
      </section>
      
      <DirectorMessage />
      <StatsSection />
      
      {/* Section Expertise avec ID */}
      <section id="expertise">
        <ExpertiseSection />
      </section>
      
      {/* Section Projets avec ID */}
      <section id="projets">
        <ProjectsSection />
      </section>
      
      {/* Section Galerie avec ID */}
      <section id="galerie">
        <GallerySection />
      </section>
      
      {/* Section Gouvernance avec ID */}
      <section id="gouvernance">
        <GovernanceSection />
      </section>
    </motion.div>
  );
};

export default HomePage;