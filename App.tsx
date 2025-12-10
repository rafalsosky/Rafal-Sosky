
import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Calendar, X } from 'lucide-react';
import Hero from './components/Hero';
import ThreePillars from './components/ThreePillars';
import BeforeAfter from './components/BeforeAfter';
import DecodeProcess from './components/DecodeProcess';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import ROICalculator from './components/ROICalculator';
import WhoNotFor from './components/WhoNotFor';
import About from './components/About';
import CallRoadmap from './components/CallRoadmap';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Newsletter from './components/Newsletter';
import Marquee from './components/ui/Marquee';
import TrustStrip from './components/TrustStrip';
import ScrollProgress from './components/ui/ScrollProgress';
import ExitIntentModal from './components/ui/ExitIntentModal';
import WorkshopModal from './components/ui/WorkshopModal';
import BookingPopup from './components/BookingPopup';
import CookieBanner from './components/ui/CookieBanner';
import Logo from './components/ui/Logo';
import BlogHome from './components/BlogHome';
import BlogPost from './components/BlogPost';
import VSLFunnel from './components/VSLFunnel';
import ThankYou from './components/ThankYou';
import NotFoundPage from './components/NotFoundPage';
import C1BookingPage from './components/C1BookingPage';
import C2ThankYouCall from './components/C2ThankYouCall';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import BackToTop from './components/ui/BackToTop';
import WorkshopPage from './components/WorkshopPage';

