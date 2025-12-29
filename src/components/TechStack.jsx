import React from 'react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiPython, SiPhp, SiLaravel, SiVuedotjs, SiAngular,
  SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit,
  SiTailwindcss, SiRedux, SiGraphql, SiHtml5, SiCss3
} from 'react-icons/si';

export default function TechStack() {
  const icons = [
    { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
    { icon: <SiReact />, color: "#61DAFB", name: "React" },
    { icon: <SiNextdotjs />, color: "#000000", name: "Next.js" },
    { icon: <SiNodedotjs />, color: "#339933", name: "Node.js" },
    { icon: <SiPython />, color: "#3776AB", name: "Python" },
    { icon: <SiPhp />, color: "#777BB4", name: "PHP" },
    { icon: <SiLaravel />, color: "#FF2D20", name: "Laravel" },
    { icon: <SiVuedotjs />, color: "#4FC08D", name: "Vue.js" },
    { icon: <SiAngular />, color: "#DD0031", name: "Angular" },
    { icon: <SiMysql />, color: "#4479A1", name: "MySQL" },
    { icon: <SiPostgresql />, color: "#4169E1", name: "PostgreSQL" },
    { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
    { icon: <SiDocker />, color: "#2496ED", name: "Docker" },
    { icon: <SiGit />, color: "#F05032", name: "Git" },
    { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind" },
    { icon: <SiRedux />, color: "#764ABC", name: "Redux" },
    { icon: <SiGraphql />, color: "#E10098", name: "GraphQL" },
    { icon: <SiHtml5 />, color: "#E34F26", name: "HTML5" },
    { icon: <SiCss3 />, color: "#1572B6", name: "CSS3" },
  ];

  // Layout honeycomb yang benar: 4-5-4-5-4
  const rows = [
    icons.slice(0, 4),    // 4 icons
    icons.slice(4, 9),    // 5 icons  
    icons.slice(9, 13),   // 4 icons
    icons.slice(13, 18),  // 5 icons
    icons.slice(18, 20),  // 2 icons
  ];

  return (
    <section id="tech-stack" className="relative py-12 md:py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-blue-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header dengan efek */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-base">Technologies I work with</p>
        </div>

        {/* Honeycomb Container dengan background */}
        <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/40 rounded-2xl p-6 md:p-8 mb-8">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Honeycomb Grid */}
          <div className="flex flex-col items-center scale-90 md:scale-100 relative z-10">
            {rows.map((row, rowIndex) => (
              <div 
                key={rowIndex}
                className="flex"
                style={{
                  marginLeft: rowIndex % 2 === 1 ? '2px' : '0px',
                  marginBottom: '-10px'
                }}
              >
                {row.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="relative group"
                    style={{
                      marginLeft: '2px',
                      marginRight: '2px'
                    }}
                  >
                    {/* Hexagon dengan glow effect */}
                    <div 
                      className="w-12 h-14 md:w-14 md:h-16 flex items-center justify-center relative"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      {/* Background hexagon */}
                      <div 
                        className="absolute inset-0 bg-gray-900 border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                      >
                        {/* Hover glow */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                          style={{
                            background: `radial-gradient(circle at center, ${item.color}30 0%, transparent 70%)`
                          }}
                        ></div>
                      </div>
                      
                      {/* Icon */}
                      <div 
                        className="relative z-10 text-lg md:text-xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Tooltip saat hover */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                      {item.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-b border-r border-gray-800 rotate-45"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend/Info */}
        <div className="text-center mt-8">
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-300">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-300">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-300">Database</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-300">Tools</span>
            </div>
          </div>
        </div>

        {/* Quote/Caption */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800/30">
          <p className="text-gray-500 text-sm italic">
            "Building with the right tools for the right job"
          </p>
        </div>
      </div>
    </section>
  );
}