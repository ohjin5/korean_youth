import React from 'react';
import { MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             <button 
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#F2F4F7] text-slate-800 rounded-md hover:bg-slate-200 transition-colors"
                onClick={() => window.open('https://map.kakao.com/link/search/천안시복합커뮤니티센터', '_blank')}
             >
                <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center text-[10px] font-bold text-black">K</div>
                <span className="font-semibold">카카오내비</span>
             </button>
             <button 
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#F2F4F7] text-slate-800 rounded-md hover:bg-slate-200 transition-colors"
                onClick={() => window.open('https://tmap.co.kr/', '_blank')}
             >
                <div className="w-6 h-6 bg-red-600 rounded-md flex items-center justify-center text-[10px] font-bold text-white">T</div>
                <span className="font-semibold">티맵</span>
             </button>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-100">
            <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-gold" />
              대중교통 안내
            </h4>
            <div className="space-y-4 text-sm text-stone-600 font-light">
               <div>
                 <span className="font-semibold text-stone-800 block mb-1">KTX / 기차</span>
                 <p>천안아산역 하차 후 택시 이동 (약 10분 소요)</p>
               </div>
               <div>
                 <span className="font-semibold text-stone-800 block mb-1">버스</span>
                 <p>천안시청 시의회 정류장 하차: 1, 3, 90, 990번</p>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Location;