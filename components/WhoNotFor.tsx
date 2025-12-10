import React from 'react';
import { Ban, AlertTriangle } from 'lucide-react';

const WhoNotFor: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden border-y border-black">
      {/* Hazard Stripes Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' 
      }}></div>

      {/* Red Accent Line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-red-600 z-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="lg:w-5/12 sticky top-32">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 text-black font-bold px-3 py-1 text-xs uppercase tracking-widest border border-red-500">
                  Warning Zone
                </div>
                <div className="h-px bg-slate-700 flex-1"></div>
             </div>

            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[0.9] tracking-tighter text-white">
              NIE APLIKUJ,<br/>
              <span className="text-slate-500">JEŚLI:</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Szanujemy Twój czas i nasz. <span className="text-white font-bold">Program Mentoringowy D.E.C.O.D.E.</span> to intensywne wdrożenie dla osób, które są gotowe na skalowanie, a nie szukanie wymówek.
            </p>

            <div className="hidden lg:block p-6 border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
               <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
               <p className="text-sm text-slate-400 font-mono">
                 SYSTEM ERROR: EXCUSES NOT FOUND.<br/>
                 PLEASE VERIFY MINDSET BEFORE PROCEEDING.
               </p>
            </div>
          </div>

          <div className="lg:w-7/12 grid gap-4">
            {[
              { title: "Szukasz 'Magicznej Pigułki'", desc: "Nie rozdajemy pieniędzy. Budujemy systemy. To wymaga pracy, wdrożenia i zaangażowania." },
              { title: "Boisz się inwestować w siebie", desc: "Jeśli 15 minut zastanawiasz się nad zakupem książki za 50 zł, ten mentoring Cię przytłoczy." },
              { title: "Nie masz pomysłu na siebie", desc: "Pomagamy skalować potencjał. Jeśli oczekujesz, że wymyślimy biznes za Ciebie od zera – to nie ten adres." },
              { title: "Czekasz na 'Idealny Moment'", desc: "Przedsiębiorczość to zarządzanie chaosem. Idealny moment nie istnieje. Liczy się egzekucja tu i teraz." }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-slate-800 border-l-4 border-slate-700 p-8 hover:border-red-600 transition-all duration-300 hover:bg-slate-800/80">
                <div className="flex items-start gap-5 relative z-10">
                  <div className="mt-1 shrink-0">
                    <Ban className="w-6 h-6 text-slate-500 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2 text-white group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoNotFor;