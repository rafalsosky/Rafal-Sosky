
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-yellow-400 border-y border-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#000]">
          
          <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="shrink-0">
               <div className="w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center text-yellow-400 border-4 border-yellow-400 shadow-xl">
                 <ShieldCheck className="w-12 h-12 md:w-16 md:h-16" />
               </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase tracking-tight">
                Gwarancja "Ironclad"
              </h2>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-4">
                Moja obietnica jest prosta: Jeśli wdrożysz system D.E.C.O.D.E. i w ciągu 16 tygodni nie odzyskasz swojej inwestycji w program...
              </p>
              <p className="text-lg md:text-xl font-bold bg-yellow-100 inline-block px-2 border-b-2 border-black">
                Będę z Tobą pracował za darmo tak długo, aż ten wynik osiągniesz.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-dashed border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-3">
               <div className="h-10 w-20 border-b-2 border-black skew-x-[-20deg]"></div>
               <span className="font-heading font-bold text-slate-400 uppercase text-xs tracking-widest">Podpis Mentora</span>
             </div>
             <p className="text-xs text-slate-500 font-medium max-w-sm text-center md:text-right">
               Ryzyko jest po mojej stronie. Ty inwestujesz tylko swój czas i zaangażowanie.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guarantee;