// Defines all possible states of the application view
type ViewState = 'home' | 'blog-list' | 'blog-post' | 'funnel-step1' | 'funnel-step2' | 'thank-you' | '404' | 'c1' | 'c2' | 'terms' | 'privacy' | 'workshop';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hideStickyButton, setHideStickyButton] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  // State to remember where to go back to from legal pages
  const [returnView, setReturnView] = useState<ViewState>('home');
  
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // GLOBAL BOOKING POPUP STATE
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
  
  // "Funnel Mode" hides standard navigation and footer to focus user on the conversion goal
  const isFunnelMode = ['funnel-step1', 'funnel-step2', 'thank-you', '404', 'c1', 'c2', 'terms', 'privacy', 'workshop'].includes(currentView);
  
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);

  // --- ROUTING LOGIC ---

  // 1. Initialize view from URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as ViewState;
    if (viewParam && ['home', 'blog-list', 'blog-post', 'funnel-step1', 'funnel-step2', 'thank-you', 'c1', 'c2', 'terms', 'privacy', 'workshop'].includes(viewParam)) {
      setCurrentView(viewParam);
    }
  }, []);

  // 2. Handle Browser Back/Forward Buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = (params.get('view') as ViewState) || 'home';
      setCurrentView(view);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 3. Navigation Helper that updates URL
  const navigateTo = (view: ViewState) => {
    // Smart Return Logic: If going to legal page, save current view (unless we are already on a legal page)
    if ((view === 'terms' || view === 'privacy') && !['terms', 'privacy'].includes(currentView)) {
      setReturnView(currentView);
    }

    setCurrentView(view);
    setIsMobileMenuOpen(false);
    
    // Update URL without reload - Wrapped in try/catch to prevent SecurityError in sandbox/blobs
    try {
      const newUrl = view === 'home' ? window.location.pathname : `?view=${view}`;
      window.history.pushState({}, '', newUrl);
    } catch (e) {
      // Ignore error in environments that restrict history API (like some previews)
      console.warn("History API update skipped due to environment restrictions.");
    }
    
    window.scrollTo(0, 0);
  };

  // Helper to scroll to specific section (handling view change if needed)
  const handleScrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (currentView !== 'home') {
      navigateTo('home');
      // Delay to allow render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0,0);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo(0,0);
      }
    }
  };

  const handleOpenPopup = () => {
    setIsBookingPopupOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleBookingSubmit = (email: string) => {
    // In a real app, capture email here
    console.log("Booking email captured:", email);
    setIsBookingPopupOpen(false);
    navigateTo('c1');
  };
  
  const handleScrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Handle successful workshop opt-in -> redirect to Workshop Page
  const handleWorkshopSubmit = (email: string) => {
    console.log("Workshop email captured:", email);
    setIsWorkshopModalOpen(false);
    navigateTo('workshop');
  }

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    const updateMousePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If Footer is intersecting, hide the sticky button
        setHideStickyButton(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  // --- RENDER ROUTING ---
  
  // Booking Flow Steps
  if (currentView === 'c1') {
    return (
      <C1BookingPage 
        onNavigate={(view) => navigateTo(view as ViewState)} 
        onOpenTerms={() => navigateTo('terms')}
        onOpenPrivacy={() => navigateTo('privacy')}
      />
    );
  }
  
  if (currentView === 'c2') {
    return <C2ThankYouCall onNavigate={(view) => navigateTo(view as ViewState)} />;
  }

  // Workshop Page (Dedicated VSL)
  if (currentView === 'workshop') {
    return (
      <>
        <WorkshopPage 
          onBooking={handleOpenPopup} 
          onNavigateHome={() => navigateTo('home')} 
        />
        {/* Booking Popup needs to be available here too */}
        <BookingPopup 
          isOpen={isBookingPopupOpen}
          onClose={() => setIsBookingPopupOpen(false)}
          onSubmit={handleBookingSubmit}
        />
      </>
    );
  }

  // Legal Pages - Using Smart Return
  if (currentView === 'terms') {
    return <Terms onBack={() => navigateTo(returnView)} />;
  }

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => navigateTo(returnView)} />;
  }

  // Fallback / Main Render
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-400 selection:text-black font-sans relative flex flex-col">
      
      {/* Show Progress & Exit Intent only on standard content pages */}
      {!isFunnelMode && <ScrollProgress />}
      {!isFunnelMode && <ExitIntentModal />}
      
      {/* Cookie Banner */}
      <CookieBanner />
      
      {/* Back To Top - Desktop Only */}
      <BackToTop />
      
      {/* Global Modals */}
      <WorkshopModal 
        isOpen={isWorkshopModalOpen} 
        onClose={() => setIsWorkshopModalOpen(false)}
        onSubmit={handleWorkshopSubmit}
      />
      
      {/* GLOBAL BOOKING POPUP - Renders over everything */}
      <BookingPopup 
        isOpen={isBookingPopupOpen}
        onClose={() => setIsBookingPopupOpen(false)}
        onSubmit={handleBookingSubmit}
      />

      {/* Global Noise Overlay */}
      <div className="bg-noise"></div>

      {/* --- NAVIGATION --- */}
      
      {/* A) Standard Navigation (Home & Blog) */}
      {!isFunnelMode && (
        <nav className="fixed top-6 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto bg-white/90 backdrop-blur-xl border border-black/5 shadow-xl rounded-2xl px-3 py-2.5 flex items-center gap-2 md:gap-8 transition-all hover:scale-[1.01]">
            <div className="px-3 cursor-pointer" onClick={() => navigateTo('home')}>
              <Logo className="h-6 w-auto" />
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <button onClick={() => handleScrollToSection('proces')} className="px-4 py-2 text-sm font-medium hover:bg-slate-50 rounded-lg text-slate-600 hover:text-black">
                DECODE
              </button>
              <button onClick={() => handleScrollToSection('opinie')} className="px-4 py-2 text-sm font-medium hover:bg-slate-50 rounded-lg text-slate-600 hover:text-black">
                Opinie
              </button>
            </div>

            <button 
              onClick={handleOpenPopup}
              className="hidden md:inline-flex px-5 py-2.5 text-sm font-heading font-bold bg-black text-white rounded-xl border border-black hover:bg-neutral-800 shadow-sm transition-transform active:scale-95"
            >
              Umów rozmowę
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      )}

      {/* B) Minimal Funnel Navigation (Logo Only) - Non-clickable, Smaller */}
      {isFunnelMode && currentView !== '404' && currentView !== 'workshop' && (
        <header className="absolute top-0 left-0 w-full p-6 flex justify-center z-50 pointer-events-none">
          {/* Logo is visual only, no navigation */}
          <div className="opacity-90">
             <Logo className="h-6" />
          </div>
        </header>
      )}

      {/* C) MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && !isFunnelMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col font-sans"
          >
            {/* Mobile Menu Header */}
            <div className="px-6 py-6 border-b border-black/10 flex justify-between items-center bg-white">
               <div onClick={() => { setIsMobileMenuOpen(false); navigateTo('home'); }}>
                 <Logo className="h-6" />
               </div>
               <button 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="p-2 bg-slate-100 rounded-lg border border-slate-200"
               >
                 <X className="w-6 h-6 text-black" />
               </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
               <button 
                 onClick={() => handleScrollToSection('proces')}
                 className="text-3xl font-heading font-bold uppercase tracking-tight hover:text-yellow-500 transition-colors"
               >
                 DECODE
               </button>
               <button 
                 onClick={() => handleScrollToSection('opinie')}
                 className="text-3xl font-heading font-bold uppercase tracking-tight hover:text-yellow-500 transition-colors"
               >
                 Opinie
               </button>
               <button 
                 onClick={() => navigateTo('blog-list')}
                 className="text-3xl font-heading font-bold uppercase tracking-tight hover:text-yellow-500 transition-colors"
               >
                 Baza Wiedzy
               </button>
               
               <div className="w-12 h-1 bg-yellow-400 my-4"></div>

               <button 
                  onClick={handleOpenPopup}
                  className="w-full max-w-xs bg-black text-white py-4 font-bold uppercase tracking-wide border-2 border-black shadow-[4px_4px_0_0_#FACC15] active:translate-y-1 active:shadow-none transition-all"
                >
                  Umów rozmowę
                </button>
            </div>
            
            <div className="p-6 text-center text-xs text-slate-400 font-medium uppercase tracking-widest border-t border-black/10">
              Twórz. Zarabiaj. Zdominuj.
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --- MAIN CONTENT AREA --- */}
      <main className="relative z-10 bg-white shadow-2xl flex-1 flex flex-col">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.15]"
          style={{ maskImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)` }}>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          
          {/* VIEW: HOME PAGE */}
          {currentView === 'home' && (
            <>
              {/* Connected Global Popup to Hero Button AND ScrollToVideo */}
              <Hero 
                onBooking={handleOpenPopup} 
                onScrollToVideo={handleScrollToVideo}
              />
              <TrustStrip />
              <Marquee />
              <Comparison />
              <Testimonials />
              <ThreePillars />
              <div id="proces"><DecodeProcess /></div>
              
              {/* Connected Global Popup to BeforeAfter (Dla kogo) */}
              <BeforeAfter onBooking={handleOpenPopup} />
              
              <ROICalculator onBooking={handleOpenPopup} />
              <About onNavigate={() => navigateTo('funnel-step1')} />
              <WhoNotFor />
              
              {/* Wrapped in ForwardRef for scrolling */}
              <Newsletter 
                ref={videoSectionRef}
                onOpenModal={() => setIsWorkshopModalOpen(true)} 
              />
              
              <FAQ />
              <CallRoadmap />
              <div ref={ctaRef} id="contact">
                {/* Connected Global Popup to FooterCTA */}
                <FooterCTA 
                  onOpenBlog={() => navigateTo('blog-list')} 
                  onBooking={handleOpenPopup}
                  onOpenTerms={() => navigateTo('terms')}
                  onOpenPrivacy={() => navigateTo('privacy')}
                />
              </div>
            </>
          )}

          {/* VIEW: BLOG LIST */}
          {currentView === 'blog-list' && (
            <>
              <BlogHome onArticleSelect={() => navigateTo('blog-post')} />
              <FooterCTA 
                onOpenBlog={() => navigateTo('blog-list')} 
                onBooking={handleOpenPopup} 
                onOpenTerms={() => navigateTo('terms')}
                onOpenPrivacy={() => navigateTo('privacy')}
              />
            </>
          )}

          {/* VIEW: SINGLE POST */}
          {currentView === 'blog-post' && (
            <>
              <BlogPost onBack={() => navigateTo('blog-list')} />
              <FooterCTA 
                onOpenBlog={() => navigateTo('blog-list')} 
                onBooking={handleOpenPopup} 
                onOpenTerms={() => navigateTo('terms')}
                onOpenPrivacy={() => navigateTo('privacy')}
              />
            </>
          )}

          {/* VIEW: FUNNEL STEP 1 (Opt-in) */}
          {currentView === 'funnel-step1' && (
            <VSLFunnel 
              step={1} 
              onNext={() => navigateTo('funnel-step2')} 
              onOpenTerms={() => navigateTo('terms')}
              onOpenPrivacy={() => navigateTo('privacy')}
            />
          )}

          {/* VIEW: FUNNEL STEP 2 (VSL + Calendar) */}
          {currentView === 'funnel-step2' && (
            <VSLFunnel 
              step={2} 
              onNext={() => navigateTo('thank-you')} 
              onOpenTerms={() => navigateTo('terms')}
              onOpenPrivacy={() => navigateTo('privacy')}
            />
          )}

          {/* VIEW: THANK YOU */}
          {currentView === 'thank-you' && (
            <ThankYou onGoHome={() => navigateTo('home')} />
          )}

          {/* VIEW: 404 NOT FOUND */}
          {currentView === '404' && (
            <NotFoundPage onNavigate={(view) => navigateTo(view as ViewState)} />
          )}

        </div>
      </main>

      {/* --- STICKY MOBILE CTA (Home Only) --- */}
      <AnimatePresence>
        {/* Only show if: Sticky is NOT hidden (by footer) AND user has scrolled past hero AND not in funnel mode */}
        {!hideStickyButton && scrolledPastHero && !isFunnelMode && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-4 right-4 z-[70] md:hidden"
          >
            <button 
              onClick={handleOpenPopup}
              className="w-full bg-black text-white font-heading font-bold py-4 rounded-xl shadow-[4px_4px_0px_0px_#FACC15] flex items-center justify-center gap-3 border-2 border-black active:translate-y-1 active:shadow-none transition-all"
            >
              <Calendar className="w-5 h-5 text-yellow-400" /> Umów 7-min. rozmowę
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};
export default App;
