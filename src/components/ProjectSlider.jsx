import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star, Eye } from 'lucide-react';

const ProjectSlider = ({ projects, currentSlide, setCurrentSlide }) => {
  const [imageLoaded, setImageLoaded] = useState({});

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentSlide];

  return (
    <section id="projects" className="px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-sm text-blue-400 font-medium tracking-widest">FEATURED WORK</span>
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Project <span className="text-blue-400">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real applications built with modern technologies
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative">
          {/* Project Card with Image */}
          <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-gray-800/40 rounded-2xl overflow-hidden group transition-all duration-500 hover:border-gray-700/60">
            
            {/* Image Container */}
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden bg-gray-900/50">
              {/* Placeholder/Image */}
              {project.image ? (
                <>
                  {/* Loading Skeleton */}
                  {!imageLoaded[project.id] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-pulse"></div>
                  )}
                  
                  {/* Actual Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded[project.id] 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    } group-hover:scale-105`}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [project.id]: true }))}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </>
              ) : (
                /* Placeholder if no image */
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="text-5xl md:text-6xl">{project.emoji || "🚀"}</div>
                </div>
              )}
              
              {/* Year Badge on Image */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-medium">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  {project.year}
                </span>
              </div>
              
              {/* View Demo Overlay - LINK AKTIF */}
              {project.demoLink && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
                  >
                    <Eye size={18} />
                    View Live Demo
                  </a>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Title & Description */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" />
                          Featured Project
                        </span>
                        <span>•</span>
                        <span>{project.category || "Web Application"}</span>
                      </div>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={prevSlide}
                        className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105"
                        aria-label="Previous project"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105"
                        aria-label="Next project"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Features List */}
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column - Tech & Actions */}
                <div className="lg:col-span-1">
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-gray-800/40 border border-gray-700/40 rounded-lg text-sm text-gray-300 backdrop-blur-sm hover:bg-gray-800/60 hover:border-gray-600/60 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons - SEMUA LINK AKTIF */}
                  <div className="space-y-3">
                    {/* GitHub Link */}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-[1.02] group/btn"
                      >
                        <Github size={18} />
                        <span>View Source Code</span>
                        <ExternalLink size={16} className="opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
                      </a>
                    )}
                    
                    {/* Demo Link */}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/40 border border-gray-700/40 hover:bg-gray-800/60 hover:border-gray-600/60 rounded-lg text-gray-300 hover:text-white transition-all duration-300 group/btn"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                        <ExternalLink size={16} className="opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
                      </a>
                    )}
                    
                    {/* Fallback jika tidak ada link */}
                    {!project.githubLink && !project.demoLink && (
                      <div className="text-center py-3 text-gray-500 text-sm">
                        Links coming soon...
                      </div>
                    )}
                  </div>
                  
                  {/* Stats */}
                  {project.stats && (
                    <div className="mt-6 pt-6 border-t border-gray-800/30">
                      <div className="grid grid-cols-2 gap-4">
                        {project.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-6 md:px-8 pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Project Progress</span>
                <span className="text-sm text-blue-400 font-medium">{(currentSlide + 1)} / {projects.length}</span>
              </div>
              <div className="h-2 w-full bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full"
                  style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex flex-col items-center group`}
                aria-label={`Go to project ${index + 1}`}
              >
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-700 group-hover:bg-gray-600'
                  }`}></div>
                  {index === currentSlide && (
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm"></div>
                  )}
                </div>
                <span className={`text-xs mt-2 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-500 group-hover:text-gray-400'
                }`}>
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;