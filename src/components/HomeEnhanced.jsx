import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Palette, Code, ClipboardList } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import useTextScramble from '../hooks/useTextScramble';

const Home = () => {
  const [currentRole, setCurrentRole] = useState("UI/UX Designer");
  const { displayText, scramble } = useTextScramble(currentRole);
  const contentRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const roles = [
      "UI/UX Designer", 
      "Backend Developer", 
      "Full Stack Developer",
      "Web Developer",
      "Software Engineer"
    ];
    let currentIndex = 0;
    
    // Initial scramble
    scramble(roles[0]);
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      const newRole = roles[currentIndex];
      setCurrentRole(newRole);
      scramble(newRole);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <ParticleBackground />

      <ParticleBackground />

      {/* Animated Background Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{
            background: ['#3b82f6', '#8b5cf6', '#ec4899'][i],
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ y }}
      >
        {/* Greeting Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <motion.span
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-slate-300">Available for Work</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% auto' }}
          >
            Hello, I'm
          </motion.span>
          <br />
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ashen Herath
          </motion.span>
        </motion.h1>

        {/* Role Display */}
        <motion.div
          className="mb-12 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-2xl md:text-4xl font-semibold text-slate-400 mr-3">I'm a</span>
          <motion.span 
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-mono"
            key={displayText}
          >
            {displayText}
          </motion.span>
          <motion.span
            className="ml-1 w-1 h-8 md:h-10 bg-green-400 inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { icon: Palette, title: "UI/UX Design", color: "from-pink-500 to-rose-500" },
            { icon: Code, title: "Development", color: "from-blue-500 to-cyan-500" },
            { icon: ClipboardList, title: "Project Development Planning", color: "from-purple-500 to-indigo-500" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <div className="relative">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring" }}
                >
                  <skill.icon className="w-16 h-16 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="https://www.behance.net/ashenshanilka"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-16 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            { 
              href: "https://github.com/Ashen365", 
              label: "GitHub",
              icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            },
            { 
              href: "https://www.behance.net/ashenshanilka/", 
              label: "Behance",
              icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
            },
            { 
              href: "https://www.linkedin.com/in/ashen-herath-b88879257/", 
              label: "LinkedIn",
              icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            },
            { 
              href: "https://dribbble.com/ashen-shanilka", 
              label: "Dribbble",
              icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-2.576-20.887c-1.962 2.257-3.357 5.098-3.93 7.679-.584-.146-1.154-.27-1.674-.344.899-3.197 3.229-5.753 6.239-7.335h-.635zm8.576 5.887c-1.526-.964-3.326-1.5-5.215-1.5-.456 0-.905.034-1.348.095.721 1.199 1.459 2.429 2.186 3.651 2.156-.894 3.779-2.301 4.377-2.246zm-12.626 6.652c.195.026.403.05.625.076.932.107 1.931.153 2.942.137 1.307-.021 2.631-.121 3.864-.313-.514-1.126-1.044-2.248-1.592-3.353-2.216.902-3.982 2.399-5.839 3.453zm6.626-7.652c-.714-1.228-1.448-2.444-2.161-3.64-2.674 1.274-4.672 3.735-5.39 6.7.854.099 1.791.15 2.767.15 1.655 0 3.31-.211 4.784-.61zm3.595 1.372c-.631.216-1.318.411-2.047.582l-.002-.001c.701 1.357 1.376 2.733 2.022 4.122 1.716-1.138 2.906-3.041 3.006-5.229-.644.139-1.335.292-2.055.458l-.924.068zm-2.597 5.628c.588 1.228 1.148 2.472 1.675 3.726 2.439-1.466 4.182-4.017 4.535-6.979-.427.092-.873.182-1.337.27-.837.159-1.716.294-2.627.401-.415 1.064-.847 2.113-1.246 2.582z"/></svg>
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all text-slate-300 hover:text-white"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400">Scroll Down</span>
            <motion.div 
              className="w-6 h-10 border-2 border-slate-400/30 rounded-full p-2 flex justify-center"
            >
              <motion.div
                className="w-1 h-2 bg-slate-400 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
