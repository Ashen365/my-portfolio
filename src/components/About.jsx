import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaNodeJs, FaGithub, FaServer, FaDownload } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFigma, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { BsArrowRightShort, BsLightningCharge } from 'react-icons/bs';
import { HiOutlineDesktopComputer, HiOutlineSparkles } from 'react-icons/hi';
import { MdOutlineWeb } from 'react-icons/md';
import profilePhoto from '../assets/profile.jpg';
import resumePDF from "../assets/Ashen's Resume (2).pdf";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // State for tab selection
  const [activeTab, setActiveTab] = useState('about');
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Create refs for animation targets
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardRef = useRef(null);
  const paragraphsRef = useRef([]);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const progressBarsRef = useRef([]);
  const imageRef = useRef(null);
  
  // Refs for tab indicators
  const tabIndicatorRef = useRef(null);
  
  // Add elements to ref arrays
  const addToParagraphsRefs = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };
  
  const addToProgressBarsRefs = (el) => {
    if (el && !progressBarsRef.current.includes(el)) {
      progressBarsRef.current.push(el);
    }
  };
  
  // Skills data
  const skills = [
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400', level: 95, glow: '#22d3ee', gradient: 'from-green-400 via-cyan-400 to-blue-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400', level: 90, glow: '#facc15', gradient: 'from-green-400 via-yellow-400 to-blue-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', level: 85, glow: '#22c55e', gradient: 'from-green-400 to-blue-500' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-300', level: 80, glow: '#d1d5db', gradient: 'from-green-400 to-blue-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400', level: 85, glow: '#4ade80', gradient: 'from-green-400 to-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400', level: 90, glow: '#38bdf8', gradient: 'from-green-400 via-sky-400 to-blue-500' },
    { name: 'Git/GitHub', icon: <FaGithub />, color: 'text-white', level: 88, glow: '#ffffff', gradient: 'from-green-400 to-blue-500' },
    { name: 'UI/UX Design', icon: <SiFigma />, color: 'text-pink-400', level: 75, glow: '#f472b6', gradient: 'from-green-400 via-pink-400 to-blue-500' },
  ];
  
  // Services data
  const services = [
    {
      title: "Frontend Development",
      icon: <MdOutlineWeb className="text-4xl" />,
      color: "from-cyan-400 to-blue-500",
      iconBg: "bg-gradient-to-br from-cyan-400/20 to-blue-500/20",
      iconGlow: "cyan",
      description: "Creating modern, responsive UIs with React and Next.js that provide excellent user experiences across all devices.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl" />,
      color: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
      iconGlow: "green",
      description: "Building robust APIs and server-side solutions with Node.js to power your web applications.",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      title: "Full-Stack Solutions",
      icon: <HiOutlineDesktopComputer className="text-4xl" />,
      color: "from-purple-400 to-fuchsia-500",
      iconBg: "bg-gradient-to-br from-purple-400/20 to-fuchsia-500/20",
      iconGlow: "purple",
      description: "End-to-end application development that combines powerful backends with beautiful frontends.",
      technologies: ["MERN Stack", "Authentication", "Cloud Deployment", "Performance Optimization"]
    }
  ];
  
  // Update tab indicator position
  useEffect(() => {
    if (!tabIndicatorRef.current) return;
    
    // Find the active tab button
    const tabButtons = tabsRef.current.querySelectorAll('button');
    const activeButton = Array.from(tabButtons).find(
      button => button.textContent.toLowerCase().includes(activeTab)
    );
    
    if (activeButton) {
      // Position the indicator under the active button
      gsap.to(tabIndicatorRef.current, {
        x: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  }, [activeTab]);
  
  // GSAP animations
  useEffect(() => {
    // Reset animations when tab changes
    const resetAnimations = () => {
      // Clear any existing animations
      gsap.killTweensOf(paragraphsRef.current);
      gsap.killTweensOf(progressBarsRef.current);
      
      // Reset progress bars to initial state when switching tabs
      if (progressBarsRef.current.length > 0) {
        gsap.set(progressBarsRef.current, { width: 0 });
      }
    };

    resetAnimations();
    
    // Timeline for initial animations
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });
    
    // Main title animation
    mainTl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out"
      }
    );
    
    // Subtitle animation
    mainTl.fromTo(
      subTitleRef.current,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.5"
    );
    
    // Tabs animation
    mainTl.fromTo(
      tabsRef.current,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.3"
    );
    
    // Card animation
    mainTl.fromTo(
      cardRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.3"
    );
    
    // Image animation (if in about tab)
    if (activeTab === 'about' && imageRef.current) {
      mainTl.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0, rotateY: -15 },
        { 
          scale: 1, 
          opacity: 1, 
          rotateY: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
        },
        "-=0.5"
      );
    }
    
    // Content-specific animations based on active tab
    if (activeTab === 'about') {
      // Animate paragraphs with stagger
      gsap.fromTo(
        paragraphsRef.current,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%"
          }
        }
      );
    } 
    else if (activeTab === 'skills') {
      // Skill items animation
      gsap.fromTo(
        skillsRef.current.querySelectorAll('.skill-item'),
        { x: -20, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.4,
          stagger: 0.08,
          ease: "power1.out"
        }
      );
      
      // Progress bars animation with delay
      gsap.fromTo(
        progressBarsRef.current,
        { width: 0 },
        { 
          width: el => `${el.dataset.level}%`,
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.inOut",
          delay: 0.3
        }
      );
      
      // Skill tags animation
      gsap.fromTo(
        skillsRef.current.querySelectorAll('.skill-tag'),
        { y: 10, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.2)",
          delay: 0.6
        }
      );
    } 
    else if (activeTab === 'services') {
      // Service cards animation
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-card'),
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.2)"
        }
      );
      
      // Technology tags animation
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.tech-tag'),
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.3,
          stagger: 0.05,
          ease: "power1.out",
          delay: 0.7
        }
      );
    }
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [activeTab]);
  
  // Set up hover animations for service cards
  useEffect(() => {
    if (activeTab === 'services' && servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');
      
      cards.forEach(card => {
        // Mouse enter animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            borderColor: "rgba(34, 211, 238, 0.3)",
            duration: 0.4,
            ease: "power2.out"
          });
          
          // Animate icon
          const icon = card.querySelector('.service-icon');
          gsap.to(icon, {
            scale: 1.2,
            rotation: 15,
            duration: 0.5,
            ease: "back.out(1.7)"
          });
        });
        
        // Mouse leave animation
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(63, 63, 70, 0.3)",
            duration: 0.4,
            ease: "power2.out"
          });
          
          // Reset icon
          const icon = card.querySelector('.service-icon');
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power1.inOut"
          });
        });
      });
    }
  }, [activeTab]);

  // Animation for expanded service cards
  useEffect(() => {
    if (expandedCard !== null && servicesRef.current) {
      // Find the expanded card and animate content
      const card = servicesRef.current.querySelectorAll('.service-card')[expandedCard];
      
      if (card) {
        const expandedContent = card.querySelector('.expanded-content');
        if (expandedContent) {
          gsap.fromTo(
            expandedContent,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );
        }
      }
    }
  }, [expandedCard]);
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjAyMDQ1IiBmaWxsLW9wYWNpdHk9Ii4xIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-5"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-5 animate-pulse-slow"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Enhanced title with floating elements */}
        <div className="mb-16 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
            <span className="text-xs font-medium text-green-400 uppercase tracking-wider">About Me</span>
          </div>
          
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-green-400 to-blue-500 mb-4 leading-tight tracking-tight"
          >
            My Journey & Expertise
          </h2>
          
          <p 
            ref={subTitleRef}
            className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            Developer, designer, and <span className="relative inline-block">
              problem solver
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500"></span>
            </span> with a passion for creating exceptional web experiences
          </p>
        </div>
        
        {/* Enhanced modern tabs */}
        <div 
          ref={tabsRef} 
          className="flex justify-center mb-12"
        >
          <div 
            className="relative p-1 rounded-xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-lg shadow-lg"
          >
            <div className="flex relative z-10">
              {['about', 'skills', 'services'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                    activeTab === tab
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 capitalize">{tab}</span>
                </button>
              ))}
            </div>
            
            {/* Tab indicator (replaces framer-motion) */}
            <div
              ref={tabIndicatorRef}
              className="absolute bottom-1 left-1 h-[calc(100%-8px)] bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg shadow-md shadow-green-500/5 border border-slate-700/60 transition-all duration-300 ease-out"
              style={{ width: '33.333%' }}
            ></div>
          </div>
        </div>
        
        {/* Enhanced card with glassmorphism */}
        <div 
          ref={cardRef}
          className="rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/90 to-slate-800/30 p-8 shadow-xl backdrop-blur-sm relative z-10 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
          
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="flex flex-col md:flex-row gap-12">
              {/* Profile image column with enhanced 3D effect */}
              <div className="md:w-1/3">
                <div 
                  ref={imageRef}
                  className="relative select-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-2xl rounded-2xl transform rotate-6"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 group perspective">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 group-hover:opacity-50 opacity-0 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    
                    <div className="transform transition-transform duration-1000 preserve-3d group-hover:rotate-y-6">
                      <img 
                        src={profilePhoto} 
                        alt="Ashen Shanilka Herath" 
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Overlay elements */}
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-green-400">Available for work</span>
                    </div>
                  </div>
                  
                  {/* Resume download button */}
                  <a 
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group absolute -bottom-4 -right-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg shadow-green-500/30 transform hover:scale-110 transition-all duration-300"
                    aria-label="Download Resume"
                  >
                    <FaDownload className="text-white text-lg transition-transform duration-300 group-hover:scale-110" />
                    <span className="absolute -top-10 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Download CV</span>
                  </a>
                </div>
                
                {/* Skills highlights */}
                <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm hidden md:block">
                  <h4 className="text-sm font-medium text-slate-300 mb-3">TOP SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 4).map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center space-x-1 px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700/50"
                      >
                        <span className={skill.color}>{skill.icon}</span>
                        <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bio content column with enhanced typography and layout */}
              <div className="md:w-2/3 space-y-7">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-green-500/20 rounded-full border border-green-500/30">WHO I AM</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-green-500/50 to-transparent"></div>
                </div>
                
                <p 
                  ref={addToParagraphsRefs}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-semibold">Ashen Shanilka Herath</span>, a MERN stack virtuoso and a problem-solver at heart. I don't just build web applications—I engineer seamless digital experiences that are fast, responsive, and intuitive. With a deep mastery of React, JavaScript, and modern web technologies, I turn complex ideas into elegant, scalable solutions.
                </p>
                
                <p 
                  ref={addToParagraphsRefs}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  I thrive on challenges, pushing boundaries to craft high-performance applications that stand out in today's dynamic web landscape. My passion for innovation keeps me on the cutting edge, constantly exploring emerging technologies to stay ahead of the curve.
                </p>
                
                <p 
                  ref={addToParagraphsRefs}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  When I'm not deep in code, I'm capturing the world through my photographic lens, dissecting the latest tech trends, or brainstorming the next big digital breakthrough.
                </p>
                
                {/* Enhanced stats cards with animations */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
                  {[
                    { value: "3+", label: "Years Experience", color: "from-green-400 to-green-500" },
                    { value: "5", label: "Projects", color: "from-blue-400 to-blue-500" },
                    { value: "0", label: "Happy Clients", color: "from-cyan-400 to-cyan-500" },
                    { value: "5+", label: "Technologies", color: "from-purple-400 to-purple-500" }
                  ].map((stat, idx) => (
                    <div 
                      key={idx}
                      className="group relative p-4 rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-700/60"
                    >
                      {/* Animated background */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      
                      <span className={`block text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </span>
                      <span className="text-sm text-slate-400">{stat.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced call to action */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                  >
                    <span className="relative z-10 flex items-center">
                      Get in Touch
                      <BsArrowRightShort className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                  
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10">View Projects</span>
                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Skills Tab - Enhanced with modern components */}
          {activeTab === 'skills' && (
            <div ref={skillsRef} className="space-y-12">
              {/* Intro with floating elements */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-green-500/20 blur-xl"></div>
                <p className="text-slate-300 leading-relaxed max-w-3xl text-lg">
                  I've honed my skills across the full web development stack, with particular expertise in React and JavaScript. Below is a breakdown of my technical proficiencies:
                </p>
              </div>
              
              {/* Skills with enhanced visuals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item group">
                    <div className="flex items-center mb-3">
                      <div 
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${skill.color} text-2xl bg-slate-800/70 mr-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        style={{ boxShadow: `0 0 15px ${skill.glow}30` }}
                      >
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-slate-400 text-sm font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-800/70 rounded-full overflow-hidden">
                          <div
                            ref={addToProgressBarsRefs}
                            data-level={skill.level}
                            className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 relative`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional skills with modern design */}
              <div className="pt-8 border-t border-slate-800/50">
                <div className="flex items-center mb-5">
                  <HiOutlineSparkles className="text-green-400 mr-2" />
                  <h3 className="text-lg font-medium text-white">Additional Technologies & Tools</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Next.js', icon: <SiNextdotjs /> },
                    { name: 'TypeScript', icon: <SiTypescript /> },
                    { name: 'Firebase', icon: null },
                    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                    { name: 'Framer Motion', icon: null },
                    { name: 'Material UI', icon: null },
                    { name: 'Chakra UI', icon: null },
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="skill-tag px-3 py-2 text-sm rounded-lg border border-slate-700/70 bg-slate-800/50 text-slate-300 hover:border-green-500/50 hover:bg-slate-800/80 transition-all duration-300 group flex items-center gap-2"
                    >
                      {skill.icon && <span className="text-green-400 text-sm">{skill.icon}</span>}
                      {skill.name}
                      <span className="w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education and Certification with enhanced design */}
              <div className="pt-8 border-t border-slate-800/50">
                <div className="flex items-center mb-6">
                  <BsLightningCharge className="text-green-400 mr-2" />
                  <h3 className="text-lg font-medium text-white">Education & Certifications</h3>
                </div>
                
                <div className="space-y-8">
                  {[
                    {
                      period: "2023 - 2027",
                      title: "BSc in Software Engineering",
                      institution: "University of Srilanka Institute of Information Technology"
                    },
                    {
                      period: "2023",
                      title: "Certificate Intensive British English Course",
                      institution: "Cadd Center Lanka(PVT)Ltd"
                    },
                    {
                      period: "2023",
                      title: "CODECON 3.0",
                      institution: "Inter University Hackathon Organized by IEEE Computer Society Sri Lanka Institute Of Information Technology"
                    },
                    {
                      period: "2023",
                      title: "Full Stack Web Development",
                      institution: "Coursera (Meta Developer Certificate)"
                    },
                    {
                      period: "2023",
                      title: "UI/UX Design Specialization",
                      institution: "Google UX Design Certificate"
                    },
                    {
                      period: "2022",
                      title: "A/L Examination",
                      institution: "Anuruddha Kumara National School Nawalapitiya"
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group relative pl-8 pb-8 last:pb-0 border-l border-slate-800/50 hover:border-green-500/50 transition-colors duration-300"
                    >
                      <div className="absolute top-0 left-0 w-2 h-2 -ml-1 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors duration-300"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/60 rounded-full">{item.period}</span>
                      </div>
                      
                      <h4 className="text-lg font-medium text-white mt-2">{item.title}</h4>
                      <p className="text-slate-400 mt-1">{item.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Services Tab - Enhanced with modern cards */}
          {activeTab === 'services' && (
            <div ref={servicesRef} className="space-y-10">
              <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl text-lg">
                I offer comprehensive web development services tailored to your specific needs. My goal is to deliver high-quality solutions that help your business grow and succeed online.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`service-card relative p-6 rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${expandedCard === index ? 'md:col-span-3' : ''} overflow-hidden cursor-pointer`}
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  >
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-start gap-5">
                      {/* Service icon with enhanced styling */}
                      <div 
                        className={`service-icon flex-shrink-0 w-14 h-14 rounded-xl ${service.iconBg} ${service.color.split(' ')[1]} flex items-center justify-center transition-all duration-300 relative`}
                        style={service.iconGlow ? { filter: `drop-shadow(0 0 8px ${service.iconGlow})` } : {}}
                      >
                        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-green-400 transition-colors">{service.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                        
                        <div className="pt-4 border-t border-slate-800/70">
                          <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">TECHNOLOGIES</p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="tech-tag px-2 py-0.5 text-xs rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {expandedCard === index && (
                            <div 
                              className="expanded-content mt-6 pt-4 border-t border-slate-800/50"
                            >
                              <h4 className="text-md font-medium text-white mb-2">What this includes:</h4>
                              <ul className="space-y-2 text-slate-300 text-sm">
                                <li className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  Custom design and development tailored to your needs
                                </li>
                                <li className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  Responsive and cross-browser compatible implementation
                                </li>
                                <li className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  Performance optimization and best practices
                                </li>
                                <li className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  Post-launch support and maintenance options
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Expand/collapse indicator */}
                    <div className="absolute bottom-2 right-2 text-xs text-slate-500">
                      {expandedCard === index ? 'Click to collapse' : 'Click to expand'}
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-bl-3xl rounded-tr-lg -z-10"></div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced CTA for services tab */}
              <div className="relative mt-12 p-8 rounded-xl bg-slate-900/70 border border-slate-800/60 overflow-hidden backdrop-blur-sm">
                {/* Background elements */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
                    <p className="text-slate-300">
                      Let's discuss how I can help bring your vision to life with a custom solution.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-green-500/25 whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center">
                      Discuss Your Project
                      <BsArrowRightShort className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;