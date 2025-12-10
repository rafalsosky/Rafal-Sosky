
import React from 'react';
import Button from './ui/Button';

interface AboutProps {
  onNavigate?: () => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="py-32 bg-white overflow-hidden border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          
          <div className="w-full lg:w-5/12 min-h-[500px] relative">
            {/* The Image Frame */}
            <div className="absolute inset-0 z-10 border-2 border-black bg-slate-200">
               <img 
                src="https://sosky.pl/images/Rafal-Sosky-opinie.webp" 
                alt="Rafał Sosky" 
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            {/* The Offset "Shadow" Block */}
            <div className="absolute top-6 left-6 w-full h-full bg-yellow-400 border-2 border-black z-0"></div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-12 pt-12 lg:pt-0">
            <h2 className="text-6xl font-heading font-bold mb-8 tracking-tighter">Hej, tu Rafał.</h2>
            <div className="space-y-6 text-xl md:text-2xl text-slate-800 font-light leading-relaxed">
              <p>
                Większość guru uczy Cię tak, jakbyś miał zostać influencerem: więcej rolek, więcej postów, walka o zasięgi.
              </p>
              <p>
                Łatwo im mówić – bo ich biznesem jest... uczenie o rolkach. Mają na to czas.
              </p>
              <p className="font-medium text-black">
                Ale zapominają o jednym: Ty nie jesteś influencerem. Masz biznes i klientów do obsłużenia.
              </p>
              
              <div className="bg-slate-50 p-8 border-l-4 border-black my-6">
                <p className="font-heading text-lg md:text-xl text-slate-700 italic">
                  "Ja nie uczę 'tańczyć pod algorytmy'. Wolę warsztat i konkrety. Ty masz wiedzę (paliwo). Ja dostarczam silnik (system), który zamienia tę wiedzę w zysk, bez siedzenia 24/7 na telefonie."
                </p>
              </div>
              
              <p>
                Zamiast lajków i chaosu – nudna, powtarzalna skuteczność finansowa:
                <span className="font-bold bg-yellow-200 mx-2 px-1 inline-block transform -rotate-1 border border-black/10 shadow-sm text-black">20–50 tys. miesięcznie.</span>
              </p>
            </div>
            
            <div className="mt-12">
              <div className="flex flex-col gap-4">
                 <Button variant="black" icon onClick={onNavigate}>ZOBACZ JAK WYGLĄDA WSPÓŁPRACA</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
