import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface LightboxProps {
  images: { src: string; title: string; category: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-primary-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-primary-offwhite hover:text-primary-yellow z-50"
          onClick={onClose}
        >
          <X className="w-8 h-8" />
        </button>

        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-offwhite hover:text-primary-yellow z-50"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-offwhite hover:text-primary-yellow z-50"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="w-10 h-10" />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-6xl max-h-[90vh] px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            modules={[Navigation, Keyboard]}
            navigation
            keyboard={{ enabled: true }}
            initialSlide={currentIndex}
            onSlideChange={(swiper) => {
              if (swiper.activeIndex > currentIndex) onNext();
              else if (swiper.activeIndex < currentIndex) onPrev();
            }}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                    <p className="text-primary-offwhite/60">{image.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;