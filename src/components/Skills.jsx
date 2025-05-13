import React, { useRef, useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    name: 'React', 
    icon: <FaReact />, 
    color: 'text-cyan-400',
    category: 'frontend',
    description: 'Component-based UI library'
  },
  { 
    name: 'JavaScript', 
    icon: <SiJavascript />, 
    color: 'text-yellow-400',
    category: 'frontend',
    description: 'Programming language'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss />, 
    color: 'text-sky-400',
    category: 'frontend',
    description: 'Utility-first CSS framework'
  },
  { 
    name: 'HTML5', 
    icon: <FaHtml5 />, 
    color: 'text-orange-500',
    category: 'frontend',
    description: 'Markup language'
  },
  { 
    name: 'CSS3', 
    icon: <FaCss3Alt />, 
    color: 'text-blue-500',
    category: 'frontend',
    description: 'Styling language'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs />, 
    color: 'text-green-500',
    category: 'backend',
    description: 'JavaScript runtime'
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb />, 
    color: 'text-green-400',
    category: 'backend',
    description: 'NoSQL database'
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    color: 'text-gray-300',
    category: 'tools',
    description: 'Version control'
  },
  { 
    name: 'Figma', 
    icon: <FaFigma />, 
    color: 'text-pink-500',
    category: 'tools',
    description: 'Design tool'
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeTab, setActiveTab] = useState('all');

  // Set up refs for animation
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, skills.length);
  }, []);

  useEffect(() => {
    // Main section animation
    gsap.fromTo(
      sectionRef.current, 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    // Card animations with ScrollTrigger
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Technology Skills
          </h2>
          <p className="text-lg text-zinc-400">
            Tools & Technologies I'm Proficient With
          </p>
        </div>

        {/* Custom tabs implementation */}
        <div className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-zinc-800/50 rounded-lg p-1">
              {['all', 'frontend', 'backend', 'tools'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {skills
                .filter(skill => activeTab === 'all' || skill.category === activeTab)
                .map((skill, index) => (
                  <div 
                    key={skill.name}
                    ref={el => cardRefs.current[index] = el}
                    className="overflow-hidden rounded-xl border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 bg-zinc-800/30 backdrop-blur-sm hover:scale-105"
                  >
                    <div className="p-6 flex flex-col items-center text-center space-y-3">
                      <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
                      <div>
                        <h3 className="font-medium text-white">{skill.name}</h3>
                        <p className="text-xs text-zinc-400 mt-1">{skill.description}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${skill.color} bg-zinc-900/50 border border-current/20`}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400 text-sm">
            Continuously expanding my tech stack to stay at the forefront of web development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;