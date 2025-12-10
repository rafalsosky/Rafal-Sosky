
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import Button from './ui/Button';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <article className="bg-white min-h-screen relative pt-24 md:pt-32 pb-24">
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-yellow-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 hover:text-yellow-600 transition-colors"
        >
          <div className="p-2 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000]">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Wróć do listy
        </button>

        {/* Post Header */}
        <header className="max-w-4xl mb-16 border-l-4 border-yellow-400 pl-6 md:pl-10">
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            <span className="bg-slate-100 px-3 py-1 text-black">Mindset</span>
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> 12 Sty 2024</span>
            <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> 8 min czytania</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tighter mb-8">
            Wielkie Kłamstwo <br/>Pasywnego Dochodu
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
            Dlaczego szukanie "pieniędzy za nic" na początku drogi to najszybszy sposób na bankructwo? Brutalna analiza mitu.
          </p>
        </header>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Article Content */}
          <div className="lg:col-span-8 space-y-8 text-lg text-slate-800 leading-relaxed font-sans">
            <p className="font-medium text-2xl">
              Wyobraź sobie, że próbujesz zbudować dom, zaczynając od dachu. Brzmi absurdalnie? To dokładnie to, co robi 90% początkujących przedsiębiorców, marząc o "dochodzie pasywnym".
            </p>
            
            <p>
              Internet wmówił Ci, że sukces to picie drinka na Bali, podczas gdy pieniądze "same wpadają" na konto. Sprzedawcy marzeń pokazują Ci screenshoty z Stripe'a, ale zapominają dodać, że za tymi wynikami stoi 5 lat harówki po 12 godzin dziennie.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6 border-b-2 border-black pb-2 inline-block">
              Mit "Zarabiania podczas snu"
            </h2>
            
            <p>
              Prawda jest taka: <strong>Nie ma czegoś takiego jak dochód pasywny na starcie.</strong> Jest tylko dochód odroczony w czasie. Aby coś stało się pasywne, najpierw musi być ekstremalnie aktywne.
            </p>

            <div className="bg-yellow-50 border-2 border-black p-8 my-10 shadow-[8px_8px_0px_0px_#000]">
              <p className="font-heading text-xl font-bold italic mb-2">"System nie bierze się z powietrza."</p>
              <p className="text-slate-700">
                Musisz najpierw zbudować maszynę, naoliwić ją, naprawić 100 razy, a dopiero potem możesz zatrudnić operatora, który będzie wciskał przycisk za Ciebie.
              </p>
            </div>

            <p>
              Zamiast szukać magicznej pigułki, zadaj sobie pytanie: <span className="bg-yellow-200 px-1">Jaką wartość mogę dostarczyć aktywnie, za którą ktoś zapłaci mi dużo pieniędzy tu i teraz?</span>
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">
              Etapy Budowania Bogactwa (Prawdziwe)
            </h2>
            
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4 items-start">
                <div className="bg-black text-white font-bold w-8 h-8 flex items-center justify-center shrink-0">1</div>
                <div>
                  <strong className="block text-xl font-bold mb-1">Sprzedaż Czasu/Umiejętności (Freelance/Consulting)</strong>
                  Tutaj zarabiasz na chleb. Uczysz się rynku. Zderzasz się z rzeczywistością. To jest faza aktywna.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-black text-white font-bold w-8 h-8 flex items-center justify-center shrink-0">2</div>
                <div>
                  <strong className="block text-xl font-bold mb-1">Produktyzacja Usługi (Agency/Mentoring)</strong>
                  Zaczynasz tworzyć procedury. Zatrudniasz pierwszych ludzi. Twoja stawka godzinowa rośnie, bo sprzedajesz wynik, a nie czas.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-black text-white font-bold w-8 h-8 flex items-center justify-center shrink-0">3</div>
                <div>
                  <strong className="block text-xl font-bold mb-1">Budowa Aktywów (SaaS/Digital Products/Real Estate)</strong>
                  Dopiero tutaj, mając kapitał z punktu 1 i 2, inwestujesz w coś, co może działać bez Ciebie.
                </div>
              </li>
            </ul>

            <p className="mt-8">
              Jeśli przeskoczysz punkt 1 i 2, skończysz z kursem online, którego nikt nie kupuje, bo nie masz ani autorytetu, ani budżetu na reklamy.
            </p>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 relative">
             <div className="sticky top-32 space-y-8">
               
               {/* Author Box */}
               <div className="border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000]">
                  <div className="w-20 h-20 border-2 border-black mb-4 overflow-hidden">
                    <img src="https://picsum.photos/600/700?grayscale" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Autor</p>
                  <h4 className="text-xl font-bold font-heading mb-2">Rafał Sosky</h4>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Strateg biznesowy i mentor. Pomagam ekspertom zamienić wiedzę w skalowalny system sprzedaży high-ticket.
                  </p>
                  <div className="flex gap-2">
                    <button className="p-2 border border-black hover:bg-black hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                  </div>
               </div>

               {/* CTA Box */}
               <div className="bg-black text-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#FACC15]">
                 <h4 className="text-2xl font-bold font-heading text-yellow-400 mb-4">
                   Chcesz zbudować ten system?
                 </h4>
                 <p className="text-slate-300 text-sm mb-6">
                   Przestań czytać o biznesie, zacznij go robić. Sprawdźmy, co blokuje Twój wzrost.
                 </p>
                 <a href="#contact" className="block w-full text-center py-3 bg-yellow-400 text-black font-bold uppercase tracking-wide border-2 border-transparent hover:bg-white hover:border-white transition-all">
                   Umów Audyt 0 PLN
                 </a>
               </div>

             </div>
          </aside>

        </div>

        {/* Bottom CTA Area */}
        <div className="mt-24 bg-yellow-400 border-2 border-black p-12 text-center md:text-left shadow-[12px_12px_0px_0px_#000] relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-10 hidden md:block">
              <User className="w-64 h-64" />
           </div>
           <div className="relative z-10 max-w-2xl">
             <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
               Dość teorii. <br/>Czas na praktykę.
             </h3>
             <p className="text-lg font-medium mb-8">
               Czytanie artykułów daje dopaminę. Działanie daje pieniądze. Jeśli czujesz, że utknąłeś w miejscu, porozmawiajmy.
             </p>
             <Button variant="black" icon onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                WYPEŁNIJ FORMULARZ ZGŁOSZENIOWY
             </Button>
           </div>
        </div>

      </div>
    </article>
  );
};

export default BlogPost;