import React from 'react';
import ScrollReveal from './ScrollReveal';

const Program: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F8F5] relative">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Program</span>
            <h2 className="text-3xl font-bold text-navy">공연 순서</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 transform -translate-x-1/2"></div>

          {/* Part 1 */}
          <ScrollReveal delay={100} direction="up">
            <div className="flex flex-col h-full">
              <div className="mb-8 text-center md:text-left">
                <span className="inline-block py-1 px-4 border border-navy/20 rounded-full text-navy font-serif font-bold text-lg bg-white shadow-sm">
                  1부
                </span>
              </div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-baseline justify-between border-b border-stone-200/60 pb-3 group">
                  <h4 className="text-gold font-bold text-lg w-24 shrink-0 font-serif">거문고</h4>
                  <p className="text-navy-deep text-right font-medium group-hover:text-gold transition-colors">
                    홀로아리랑, 출강
                  </p>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-baseline justify-between border-b border-stone-200/60 pb-3 group">
                  <h4 className="text-gold font-bold text-lg w-24 shrink-0 font-serif">해 금</h4>
                  <p className="text-navy-deep text-right font-medium group-hover:text-gold transition-colors">
                    에델바이스, 학교가는길
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-baseline justify-between border-b border-stone-200/60 pb-3 group">
                  <h4 className="text-gold font-bold text-lg w-24 shrink-0 font-serif">가야금</h4>
                  <p className="text-navy-deep text-right font-medium group-hover:text-gold transition-colors">
                    언제나몇번이라도, summer
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-baseline justify-between border-b border-stone-200/60 pb-3 group">
                  <h4 className="text-gold font-bold text-lg w-24 shrink-0 font-serif">타 악</h4>
                  <p className="text-navy-deep text-right font-medium group-hover:text-gold transition-colors">
                    웃다리 사물놀이
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Part 2 */}
          <ScrollReveal delay={300} direction="up">
            <div className="flex flex-col h-full mt-12 md:mt-0">
              <div className="mb-8 text-center md:text-left">
                <span className="inline-block py-1 px-4 border border-navy/20 rounded-full text-navy font-serif font-bold text-lg bg-white shadow-sm">
                  2부
                </span>
                <span className="ml-3 text-stone-500 text-sm tracking-widest font-light">국악관현악</span>
              </div>

              <div className="space-y-10">
                {/* Item 1 */}
                <div className="relative pl-6 border-l-2 border-gold/30 hover:border-gold transition-colors">
                  <h3 className="text-xl font-bold text-navy-deep mb-1 font-serif">Fly to the sky</h3>
                  <p className="text-stone-500 text-sm">작곡 한태수</p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-6 border-l-2 border-gold/30 hover:border-gold transition-colors">
                  <h3 className="text-xl font-bold text-navy-deep mb-1 font-serif">민요의 향연</h3>
                  <p className="text-stone-500 text-sm">작곡 임교민</p>
                </div>

                {/* Item 3 */}
                <div className="relative pl-6 border-l-2 border-gold/30 hover:border-gold transition-colors">
                  <h3 className="text-xl font-bold text-navy-deep mb-1 font-serif">Carol Medley</h3>
                  <p className="text-stone-500 text-sm">편곡 강동완</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
        
        {/* Decor */}
        <div className="mt-20 text-center opacity-30">
          <svg className="w-8 h-8 mx-auto text-gold" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Program;