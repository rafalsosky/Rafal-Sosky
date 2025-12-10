import React from 'react';

const Marquee: React.FC = () => {
  const content = [
    "D.E.C.O.D.E.", "SYSTEM", "STRATEGIA", "WYNIKI", "SKALOWANIE", "MENTORING", "AUTOMATYZACJA", "20-50K MIESIĘCZNIE"
  ];

  return (
    <div className="w-full bg-yellow-400 py-3 border-y border-black overflow-hidden relative z-20">
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {content.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-xl md:text-2xl font-bold font-heading uppercase tracking-wider mx-6 text-black">
                  {item}
                </span>
                <span className="w-2 h-2 bg-black rounded-full"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;