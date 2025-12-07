import React, { useState, useEffect, useRef } from 'react';
import { Music } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 브라우저 정책으로 인한 자동 재생 실패 시, 사용자 인터랙션을 기다림
    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked, waiting for interaction...");
        
        const enableAudio = () => {
          audio.play().then(() => {
            setIsPlaying(true);
            // 인터랙션 리스너 제거
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
            document.removeEventListener('scroll', enableAudio);
          }).catch(e => console.error("Play failed:", e));
        };

        document.addEventListener('click', enableAudio);
        document.addEventListener('touchstart', enableAudio);
        document.addEventListener('scroll', enableAudio);
      }
    };

    attemptPlay();
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio ref={audioRef} src="/media/bgm.mp3" loop />
      
      <button 
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full bg-navy/90 border border-gold/50 backdrop-blur-sm shadow-xl text-gold flex items-center justify-center transition-all hover:scale-110 active:scale-95`}
        aria-label={isPlaying ? "음악 일시정지" : "음악 재생"}
      >
        <Music 
          size={20} 
          className={`transition-all duration-700 ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : 'opacity-70'}`} 
        />
        
        {/* Play State Indicator Ring */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-gold/30 animate-ping"></span>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;