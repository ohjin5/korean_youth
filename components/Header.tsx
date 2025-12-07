import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0B101A]">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Deep Navy Base */}
        <div className="absolute inset-0 bg-[#0B101A]" />
        
        {/* Central Spotlight/Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1a233a] rounded-full blur-[100px] opacity-60" />

        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-40 bg-[url('/img/bg_stardust.svg')] bg-cover mix-blend-screen"></div>
        
        {/* Decorative Corner: Top Left Branch/Cloud */}
        <svg className="absolute top-0 left-0 w-64 h-64 text-white/10 pointer-events-none transform -translate-x-10 -translate-y-10" viewBox="0 0 200 200" fill="currentColor">
           <path d="M40 80 Q60 20 120 40 T180 80" stroke="currentColor" strokeWidth="2" fill="none" />
           <path d="M20 120 Q50 60 100 100" stroke="currentColor" strokeWidth="1" fill="none" />
           <circle cx="150" cy="50" r="2" fill="currentColor" className="text-gold/40" />
           <circle cx="120" cy="80" r="1.5" fill="currentColor" className="text-gold/40" />
           <path d="M0 0 L100 0 L0 100 Z" fill="url(#grad1)" opacity="0.1" />
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" style={{stopColor:'white', stopOpacity:1}} />
               <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
             </linearGradient>
           </defs>
        </svg>

        {/* Decorative Corner: Bottom Right */}
        <svg className="absolute bottom-0 right-0 w-80 h-80 text-white/5 pointer-events-none transform translate-x-10 translate-y-10 rotate-180" viewBox="0 0 200 200" fill="currentColor">
           <path d="M0 0 L150 50 L50 150 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* 2. The Arch Frame (Mimicking the poster) */}
      <div className={`absolute inset-6 md:inset-10 z-10 border border-gold/30 rounded-t-[100px] md:rounded-t-[180px] border-b-0 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Inner glow line */}
        <div className="absolute inset-[2px] border border-white/10 rounded-t-[98px] md:rounded-t-[178px] border-b-0"></div>
      </div>

      {/* 3. Content */}
      <div className={`relative z-20 text-center px-6 transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gold/70 text-xs md:text-sm tracking-[0.4em] mb-6 uppercase font-light">
          The 1st Concert
        </p>
        
        <div className="text-white/90 font-serif">
          <span className="block text-xl md:text-2xl mb-2 font-light tracking-widest text-white/80">2025</span>
          
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            <span className="block text-xl md:text-3xl mb-3 text-white/90 font-normal tracking-wide">천안청소년</span>
            <span className="block text-2xl md:text-4xl mb-3 font-medium">국악관현악단</span>
            <span className="block text-4xl md:text-6xl mt-6 text-white text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
              창단연주회
            </span>
          </h1>
        </div>

        {/* Conductor Info */}
        <div className="mb-12 mt-8 animate-fade-in-up delay-300">
           <span className="text-lg md:text-xl text-gold/80 font-serif font-light px-4 py-1 border-y border-gold/20">
             지휘 <span className="font-bold text-white ml-2">박상진</span>
           </span>
        </div>

        {/* Date & Location */}
        <div className="flex flex-col items-center gap-3 text-white/80 tracking-widest font-light text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gold" />
            <span>2025. 12. 13 (토) 오후 5시</span>
          </div>
          <span className="w-8 h-px bg-white/20 my-1"></span>
          <span className="text-white/60">천안시청소년복합커뮤니티센터 대공연장</span>
        </div>
      </div>
      
      {/* 4. Bottom Logo (Wide Format) */}
      <div className={`absolute bottom-[30px] left-1/2 -translate-x-1/2 z-30 transition-opacity duration-1000 delay-500 w-full flex justify-center ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="img/logo.png" 
          alt="천안시청소년재단 천안시청소년복합커뮤니티센터 로고" 
          className="header-logo w-auto max-w-[50%] h-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B101A] to-transparent z-10 pointer-events-none"></div>
    </header>
  );
};

export default Header;