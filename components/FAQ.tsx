
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    question: "Czy dam radę, jeśli mam mało czasu?", 
    answer: "Wymagamy 8h tygodniowo w fazie wdrożenia. Jeśli nie masz tyle czasu na rozwój firmy, to znaczy, że jesteś więźniem własnego biznesu i potrzebujesz nas bardziej niż myślisz." 
  },
  { 
    question: "Czy ten system działa w mojej branży?", 
    answer: "Jeśli sprzedajesz wiedzę, usługi lub transformację (B2B/Consulting) – TAK. Nie działamy z e-commerce (sklepy) i średnimi firmami (kilka osób decyzyjnych). Jeśli Twoim problemem jest pozyskiwanie klientów i niskie stawki, mechanizm jest ten sam, niezależnie czy jesteś trenerem, coachem czy doradcą." 
  },
  { 
    question: "Jak szybko zobaczę wyniki?", 
    answer: "Program mentoringowy trwa 16 tygodni, ale nie czekamy do końca na efekty. Celem jest zwrot z inwestycji w pierwsze 30 dni. Pierwsze 'wąskie gardło' odtykamy zazwyczaj w 7 dni po audycie. To sprint, a potem maraton stabilizacji." 
  },
  { 
    question: "Co, jeśli już mam ofertę i klientów?", 
    answer: "To idealna sytuacja. Nie musimy budować od zera – wlejemy paliwo do gotowego silnika. Skupimy się na podniesieniu cen (pricing i margin optimization) i stabilnym systemie pozyskiwania leadów, żebyś zarabiał 2x więcej przy tym samym nakładzie pracy." 
  },
  {
    question: "Czy to kolejny kurs online do oglądania?",
    answer: "Nie. To mentoring wdrożeniowy. Otrzymujesz dostęp do materiałów, ale kluczem jest bezpośrednia współpraca: cotygodniowe audyty Twojej pracy i sesje 1:1. Nie jestem Twoim 'kołczem', jestem Twoim Partnerem Operacyjnym. Ty prowadzisz biznes, ja dostarczam mapę i usuwam przeszkody z drogi."
  },
  {
    question: "Co się stanie, jeśli to u mnie nie zadziała?",
    answer: "System D.E.C.O.D.E. jest oparty na liczbach, nie na szczęściu. Jeśli wdrożysz wszystkie wytyczne (zrobisz Audyt, poprawisz Ofertę, wykonasz zadaną liczbę aktywności) i nie pozyskasz żadnego klienta – wtedy usiądziemy i naprawimy to osobiście."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-slate-50 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-5xl font-heading font-bold mb-16 text-center">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div 
              key={idx} 
              className={`border-2 transition-all duration-300 ${
                openIndex === idx 
                ? 'bg-white border-black shadow-[8px_8px_0px_0px_#000] -translate-y-1' 
                : 'bg-white border-slate-200 hover:border-black hover:shadow-[4px_4px_0px_0px_#000]'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left outline-none"
              >
                <span className={`font-bold text-xl font-heading pr-8 ${openIndex === idx ? 'text-black' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                {openIndex === idx 
                  ? <div className="bg-black text-white p-1 shrink-0"><Minus className="w-4 h-4" /></div> 
                  : <div className="bg-slate-200 p-1 shrink-0"><Plus className="w-4 h-4" /></div>
                }
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 pt-0 text-slate-600 text-lg leading-relaxed border-t border-dashed border-slate-300 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
