import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ProgramItem } from '../types';

const programList: ProgramItem[] = [
  {
    id: 1,
    title: "서곡 (Overture)",
    performer: "전체 출연진",
    description: "새로운 시작을 알리는 웅장한 국악 관현악의 울림",
    time: "Part 1"
  },
  {
    id: 2,
    title: "춘향가 중 '사랑가'",
    performer: "판소리: 김이화, 고수: 박명수",
    description: "남녀의 애틋한 사랑을 노래하는 판소리 눈대목",
    time: "Part 2"
  },
  {
    id: 3,
    title: "가야금 산조",
    performer: "가야금: 이수진",
    description: "가야금의 명주실이 빚어내는 긴장과 이완의 미학",
    time: "Part 3"
  },
  {
    id: 4,
    title: "사물놀이 '신모듬'",
    performer: "타악 그룹 '울림'",
    description: "신명나는 꽹과리, 징, 장구, 북의 역동적인 리듬",
    time: "Part 4"
  }
];

const Program: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100/50">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Program</span>
            <h2 className="text-3xl font-bold text-navy">공연 순서</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {programList.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100} threshold={0.2}>
                <div className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-gold rounded-full transform -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-sm"></div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                      <span className="text-gold text-xs font-bold tracking-wider mb-1">{item.time}</span>
                      <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-sm font-semibold text-stone-600 mb-2">{item.performer}</p>
                      <p className="text-sm text-stone-500 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;