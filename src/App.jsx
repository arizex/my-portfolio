import React, { useState, useEffect, useCallback } from 'react';
import { Github, Mail, Briefcase, ExternalLink, MessageCircle, Plus, X } from 'lucide-react';
import Hero from './components/hero';
import ProjectSlider from './components/ProjectSlider';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingProfileButton from './components/FloatingProfilelButton';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment gateway integration, real-time notifications, and admin dashboard. Built with modern web technologies for optimal performance.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    emoji: "🛍️",
    year: "2024",
    category: "E-Commerce",
    features: [
      "Payment gateway integration",
      "Real-time notifications",
      "Admin dashboard",
      "Product search & filters",
      "User authentication"
    ],
    stats: [
      { value: "10k+", label: "Users" },
      { value: "95%", label: "Uptime" }
    ]
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses, sentiment analysis, and multi-language support. Features include voice commands and file sharing.",
    tech: ["Next.js", "OpenAI API", "AWS", "Socket.io", "MongoDB"],
    image: "public/webschool.png",
    emoji: "🤖",
    year: "2024",
    demoLink: "https://asyariyah.arizex.xyz",
    category: "AI/ML",
    features: [
      "AI-powered responses",
      "Real-time messaging",
      "Sentiment analysis",
      "Multi-language support",
      "Voice commands"
    ],
    stats: [
      { value: "5k+", label: "Messages/day" },
      { value: "99%", label: "Accuracy" }
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative project management tool with drag-drop interface, time tracking, and team collaboration features. Perfect for remote teams.",
    tech: ["Vue.js", "Express", "PostgreSQL", "WebSocket", "JWT"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-800&auto=format&fit=crop",
    emoji: "📋",
    year: "2023",
    category: "Productivity",
    features: [
      "Drag & drop interface",
      "Time tracking",
      "Team collaboration",
      "Project timelines",
      "File sharing"
    ],
    stats: [
      { value: "500+", label: "Teams" },
      { value: "40%", label: "Efficiency" }
    ]
  }
];

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // --- LOGIC SLIDER ---
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  
  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  const handleMouseDown = (e) => setTouchStart(e.clientX);
  const handleMouseMoveSlider = (e) => { 
    if (touchStart) setTouchEnd(e.clientX); 
  };
  
  const handleMouseUp = useCallback(() => {
    if (touchStart && touchEnd) {
      if (touchStart - touchEnd > 75) nextSlide();
      if (touchStart - touchEnd < -75) prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  // --- EFFECT GLOBAL ---
  useEffect(() => {
    // Set loading selesai setelah semua komponen dimuat
    setIsLoading(false);
    
    const handleGlobalMouseMove = (e) => {
      // Optimasi: Update mouse position hanya jika ada perubahan signifikan
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Debounce untuk scroll event (opsional, untuk performa)
    let scrollTimeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('scroll', debouncedScroll);
    
    // Auto slide setiap 5 detik (opsional)
    const slideInterval = setInterval(() => {
      if (!isMenuOpen) { // Jangan auto slide jika menu terbuka
        nextSlide();
      }
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('scroll', debouncedScroll);
      clearInterval(slideInterval);
      clearTimeout(scrollTimeout);
    };
  }, [nextSlide, isMenuOpen]);

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
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      
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
        
        <ProjectSlider 
          projects={projects}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMoveSlider}
          handleMouseUp={handleMouseUp}
        />
        <FloatingProfileButton/>
        <TechStack />
        <Footer />
      </div>
    </div>
  );
}