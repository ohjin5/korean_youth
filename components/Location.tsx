import React from 'react';
import { MapPin, Bus, TrainFront, CarFront } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Location</span>
            <h2 className="text-3xl font-bold text-navy mb-4">오시는 길</h2>
            <p className="text-stone-600 text-lg font-semibold">천안시복합커뮤니티센터</p>
            <p className="text-stone-400 text-sm mt-1">충청남도 천안시 서북구 불당15길 11 (불당동)</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* Map Placeholder */}
          <div className="w-full aspect-video bg-stone-200 mb-8 rounded-lg overflow-hidden relative shadow-inner">
             <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               // Accurate query for Cheonan City Complex Community Center
               src="https://maps.google.com/maps?q=천안시복합커뮤니티센터&t=&z=16&ie=UTF8&iwloc=&output=embed"
               title="Google Map Location"
               className="opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border border-stone-200 rounded-lg"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
             <button 
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#F2F4F7] text-slate-800 rounded-md hover:bg-slate-200 transition-colors"
                onClick={() => window.open('https://map.kakao.com/link/search/천안시복합커뮤니티센터', '_blank')}
             >
                <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center text-[10px] font-bold text-black">K</div>
                <span className="font-semibold">카카오내비</span>
             </button>
             <button 
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#F2F4F7] text-slate-800 rounded-md hover:bg-slate-200 transition-colors"
                onClick={() => window.open('https://map.naver.com/p/search/천안시청소년복합커뮤니티센터', '_blank')}
            >
            {/* 네이버는 초록색(#03C75A) 아이콘입니다 */}
                <div className="w-6 h-6 bg-[#03C75A] rounded-md flex items-center justify-center text-[10px] font-bold text-white">N</div>
                <span className="font-semibold">네이버 지도</span>
              </button>
          </div>

          {/* Transportation Guide */}
          <div className="border-t border-stone-100 pt-10">
            <h4 className="font-bold text-navy mb-6 flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={18} className="text-gold" />
              교통편 안내
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Bus */}
              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-stone-200/60 flex flex-col items-center md:items-start text-center md:text-left hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-navy mb-3 shadow-sm">
                  <Bus size={20} />
                </div>
                <span className="font-bold text-navy mb-1 text-sm">버스 이용 시</span>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  천안버스터미널 <br className="hidden md:block" />
                  <strong className="font-medium text-stone-800">90번 버스</strong> 이용
                </p>
              </div>

              {/* Subway */}
              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-stone-200/60 flex flex-col items-center md:items-start text-center md:text-left hover:border-gold/30 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-navy mb-3 shadow-sm">
                  <TrainFront size={20} />
                </div>
                <span className="font-bold text-navy mb-1 text-sm">지하철 이용 시</span>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  1호선 천안역 하차 후 <br />
                  천안역 서부광장 <strong className="font-medium text-stone-800">6번 버스</strong> 이용
                </p>
              </div>

              {/* Car */}
              <div className="bg-[#F9F9F7] p-6 rounded-xl border border-stone-200/60 flex flex-col items-center md:items-start text-center md:text-left hover:border-gold/30 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-navy mb-3 shadow-sm">
                  <CarFront size={20} />
                </div>
                <span className="font-bold text-navy mb-1 text-sm">자차 이용 시</span>
                <p className="text-sm text-stone-600 font-light leading-relaxed break-keep">
                  천안IC → 삼성대로 → <br className="hidden md:block" />
                  번영로 → 음봉로
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Location;
