
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent is already stored
    const consent = localStorage.getItem('sosky_cookie_consent');
    if (!consent) {
      // Small delay for better UX on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sosky_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-black text-white border-2 border-yellow-400 p-6 shadow-[8px_8px_0px_0px_#FACC15] flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
            
            {/* Visual Icon */}
            <div className="shrink-0 bg-yellow-400 border-2 border-white p-3 shadow-[4px_4px_0px_0px_#FFF] rotate-3 hidden md:block">
               <Cookie className="w-8 h-8 text-black" />
            </div>

            <div className="flex-1 z-10">
              <div className="flex items-center gap-2 mb-2">
                 {/* Mobile Icon */}
                 <Cookie className="w-5 h-5 text-yellow-400 md:hidden" />
                 <h4 className="font-heading font-bold text-yellow-400 uppercase tracking-widest text-xs">
                   Prywatność & Cookies
                 </h4>
              </div>
              <p className="text-sm text-slate-300 leading-snug">
                Ta strona używa ciasteczek (cookies), abyś nie musiał wpisywać tych samych danych dwa razy i żebym wiedział, które treści Cię interesują (Google Analytics, Meta Pixel).
              </p>
            </div>
            
            <div className="flex gap-4 shrink-0 w-full md:w-auto z-10">
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-3 bg-yellow-400 text-black font-bold uppercase text-sm border-2 border-transparent hover:bg-white hover:border-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
