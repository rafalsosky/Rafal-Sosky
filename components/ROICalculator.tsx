import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

interface ROICalculatorProps {
  onBooking?: () => void;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ onBooking }) => {
  const [currentRev, setCurrentRev] = useState(5000);
  const [goalRev, setGoalRev] = useState(20000);
  const [yearlyLoss, setYearlyLoss] = useState(0);

  useEffect(() => {
    // Calculate monthly gap multiplied by 12
    const gap = Math.max(0, goalRev - currentRev);
    setYearlyLoss(gap * 12);
  }, [currentRev, goalRev]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-24 bg-white border-b border-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Ile kosztuje Cię<br/>brak decyzji?
            </h2>
            <p className="text-slate-500">
              Większość osób boi się inwestycji w rozwój. Ale rzadko liczą, ile pieniędzy tracą każdego miesiąca, tkwiąc w obecnym punkcie. Sprawdź swoje liczby.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#000]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Sliders */}
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-sm uppercase tracking-wide">Obecny Przychód (miesięcznie)</label>
                    <span className="font-mono font-bold bg-white px-2 py-1 border border-black">{formatCurrency(currentRev)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="50000" 
                    step="1000"
                    value={currentRev}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentRev(val);
                      if (val > goalRev) setGoalRev(val);
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-sm uppercase tracking-wide text-yellow-600">Cel Finansowy (miesięcznie)</label>
                    <span className="font-mono font-bold bg-yellow-100 px-2 py-1 border border-black">{formatCurrency(goalRev)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="5000" 
                    max="100000" 
                    step="1000"
                    value={goalRev}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val >= currentRev) setGoalRev(val);
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                </div>
              </div>

              {/* Result */}
              <div className="flex flex-col justify-center items-center text-center border-l-0 md:border-l border-slate-200 pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 mt-0">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Roczny Koszt Zaniechania</p>
                <motion.div 
                  key={yearlyLoss}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-6xl font-heading font-bold text-red-500 mb-2"
                >
                  {formatCurrency(yearlyLoss)}
                </motion.div>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">
                  Tyle pieniędzy zostawiasz na stole co roku, nie mając skutecznego systemu sprzedaży.
                </p>
              </div>
            </div>

            <div className="text-center">
               {/* Scarcity Alert Block */}
               <div className="mb-8 max-w-lg mx-auto bg-yellow-100 border border-yellow-400 p-4 rounded-lg">
                  <p className="text-sm text-yellow-900 leading-snug">
                     <span className="font-bold uppercase tracking-wide text-black mr-2">Uwaga:</span> 
                     Ze względu na intensywny charakter pracy 1:1, przyjmuję maksymalnie <span className="font-bold text-black border-b border-black">6 nowych osób</span> w tym miesiącu. Decyduje kolejność zgłoszeń.
                  </p>
               </div>

               <Button variant="black" className="w-full md:w-auto" onClick={onBooking}>
                 Zatrzymaj straty – Umów rozmowę
               </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;