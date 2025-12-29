import React from 'react';
import { Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-20 overflow-hidden">
      {/* Background Glow Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Brand & Copyright */}
        <div className="text-center">
          <h4 className="text-xl font-bold mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Aris.dev
          </h4>
          <p className="text-gray-600 font-mono text-xs tracking-widest uppercase">
            © {currentYear} — Crafted with precision & late night coffee
          </p>
        </div>

        {/* Status Indicator (Opsional, buat gaya-gayaan dev) */}
        <div className="mt-8 flex items-center gap-2 px-3 py-1 border border-green-500/20 rounded-full bg-green-500/5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-mono text-green-500 uppercase tracking-tighter">Available for projects</span>
        </div>
      </div>
    </footer >
  );
}