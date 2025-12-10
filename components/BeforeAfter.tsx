
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Button from './ui/Button';

interface BeforeAfterProps {
  onBooking?: () => void;
}

const personas = [
  {
    id: "coaches",
    label: "Coachowie i mentorzy",
    problem: "Nieprzewidywalne przychody, puste kalendarze. Obniżasz stawki, żeby tylko ktoś się zapisał. Masz wiedzę, ale nie masz systemu.",
    solution: "Kalendarz pełen klientów premium. Stabilny przychód co miesiąc bez presji. Klienci sami Cię znajdują i akceptują stawki.",
  },
  {
    id: "solo",
    label: "Soloprzedsiębiorcy",
    problem: "Robisz wszystko sam: sprzedaż, marketing, obsługa. Efekt? Chaos, zmęczenie i brak efektów proporcjonalnych do wysiłku.",
    solution: "Biznes działający jak system. Wiesz dokładnie co robić (i czego nie robić). Masz jasny plan i konkretne liczby.",
  },
  {
    id: "services",
    label: "Sprzedawcy usług",
    problem: "Robisz świetną robotę, ale klienci ciągle negocjują. Gonisz projekty, czujesz, że stoisz w miejscu. Sprzedajesz czas.",
    solution: "Przestajesz sprzedawać czas, sprzedajesz wartość. Pracujesz mniej, zarabiasz więcej. Eliminujesz trudne negocjacje.",
  }
];

const BeforeAfter: React.FC<BeforeAfterProps> = ({ onBooking }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 md:py-32 border-y border-black/10 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
             Dla kogo powstał<br/>ten system?
           </h2>
           <p className="text-slate-500 max-w-md text-right md:text-left mt-4 md:mt-0">
             Wybierz swój profil i zobacz transformację, którą przechodzą nasi klienci.
           </p>
        </div>

        {/* --- MOBILE VIEW: VERTICAL STACK (No Tabs) --- */}
        <div className="flex flex-col gap-6 lg:hidden">
          {personas.map((persona, idx) => (
            <div key={idx} className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_#000] overflow-hidden">
              
              {/* Card Header */}
              <div className="bg-black text-yellow-400 p-4 border-b-2 border-black">
                <h3 className="font-heading font-bold uppercase tracking-widest text-center text-lg">
                  {persona.label}
                </h3>
              </div>

              {/* Before Section */}
              <div className="p-8 bg-slate-100 border-b-2 border-black">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-white border border-black text-black mr-3 shrink-0">
                    <X className="w-5 h-5" />
                  </span>
                  <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Przed</span>
                </div>
                <p className="text-lg text-slate-600 font-light leading-snug font-heading italic">
                  "{persona.problem}"
                </p>
              </div>

              {/* After Section */}
              <div className="p-8 bg-white">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-black text-yellow-400 mr-3 shadow-[2px_2px_0px_0px_#FACC15] shrink-0">
                    <Check className="w-5 h-5" />
                  </span>
                  <span className="font-bold uppercase tracking-widest text-xs text-black">Po współpracy</span>
                </div>
                <p className="text-xl font-bold text-black leading-snug mb-8 font-heading">
                  "{persona.solution}"
                </p>
                <Button variant="primary" className="w-full" onClick={onBooking}>
                  To mój cel
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW: TABS --- */}
        <div className="hidden lg:block">
          {/* Tabs */}
          <div className="flex flex-wrap gap-0 mb-0 border-x border-t border-black w-fit bg-white">
            {personas.map((persona, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-wider border-r border-b border-black transition-colors ${
                  activeTab === idx 
                  ? 'bg-black text-white hover:bg-black hover:text-white' 
                  : 'bg-white text-black hover:bg-yellow-50'
                }`}
              >
                {persona.label}
              </button>
            ))}
          </div>

          {/* Split Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-r border-b border-black shadow-[16px_16px_0px_0px_#cbd5e1] bg-white">
            
            {/* Problem Side (Grey) */}
            <div className="p-16 border-r border-black/10 bg-slate-100 flex flex-col justify-center">
               <div className="flex items-center mb-8">
                  <span className="w-8 h-8 flex items-center justify-center bg-white border border-black text-black mr-3">
                      <X className="w-5 h-5" />
                  </span>
                  <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Przed</span>
               </div>
               <AnimatePresence mode='wait'>
                  <motion.p 
                    key={`p-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-2xl font-light text-slate-500 leading-snug font-heading"
                  >
                   "{personas[activeTab].problem}"
                  </motion.p>
               </AnimatePresence>
            </div>

            {/* Solution Side (White/Yellow) */}
            <div className="p-16 bg-white relative flex flex-col justify-center">
               <div className="flex items-center mb-8">
                  <span className="w-8 h-8 flex items-center justify-center bg-black text-yellow-400 mr-3 shadow-[2px_2px_0px_0px_#FACC15]">
                      <Check className="w-5 h-5" />
                  </span>
                  <span className="font-bold uppercase tracking-widest text-xs text-black">Po współpracy</span>
               </div>
               
               <AnimatePresence mode='wait'>
                  <motion.p 
                    key={`s-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-2xl md:text-3xl text-black font-bold leading-snug font-heading mb-8"
                  >
                   "{personas[activeTab].solution}"
                  </motion.p>
               </AnimatePresence>

               <Button variant="primary" className="self-start" onClick={onBooking}>
                  To mój cel
               </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;
