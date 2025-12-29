import React, { useState, useEffect } from 'react';
import { 
  User, X, Mail, MapPin, Phone, GraduationCap, Award, 
  Briefcase, Calendar, ExternalLink, Download, Star,
  ChevronRight, Globe, Linkedin, Github
} from 'lucide-react';

const TopLeftProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Profile Data
  const profileData = {
    name: "Aris Ramadhani",
    title: "Full-Stack Developer",
    photo: "public/handsome.jpeg",
    location: "Jakarta, Indonesia",
    email: "arisdev.cs@gmail.com",
    phone: "+62 851 3803 9373",
    experience: "2+ Years",
    bio: "Passionate Full-Stack Developer specializing in modern web technologies. Building scalable applications with React, Node.js, and cloud services.",
    
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "University Nahdlatul Ulama Bojonegoro",
        year: "2024 - Present",
        icon: "🎓"
      },
      {
        degree: "Science Major",
        institution: "SMA Negeri 1 Bojonegoro",
        year: "2019-2023",
        achievements: ["Valedictorian", "Math Olympiad Gold"],
        icon: "🏫"
      }
    ],
    
    certificates: [
      {
        name: "Full-Stack Web Development Bootcamp",
        provider: "WPU COURSE",
        year: "2024",
        duration: "4 Months",
        skills: ["React", "Node.js", "MongoDB", "Express"],
      },
      {
        name: "AWS Solutions Architect Associate",
        provider: "Amazon Web Services",
        year: "2023",
        duration: "2 Months",
        skills: ["AWS", "Cloud Architecture", "DevOps"],
      },
      {
        name: "Advanced React & Next.js",
        provider: "Udemy",
        year: "2024",
        duration: "3 Months",
        skills: ["Next.js", "TypeScript", "Tailwind"],
      }
    ],
    
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      tools: ["Git", "Docker", "AWS", "Figma", "Jest"]
    },
    
    social: {
      github: "https://github.com/arizex",
      linkedin: "https://linkedin.com/in/aris-ramadhani",
      portfolio: "https://arizex.xyz"
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* TOP LEFT BUTTON */}
      <div className={`fixed z-50 ${
        isMobile ? 'top-4 left-4' : 'top-6 left-6'
      }`}>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Profile"
          className="group relative"
        >
          {/* Animated Ring */}
          <div className={`absolute -inset-3 rounded-full ${
            isOpen ? 'animate-ping bg-blue-500/30' : 'bg-blue-500/10 group-hover:bg-blue-500/20'
          } transition-all duration-300`}></div>
          
          {/* Main Button */}
          <div className={`relative ${
            isMobile ? 'w-10 h-10' : 'w-12 h-12'
          } rounded-full bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm 
             border border-gray-800/60 group-hover:border-blue-500/50 shadow-lg 
             group-hover:shadow-xl transition-all duration-300 flex items-center justify-center
             ${isOpen ? 'scale-90' : 'group-hover:scale-110'}`}>
            
            {/* User Icon */}
            <User size={isMobile ? 18 : 20} className="text-gray-300 group-hover:text-white transition-colors" />
            
            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          
          {/* Tooltip on Desktop */}
          {!isMobile && (
            <div className="absolute top-1/2 left-full -translate-y-1/2 ml-3 px-3 py-2 bg-gray-900/90 backdrop-blur-sm 
                          border border-gray-800 rounded-lg text-sm text-white whitespace-nowrap 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              View My Profile
              <div className="absolute top-1/2 right-full -translate-y-1/2 w-2 h-2 bg-gray-900 border-l border-b border-gray-800 rotate-45 -mr-1"></div>
            </div>
          )}
        </button>
      </div>

      {/* PROFILE MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-2 md:p-4 overflow-y-auto">
          {/* Backdrop with click to close */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Container */}
          <div className={`relative w-full ${
            isMobile ? 'max-w-full my-2' : 'max-w-4xl my-8'
          } bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 
             rounded-xl md:rounded-2xl overflow-hidden shadow-2xl animate-scale-in`}>
            
            {/* HEADER */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-4 md:p-6 z-10">
              <div className="flex items-center justify-between">
                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className={`${
                    isMobile ? 'w-8 h-8' : 'w-10 h-10'
                  } rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center`}>
                    <User size={isMobile ? 16 : 20} className="text-white" />
                  </div>
                  <div>
                    <h2 className={`${
                      isMobile ? 'text-lg' : 'text-2xl'
                    } font-bold text-white`}>My Profile</h2>
                    <p className={`${
                      isMobile ? 'text-xs' : 'text-sm'
                    } text-gray-400`}>Developer Portfolio Details</p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 hover:bg-gray-800 rounded-lg transition-colors ${
                    isMobile ? 'scale-90' : ''
                  }`}
                  aria-label="Close"
                >
                  <X size={isMobile ? 20 : 24} className="text-gray-400 hover:text-white" />
                </button>
              </div>
              
              {/* Tabs - Horizontal on desktop, scrollable on mobile */}
              <div className={`flex ${
                isMobile ? 'overflow-x-auto gap-1 mt-4' : 'gap-2 mt-6'
              } scrollbar-hide`}>
                {['about', 'education', 'certificates', 'skills'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
                    } rounded-lg font-medium whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-700/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className={`overflow-y-auto ${
              isMobile ? 'max-h-[70vh] p-4' : 'max-h-[60vh] p-6'
            }`}>
              
              {/* ABOUT TAB */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    {/* Photo */}
                    <div className={`${
                      isMobile ? 'w-24 h-24' : 'w-32 h-32'
                    } rounded-full overflow-hidden border-4 border-gray-800 shadow-xl`}>
                      <img
                        src={profileData.photo}
                        alt={profileData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Basic Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className={`${
                        isMobile ? 'text-xl' : 'text-2xl'
                      } font-bold text-white mb-2`}>{profileData.name}</h3>
                      <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-900/30 to-purple-900/30 
                                     border border-blue-700/30 rounded-full mb-4">
                        <p className="text-blue-300 font-medium">{profileData.title}</p>
                      </div>
                      <p className="text-gray-300">{profileData.bio}</p>
                    </div>
                  </div>
                  
                  {/* Contact Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin size={20} className="text-blue-400" />
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="text-white">{profileData.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Mail size={20} className="text-blue-400" />
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white">{profileData.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone size={20} className="text-blue-400" />
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="text-white">{profileData.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                    <div className="flex flex-wrap gap-3">
                      <a href={profileData.social.github} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                        <Github size={18} />
                        <span className="text-white">GitHub</span>
                      </a>
                      <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-700/30 rounded-lg transition-colors">
                        <Linkedin size={18} />
                        <span className="text-white">LinkedIn</span>
                      </a>
                      <a href={profileData.social.portfolio} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 px-4 py-2 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-700/30 rounded-lg transition-colors">
                        <Globe size={18} />
                        <span className="text-white">Portfolio</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* EDUCATION TAB */}
              {activeTab === 'education' && (
                <div className="space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`${
                          isMobile ? 'w-10 h-10' : 'w-12 h-12'
                        } rounded-lg bg-blue-900/20 flex items-center justify-center`}>
                          <span className="text-xl">{edu.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <div>
                              <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                              <p className="text-blue-300">{edu.institution}</p>
                            </div>
                            <span className="px-3 py-1 bg-blue-900/30 border border-blue-700/30 rounded-full text-blue-300 text-sm">
                              {edu.year}
                            </span>
                          </div>
                          
                          {edu.gpa && (
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-gray-400">GPA:</span>
                              <span className="text-yellow-300 font-semibold">{edu.gpa}</span>
                            </div>
                          )}
                          
                          {edu.achievements && (
                            <div>
                              <p className="text-sm text-gray-400 mb-2">Achievements:</p>
                              <div className="flex flex-wrap gap-2">
                                {edu.achievements.map((achievement, i) => (
                                  <span 
                                    key={i}
                                    className="px-3 py-1 bg-green-900/20 border border-green-700/30 rounded-full text-green-300 text-sm"
                                  >
                                    {achievement}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CERTIFICATES TAB */}
              {activeTab === 'certificates' && (
                <div className="space-y-4">
                  {profileData.certificates.map((cert, index) => (
                    <div 
                      key={index}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className={`${
                          isMobile ? 'w-12 h-12' : 'w-14 h-14'
                        } rounded-xl bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 
                           flex items-center justify-center`}>
                          <span className="text-2xl">{cert.icon}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                            <div>
                              <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-purple-300">{cert.provider}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-400 text-sm">{cert.year}</span>
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-purple-900/30 border border-purple-700/30 rounded-full text-purple-300 text-sm">
                              {cert.duration}
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Skills Acquired:</p>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, i) => (
                                <span 
                                  key={i}
                                  className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              Credential ID: <span className="text-gray-300">{cert.credential}</span>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                              View Certificate
                              <ExternalLink size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SKILLS TAB */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  {/* Frontend Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-blue-400">🖥️</span>
                      Frontend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.frontend.map((skill, i) => (
                        <div 
                          key={i}
                          className="px-4 py-2 bg-blue-900/20 border border-blue-700/30 rounded-lg hover:border-blue-600/50 transition-all duration-300"
                        >
                          <span className="text-blue-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Backend Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-green-400">⚙️</span>
                      Backend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.backend.map((skill, i) => (
                        <div 
                          key={i}
                          className="px-4 py-2 bg-green-900/20 border border-green-700/30 rounded-lg hover:border-green-600/50 transition-all duration-300"
                        >
                          <span className="text-green-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools & Others */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-yellow-400">🛠️</span>
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.tools.map((skill, i) => (
                        <div 
                          key={i}
                          className="px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-lg hover:border-gray-600/50 transition-all duration-300"
                        >
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>Last updated: Dec 2024</span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopLeftProfileButton;