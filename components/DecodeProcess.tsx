
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, MessageSquare, Briefcase, Handshake, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <Activity />,
    title: "Diagnose",
    subtitle: "Tydzień 1-2",
    desc: "Analizujemy Twój biznes i odkrywamy wąskie gardła. W 7 dni masz klarowną diagnozę tego, co naprawdę nie działa i co przynosi efekty. Przestajesz zgadywać.",
    detail: "Diagnostyka Wąskich Gardeł"
  },
  {
    id: 2,
    icon: <Zap />,
    title: "Elevate",
    subtitle: "Tydzień 3-4",
    desc: "Wydobywamy Twoją unikalną ekspertyzę i pozycjonujemy Cię tak, by klienci premium sami zaczęli Cię znajdować. Budujemy autorytet, którego nie da się skopiować.",
    detail: "Architektura Autorytetu"
  },
  {
    id: 3,
    icon: <MessageSquare />,
    title: "Content",
    subtitle: "Tydzień 5-6",
    desc: "Tworzymy komunikację, która sprzedaje. W 14 dni masz gotowe szablony treści, które generują rozmowy sprzedażowe, a nie puste lajki.",
    detail: "Maszyna Treści Konwertujących"
  },
  {
    id: 4,
    icon: <Briefcase />,
    title: "Offer",
    subtitle: "Tydzień 7-9",
    desc: "Budujemy Twoją Złotą Ofertę. Tak dobrą, że reakcją będzie 'gdzie mam zapłacić?', a nie 'zastanowię się'. Twój produkt staje się oczywistym wyborem.",
    detail: 'Konstrukcja Oferty "No-Brainer"'
  },
  {
    id: 5,
    icon: <Handshake />,
    title: "Deal",
    subtitle: "Tydzień 10-12",
    desc: "Wdrażamy skrypt rozmowy sprzedażowej. Klient sam dochodzi do decyzji zakupowej. Eliminujemy presję i niewygodne negocjacje cenowe.",
    detail: "Implementacja Skryptu Sprzedażowego"
  },
  {
    id: 6,
    icon: <TrendingUp />,
    title: "Expand",
    subtitle: "Tydzień 13-16",
    desc: "Skalujesz biznes, wykorzystując powtarzalne procesy i automatyzację. W efekcie zarabiasz 20-50 tys. miesięcznie, pracując mniej.",
    detail: "Automatyzacja i Skalowanie Wyników"
  }
];

const DecodeProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden border-t-2 border-b-2 border-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      {/* Brutalist Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 z-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-20 text-center md:text-left">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
            <span className="bg-white text-black font-bold tracking-widest text-xs uppercase px-3 py-1 mb-6 block w-fit mx-auto md:mx-0 border-2 border-yellow-400 shadow-[4px_4px_0px_0px_#FACC15]">
              Od chaosu do systemu
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tighter uppercase mb-4">
            JAK WYGLĄDA <br/>
            <span className="text-white">PROCES D.E.C.O.D.E.</span>
          </h2>
          <div className="h-2 w-32 bg-yellow-400 mx-auto md:mx-0"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Interactive List (Accordion on Mobile / List on Desktop) */}
          <div className="lg:w-1/2 flex flex-col">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveStep(idx)}
                className={`group border-b border-white/20 transition-all duration-300 cursor-pointer ${
                  activeStep === idx ? 'bg-white/5 py-6 px-4 border-l-4 border-l-yellow-400' : 'py-6 hover:pl-4'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-mono transition-colors ${activeStep === idx ? 'text-yellow-400' : 'text-slate-500'}`}>0{step.id}</span>
                    <h3 className={`text-3xl font-heading font-bold uppercase transition-colors ${activeStep === idx ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-300 ${activeStep === idx ? 'rotate-90 text-yellow-400' : 'text-slate-500'}`}>
                    {/* Arrow or Icon */}
                  </div>
                </div>
                
                {/* Mobile Content Expansion */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeStep === idx ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detail Card (Desktop Sticky) */}
          <div className="hidden lg:block lg:w-1/2 relative">
             <div className="sticky top-32">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStep}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="bg-white border-2 border-black p-12 shadow-[12px_12px_0px_0px_#FACC15] relative min-h-[400px] flex flex-col justify-between"
                 >
                    {/* Step Marker */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-yellow-400 flex items-center justify-center font-bold font-mono border-2 border-white shadow-lg z-10">
                      0{steps[activeStep].id}
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-8">
                         <div className="p-4 bg-slate-50 border border-black rounded-lg">
                           {React.cloneElement(steps[activeStep].icon as React.ReactElement, { className: "w-8 h-8 text-black" })}
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest bg-yellow-400 text-black px-2 py-1 border border-black">
                           {steps[activeStep].subtitle}
                         </span>
                      </div>
                      
                      <h3 className="text-4xl font-heading font-bold text-black mb-2">
                        {steps[activeStep].detail}
                      </h3>
                      <div className="w-12 h-1 bg-black mb-6"></div>
                      
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {steps[activeStep].desc}
                      </p>
                    </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DecodeProcess;
