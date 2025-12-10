
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, ArrowRight } from 'lucide-react';
import Button from './Button';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Prevent triggering on mobile/tablet devices (width < 1024px)
      if (window.innerWidth < 1024) return;

      // Trigger if mouse leaves top of viewport and hasn't triggered yet
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        // 1. GŁÓWNY WRAPPER: Flexbox Centering Wrapper
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          
          {/* 1. OVERLAY (TŁO) - Kliknięcie zamyka */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 2. KONTENER MODALA (Centrum) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 bg-white border-4 border-black shadow-[8px_8px_0_#000] w-full max-w-[550px] flex flex-col overflow-hidden"
          >
            {/* Header Stripe */}
            <div className="bg-black text-white px-6 py-4 flex justify-between items-center shrink-0">
              <span className="font-bold font-heading tracking-wider uppercase text-sm text-yellow-400">
                Czekaj, zanim wyjdziesz
              </span>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 md:p-10 bg-white">
              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_black]">
                    <PlayCircle className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 leading-none">
                    Twój biznes stoi, bo<br/>Twoja oferta leży?
                  </h3>
                  <p className="text-slate-600 leading-snug text-sm md:text-base">
                    Nie musisz od razu wchodzić w mentoring. Odbierz bezpłatny warsztat "Oferta Mafijna" i zobacz, jak w 30 minut zmienić "zastanowię się" w "gdzie mam wpłacić".
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                     Wyślemy link do wideo na ten adres:
                   </label>
                   <input 
                     type="email" 
                     placeholder="Twój najlepszy adres e-mail..." 
                     className="w-full border-2 border-black p-4 font-medium focus:outline-none focus:bg-yellow-50 focus:border-yellow-400 transition-colors mb-4"
                   />
                </div>

                <div onClick={() => setIsVisible(false)}>
                  <Button variant="primary" className="w-full justify-between group">
                    <span>WYŚLIJ MI NAGRANIE WARSZTATU</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
                  </Button>
                </div>
              </div>

              <p className="text-xs text-center text-slate-400 mt-6">
                Bez zobowiązań. Czysta wiedza.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
