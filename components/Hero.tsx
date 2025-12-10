
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from './ui/Button';

interface HeroProps {
  onBooking?: () => void;
  onScrollToVideo?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBooking, onScrollToVideo }) => {
  // Staggered Text Container Variant
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      } 
    }
  };

  // Specific IDs for realistic face images
  const faceImages = [
    "https://picsum.photos/id/64/100/100", // Woman
    "https://picsum.photos/id/91/100/100", // Woman
    "https://picsum.photos/id/103/100/100", // Man
    "https://picsum.photos/id/177/100/100"  // Person
  ];

  return (
    <section id="start" className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-black/10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="inline-flex items-center justify-center lg:justify-start mb-8">
                 <div className="inline-flex items-center border border-black bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#000000]">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Mentoring dla twórców i solobiznesów
                  </span>
                </div>
              </motion.div>

              {/* H1 with Fluid Typography */}
              <h1 className="text-fluid-h1 font-heading font-bold leading-[0.9] tracking-tighter mb-8 text-black flex flex-col items-center lg:items-start">
                <motion.span variants={item}>Zbuduj.</motion.span>
                <motion.span variants={item} className="inline-block overflow-visible py-2">
                   <span className="text-yellow-400 bg-black px-2 inline-block transform -rotate-1 origin-center">
                     Zarabiaj.
                   </span>
                </motion.span>
                <motion.span variants={item}>Zdominuj.</motion.span>
              </h1>
              
              <motion.p 
                variants={item}
                className="text-2xl md:text-3xl text-slate-900 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-4 border-yellow-400 pl-6"
              >
                Zamień wiedzę w system, który generuje stabilne <span className="font-bold bg-yellow-200 mx-2 px-1 inline-block transform -rotate-1 border border-black/10 shadow-sm text-black">20–50 tys. miesięcznie.</span> 
                <br className="hidden md:block"/>Bez chaosu. Bez presji.
              </motion.p>

              <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                {/* Primary Action: Call (Yellow) */}
                <Button variant="primary" icon shine onClick={onBooking}>
                  UMÓW 7-MIN ROZMOWĘ
                </Button>
                
                {/* Secondary Action: Video (Outline) - Scrolls to video using Ref */}
                <Button variant="outline" onClick={onScrollToVideo}>
                  ZOBACZ WARSZTAT WIDEO
                </Button>
              </motion.div>
              
              <motion.div variants={item} className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                 <div className="flex -space-x-3">
                   {faceImages.map((src, i) => (
                     <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-transform">
                       <img src={src} alt="user" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                     </div>
                   ))}
                 </div>
                 <div className="text-sm font-medium leading-tight">
                   <span className="block font-bold">200+ konsultacji</span>
                   <span className="text-slate-500">przeprowadzonych z ekspertami</span>
                 </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Block - "The Card" */}
          <motion.div 
            initial={{ opacity: 0, x: 20, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-md lg:max-w-lg perspective-1000"
          >
            <div className="relative z-10 bg-white border-2 border-black p-3 shadow-[16px_16px_0px_0px_#000000]">
               <div className="bg-slate-100 border border-black/10 aspect-[4/5] relative overflow-hidden group">
                 <img 
                   src="https://sosky.pl/images/Rafal-Sosky.webp?v=3" 
                   alt="Rafał Sosky" 
                   className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 will-change-transform group-hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-6 text-white border-t-2 border-yellow-400">
                   <p className="font-heading font-bold text-xl mb-1">Rafał</p>
                   <p className="text-slate-300 text-sm font-mono">MENTOR & STRATEG</p>
                 </div>
               </div>
            </div>
            
            {/* Abstract Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 border-2 border-black -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-slate-200 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
