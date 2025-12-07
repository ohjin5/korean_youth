import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

// Using local SVG placeholders created in /img/
const sourceImages = [
  "/img/gallery_1.png",
  "/img/gallery_2.png",
  "/img/gallery_3.png",
  "/img/gallery_4.png",
  // Reuse them to fill the array up to 9 as originally planned
  "/img/gallery_5.png",
  "/img/gallery_6.png",
  "/img/gallery_7.png",
  "/img/gallery_8.png",
  "/img/gallery_9.png",
];

/**
 * Individual Grid Cell Component
 * Handles the crossfade animation internally when the 'src' prop changes.
 */
const CrossfadeCell: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [displaySrc, setDisplaySrc] = useState(src);
  const [fadeSrc, setFadeSrc] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // When the prop 'src' changes, start the transition sequence
    if (src !== displaySrc) {
      setFadeSrc(src); // Prepare the new image on top
      
      // Small timeout to ensure DOM render before opacity transition
      const startTimer = setTimeout(() => {
        setIsFading(true);
      }, 50);

      // After transition finishes (1000ms), swap the base image and reset
      const endTimer = setTimeout(() => {
        setDisplaySrc(src);
        setFadeSrc(null);
        setIsFading(false);
      }, 1050); // Slightly longer than CSS duration

      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }
  }, [src, displaySrc]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-200">
      {/* Base Image (Current) */}
      <img
        src={displaySrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      
      {/* Fading Image (Next) - Only renders during transition */}
      {fadeSrc && (
        <img
          src={fadeSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-1000 ease-in-out ${
            isFading ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      
      {/* Overlay for uniform look */}
      <div className="absolute inset-0 bg-black/10 z-30 pointer-events-none"></div>
    </div>
  );
};

const Gallery: React.FC = () => {
  // Initialize with the first 4 images
  const [visibleImages, setVisibleImages] = useState(sourceImages.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((currentVisible) => {
        // 1. Pick a random slot index (0 to 3) to replace
        const slotToReplace = Math.floor(Math.random() * 4);

        // 2. Identify available images (those not currently shown)
        const availableImages = sourceImages.filter(
          (img) => !currentVisible.includes(img)
        );

        // 3. Pick a random new image from available pool
        // If all images are shown (unlikely with 9 items and 4 slots), fallback to existing
        if (availableImages.length === 0) return currentVisible;
        
        const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];

        // 4. Update state: Copy array and replace the target slot
        const newState = [...currentVisible];
        newState[slotToReplace] = newImage;
        
        return newState;
      });
    }, 3000); // Change one image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
           <div className="text-center mb-12">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Gallery</span>
            <h2 className="text-3xl font-bold text-navy">갤러리</h2>
            <p className="text-stone-500 mt-2 text-sm font-light">
              공연을 위해 흘린 땀방울, 그 빛나는 순간들
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* 
            2x2 Grid Layout 
            - Mobile: grid-cols-2 (Small 2x2) or change to grid-cols-1 for stacking
            - Tablet/PC: grid-cols-2
          */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 aspect-square md:aspect-[16/9] w-full max-w-3xl mx-auto">
            {visibleImages.map((src, index) => (
              <div key={index} className="w-full h-full rounded-lg overflow-hidden shadow-md">
                <CrossfadeCell 
                  src={src} 
                  alt={`Practice Scene ${index + 1}`} 
                />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
             <p className="text-xs text-stone-400 font-light tracking-wider">
               * 사진은 랜덤으로 변경됩니다.
             </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Gallery;
