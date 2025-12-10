
import React, { useRef } from 'react';
import { Play, Calendar, CheckCircle2, ArrowDown, PlayCircle } from 'lucide-react';
import Button from './ui/Button';

interface C1BookingPageProps {
  onNavigate: (view: string) => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

const C1BookingPage: React.FC<C1BookingPageProps> = ({ onNavigate, onOpenTerms, onOpenPrivacy }) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  const scrollToCalendar = () => {
    calendarRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Footer Disclaimer Component
  const LegalFooter = () => (
    <div className="border-t border-slate-200 mt-20 pt-10 pb-10 text-center px-4 bg-slate-50">
       <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            Niniejsza witryna nie jest częścią witryn YouTube, Google ani Facebook; Google Inc lub Facebook Inc. Ponadto ta witryna NIE jest w żaden sposób wspierana przez YouTube, Google ani Facebook. FACEBOOK jest znakiem towarowym firmy FACEBOOK Inc. YOUTUBE jest znakiem towarowym firmy GOOGLE Inc.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500 font-medium">
             <button onClick={onOpenTerms} className="hover:text-black transition-colors">Zastrzeżenia</button>
             <span>|</span>
             <button onClick={onOpenTerms} className="hover:text-black transition-colors">Regulamin</button>
             <span>|</span>
             <div className="relative group flex items-center">
               <button onClick={onOpenPrivacy} className="hover:text-black transition-colors">Polityka Prywatności</button>
               {/* Dev Skip Button - Mobile accessible, subtle - ABSOLUTE POSITIONING TO FIX JITTER */}
               <button 
                 onClick={() => onNavigate('c2')} 
                 className="absolute left-full ml-1 w-2 h-2 rounded-full cursor-pointer text-slate-200 hover:text-slate-200 opacity-50 flex items-center justify-center font-mono text-[8px]" 
                 title="Dev Skip (Next Step)"
               >
                 [c2]
               </button>
             </div>
          </div>
          <p className="text-xs text-slate-300 uppercase tracking-widest mt-4">
            &copy; {new Date().getFullYear()} Sosky.pl
          </p>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-12 md:pt-24 relative flex flex-col">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl flex-1 pb-24">
        
        {/* Header - Compact on Mobile */}
        <div className="mb-8 md:mb-12 border-l-4 border-yellow-400 pl-4 md:pl-10">
          <h1 className="text-3xl md:text-6xl font-heading font-bold leading-[1.0] md:leading-[0.95] tracking-tighter mb-4 md:mb-6">
            Jesteś o krok od uporządkowania swojej strategii i jasnego planu działania.
          </h1>
          <h2 className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            Zanim wybierzesz termin, obejrzyj krótkie wideo. Zobaczysz, jak pracuję i czy to jest odpowiedni moment dla Ciebie.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          
          {/* Left Column: Video & Info */}
          <div className="lg:w-1/2">
            
            {/* Video Placeholder - CLEAN INTRO STYLE */}
            <div className="aspect-video bg-neutral-900 border-2 border-black shadow-[4px_4px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] mb-6 md:mb-10 relative group cursor-pointer overflow-hidden flex items-center justify-center">
               
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

               {/* Branding - Generic Intro */}
               <div className="relative z-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-none uppercase tracking-tighter">
                    Wstęp do<br/>
                    <span className="text-yellow-400 border-b-4 border-yellow-400">Rozmowy</span>
                  </h3>
               </div>

               {/* Play Button */}
               <div className="absolute bottom-4 right-4 z-20 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_#000] group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-black fill-black" />
               </div>

               {/* Overlay gradient */}
               <div className="absolute inset-0 bg-slate-800/20"></div>
               <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-black z-20">
                 Must Watch: 4 min
               </div>
            </div>

            {/* Info Box - Compact on Mobile */}
            <div className="bg-slate-50 border-2 border-black p-5 md:p-8">
              <p className="font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4 md:mb-6 border-b-2 border-black/10 pb-3 md:pb-4">
                W tym materiale wyjaśniam:
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Jak wygląda proces diagnozy Twojego biznesu.",
                  "Jakie są zasady współpracy i standard w mentoringu.",
                  "Jak przygotować się do rozmowy, by wyciągnąć z niej maksimum."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 md:gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-sm md:text-base text-slate-800 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Calendar - Attached Ref here */}
          <div className="lg:w-1/2" ref={calendarRef}>
             <div className="mb-4 md:mb-6 flex items-center gap-3 pt-8 md:pt-0 border-t md:border-t-0 border-dashed border-slate-300 md:border-none mt-8 md:mt-0">
               <div className="bg-black text-white p-2 shrink-0">
                 <Calendar className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <h3 className="text-xl md:text-2xl font-heading font-bold">
                 Wybierz termin sesji strategicznej:
               </h3>
             </div>

             {/* Calendly Embed Placeholder */}
             <div className="w-full bg-white border-2 border-slate-200 h-[500px] md:h-[600px] rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-center p-4 md:p-8 shadow-sm">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
                
                <div className="relative z-10 max-w-sm">
                   <div className="text-5xl md:text-6xl mb-4">📅</div>
                   <p className="text-slate-500 font-bold mb-2">Calendly Embed Placeholder</p>
                   <p className="text-sm text-slate-400 mb-8">
                     Tu pojawi się interaktywny kalendarz.
                   </p>
                </div>
             </div>

             <div className="mt-4 md:mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-xs md:text-sm text-slate-700 leading-relaxed mb-24 md:mb-0">
               <span className="font-bold">Note:</span> Wybierz termin i odpowiedz szczerze na pytania. Twoje odpowiedzi pozwolą mi przygotować rozmowę pod Twoją sytuację.
             </div>
          </div>

        </div>
        
      </div>
      
      <LegalFooter />
      
      {/* STICKY MOBILE CTA */}
      <div className="block md:hidden fixed inset-x-0 bottom-0 px-4 pb-6 pt-6 z-40 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
         <div className="pointer-events-auto shadow-[0px_-4px_20px_rgba(255,255,255,0.8)]">
            <button 
              onClick={scrollToCalendar}
              className="w-full bg-[#FFD600] text-black font-heading font-bold text-lg py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <span>📅 Wybierz termin rozmowy</span>
              <ArrowDown className="w-5 h-5" />
            </button>
         </div>
      </div>
    </div>
  );
};

export default C1BookingPage;
