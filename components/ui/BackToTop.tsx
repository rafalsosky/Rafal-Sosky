
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[80] hidden md:flex w-12 h-12 bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_0px_#000] items-center justify-center hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all active:translate-y-0 active:shadow-[2px_2px_0px_0px_#000]"
          aria-label="Wróć na górę"
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
