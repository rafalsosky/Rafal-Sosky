
import React from 'react';
import Button from './ui/Button';
import Logo from './ui/Logo';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface FooterCTAProps {
  onOpenBlog?: () => void;
  onBooking?: () => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenBlog, onBooking, onOpenTerms, onOpenPrivacy }) => {
  // Dynamic Month Logic
  const date = new Date();
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  
  // If we are past the 20th, show next month
  if (dayOfMonth > 20) {
    date.setMonth(date.getMonth() + 1);
  }
  
  const displayMonth = date.toLocaleString('pl-PL', { month: 'long' });
  
  return (
    <>
    <section id="contact" className="pt-24 md:pt-32 pb-0 bg-yellow-400 text-black relative overflow-hidden border-t border-black">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-24">
        
        {/* Side-by-Side Layout on Desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Headline */}
          <div className="lg:w-1/2 text-center lg:text-left">
             {/* Dynamic Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-lg">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span className="font-mono text-xs font-bold uppercase tracking-widest">
                 Nabór na: <span className="text-yellow-400 capitalize">{displayMonth}</span>
               </span>
            </div>

            <p className="font-bold uppercase tracking-widest mb-4 text-sm">Jesteś gotowy na zmianę?</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95] tracking-tighter">
              Sprawdźmy, co dokładnie hamuje Twój wzrost tu i teraz.
            </h2>
            
            <div className="w-full h-2 bg-black mt-8 hidden lg:block"></div>
          </div>

          {/* Right Column: Value Stack & Action */}
          <div className="lg:w-1/2 w-full">
            {/* Value Stack Box */}
            <div className="bg-white/50 backdrop-blur-sm border-2 border-black p-6 rounded-2xl mb-8 w-full text-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-lg mb-4 text-center md:text-left font-heading">Co otrzymasz podczas bezpłatnej, 7-minutowej rozmowy?</p>
              <ul className="grid grid-cols-1 gap-3">
                 <li className="flex items-start gap-3 font-medium text-sm md:text-base leading-snug">
                     <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                     <span><span className="font-bold">Weryfikacja potencjału:</span> Szczera ocena, czy Twój model biznesowy jest skalowalny.</span>
                 </li>
                 <li className="flex items-start gap-3 font-medium text-sm md:text-base leading-snug">
                     <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                     <span><span className="font-bold">Namierzenie blokady:</span> Wskazanie jednego elementu, który hamuje Twój wzrost dzisiaj.</span>
                 </li>
                 <li className="flex items-start gap-3 font-medium text-sm md:text-base leading-snug">
                     <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                     <span><span className="font-bold">Gwarancja Wartości:</span> Nawet jeśli nie podejmiemy współpracy, wyjdziesz z konkretnym rozwiązaniem Twojej blokady, które możesz wdrożyć sam.</span>
                 </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
              {/* The Money Button: Black on Yellow = Maximum Contrast */}
              <Button 
                variant="black" 
                className="w-full text-lg py-5 px-10 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]" 
                icon
                onClick={onBooking}
              >
                REZERWUJĘ TERMIN BEZPŁATNIE
              </Button>
            </div>
            
            <p className="mt-6 text-xs text-black/60 font-medium text-center sm:text-left">
              *Dostępność miejsc ograniczona do 6 osób na miesiąc.
            </p>
          </div>

        </div>
      </div>

      {/* Integrated High-Contrast Footer */}
      <footer className="bg-black text-white py-10 relative z-20 border-t-2 border-black">
         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               {/* Custom White Logo for dark background */}
               <div className="opacity-90 hover:opacity-100 transition-opacity">
                 <Logo className="h-6" variant="white" />
               </div>
               <div className="text-sm text-slate-500 mt-3 space-y-1">
                 <p>Wielicka 42 lok. B3, 30-552 Kraków</p>
                 <p>NIP: 7132875070 | REGON: 385454441</p>
                 <p>&copy; {year} Wszelkie prawa zastrzeżone.</p>
               </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
               <div className="flex gap-6 text-sm font-medium text-slate-400 items-center">
                  {/* BLOG LINK ADDED HERE */}
                  {onOpenBlog && (
                    <button 
                      onClick={onOpenBlog} 
                      className="text-white hover:text-yellow-400 transition-colors uppercase font-bold tracking-wider flex items-center gap-1 group"
                    >
                      Czytaj Bloga <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                  <div className="h-4 w-px bg-slate-700"></div>
                  
                  {/* UPDATED TERMS/PRIVACY LINKS */}
                  <button onClick={onOpenTerms} className="hover:text-white transition-colors cursor-pointer text-left">Regulamin</button>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer text-left">Polityka Prywatności</button>
               </div>
               
               <div className="text-[10px] font-bold uppercase tracking-widest bg-yellow-400 text-black px-3 py-1.5 rounded-sm">
                  Zbuduj. Zarabiaj. Zdominuj.
               </div>
            </div>
         </div>
      </footer>
    </section>
    </>
  );
};

export default FooterCTA;
