
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

interface C2ThankYouCallProps {
  onNavigate: (view: string) => void;
}

const C2ThankYouCall: React.FC<C2ThankYouCallProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      
      <div className="max-w-2xl w-full bg-white border-2 border-black p-8 md:p-16 shadow-[12px_12px_0px_0px_#000] text-center relative overflow-hidden">
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 border-l-2 border-b-2 border-black -translate-y-12 translate-x-12 rotate-45"></div>

        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-[4px_4px_0px_0px_#FACC15]">
          <Check className="w-12 h-12 text-yellow-400 stroke-[3px]" />
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[0.9] tracking-tighter mb-6">
          Termin zarezerwowany.<br/>Działamy.
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-12">
          Sprawdź maila — znajdziesz tam link do spotkania i krótkie przygotowanie.
        </h2>

        {/* Instructions Box */}
        <div className="bg-slate-50 border-2 border-black p-8 text-left mb-12 relative">
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 border-2 border-black font-bold text-xs uppercase tracking-widest">
             Twoja lista zadań
           </div>
           
           <ul className="space-y-6">
             {[
               "Dodaj spotkanie do kalendarza — to najprostszy sposób, żeby niczego nie przegapić.",
               "Przygotuj dane — miej pod ręką obecną ofertę, wyniki i pytania.",
               "Bądź punktualnie — szanujmy swój czas. Rezerwuję ten slot wyłącznie dla Ciebie."
             ].map((item, idx) => (
               <li key={idx} className="flex gap-4">
                 <div className="bg-yellow-400 text-black font-bold w-6 h-6 flex items-center justify-center border border-black text-sm shrink-0 mt-0.5">
                   {idx + 1}
                 </div>
                 <span className="font-medium text-slate-800 leading-snug">{item}</span>
               </li>
             ))}
           </ul>
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="font-heading font-bold text-slate-400 uppercase tracking-widest text-sm">
            Do usłyszenia — przejdziemy od razu do konkretów.
          </p>
          
          <Button variant="black" onClick={() => onNavigate('home')} className="w-full md:w-auto">
            Wróć na stronę główną
          </Button>
        </div>

      </div>

    </div>
  );
};

export default C2ThankYouCall;
