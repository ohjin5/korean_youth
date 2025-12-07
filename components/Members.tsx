import React from 'react';
import ScrollReveal from './ScrollReveal';

const Members: React.FC = () => {
  // Data Definition
  const conductor = "박상진";

  const instructors = [
    { part: "가야금", name: "공채린" },
    { part: "거문고", name: "김채운" },
    { part: "해금", name: "조소연" },
    { part: "아쟁", name: "김명신" },
    { part: "대금", name: "오혁" },
    { part: "타악", name: "정예빈" },
    { part: "사물놀이", name: "장수영" },
  ];

  const helpers = [
    "작곡가 강동완",
    "사회자 박문정"
  ];

  const memberTeams = [
    {
      part: "가야금",
      names: ["김나루", "김야엘", "김지은", "박서윤", "박서현", "배서우", "배지원", "변하엘", "신예슬", "원혜인", "이예지", "이지수", "이채원", "임윤서", "정나윤", "채우리"]
    },
    {
      part: "해금",
      names: ["김예준", "김하율", "박서영", "윤채린", "이유신", "이채윤", "장재이", "정유안", "진나연", "최하은", "한가은", "현채이", "김하은", "신재원", "장재영"]
    },
    {
      part: "대금",
      names: ["엄동윤", "박준서", "박지언", "최원"]
    },
    {
      part: "피리",
      names: ["김예탁", "김채율", "김하진", "윤수인", "윤수현", "이아진", "장이현", "한유은", "고찬희"]
    },
    {
      part: "거문고",
      names: ["강석연", "고현", "김은서", "김윤서", "박서윤", "서지우", "윤이나", "이인준", "안명원"]
    },
    {
      part: "아쟁",
      names: ["김하윤", "김헌성"]
    },
    {
      part: "타악",
      names: ["김다윗", "김도운", "김지율", "문은서", "박세희", "박소율", "배성윤", "송은석", "윤혜나", "이예안", "정시연", "황서희"]
    }
  ];

  return (
    <section className="py-24 bg-hanji relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Members</span>
            <h2 className="text-3xl font-bold text-navy mb-3">공연진 소개</h2>
            <p className="text-stone-500 text-sm font-serif">천안청소년국악관현악단을 이끄는 주역들입니다.</p>
          </div>
        </ScrollReveal>

        {/* Conductor */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <h3 className="text-gold font-bold text-lg mb-2 font-serif">지휘</h3>
            <p className="text-4xl font-bold text-navy-deep">{conductor}</p>
          </div>
        </ScrollReveal>

        {/* Instructors & Helpers Box */}
        <ScrollReveal delay={200}>
          <div className="bg-white/60 border border-stone-200 rounded-xl p-8 mb-16 shadow-sm">
            <div className="mb-8">
              <h3 className="text-center text-navy font-bold text-lg mb-6 pb-2 border-b border-stone-200 inline-block px-8 mx-auto block w-max">
                지도강사
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {instructors.map((inst, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                    <span className="text-stone-400 text-xs md:text-sm font-light">{inst.part}</span>
                    <span className="text-navy-deep font-medium">{inst.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
               <h3 className="text-navy font-bold text-sm mb-3">도움을 주신 분들</h3>
               <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                 {helpers.map((helper, idx) => (
                   <span key={idx} className="text-stone-600 font-serif">{helper}</span>
                 ))}
               </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Members List */}
        <div className="space-y-12">
          {memberTeams.map((team, idx) => (
            <ScrollReveal key={team.part} delay={idx * 50 + 300}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-navy mb-6 font-serif relative inline-block">
                  <span className="relative z-10">{team.part}</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-gold/10 -z-0"></span>
                </h3>
                
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-2">
                  {team.names.map((name, nameIdx) => (
                    <div key={nameIdx} className="text-stone-700 font-serif text-base hover:text-gold transition-colors duration-300">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Decor */}
        <div className="mt-20 flex justify-center opacity-30">
           <svg width="40" height="10" viewBox="0 0 40 10">
             <circle cx="5" cy="5" r="2" fill="#a88d57" />
             <circle cx="20" cy="5" r="2" fill="#a88d57" />
             <circle cx="35" cy="5" r="2" fill="#a88d57" />
           </svg>
        </div>

      </div>
    </section>
  );
};

export default Members;