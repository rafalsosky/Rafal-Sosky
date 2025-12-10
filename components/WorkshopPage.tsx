
import React from 'react';
import { PlayCircle, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Logo from './ui/Logo';

interface WorkshopPageProps {
  onBooking: () => void;
  onNavigateHome: () => void;
}

const WorkshopPage: React.FC<WorkshopPageProps> = ({ onBooking, onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col pb-24 lg:pb-0">
      
      {/* Minimal Static Logo (Non-clickable, Transparent, Smaller) */}
      <div className="w-full flex justify-center pt-8 pb-2">
         <Logo className="h-6" />
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        
        {/* Status Bar */}
        <div className="flex justify-center mb-8">
           <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 border border-green-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              <Lock className="w-3 h-3" />
              <span>Dostęp Odblokowany</span>
           </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.0] tracking-tighter mb-6">
             Jak stworzyć <span className="bg-yellow-400 px-2 box-decoration-clone">Ofertę Mafijną</span>, której klient nie będzie mógł odrzucić?
           </h1>
           <p className="text-lg text-slate-600 leading-relaxed">
             30-minutowy warsztat strategiczny. Bez lania wody. Sama esencja modelu High-Ticket.
           </p>
        </div>

        {/* Video Container - Cinema Style */}
        <div className="relative w-full aspect-video bg-black border-4 border-black shadow-[12px_12px_0px_0px_#000] mb-16 group overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            {/* Play Trigger (Visual Only since it's a placeholder) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
               <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <PlayCircle className="w-10 h-10 text-black fill-black" />
               </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 z-10">
               <p className="text-white font-bold uppercase tracking-widest text-xs mb-1">Teraz odtwarzane:</p>
               <p className="text-white text-xl font-heading font-bold">Moduł 1: Psychologia Ceny Premium</p>
            </div>
        </div>

        {/* Content & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           
           {/* Left: Key Takeaways */}
           <div className="lg:col-span-7 space-y-8">
              <h3 className="text-2xl font-heading font-bold border-l-4 border-yellow-400 pl-4">
                W tym materiale poznasz:
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Dlaczego Twoja obecna oferta jest porównywalna z konkurencją (i jak to zmienić w 1 wieczór).",
                  "Równanie Wartości: Matematyczny wzór na podniesienie ceny 3x bez utraty klientów.",
                  "Mechanizm 'Odwrócenia Ryzyka', który sprawia, że zakup staje się logiczną koniecznością."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start bg-white p-4 border border-slate-200 shadow-sm">
                     <div className="mt-1 shrink-0 text-yellow-500">
                        <CheckCircle2 className="w-5 h-5 fill-black" />
                     </div>
                     <span className="text-slate-700 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
           </div>

           {/* Right: Sticky CTA (TOP 1% CONVERSION BOX) */}
           <div className="lg:col-span-5 lg:sticky lg:top-8">
              <div className="bg-black text-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#FACC15] relative overflow-hidden">
                 {/* Decorative */}
                 <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 border-l border-b border-white/10 rounded-bl-full"></div>

                 <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4 text-center">
                   Następny Krok
                 </p>
                 <h3 className="text-2xl font-heading font-bold text-center mb-4 leading-tight">
                   Zbudujmy Twoją<br/>"Ofertę Mafijną"
                 </h3>
                 <p className="text-sm text-slate-300 text-center mb-8 leading-relaxed">
                   To wideo to teoria. Czas na wdrożenie. Przeanalizuję Twój obecny model i pokażę Ci, jak zaaplikować ten system, by podnieść ceny i marżę.
                 </p>
                 
                 {/* Yellow Button on Black Background = High Contrast */}
                 <Button 
                    variant="primary" 
                    className="w-full justify-center text-lg shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff]" 
                    onClick={onBooking}
                 >
                    UMÓW BEZPŁATNY AUDYT OFERTY
                 </Button>
                 
                 <p className="text-[10px] text-center text-slate-500 mt-4">
                   *Obowiązuje selekcja zgłoszeń.
                 </p>
              </div>
           </div>

        </div>

      </main>

      <footer className="bg-white border-t border-black/10 py-8 text-center">
         <p className="text-xs text-slate-400 font-medium">
           &copy; {new Date().getFullYear()} Sosky.pl. Wszystkie prawa zastrzeżone.
         </p>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-black z-50 lg:hidden">
         <Button 
            variant="black" 
            className="w-full justify-center shadow-[4px_4px_0px_0px_#FACC15]" 
            onClick={onBooking}
         >
            UMÓW AUDYT
         </Button>
      </div>

    </div>
  );
};

export default WorkshopPage;
