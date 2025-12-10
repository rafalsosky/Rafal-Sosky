
import React from 'react';
import { PlayCircle } from 'lucide-react';
import Button from './ui/Button';

interface NewsletterProps {
  onOpenModal?: () => void;
}

// Wrapped in forwardRef to allow scrolling from Hero
const Newsletter = React.forwardRef<HTMLElement, NewsletterProps>(({ onOpenModal }, ref) => {
  return (
    <section ref={ref} id="sales-letter" className="py-24 bg-white border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-50 border-2 border-black p-8 md:p-16 relative overflow-hidden shadow-[12px_12px_0px_0px_#000]">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 border-l-2 border-b-2 border-black -translate-y-12 translate-x-12 rotate-45"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-black text-yellow-400 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_#FACC15]">
                    <PlayCircle className="w-6 h-6" />
                 </div>
                 <span className="font-bold font-heading uppercase tracking-widest text-sm text-slate-500">
                   Zacznij Tutaj
                 </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-none">
                Twój biznes stoi, bo<br/>Twoja oferta leży?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-yellow-400 pl-4">
                Nie musisz od razu wchodzić w mentoring. Odbierz bezpłatny warsztat "Oferta Mafijna" i zobacz, jak w 30 minut zmienić "zastanowię się" w "gdzie mam wpłacić".
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button 
                    variant="black" 
                    className="whitespace-nowrap w-full sm:w-auto" 
                    icon
                    onClick={onOpenModal}
                 >
                   WYŚLIJ MI NAGRANIE WARSZTATU
                 </Button>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Konkretna wiedza do wdrożenia od zaraz.
              </p>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center">
               {/* Visual representation of the Video Player - MAFIA STYLE CSS */}
               <div 
                  className="relative w-full max-w-sm aspect-video bg-black border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center group cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden"
                  onClick={onOpenModal}
               >
                  {/* Brutalist CSS Thumbnail */}
                  <div className="absolute inset-0 bg-neutral-900">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  </div>
                  
                  <div className="relative z-10 border-4 border-yellow-400 p-4 text-center transform -rotate-2">
                     <h3 className="text-3xl font-heading font-bold text-white leading-none uppercase tracking-tighter">
                       Oferta<br/>
                       <span className="text-yellow-400">Mafijna</span>
                     </h3>
                  </div>

                  <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_black] group-hover:scale-110 transition-transform mt-4">
                     <PlayCircle className="w-6 h-6 text-black fill-black" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                     <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-yellow-400"></div>
                     </div>
                     <div className="flex justify-between mt-2 text-[10px] text-white font-mono uppercase">
                        <span>Warsztat</span>
                        <span>30:00</span>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

export default Newsletter;
