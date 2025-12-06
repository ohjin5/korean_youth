import React from 'react';
import ScrollReveal from './ScrollReveal';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/600/600?random=1",
    "https://picsum.photos/600/600?random=2",
    "https://picsum.photos/600/600?random=3",
    "https://picsum.photos/600/600?random=4"
  ];

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
           <div className="text-center mb-12">
            <span className="text-gold tracking-widest text-xs font-bold uppercase mb-2 block">Gallery</span>
            <h2 className="text-3xl font-bold text-navy">연습 풍경</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {images.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} threshold={0.1}>
              <div className="aspect-square overflow-hidden bg-stone-200">
                <img 
                  src={src} 
                  alt={`Rehearsal ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;