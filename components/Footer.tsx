import React from 'react';
import { Phone, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  const handleShare = async () => {
    const shareData = {
      title: '천안청소년국악관현악단 창단연주회',
      text: '2025년 12월 13일 (토) 오후 5시, 천안시청소년복합커뮤니티센터 대공연장. 귀한 발걸음을 초대합니다.', // 줄바꿈 추가
      url: window.location.href,
    };

    // 1. 네비게이터 공유 기능 시도
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // 사용자가 공유 창을 닫거나 취소한 경우는 에러로 보지 않음
        if (error.name !== 'AbortError') {
          console.error('공유 실패:', error);
        }
      }
    } 
    // 2. 공유 기능 미지원 시 클립보드 복사
    else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 복사되었습니다.');
      } catch (err) {
        alert('링크 복사에 실패했습니다. URL을 직접 복사해주세요.');
      }
    }
  };

  return (
    <footer className="bg-navy-deep text-hanji/60 py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-lg font-bold text-white mb-6">천안시청소년복합커뮤니티센터</h3>
        <h3 className="text-lg font-bold text-white mb-6">천안청소년국악관현악단</h3>
        
        <div className="flex justify-center gap-6 mb-10">
           <a href="tel:041-557-0924" className="flex flex-col items-center gap-2 group cursor-pointer">
             <div className="w-12 h-12 rounded-full border border-hanji/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all">
               <Phone size={20} />
             </div>
             <span className="text-xs">문의: 교육사업팀</span>
             <span className="text-xs">대표번호: 041-557-0924</span>
           </a>
           <button onClick={handleShare} className="flex flex-col items-center gap-2 group cursor-pointer">
             <div className="w-12 h-12 rounded-full border border-hanji/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all">
               <Share2 size={20} />
             </div>
             <span className="text-xs">초대장 링크</span>
             <span className="text-xs">공유하기</span>
           </button>
        </div>

        <div className="space-y-2 border-t border-white/10 pt-8">
          <p className="text-[10px] md:text-xs font-light tracking-wide text-hanji/40 uppercase">
            COPYRIGHT © 천안시청소년복합커뮤니티센터. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-hanji/30 font-light">
            BGM: 윤영현 - Beautiful Korea(뷰티플 코리아) (CC BY)
          </p>
          <p className="text-[10px] text-hanji/30 font-light">
            Design & Dev by KOJ & 천안시청소년복합커뮤니티센터 교육사업팀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
