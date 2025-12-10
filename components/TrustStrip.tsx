
import React from 'react';
import { Users, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-5 h-5" />,
    value: "200+",
    label: "Konsultacji"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: "15k PLN",
    label: "Średni wzrost MRR"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    value: "16 Tygodni",
    label: "Do pełnego wdrożenia"
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    value: "Skuteczność",
    label: "Potwierdzona Wynikami"
  }
];

const TrustStrip: React.FC = () => {
  return (
    <section className="w-full border-b border-black/5 bg-slate-50/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-x border-slate-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center py-8 hover:bg-white transition-colors cursor-default group text-center px-2">
              <div className="flex items-center gap-2 mb-2 text-slate-400 group-hover:text-yellow-500 transition-colors">
                {stat.icon}
              </div>
              <span className="text-2xl md:text-3xl font-heading font-bold text-black tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
