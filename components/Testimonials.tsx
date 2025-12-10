
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Share2, Heart, ArrowLeft, Phone, Video } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="opinie" className="py-24 md:py-32 bg-slate-50 border-t border-black/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-[0.9] tracking-tighter">
              Nie wierz nam<br/>na słowo.
            </h2>
          </div>
        </div>

        {/* Masonry-style Grid of "Artifacts" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Artifact 1: Facebook Messenger Style (Patryk) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between"
          >
            {/* Fake Messenger Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden relative">
                   <img src="https://picsum.photos/id/1012/100/100" alt="Patryk" className="w-full h-full object-cover" />
                   <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                 </div>
                 <div>
                    <span className="font-bold text-sm text-slate-900 block leading-none">Patryk Antoniuk</span>
                    <span className="text-[10px] text-slate-400 font-medium">Messenger</span>
                 </div>
               </div>
            </div>

            {/* Message Body */}
            <div className="space-y-2 font-sans">
               <div className="flex gap-2 items-end">
                  <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    <img src="https://picsum.photos/id/1012/100/100" alt="Patryk" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#E4E6EB] text-slate-900 px-3 py-2 rounded-2xl rounded-bl-sm text-sm leading-snug max-w-[85%]">
                     Oferta poszła. Klient nawet nie negocjował. <span className="font-bold bg-yellow-200 px-1 rounded-sm">9k netto wpada na konto jutro.</span>
                  </div>
               </div>
               <div className="flex gap-2 items-end">
                  <div className="w-6 h-6 opacity-0 shrink-0"></div>
                  <div className="bg-[#E4E6EB] text-slate-900 px-3 py-2 rounded-2xl rounded-tl-sm rounded-bl-lg text-sm leading-snug max-w-[85%]">
                     To jest ten "spokój", o którym mówiłeś? Bo chyba zaczynam rozumieć 😎
                  </div>
               </div>
               <div className="text-right px-2">
                 <div className="w-4 h-4 rounded-full bg-slate-200 ml-auto overflow-hidden border border-white inline-block">
                    <img src="https://picsum.photos/600/700?grayscale" className="w-full h-full object-cover opacity-60" />
                 </div>
               </div>
            </div>
            
            <div className="mt-4 text-[10px] text-slate-300 text-center font-medium">Wtorek 14:32</div>
          </motion.div>

          {/* Artifact 2: Instagram DM Style (Marta) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-0 shadow-sm flex flex-col justify-start font-sans overflow-hidden"
          >
             {/* Instagram Header */}
             <div className="bg-white border-b border-slate-100 p-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                   <ArrowLeft className="w-5 h-5 text-black" />
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-100">
                         <img src="https://picsum.photos/id/64/100/100" alt="Marta" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-sm text-black">marta</span>
                   </div>
                </div>
                <div className="flex gap-4 text-black">
                   <Phone className="w-5 h-5" />
                   <Video className="w-5 h-5" />
                </div>
             </div>
             
             <div className="p-4 flex flex-col gap-4 bg-white h-full">
               
               {/* Me (Right) */}
               <div className="self-end max-w-[85%]">
                 <div className="bg-slate-100 text-black px-4 py-2.5 rounded-[20px] rounded-br-sm text-sm leading-snug mb-1">
                   I jak poszło wdrożenie tego nowego skryptu?
                 </div>
               </div>
               
               {/* Marta (Left) */}
               <div className="self-start max-w-[85%] flex gap-2 items-end group">
                 <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-1">
                    <img src="https://picsum.photos/id/64/100/100" alt="Marta" className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-1">
                    <div className="border border-slate-200 text-black px-4 py-2.5 rounded-[20px] rounded-bl-sm text-sm leading-snug">
                      W szoku jestem. 3 rozmowy, 2 zamknięte od razu. Trzecia osoba wraca w poniedziałek.
                    </div>
                    <div className="border border-slate-200 text-black px-4 py-2.5 rounded-[20px] rounded-tl-sm rounded-bl-[20px] text-sm font-bold leading-snug flex items-center gap-2">
                      Wcześniej zamykałam może 1 na 10. Dzięki! 🙏
                    </div>
                 </div>
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 mb-2">
                    <Heart className="w-4 h-4" />
                 </div>
               </div>
               
               <div className="text-right px-1 text-[10px] text-slate-400 font-medium mt-1">Wyświetlono</div>
             </div>
          </motion.div>

          {/* Artifact 3: Stripe Payment Notification */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-xl p-0 shadow-sm overflow-hidden flex flex-col"
          >
            {/* Stripe Header */}
            <div className="bg-[#635BFF] px-6 py-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor"><path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/></svg>
               </div>
               <div className="text-xs font-bold uppercase opacity-80 mb-1 tracking-wider">Płatność Zakończona</div>
               <div className="text-4xl font-bold tracking-tight font-sans">12,300.00 PLN</div>
            </div>
            
            {/* Details */}
            <div className="p-6">
               <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBFDFF] flex items-center justify-center border border-[#635BFF]/10">
                     <CheckCircle2 className="w-5 h-5 text-[#00D084]" />
                  </div>
                  <div>
                     {/* PRODUCT NAME */}
                     <p className="font-bold text-sm text-slate-900">Mentoring D.E.C.O.D.E.</p>
                     {/* CUSTOMER NAME */}
                     <p className="text-xs text-slate-500">od: Karolina Sadowska • przed chwilą</p>
                  </div>
               </div>
               <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600 border border-slate-100 italic leading-relaxed">
                  "Decyzja o podniesieniu cen była przerażająca, ale mieliście rację. Klient nawet nie mrugnął. Zwróciło się po 1 transakcji."
               </div>
            </div>
          </motion.div>
          
          {/* Artifact 4: Instagram DM Style (Tomasz) - UPDATED TEXT */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-transparent border-0 p-0 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
          >
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm w-full max-w-sm overflow-hidden font-sans">
               {/* Instagram Header */}
               <div className="bg-white border-b border-slate-100 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <ArrowLeft className="w-5 h-5 text-black" />
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-100">
                           <img src="https://picsum.photos/id/103/100/100" alt="Tomasz" className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <span className="font-bold text-sm text-black block leading-none">tomasz</span>
                           <span className="text-[10px] text-slate-400">Aktywny teraz</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-4 text-black">
                     <Phone className="w-5 h-5" />
                     <Video className="w-5 h-5" />
                  </div>
               </div>

               <div className="p-4 flex flex-col gap-3">
                 {/* Tomasz (Left) */}
                 <div className="self-start max-w-[90%] flex gap-2 items-end">
                   <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-1">
                      <img src="https://picsum.photos/id/103/100/100" alt="Tomasz" className="w-full h-full object-cover" />
                   </div>
                   <div className="border border-slate-200 text-black px-4 py-2.5 rounded-[20px] rounded-bl-sm text-sm leading-relaxed shadow-sm">
                      Rafał, mały update. Właśnie zamknęliśmy miesiąc. <strong>Przychód x2 rok do roku.</strong> 🚀
                   </div>
                 </div>

                 <div className="self-start max-w-[90%] flex gap-2 items-end">
                   <div className="w-7 h-7 opacity-0 shrink-0"></div>
                   <div className="border border-slate-200 text-black px-4 py-2.5 rounded-[20px] rounded-tl-sm rounded-bl-[20px] text-sm leading-relaxed shadow-sm">
                      Najważniejsze dla mnie jest to, że w końcu nie siedzę w papierach po nocach. Kalendarz poukładany, a system robi robotę. Dzięki!
                   </div>
                 </div>
               </div>

               <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mt-2">
                     <div className="h-8 w-full bg-slate-100 rounded-full px-4 flex items-center text-xs text-slate-400">
                        Napisz wiadomość...
                     </div>
                     <Heart className="w-6 h-6 text-black" />
                  </div>
               </div>

            </div>
          </motion.div>

          {/* Artifact 5: Quote Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-yellow-400 border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center relative md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-4 right-4 opacity-50"><MessageCircle className="w-8 h-8" /></div>
            <p className="font-heading font-bold text-xl md:text-2xl mb-4 leading-tight">
              "Najlepsza inwestycja w mój biznes od 5 lat. Koniec kropka."
            </p>
            <div className="flex items-center gap-3 mt-auto">
               <div className="w-8 h-8 rounded-full bg-black text-yellow-400 flex items-center justify-center font-bold text-xs">M</div>
               <div className="text-sm font-bold">Michał, CEO Software House</div>
            </div>
          </motion.div>

           {/* Artifact 6: Email Snippet */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
             <div className="border-b border-slate-100 pb-4 mb-4">
               <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Temat</div>
               <div className="font-bold text-slate-800">Re: Propozycja współpracy</div>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               "...przejrzałem ofertę i system, który zaprezentowałeś. Wygląda to bardzo solidnie. <span className="bg-green-100 text-green-800 px-1 font-medium">Akceptujemy warunki bez zmian.</span> Kiedy możemy wystartować?"
             </p>
             <div className="flex justify-between items-center mt-2">
               <span className="text-xs text-slate-400">Odebrano: Czwartek, 10:45</span>
               <Share2 className="w-4 h-4 text-slate-400 hover:text-black cursor-pointer" />
             </div>
          </motion.div>

        </div>
        
        <div className="mt-16 text-center">
           <p className="text-slate-500 mb-6">Dołącz do społeczności, która nie narzeka, tylko działa.</p>
           <button className="text-black font-bold border-b-2 border-black pb-0.5 hover:text-yellow-600 hover:border-yellow-600 transition-all">
             Zobacz więcej historii
           </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
