import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const btnRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const roles = [
      "UI/UX Designer", 
      "Frontend Developer", 
      "Backend Developer", 
      "Full Stack Developer",
      "Web Designer",
      "Graphic Designer",
      "Content Creator"
    ];

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial hidden state
    gsap.set([nameRef.current, titleRef.current, cardRef.current, btnRef.current], {
      opacity: 0,
      y: 40
    });

    // Entrance animation
    tl.to(nameRef.current, { opacity: 1, y: 0, duration: 1 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(cardRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(btnRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");

    // Typing effect loop
    const typingTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    roles.forEach((role) => {
      typingTl.to(titleRef.current, {
        text: role,
        duration: 1.5,
        ease: "none",
      }).to({}, { duration: 1.2 }); // Pause before next
    });

    // Parallax effect on scroll
    if (sectionRef.current) {
      gsap.to(".parallax-bg", {
        y: (i, el) => -ScrollTrigger.maxScroll(window) * el.dataset.speed,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Clean up
    return () => {
      typingTl.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Modern Background with Layers */}
      <div className="absolute inset-0 bg-[#0a0a12] z-0"></div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-600/30 via-blue-600/20 to-transparent"></div>
      </div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute top-10 right-[10%] w-72 h-72 bg-green-500/20 rounded-full mix-blend-screen filter blur-[80px] parallax-bg" 
        data-speed="0.03"
        style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }}
      ></div>
      <div 
        className="absolute bottom-10 left-[15%] w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] parallax-bg" 
        data-speed="0.05"
        style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[70px] parallax-bg" 
        data-speed="0.04"
        style={{ transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` }}
      ></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMjEyMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjAyMDM1IiBmaWxsLW9wYWNpdHk9Ii4yIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjA1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB0eXBlPSJmcmFjdGFsTm9pc2UiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCBpbj0ibm9pc2UiIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiIHJlc3VsdD0iYnciLz48ZmVDb21wb3NpdGUgaW49ImJ3IiBpbjI9ImJ3IiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazE9IjAiIGsyPSIwLjEiIGszPSIwIiBrND0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')] opacity-30 z-0 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-2 inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-xs font-medium text-green-400">Available for freelance work</span>
        </div>

        <h1
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-300 to-blue-400">
            Hi, I'm Ashen
          </span>
        </h1>

        <div className="h-8 md:h-10 mb-8">
          <p
            ref={titleRef}
            className="text-xl md:text-2xl lg:text-3xl text-slate-200 font-medium inline-flex items-center"
          >
            <span className="mr-2">I'm a</span>
            <span className="text-green-400"></span>
            <span className="typing-cursor ml-1 inline-block w-0.5 h-6 md:h-8 bg-green-400 animate-blink"></span>
          </p>
        </div>

        <div
          ref={cardRef}
          className="mb-10 backdrop-blur-lg bg-white/5 border border-white/10 p-1 rounded-2xl shadow-[0_0_40px_rgba(8,_112,_184,_0.1)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                ),
                title: "UI/UX Design",
                color: "text-green-400"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
                title: "Frontend Development",
                color: "text-blue-400"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                ),
                title: "Creative Direction",
                color: "text-purple-400"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 md:p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors duration-300">
                <div className={`${item.color} p-3 rounded-xl bg-white/5`}>
                  {item.icon}
                </div>
                <span className="font-medium text-slate-200">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={btnRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.behance.net/ashenshanilka"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </a>
          
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden rounded-full border border-white/20 text-slate-200 font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span className="flex items-center">
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M14 9l6 6-6 6"></path>
                <path d="M4 4v7a4 4 0 0 0 4 4h11"></path>
              </svg>
            </span>
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {[
            {
              href: "https://github.com/Ashen365",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )
            },
            {
              href: "https://www.behance.net/ashenshanilka/",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              )
            },
            {
              href: "https://www.linkedin.com/in/ashen-herath-b88879257/",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              )
            },
            {
              href: "https://dribbble.com/ashen-shanilka",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                </svg>
              )
            }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
              aria-label={`Social link ${index + 1}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs text-slate-400 mb-2 animate-bounce">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;