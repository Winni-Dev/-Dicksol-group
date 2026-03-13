// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import Header from './components/Layout/Header'
// import Footer from './components/Layout/Footer'
// import WhatsAppButton from './components/Layout/WhatsAppButton'
// import HomePage from './pages/HomePage'
// import ContactPage from './pages/ContactPage'

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-primary-black flex flex-col">
//         <Header />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </AnimatePresence>
//         <Footer />
//         <WhatsAppButton />
//       </div>
//     </Router>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import WhatsAppButton from './components/Layout/WhatsAppButton'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import { ScrollProvider } from './contexts/ScrollContext'

function App() {
  return (
    <Router>
      <ScrollProvider>
        <div className="min-h-screen bg-primary-black flex flex-col">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <WhatsAppButton />
        </div>
      </ScrollProvider>
    </Router>
  )
}

export default App