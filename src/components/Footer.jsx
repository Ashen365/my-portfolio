import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);
  const iconsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animations for footer
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Set initial state
    gsap.set([iconsRef.current, textRef.current], { 
      opacity: 0, 
      y: 20 
    });
    
    // Animation sequence
    tl.to(iconsRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      stagger: 0.1
    })
    .to(textRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.6 
    }, "-=0.4");
    
    // Hover animations for social icons
    const icons = iconsRef.current.querySelectorAll('a');
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-slate-950 text-white py-12 sm:py-16 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="relative mb-8">
          <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 inline-block">
            Let's Connect!
          </h3>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div 
          ref={iconsRef}
          className="flex gap-6 sm:gap-8 mb-8"
        >
          <a
            href="https://github.com/Ashen365"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl text-slate-300 hover:text-green-400 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashen-herath-b88879257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl text-slate-300 hover:text-blue-400 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ashanilka62"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl text-slate-300 hover:text-blue-500 transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:ashenherath365@gmail.com"
            className="text-2xl sm:text-3xl text-slate-300 hover:text-green-500 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        
        <div 
          ref={textRef} 
          className="text-center"
        >
          <p className="text-base text-slate-400 mb-4">
            Available for freelance opportunities and collaborations
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6"></div>
          <p className="text-sm text-slate-500">
            © 2025 Ashen Shanilka. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;