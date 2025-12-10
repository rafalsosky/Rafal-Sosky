
import React from 'react';
import { Compass, Map, AlertTriangle } from 'lucide-react';
import Button from './ui/Button';

type NotFoundPageProps = {
  onNavigate: (view: string) => void;
};

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden p-6">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Hazard Stripes Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)', opacity: 0.2 }}></div>

      <div className="relative z-10 w-full max-w-3xl">
        
        {/* Main Card */}
        <div className="bg-white border-2 border-black p-8 md:p-16 text-center shadow-[16px_16px_0px_0px_#000] relative">
          
          {/* Decorative Corner Icon */}
          <div className="absolute -top-6 -right-6 bg-yellow-400 border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000] rotate-12 hidden md:block">
            <AlertTriangle className="w-8 h-8 text-black" />
          </div>

          {/* The "404" Typography */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[120px] md:text-[180px] font-heading font-bold leading-none tracking-tighter text-black relative z-10">
              404
            </h1>
            {/* Yellow Strike-through / Highlight */}
            <div className="absolute top-1/2 left-0 w-[110%] h-8 bg-yellow-400 -translate-y-1/2 -translate-x-[5%] -rotate-3 border-2 border-black z-0"></div>
          </div>

          {/* Icon & Headline */}
          <div className="flex justify-center mb-6">
            <Compass className="w-16 h-16 text-slate-800 animate-pulse stroke-[1.5]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 leading-tight">
            Wygląda na to, że zgubiłeś drogę...<br/>
            <span className="text-slate-500">tak jak większość firm bez strategii.</span>
          </h2>

          <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Strona, której szukasz, nie istnieje. Ale Twoje problemy biznesowe są jak najbardziej realne. Wybierz mądrze kolejny krok.
          </p>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Secondary Action: Home (White bg, black text) */}
            <Button variant="outline" onClick={() => onNavigate('home')}>
              Wróć na właściwy tor (Home)
            </Button>
            
            {/* Primary Action: Consultation (Yellow bg, attention grabber) */}
            <Button variant="primary" onClick={() => onNavigate('funnel-step2')}>
              Zamiast błądzić, umów konsultację
            </Button>
          </div>

        </div>

        {/* Footer Code Decoration */}
        <div className="text-center mt-8 font-mono text-xs text-slate-400 uppercase tracking-widest">
          Error_Code: STRATEGY_NOT_FOUND
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
