import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="text-center mb-20">
          {/* Animated Badge */}
          <div className="inline-block px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm animate-fade-in">
            <h1 className="text-sm md:text-base font-mono text-blue-400 tracking-widest uppercase">
              Aris.dev — Portfolio 2025
            </h1>
          </div>

          {/* Glitch Text Effect */}
          <h2 className="text-5xl md:text-5xl lg:text-[5rem] font-bold mb-8 leading-[0.9] tracking-tighter">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-blue-500 animate-glitch-fast opacity-70" 
                    style={{ clipPath: 'inset(30% 0 60% 0)' }}>
                Uncover the
              </span>
              <span className="absolute inset-0 text-purple-500 animate-glitch-slow opacity-70" 
                    style={{ clipPath: 'inset(60% 0 30% 0)' }}>
                Uncover the
              </span>
              <span className="relative text-white">Uncover the</span>
            </span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="absolute inset-0 text-blue-500 animate-glitch-fast opacity-70" 
                    style={{ clipPath: 'inset(40% 0 50% 0)' }}>
                Invisible,
              </span>
              <span className="absolute inset-0 text-purple-500 animate-glitch-slow opacity-70" 
                    style={{ clipPath: 'inset(50% 0 40% 0)' }}>
                Invisible,
              </span>
              <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Invisible,
              </span>
            </span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="absolute inset-0 text-white animate-glitch-fast opacity-70" 
                    style={{ clipPath: 'inset(20% 0 70% 0)' }}>
                Master Development.
              </span>
              <span className="relative text-gray-200/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Master Development.
              </span>
            </span>
          </h2>

          {/* Fade In Text */}
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mt-10 font-light animate-fade-in-up">
            Advanced <span className="text-white font-medium animate-pulse-slow">Full-Stack Development</span> for modern web applications. 
            Building digital experiences with precision and creativity.
          </p>
        </div>

        {/* Particle Effect Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/30 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}