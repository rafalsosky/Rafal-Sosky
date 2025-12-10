
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

interface ThankYouProps {
  onGoHome: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-6 py-12">
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_#000] mb-8">
        <CheckCircle2 className="w-12 h-12 text-white" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
        Termin Potwierdzony!
      </h1>
      
      <div className="max-w-xl mx-auto mb-12 text-slate-800 text-lg leading-relaxed">
        <p className="mb-6 font-medium">
          Sprawdź swoją skrzynkę mailową — wysłaliśmy potwierdzenie i link do spotkania.
        </p>
        
        <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] text-left">
          <p className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-500">
            Zrób proszę dwie rzeczy, dzięki którym rozmowa będzie dla Ciebie bardziej wartościowa:
          </p>
          <ol className="list-decimal list-inside space-y-3 font-medium">
            <li className="pl-2">
              <span className="font-bold bg-yellow-100 px-1">Obejrzyj materiał</span>, jeśli jeszcze go nie obejrzałeś.
            </li>
            <li className="pl-2">
              <span className="font-bold bg-yellow-100 px-1">Dodaj spotkanie do kalendarza</span>, żeby nic Ci nie umknęło.
            </li>
          </ol>
        </div>
      </div>
      
      <Button variant="black" onClick={onGoHome}>
        Wróć na stronę główną
      </Button>
    </div>
  );
};

export default ThankYou;
