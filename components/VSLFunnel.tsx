
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check, AlertTriangle, Lock, Calendar, PlayCircle } from 'lucide-react';
import Button from './ui/Button';

interface VSLFunnelProps {
  step: 1 | 2;
  onNext: () => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

const VSLFunnel: React.FC<VSLFunnelProps> = ({ step, onNext, onOpenTerms, onOpenPrivacy }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send data to API here
    onNext();
  };
  
  // Footer Disclaimer Component
  const LegalFooter = () => (
    <div className="border-t border-slate-200 mt-20 pt-10 pb-10 text-center px-4">
       <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            Niniejsza witryna nie jest częścią witryn YouTube, Google ani Facebook; Google Inc lub Facebook Inc. Ponadto ta witryna NIE jest w żaden sposób wspierana przez YouTube, Google ani Facebook. FACEBOOK jest znakiem towarowym firmy FACEBOOK Inc. YOUTUBE jest znakiem towarowym firmy GOOGLE Inc.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500 font-medium relative">
             <button onClick={onOpenTerms} className="hover:text-black transition-colors">Zastrzeżenia</button>
             <span>|</span>
             <button onClick={onOpenTerms} className="hover:text-black transition-colors">Regulamin</button>
             <span>|</span>
             <div className="relative group flex items-center">
                <button onClick={onOpenPrivacy} className="hover:text-black transition-colors">Polityka Prywatności</button>
                {/* Dev Skip Button - Mobile accessible, subtle - ABSOLUTE POSITIONING TO FIX JITTER */}
                <button 
                  onClick={onNext} 
                  className="absolute left-full ml-1 w-2 h-2 rounded-full cursor-pointer text-slate-200 hover:text-slate-200 opacity-50 flex items-center justify-center font-mono text-[8px]" 
                  title="Dev Skip (Next Step)"
                >
                  [v2]
                </button>
             </div>
          </div>
          <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-4">
            &copy; {new Date().getFullYear()} Sosky.pl
          </p>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-12 md:pt-24 font-sans text-slate-900 flex flex-col">
      
      {/* STEP 1: OPT-IN (SQUEEZE PAGE) */}
      {step === 1 && (
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex-1">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-start">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-white border border-black px-3 py-1 mb-3 md:mb-6 shadow-[2px_2px_0px_0px_#000]"
              >
                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Dla coachów, konsultantów, ekspertów i soloprzedsiębiorców usługowych
                </span>
              </motion.div>
              
              <h1 className="text-[clamp(22px,6vw,28px)] md:text-6xl font-heading font-bold leading-[1.12] md:leading-[1.0] tracking-tighter mb-4 md:mb-6 text-balance">
                Jak w 16 tygodni dojść do 20–50k/m dzięki DECODE™ — bez ton contentu.
              </h1>

              <ul className="space-y-2 md:space-y-4 mb-6 md:mb-10">
                {[
                  "Ponad 200+ konsultacji 1:1 z ekspertami i usługodawcami",
                  "Metoda DECODE™, która działa w każdej branży usługowej prowadzonej przez ekspertów i solobiznesy",
                  "Proces wdrażany prywatnie u klientów premium (High-Ticket)"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 md:gap-4 items-start">
                    <div className="bg-black text-yellow-400 p-1 shrink-0 mt-0.5 md:mt-1">
                      <Check className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="font-medium text-slate-800 text-sm md:text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Only Form Trigger/Arrow */}
              <div className="lg:hidden text-center animate-bounce mt-2 text-slate-400 text-sm">
                 ⬇️ Wypełnij formularz poniżej
              </div>
            </div>

            {/* Right Content: The Form Box */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-50 border-2 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_#000] md:shadow-[12px_12px_0px_0px_#000] relative">
                {/* Decorative element */}
                <div className="absolute -top-3 -right-3 bg-yellow-400 border-2 border-black px-3 py-1 font-bold text-[10px] md:text-xs uppercase tracking-widest z-10">
                  Dostęp ograniczony
                </div>

                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Gdzie wysłać materiał?</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">Gdzie wysłać 15-min materiał, który oszczędzi Ci lata błądzenia?</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <input 
                      required
                      type="text" 
                      placeholder="Twoje Imię"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border-2 border-black p-3 md:p-4 font-medium placeholder:text-slate-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] focus:border-black transition-all text-base"
                    />
                  </div>
                  <div>
                    <input 
                      required
                      type="email" 
                      placeholder="Twój najlepszy adres e-mail"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border-2 border-black p-3 md:p-4 font-medium placeholder:text-slate-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] focus:border-black transition-all text-base"
                    />
                  </div>
                  <div>
                    <input 
                      required
                      type="tel" 
                      placeholder="Numer telefonu (opcjonalnie)"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border-2 border-black p-3 md:p-4 font-medium placeholder:text-slate-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] focus:border-black transition-all text-base"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center mt-2 group text-sm md:text-base py-3 md:py-4">
                    <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 fill-black" /> ODBIERZ NATYCHMIASTOWY DOSTĘP
                  </Button>
                </form>

                <div className="mt-4 text-center">
                   <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                      <Lock className="w-3 h-3" /> Twoje dane są w 100% bezpieczne — RODO
                   </div>
                   <p className="text-[10px] text-slate-400 leading-tight">
                     Wysyłając ten formularz, wyrażasz zgodę na otrzymanie bezpłatnych materiałów edukacyjnych, wiadomości tekstowych, połączeń telefonicznych i przypomnień od Sosky Rafał Sobieszyński zgodnie z Polityką Prywatności.
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* STEP 2: VSL + CALENDAR */}
      {step === 2 && (
        <div className="container mx-auto px-6 md:px-12 max-w-4xl flex-1">
          
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Krok 2 z 2</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">Twoje Zadanie Domowe</h2>
          </div>

          {/* Tough Love Warning Box */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-yellow-400 border-2 border-black p-6 mb-10 shadow-[8px_8px_0px_0px_#000]"
          >
            <div className="flex gap-4 items-start">
              <div className="bg-black text-white p-2 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide mb-2">WAŻNE: Szanuję Twój czas i mój.</h4>
                <p className="text-sm md:text-base leading-snug font-medium mb-1">
                  To wideo (15 min) pokazuje dokładnie, jak działa metoda DECODE™ i jak wygląda proces współpracy.
                </p>
                <p className="text-sm md:text-base leading-snug font-bold border-b border-black/20 inline-block pb-0.5">
                  Obejrzyj je przed wyborem terminu — wtedy rozmowa będzie 100% praktyczna i skupiona na Tobie.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Placeholder - MAFIA STYLE CSS */}
           <div 
              className="aspect-video bg-neutral-900 border-2 border-black shadow-[8px_8px_0px_0px_#000] mb-10 relative group cursor-pointer overflow-hidden flex items-center justify-center"
           >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

              {/* Branding */}
              <div className="relative z-10 border-4 border-yellow-400 p-6 text-center transform -rotate-2">
                 <h3 className="text-4xl md:text-5xl font-heading font-bold text-white leading-none uppercase tracking-tighter">
                   Model<br/>
                   <span className="text-yellow-400">DECODE</span>
                 </h3>
              </div>
              
              {/* Play Button */}
              <div className="absolute bottom-6 right-6 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_#000] group-hover:scale-110 transition-transform">
                 <PlayCircle className="w-8 h-8 text-black fill-black" />
              </div>

              <div className="absolute bottom-6 left-6 bg-black text-white px-3 py-1 text-xs font-bold uppercase z-20">
                Proces D.E.C.O.D.E. w pigułce
              </div>
            </div>

          {/* Video Benefits Bullets */}
          <div className="mb-16 max-w-2xl mx-auto">
            <p className="font-bold font-heading uppercase tracking-wide mb-4 text-center md:text-left">To wideo pomoże Ci:</p>
            <ul className="space-y-3">
              {[
                "zrozumieć cały proces w 16 tygodniach,",
                "zobaczyć, jak eliminujemy cenowych turystów,",
                "przygotować się do rozmowy, żeby była maksymalnie konkretna."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                   <div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>
                   <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar Section */}
          <div className="text-center pt-8 border-t-2 border-dashed border-slate-300">
             <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="w-6 h-6" />
                <h3 className="text-2xl font-heading font-bold">Wybierz termin poniżej:</h3>
             </div>
             
             {/* Calendly Embed Placeholder */}
             <div className="w-full h-[600px] bg-slate-50 border-2 border-black flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
                <p className="text-slate-400 font-bold mb-4 z-10">Tu będzie Twój kalendarz (np. Calendly)</p>
             </div>
          </div>
        </div>
      )}

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default VSLFunnel;
