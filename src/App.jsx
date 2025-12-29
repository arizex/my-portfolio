import React, { useState, useEffect } from 'react';
import { Github, Mail, Briefcase, ExternalLink, MessageCircle, Plus, X } from 'lucide-react';
import Hero from './components/hero/Hero';
import ProjectSlider from './components/ProjectSlider/ProjectSlider';
import TechStack from './components/TechStack/TechStack';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingProfileButton from './components/FloatingMenu/FloatingProfilelButton';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- EFFECT GLOBAL ---
  useEffect(() => {
    // Set loading selesai setelah semua komponen dimuat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Loading minimal 500ms untuk smooth transition
    
    const handleGlobalMouseMove = (e) => {
      // Update mouse position untuk glow effect
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Debounce untuk scroll event
    let scrollTimeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('scroll', debouncedScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Loading state (opsional)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. BACKGROUND GRID LAYER - Dibuat FIXED agar selalu ada saat scroll */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px' 
          }}
        ></div>
        
        {/* Glow mengikuti mouse */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.06), transparent 40%)`
          }}
        ></div>
        
        {/* Gradient Overlay untuk depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Hero />
        
        {/* ProjectSlider sudah mengelola state-nya sendiri */}
        <ProjectSlider />
        
        <FloatingProfileButton />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}