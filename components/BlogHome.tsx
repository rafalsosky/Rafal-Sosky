
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Button from './ui/Button';

// Mock Data
const ARTICLES = [
  {
    id: 1,
    title: "Wielkie Kłamstwo Pasywnego Dochodu",
    category: "Mindset",
    date: "12 Sty 2024",
    readTime: "8 min",
    excerpt: "Wszyscy obiecują Ci zarabianie podczas snu, zanim jeszcze nauczysz się zarabiać po przebudzeniu. Zobacz, dlaczego 'pasywność' to pułapka dla początkujących.",
    image: "https://picsum.photos/id/48/800/600", // City/Architecture vibe
    slug: "passive-income-lie"
  },
  {
    id: 2,
    title: "Dlaczego Twoja oferta nie sprzedaje? (Proces D.E.C.O.D.E.)",
    category: "Strategia",
    date: "05 Sty 2024",
    readTime: "12 min",
    excerpt: "Twój produkt jest świetny, ale nikt go nie kupuje? Problem nie leży w cenie, ale w braku logicznego mostu między problemem klienta a Twoim rozwiązaniem.",
    image: "https://picsum.photos/id/20/800/600", // Work/Desk vibe
    slug: "offer-fix"
  },
  {
    id: 3,
    title: "Przestań być influencerem, zacznij być mentorem",
    category: "Biznes",
    date: "28 Gru 2023",
    readTime: "6 min",
    excerpt: "Lajki nie płacą rachunków. Zobacz jak zamienić próżne metryki na twardą walutę, budując autorytet, a nie tylko zasięgi.",
    image: "https://picsum.photos/id/3/800/600", // Tech/Data vibe
    slug: "influencer-vs-mentor"
  },
  {
    id: 4,
    title: "Skalowanie to pułapka (zanim nie zrobisz tego)",
    category: "Skalowanie",
    date: "15 Gru 2023",
    readTime: "10 min",
    excerpt: "Więcej leadów wrzuconych do dziurawego wiadra to nie wzrost, to szybsza śmierć biznesu. Sprawdź, czy Twój fundament wytrzyma napór klientów.",
    image: "https://picsum.photos/id/7/800/600", // Tech/Laptop
    slug: "scaling-trap"
  },
  {
    id: 5,
    title: "Doba ma 24h dla każdego. Dlaczego Ty nie masz czasu?",
    category: "Produktywność",
    date: "10 Gru 2023",
    readTime: "7 min",
    excerpt: "Jesteś CEO czy asystentką własnej asystentki? Jak przestać gasić pożary i zacząć budować straż pożarną we własnej firmie.",
    image: "https://picsum.photos/id/366/800/600", // Clock/Time
    slug: "productivity-myth"
  }
];

interface BlogHomeProps {
  onArticleSelect: (id: number) => void;
}

const BlogHome: React.FC<BlogHomeProps> = ({ onArticleSelect }) => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 bg-yellow-400 border-2 border-black text-xs font-bold uppercase tracking-widest mb-6 shadow-[4px_4px_0px_0px_#000]">
            Baza Wiedzy
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter leading-[0.9]">
            Brutalna Prawda <br/>o Biznesie
          </h1>
          <p className="text-xl text-slate-600 font-light">
            Żadnego lania wody. Konkretne strategie, analizy i systemy, które wdrożysz w 15 minut po przeczytaniu.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border-2 border-black flex flex-col h-full shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#FACC15] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => onArticleSelect(article.id)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-black">
                <div className="absolute top-4 left-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  {article.category}
                </div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-4 uppercase tracking-wide">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 leading-tight group-hover:text-yellow-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                  Czytaj dalej <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogHome;
