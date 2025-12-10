
import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const features = [
    { label: "Model Sprzedaży", old: "Sprzedaż czasu / godziny", new: "Sprzedaż Transformacji (High-Ticket)" },
    { label: "Pozyskiwanie", old: "Zimne DM'y / Brak strategii", new: "Stabilny System (Klienci sami piszą)" },
    { label: "Cena", old: "Walka ceną z konkurencją", new: "Brak konkurencji (Złota Oferta)" },
    { label: "Stabilność", old: "Rollercoaster przychodowy", new: "Przewidywalne wyniki co miesiąc" },
    { label: "Zaangażowanie", old: "Praca 24/7, bycie 'niewolnikiem'", new: "Automatyzacja i delegowanie" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Dlaczego obecny model<br/>
            <span className="text-slate-400 line-through decoration-red-500 decoration-4">Cię męczy?</span>
          </h2>
          <p className="font-heading font-bold text-xl md:text-2xl text-yellow-500 uppercase tracking-wider bg-black inline-block px-4 py-1 transform -rotate-1">
            Po której stronie jesteś dziś?
          </p>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-6">
            Większość problemów, które masz, nie wynika z braku Twoich kompetencji, ale z 
            przestarzałego systemu operacyjnego Twojego biznesu.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Old Way Column */}
          <div className="p-8 md:p-12 bg-slate-50 border-b md:border-b-0 md:border-r border-black relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
             <div className="flex items-center gap-3 mb-10">
               <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                 <X className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-slate-500">Stary Sposób</h3>
             </div>

             <div className="space-y-8">
               {features.map((f, i) => (
                 <div key={i} className="flex gap-4 opacity-70 group hover:opacity-100 transition-opacity">
                   <div className="mt-1 min-w-[20px]"><X className="w-5 h-5 text-red-400" /></div>
                   <div>
                     <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{f.label}</p>
                     <p className="font-medium text-slate-700 line-through decoration-slate-400">{f.old}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* New Way Column */}
          <div className="p-8 md:p-12 bg-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
             <div className="flex items-center gap-3 mb-10">
               <div className="w-10 h-10 rounded-full bg-black text-yellow-400 flex items-center justify-center shadow-lg">
                 <Check className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-black">Model D.E.C.O.D.E</h3>
             </div>

             <div className="space-y-8">
               {features.map((f, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="mt-1 min-w-[20px]"><Check className="w-5 h-5 text-green-600 stroke-[3px]" /></div>
                   <div>
                     <p className="text-xs font-bold uppercase tracking-wider text-yellow-600 mb-1">{f.label}</p>
                     <p className="font-bold text-black text-lg">{f.new}</p>
                   </div>
                 </div>
               ))}
             </div>
             
             {/* Decorative 'Winner' badge */}
             <div className="absolute top-6 right-6 rotate-12 bg-yellow-400 text-black text-xs font-black uppercase px-2 py-1 border border-black shadow-sm transform">
               Twój cel
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
