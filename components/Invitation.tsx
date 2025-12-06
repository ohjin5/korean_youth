import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Ticket } from 'lucide-react';

const Invitation: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-[#F9F8F5] relative overflow-hidden">
      {/* Background Texture (Updated to local path: /img/bg_paper.svg) */}
      <div className="absolute inset-0 opacity-60 bg-[url('/img/bg_paper.svg')] pointer-events-none bg-repeat"></div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <ScrollReveal>
          {/* Decorative Top Icon */}
          <div className="flex justify-center mb-8 opacity-40">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a88d57" strokeWidth="1">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a233a] mb-12 leading-snug tracking-tight">
            창단연주회에<br />
            초대합니다
          </h2>
          
          <div className="space-y-8 text-[#555] text-base md:text-lg leading-[2.3] font-serif font-light break-keep">
            <p>
              이번 연주회는 청소년들이 국악의 아름다움을 배우며<br />
              한 해 동안 갈고닦은 열정과 성장을 담아<br />
              선보이는 첫 무대입니다.
            </p>
            <p>
              바쁘시더라도 부디 자리를 빛내 주시어<br />
              뜻깊은 창단연주회의 순간을 함께해 주시고<br />
              따뜻한 격려와 응원을 보내주시기 바랍니다.<br />
              감사합니다.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
               <span className="text-stone-500 text-sm tracking-wide mb-2">천안시청소년복합커뮤니티센터 관장</span>
               <div className="flex items-baseline gap-2">
                 <span className="text-[#1a233a] font-bold text-xl tracking-wider">윤 여 숭</span>
                 <span className="text-stone-400 text-sm font-normal">올림</span>
               </div>
            </div>
            
            <div className="w-8 h-px bg-gold/30"></div>

            <div className="flex flex-col items-center">
               <span className="text-stone-500 text-sm tracking-wide mb-2">천안청소년국악관현악단 지휘자</span>
               <div className="flex items-baseline gap-2">
                 <span className="text-[#1a233a] font-bold text-xl tracking-wider">박 상 진</span>
                 <span className="text-stone-400 text-sm font-normal">올림</span>
               </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-20 flex justify-center w-full">
            <a 
              href="https://naver.me/xLsdnaeC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#1e293b] text-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-[#283650] transition-all duration-300 w-full max-w-xs"
            >
              {/* Gold Accent Ring */}
              <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-gold/50 transition-colors"></div>
              
              <Ticket className="text-gold group-hover:scale-110 transition-transform" size={20} />
              <span className="text-lg font-bold tracking-wide">관람석 사전신청 바로가기</span>
            </a>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default Invitation;
