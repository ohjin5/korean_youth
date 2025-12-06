import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Member, membersData } from '../data/members';
import { X, Quote } from 'lucide-react';

const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Define the order explicitly to match the requirement
  const sortOrder = ['지휘자/지도위원', '가야금', '거문고', '대금/소금', '해금/아쟁', '타악'];

  // Group members by part
  const groupedMembers = membersData.reduce((acc, member) => {
    if (!acc[member.part]) {
      acc[member.part] = [];
    }
    acc[member.part].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  const openModal = (member: Member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-hanji relative">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Members</span>
            <h2 className="text-3xl font-bold text-navy">공연진 소개</h2>
            <p className="text-stone-500 mt-2 text-sm">천안청소년국악관현악단을 이끄는 주역들입니다.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {sortOrder.map((partName, groupIdx) => {
            const members = groupedMembers[partName];
            if (!members) return null;

            return (
              <ScrollReveal key={partName} delay={groupIdx * 100} threshold={0.1}>
                <div className="relative">
                  <h3 className="text-lg font-bold text-navy-deep mb-4 px-2 border-l-4 border-gold pl-3 flex items-center gap-2">
                    {partName} 
                    <span className="text-stone-400 text-xs font-normal bg-stone-100 px-2 py-0.5 rounded-full">{members.length}명</span>
                  </h3>
                  
                  {/* Horizontal Scroll Container */}
                  <div className="flex overflow-x-auto pb-6 gap-5 no-scrollbar snap-x px-2 overscroll-x-contain">
                    {members.map((member) => (
                      <button 
                        key={member.id}
                        onClick={() => openModal(member)}
                        className="flex-shrink-0 w-24 flex flex-col items-center group snap-start focus:outline-none"
                      >
                        <div className={`w-20 h-20 rounded-full p-1 border transition-all duration-300 relative bg-white ${member.role === '지휘자' ? 'border-gold scale-105' : 'border-gold/30 group-hover:border-gold group-hover:scale-105'}`}>
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all"
                          />
                          {member.role === '수석' && (
                             <span className="absolute -top-1 -right-1 bg-navy text-gold text-[10px] px-1.5 py-0.5 rounded-full shadow-sm z-10">수석</span>
                          )}
                          {member.role === '지휘자' && (
                             <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-sm z-10 font-bold">지휘</span>
                          )}
                           {member.role === '지도위원' && (
                             <span className="absolute -top-1 -right-1 bg-stone-600 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-sm z-10">지도</span>
                          )}
                        </div>
                        <span className={`mt-3 text-sm font-medium transition-colors ${member.role === '지휘자' ? 'text-gold font-bold' : 'text-navy-deep group-hover:text-gold'}`}>
                          {member.name}
                        </span>
                        <span className="text-[10px] text-stone-400">{member.role}</span>
                      </button>
                    ))}
                    {/* Padding for right side of scroll */}
                    <div className="w-4 flex-shrink-0"></div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay - z-[100] to cover sticky buttons */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          <div className="bg-hanji w-full max-w-sm rounded-lg shadow-2xl overflow-hidden relative z-10 animate-[fadeIn_0.3s_ease-out]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white drop-shadow-md hover:text-gold transition-colors z-20 bg-black/20 rounded-full p-1"
            >
              <X size={24} />
            </button>

            <div className="relative h-72 bg-stone-200">
               <img 
                 src={selectedMember.image} 
                 alt={selectedMember.name} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-90"></div>
               
               <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <span className="bg-gold text-white text-xs px-2 py-1 rounded mb-2 inline-block font-semibold tracking-wider">
                    {selectedMember.part}
                  </span>
                  <div className="flex items-end gap-2">
                    <h3 className="text-3xl font-bold">{selectedMember.name}</h3>
                    <span className="text-stone-300 text-sm mb-1.5">{selectedMember.role}</span>
                  </div>
               </div>
            </div>

            <div className="p-8 text-center bg-hanji">
              <Quote className="text-gold/40 mx-auto mb-4 fill-current transform rotate-180" size={32} />
              <p className="text-navy text-lg leading-relaxed font-serif break-keep font-medium">
                "{selectedMember.resolution}"
              </p>
              <div className="mt-8">
                <button 
                  onClick={closeModal}
                  className="w-full py-3 bg-navy text-white text-sm font-bold tracking-widest rounded hover:bg-gold transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframes for modal */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Members;