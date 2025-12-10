
import React from 'react';
import { Calendar, Search, Map, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="w-5 h-5" />,
    step: "01",
    title: "Rozmowa Wstępna",
    desc: "Krótka, 7-minutowa rozmowa. Bez pitchowania. Sprawdzamy, czy w ogóle możemy Ci pomóc."
  },
  {
    icon: <Search className="w-5 h-5" />,
    step: "02",
    title: "Audyt & Analiza",
    desc: "Namierzamy 'Wąskie Gardło' Twojego biznesu. Znajdujemy ten jeden element, który blokuje wzrost."
  },
  {
    icon: <Map className="w-5 h-5" />,
    step: "03",
    title: "Plan Wdrożenia",
    desc: "Otrzymujesz konkretną mapę drogową. Jeśli zdecydujesz się na współpracę – ruszamy od razu."
  }
];

const CallRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* Badge Removed here */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Zero presji. <br/>
            <span className="bg-yellow-400 px-2 inline-block transform -rotate-1">Czysta strategia.</span>
          </h2>
          <p className="text-slate-500">
            To nie jest rozmowa handlowa. To konsultacja strategiczna, która ma na celu sprawdzenie, czy pasujemy do siebie.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mt-12 md:mt-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-1 bg-slate-200 z-0">
             <div className="absolute top-0 left-0 h-full bg-black w-1/3 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:items-center text-left md:text-center group">
                
                {/* Step Marker */}
                <div className="flex items-center gap-4 md:flex-col md:gap-6 mb-6">
                   <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] group-hover:shadow-[6px_6px_0px_0px_#FACC15] group-hover:-translate-y-1 transition-all z-10 relative">
                     {step.icon}
                     <div className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 border border-white">
                        {step.step}
                     </div>
                   </div>
                   <div className="md:hidden h-px bg-slate-200 flex-1"></div>
                </div>

                <h3 className="text-xl font-bold font-heading mb-3 flex items-center justify-start md:justify-center gap-2">
                  {step.title}
                  {idx !== steps.length - 1 && <ArrowRight className="md:hidden w-4 h-4 text-slate-300" />}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed max-w-[260px] mx-0 md:mx-auto">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallRoadmap;
