
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Lock } from 'lucide-react';
import Button from './ui/Button';
import Logo from './ui/Logo';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Close on ESC key (Accessibility)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      // Simulate network request for UX
      setTimeout(() => {
        setIsLoading(false);
        onSubmit(email);
        setEmail('');
      }, 800);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // 1. GŁÓWNY WRAPPER (Centruje modal na desktopie, Fullscreen na mobile)
        <div className="fixed inset-0 z-[9999] flex items-center justify-center font-sans">
          
          {/* 2. OVERLAY (TŁO) - Hard Gating: brak onClick={onClose} */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 3. KONTENER MODALA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`
              relative z-10 bg-white flex flex-col justify-between
              
              /* MOBILE STYLES (Fullscreen) */
              w-full h-full p-6
              
              /* DESKTOP STYLES (Centered Box) */
              md:h-auto md:w-full md:max-w-[480px] md:p-10
              md:border-4 md:border-black md:shadow-[8px_8px_0_#000]
            `}
          >
             {/* HEADER */}
             <div className="flex justify-between items-center mb-8 md:mb-6 border-b-4 border-black pb-4 md:border-none md:pb-0 shrink-0">
                <Logo className="h-6" />
                
                <button 
                  onClick={onClose}
                  className="p-2 -mr-2 hover:bg-slate-100 transition-colors rounded-sm"
                  aria-label="Zamknij"
                >
                  <X className="w-6 h-6 text-black" />
                </button>
             </div>

             {/* SCROLLABLE CONTENT AREA (for smaller mobile screens) */}
             <div className="flex-1 flex flex-col justify-center overflow-y-auto">
                
                <div className="mb-6 md:mb-8">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 leading-[1.0] tracking-tight text-wrap-balance">
                    Gdzie wysłać potwierdzenie spotkania?
                  </h2>
                  <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-3">
                    To nie jest rozmowa sprzedażowa. To diagnoza strategiczna.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                    Podaj adres e-mail, na który wyślę link do spotkania oraz krótkie przygotowanie.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                      Twój adres e-mail…
                    </label>
                    <input 
                      type="email" 
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Twój najlepszy adres e-mail..."
                      disabled={isLoading}
                      className="w-full bg-white border-2 border-black p-4 text-lg font-bold placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:bg-[#FFF9C4] focus:border-black focus:shadow-[4px_4px_0px_0px_#FFD600] transition-all rounded-none appearance-none disabled:opacity-50"
                    />
                  </div>

                  <div className="pt-2 space-y-4">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      loading={isLoading}
                      className="w-full justify-center group py-4 md:py-4 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] bg-[#FFD600] hover:bg-[#ffe145] border-2 md:border-2"
                    >
                      <span className="mr-2">Dalej: wybierz termin</span>
                      {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>

                    <div className="text-center space-y-3">
                       <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
                         <Lock className="w-3 h-3" /> 
                         <span>Twoje dane są w 100% bezpieczne — RODO</span>
                       </div>
                       
                       <p className="text-[10px] text-slate-400 leading-tight max-w-xs mx-auto">
                         Wysyłając ten formularz, wyrażasz zgodę na otrzymanie bezpłatnych materiałów edukacyjnych oraz wiadomości zgodnie z Polityką Prywatności.
                       </p>

                       <button
                        type="button"
                        onClick={onClose}
                        className="text-sm font-medium text-slate-400 hover:text-black underline underline-offset-4 transition-colors pt-2 block w-full"
                      >
                        Anuluj i wróć na stronę
                      </button>
                    </div>
                  </div>
                </form>

             </div>
             
             {/* BOTTOM SPACER (Mobile keyboard safety) */}
             <div className="h-4 md:hidden shrink-0"></div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingPopup;
