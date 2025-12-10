
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, ArrowRight, Lock, Check } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (email: string) => void;
}

const WorkshopModal: React.FC<WorkshopModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      
      // Auto-redirect logic
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        if (onSubmit) {
          onSubmit(email);
        } else {
          onClose();
        }
      }, 1500); // Wait 1.5s to show the "Success" state before redirecting
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white border-2 border-black p-0 shadow-[16px_16px_0px_0px_#FACC15] z-10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header Stripe */}
            <div className="bg-black text-white px-6 py-4 flex justify-between items-center shrink-0">
              <Logo variant="white" className="h-5" />
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 md:p-10 overflow-y-auto">
              {!submitted ? (
                <>
                  <div className="flex gap-6 mb-6">
                    <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_black]">
                        <PlayCircle className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 leading-none">
                        Odbierz "Ofertę Mafijną"
                      </h3>
                      <p className="text-slate-600 leading-snug text-sm">
                        30 minut konkretów. Zobaczysz, jak budować ofertę, której klienci nie potrafią odrzucić.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                         Gdzie wysłać nagranie?
                       </label>
                       <input 
                         required
                         type="email" 
                         value={email}
                         disabled={isLoading}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Twój najlepszy adres e-mail..." 
                         className="w-full border-2 border-black p-4 font-medium focus:outline-none focus:bg-yellow-50 focus:border-yellow-400 transition-colors mb-2 disabled:opacity-50"
                       />
                    </div>

                    <Button type="submit" variant="black" loading={isLoading} className="w-full justify-between group">
                      <span>WYŚLIJ MI DOSTĘP</span>
                      {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-yellow-400" />}
                    </Button>
                    
                    <div className="text-center pt-2">
                       <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                          <Lock className="w-3 h-3" /> Twoje dane są w 100% bezpieczne — RODO
                       </div>
                       <p className="text-[10px] text-slate-400 leading-tight">
                         Wypełniając formularz, zgadzasz się na otrzymanie materiałów zgodnie z Polityką Prywatności.
                       </p>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black shadow-[4px_4px_0px_0px_black]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Wysłano!</h3>
                  <p className="text-slate-600">Przekierowuję do warsztatu...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkshopModal;
