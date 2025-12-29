import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Briefcase, Plus, X, Github, Linkedin, FileText } from 'lucide-react';

export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectSection = document.querySelector('#projects, [id*="project"]');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      label: "WhatsApp",
      icon: <MessageCircle size={18} />,
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500",
      href: "https://wa.me/6285138039373",
      external: true
    },
    {
      label: "Email",
      icon: <Mail size={18} />,
      color: "bg-gradient-to-r from-red-500 to-pink-600",
      hoverColor: "hover:from-red-400 hover:to-pink-500",
      href: "mailto:arisdev.cs@gmail.com",
      external: true
    },
    {
      label: "GitHub",
      icon: <Github size={18} />,
      color: "bg-gradient-to-r from-gray-800 to-gray-900",
      hoverColor: "hover:from-gray-700 hover:to-gray-800",
      href: "https://github.com/arizex",
      external: true
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      <div className={`flex flex-col items-end gap-3 mb-3 transition-all duration-500 ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
      }`}>
        {menuItems.map((item, index) => (
          <div 
            key={item.label}
            className="flex items-center"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            {/* Label */}
            <span className={`mr-3 px-4 py-2 ${item.color} ${item.hoverColor} text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap backdrop-blur-sm border border-white/10`}>
              {item.label}
            </span>
            
            {/* Icon Button */}
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 ${item.color} ${item.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/10 backdrop-blur-sm`}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ) : (
              <button
                onClick={item.onClick}
                className={`flex items-center justify-center w-10 h-10 ${item.color} ${item.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-white/10 backdrop-blur-sm`}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <div className="relative">
        {/* Pulse Effect */}
        <div className={`absolute inset-0 ${isMenuOpen ? 'animate-ping-slow' : ''} bg-blue-500/20 rounded-full blur-sm`}></div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl ${
            isMenuOpen 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 rotate-45 scale-110' 
              : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
          } border border-white/20 backdrop-blur-sm`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Plus/X Icon */}
          <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transition-all duration-500 ${
              isMenuOpen 
                ? 'opacity-0 rotate-90' 
                : 'opacity-100'
            }`}>
              <Plus size={24} className="text-white" />
            </div>
            <div className={`absolute inset-0 transition-all duration-500 ${
              isMenuOpen 
                ? 'opacity-100' 
                : 'opacity-0 -rotate-90'
            }`}>
              <X size={24} className="text-white" />
            </div>
          </div>
          
          {/* Ring Animation */}
          <div className={`absolute -inset-2 border-2 border-blue-500/30 rounded-full transition-all duration-700 ${
            isMenuOpen ? 'scale-125 opacity-100' : 'scale-100 opacity-0'
          }`}></div>
        </button>
      </div>
    </div>
  );
}