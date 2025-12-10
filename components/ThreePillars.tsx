
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="w-8 h-8" />,
    num: "01",
    title: "Oferta Nie Do Odrzucenia (High-Ticket)",
    desc: "Przestań konkurować ceną. Pakujemy Twoją wiedzę w ofertę premium (5k–20k), która jest tak logiczna dla klienta, że czuje się głupio, odmawiając. Przestajesz prosić, zaczynasz selekcjonować.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    num: "02",
    title: "Konwersja bez Wciskania",
    desc: "Zapomnij o 'technikach negocjacji'. Dostajesz gotowy skrypt rozmowy, który zmienia sprzedaż w diagnozę lekarską. Odsiewasz maruderów w 7 minut, a idealnych klientów zamykasz z łatwością, bez presji.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    num: "03",
    title: "Powtarzalny Strumień Leadów",
    desc: "Koniec ze spamowaniem zimnymi DM-ami i strzelaniem postami na oślep. Budujemy precyzyjny mechanizm, który dostarcza 'ogrzane' kontakty prosto do Twojego kalendarza. Zastępujemy chaos przewidywalnym procesem.",
  }
];

const ThreePillars: React.FC = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/2">
             <span className="inline-block py-1 px-3 bg-yellow-100 border border-yellow-400 text-yellow-800 font-bold text-xs uppercase tracking-widest mb-6 rounded-full">
               The Framework
             </span>
             <h2 className="text-5xl md:text-7xl font-heading font-bold leading-[0.95] tracking-tight">
                Rdzeń Systemu D.E.C.O.D.E.
             </h2>
          </div>
          <div className="lg:w-1/2 lg:pt-4">
             <p className="text-xl text-slate-600 leading-relaxed font-light">
                Nie potrzebujesz "więcej marketingu". Potrzebujesz tych trzech, zintegrowanych elementów, by przestać zgadywać i zacząć skalować.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col h-full bg-white p-8 rounded-2xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-200"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all border border-slate-100 group-hover:border-slate-200">
                  {item.icon}
                </div>
                <span className="text-6xl font-bold text-slate-100 font-heading group-hover:text-yellow-400/20 transition-colors select-none">
                  {item.num}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-heading group-hover:translate-x-1 transition-transform">{item.title}</h3>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-1 group-hover:text-slate-900 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
