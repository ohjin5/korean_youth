import React from 'react';
import ScrollReveal from './ScrollReveal';

const Invitation: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-2xl mx-auto text-center relative">
      <ScrollReveal>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gray-300"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 mt-6">
          귀한 발걸음을<br />초대합니다
        </h2>
        
        <div className="space-y-6 text-stone-600 leading-loose text-sm md:text-base font-light">
          <p>
            가을의 문턱, 깊어가는 계절의 정취와 함께<br />
            우리 소리의 멋과 흥을 담은 자리를 마련했습니다.
          </p>
          <p>
            천 년을 이어온 숨결이<br />
            오늘의 감각과 만나 빚어내는 울림.
          </p>
          <p>
            바쁘신 일상 잠시 내려놓으시고<br />
            따뜻한 격려와 박수로 자리를 빛내주시면<br />
            더없는 기쁨이 되겠습니다.
          </p>
        </div>

        <div className="mt-12 text-navy font-semibold">
          <span className="text-gold text-lg font-bold">천안청소년국악관현악단</span> 올림
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Invitation;