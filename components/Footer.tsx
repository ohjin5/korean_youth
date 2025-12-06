import React from 'react';
import { Phone, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '천안청소년국악관현악단 창단연주회',
        text: '천안청소년국악관현악단 창단연주회에 초대합니다.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('링크가 복사되었습니다.');
    }
  };

  return (
    <footer className="bg-navy-deep text-hanji/60 py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-lg font-bold text-white mb-6">천안청소년국악관현악단</h3>
        
        <div className="flex justify-center gap-6 mb-8">
           <a href="tel:041-557-0924" className="flex flex-col items-center gap-2 group cursor-pointer">
             <div className="w-12 h-12 rounded-full border border-hanji/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all">
               <Phone size={20} />
             </div>
             <span className="text-xs">문의하기</span>
           </a>
           <button onClick={handleShare} className="flex flex-col items-center gap-2 group cursor-pointer">
             <div className="w-12 h-12 rounded-full border border-hanji/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all">
               <Share2 size={20} />
             </div>
             <span className="text-xs">공유하기</span>
           </button>
        </div>

        <p className="text-xs font-light">
          Copyright © 2025 Cheonan Youth Traditional Music Orchestra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
