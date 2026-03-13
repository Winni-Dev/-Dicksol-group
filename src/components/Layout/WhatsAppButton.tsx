import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+2250708937763';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Bonjour%20DICKSOL%20GROUPE%20SARL%2C%20je%20souhaite%20obtenir%20des%20informations.`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-72 bg-primary-charcoal border border-primary-yellow/20 shadow-xl"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">WhatsApp</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-offwhite/70 hover:text-primary-yellow"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-primary-offwhite/70 text-sm mb-4">
                👋 Besoin d'aide ? Discutez avec nous sur WhatsApp
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full px-4 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Démarrer la discussion</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default WhatsAppButton;