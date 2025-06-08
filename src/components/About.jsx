import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaNodeJs, FaGithub, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFigma } from 'react-icons/si';
import { BsArrowRightShort } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdOutlineWeb } from 'react-icons/md';
import profilePhoto from '../assets/profile.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // State for tab selection
  const [activeTab, setActiveTab] = useState('about');
  
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
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400', level: 95 },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400', level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', level: 85 },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-300', level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400', level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400', level: 90 },
    { name: 'Git/GitHub', icon: <FaGithub />, color: 'text-white', level: 88 },
    { name: 'UI/UX Design', icon: <SiFigma />, color: 'text-pink-400', level: 75 },
  ];
  
  // Services data
  const services = [
    {
      title: "Frontend Development",
      icon: <MdOutlineWeb className="text-4xl text-cyan-400" />,
      description: "Creating modern, responsive UIs with React and Next.js that provide excellent user experiences across all devices.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl text-green-400" />,
      description: "Building robust APIs and server-side solutions with Node.js to power your web applications.",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      title: "Full-Stack Solutions",
      icon: <HiOutlineDesktopComputer className="text-4xl text-purple-400" />,
      description: "End-to-end application development that combines powerful backends with beautiful frontends.",
      technologies: ["MERN Stack", "Authentication", "Cloud Deployment", "Performance Optimization"]
    }
  ];
  
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
        { scale: 0.9, opacity: 0, rotation: -5 },
        { 
          scale: 1, 
          opacity: 1, 
          rotation: 0,
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
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Title - shadcn inspired heading */}
        <div className="mb-12 text-center relative z-10">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-3"
          >
            About Me
          </h2>
          <p 
            ref={subTitleRef}
            className="text-slate-300 max-w-lg mx-auto"
          >
            Developer, designer, and problem solver with a passion for creating exceptional web experiences
          </p>
        </div>
        
        {/* Tabs - inspired by shadcn Tabs */}
        <div 
          ref={tabsRef} 
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-lg bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'about'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'skills'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'services'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Services
            </button>
          </div>
        </div>
        
        {/* Card - inspired by shadcn Card component */}
        <div 
          ref={cardRef}
          className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-8 shadow-lg backdrop-blur-sm relative z-10"
        >
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile image column */}
              <div className="md:w-1/3">
                <div 
                  ref={imageRef}
                  className="relative"
                >
                  <div className="w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-0 border-2 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <img 
                      src={profilePhoto} 
                      alt="Ashen Shanilka Herath" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Bio content column */}
              <div className="md:w-2/3 space-y-6">
                <p 
                  ref={addToParagraphsRefs}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  I'm <span className="text-green-400 font-medium">Ashen Shanilka Herath</span>, a MERN stack virtuoso and a problem-solver at heart. I don't just build web applications—I engineer seamless digital experiences that are fast, responsive, and intuitive. With a deep mastery of React, JavaScript, and modern web technologies, I turn complex ideas into elegant, scalable solutions.
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
                
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                  <div className="text-center p-4 border border-slate-800 rounded-lg bg-slate-900/50">
                    <span className="block text-2xl font-bold text-green-400">3+</span>
                    <span className="text-sm text-slate-400">Years Experience</span>
                  </div>
                  <div className="text-center p-4 border border-slate-800 rounded-lg bg-slate-900/50">
                    <span className="block text-2xl font-bold text-blue-400">5</span>
                    <span className="text-sm text-slate-400">Projects</span>
                  </div>
                  <div className="text-center p-4 border border-slate-800 rounded-lg bg-slate-900/50">
                    <span className="block text-2xl font-bold text-cyan-400">0</span>
                    <span className="text-sm text-slate-400">Happy Clients</span>
                  </div>
                  <div className="text-center p-4 border border-slate-800 rounded-lg bg-slate-900/50">
                    <span className="block text-2xl font-bold text-purple-400">5+</span>
                    <span className="text-sm text-slate-400">Technologies</span>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-green-500/25 focus:ring-2 focus:ring-green-500/50 focus:outline-none"
                  >
                    Get in Touch
                    <BsArrowRightShort className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div ref={skillsRef} className="space-y-8">
              <p className="text-slate-300 leading-relaxed max-w-3xl">
                I've honed my skills across the full web development stack, with particular expertise in React and JavaScript. Below is a breakdown of my technical proficiencies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item group">
                    <div className="flex items-center mb-2">
                      <span className={`mr-2 ${skill.color} text-xl group-hover:scale-125 transition-transform duration-300`}>{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full h-2.5">
                      <div
                        //ref={addToProgressBarsRefs}
                        data-level={skill.level}
                        className={`h-full rounded-full ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      > 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional skills section */}
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Other Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Redux', 'GraphQL', 'Firebase', 'Webpack', 'Jest', 'CI/CD', 'AWS', 'Docker'].map((skill, index) => (
                    <span 
                      key={index}
                      className="skill-tag px-3 py-1 text-sm rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-green-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Education and Certification */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <h3 className="text-lg font-medium text-white mb-6">Education & Certifications</h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-slate-800/50">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2023 - 2027</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">BSc in Software Engineering</h4>
                      <p className="text-slate-400">University of Srilanka Institute of Information Technology</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2023</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">Certificate Intensive British English Course</h4>
                      <p className="text-slate-400">Cadd Center Lanka(PVT)Ltd</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2023</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">CODECON 3.0</h4>
                      <p className="text-slate-400">Inter University Hackathon Organized by IEEE omputer Society Sri lanka Institute Of Information technology </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-slate-800/50">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2023</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">Full Stack Web Development</h4>
                      <p className="text-slate-400">Coursera (Meta Developer Certificate)</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2023</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">UI/UX Design Specialization</h4>
                      <p className="text-slate-400">Google UX Design Certificate</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2022</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">A/L Examination</h4>
                      <p className="text-slate-400">Anuruddha Kumara National School Nawalapitiya</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2021-2022</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">Diploma In Software Engineering (Dise) Pearson Assured </h4>
                      <p className="text-slate-400">Esoft Metro Campus</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2020-2021</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">Certificate In Python Development</h4>
                      <p className="text-slate-400">Narada Accademy</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2018</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">Certificate In Graphic Designing</h4>
                      <p className="text-slate-400">Esoft Metro Campus</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2017</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">Certificate In Information Technology</h4>
                      <p className="text-slate-400">Esoft Metro Campus</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <span className="text-sm font-medium text-slate-400">2017</span>
                    </div>
                    <div className="sm:w-3/4">
                      <h4 className="text-lg font-medium text-white">O/L Examination</h4>
                      <p className="text-slate-400">Anuruddha Kumara National School Nawalapitiya </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
          
          {/* Services Tab */}
          {activeTab === 'services' && (
            <div ref={servicesRef} className="space-y-8">
              <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">
                I offer comprehensive web development services tailored to your specific needs. My goal is to deliver high-quality solutions that help your business grow and succeed online.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="service-card p-6 rounded-lg border border-slate-800 bg-slate-900/30 backdrop-blur-sm transition-all hover:shadow-lg"
                  >
                    <div className="service-icon mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                    <div className="pt-3 border-t border-slate-800">
                      <p className="text-xs text-slate-500 mb-2">TECHNOLOGIES</p>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="tech-tag px-2 py-0.5 text-xs rounded-full bg-slate-800/70 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-bl-3xl rounded-tr-lg -z-10"></div>
                  </div>
                ))}
              </div>
              
              {/* CTA for services tab */}
              <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-green-500/25 focus:ring-2 focus:ring-green-500/50 focus:outline-none"
                  >
                    Discuss Your Project
                    <BsArrowRightShort className="text-xl" />
                  </a>
                </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;