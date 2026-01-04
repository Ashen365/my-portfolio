import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Award, Users, CheckCircle, BookOpen, Dumbbell, Briefcase, Monitor, Palette, Sparkles } from 'lucide-react';
import photo1 from '../assets/photo1.jpg.jpeg';
import photo2 from '../assets/photo2.jpg.jpeg';
import photo3 from '../assets/photo3.jpg.jpeg';
import photo4 from '../assets/photo4.jpg.jpeg';
import photo5 from '../assets/photo5.jpg.jpeg';
import photo6 from '../assets/photo6.jpg.jpeg';
import photo7 from '../assets/photo7.jpg.jpeg';
import photo8 from '../assets/photo8.jpg.jpeg';
import photo9 from '../assets/photo9.jpg.jpeg';
import photo10 from '../assets/photo10.jpg.jpeg';
import resumePDF from "../assets/Ashen's shanilkaCV.pdf";

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

  // Auto-slide photos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Rocket },
    { label: 'Years Experience', value: '3+', icon: Award },
    { label: 'Happy Clients', value: '10+', icon: Users },
    { label: 'Available for Work', value: 'Yes', icon: CheckCircle },
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: Dumbbell },
    { id: 'experience', label: 'Experience', icon: Briefcase },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], color: 'from-blue-500 to-cyan-500' },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'], color: 'from-green-500 to-emerald-500' },
    { category: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'], color: 'from-purple-500 to-pink-500' },
    { category: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Docker'], color: 'from-orange-500 to-red-500' },
  ];

  const experiences = [
    { year: '2023 - Present', role: 'Full Stack Developer', company: 'Freelance', icon: Monitor },
    { year: '2022 - 2023', role: 'Frontend Developer', company: 'Tech Startup', icon: Palette },
    { year: '2021 - 2022', role: 'UI/UX Designer', company: 'Creative Agency', icon: Sparkles },
  ];

  return (
    <section id="about" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6">
      {/* Background Blobs */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10"
          style={{
            background: i === 0 ? '#3b82f6' : '#8b5cf6',
            left: `${i * 70}%`,
            top: `${i * 40}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-5xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Image Slider */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-2 overflow-hidden">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhotoIndex}
                    src={photos[currentPhotoIndex]}
                    alt={`Photo ${currentPhotoIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {photos.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPhotoIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Photo Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium z-10">
                {currentPhotoIndex + 1} / {photos.length}
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8"
              >
                <span className="text-white font-bold text-2xl">✨ That's me!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Ashen Herath</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and UI/UX Designer with a love for creating beautiful, 
                functional digital experiences. I specialize in turning ideas into reality through clean code 
                and thoughtful design.
              </p>
              <motion.a
                href={resumePDF}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download CV</span>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📥
                </motion.span>
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-10 h-10 text-blue-400 mb-2" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12"
          >
            {activeTab === 'story' && (
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  🎨 From a young age, I've been fascinated by how technology can solve real-world problems 
                  and create meaningful experiences. My journey into web development started with a simple 
                  curiosity about how websites work, which quickly evolved into a deep passion.
                </p>
                <p className="text-lg">
                  💡 I believe that great design is not just about aesthetics—it's about creating intuitive, 
                  accessible experiences that users love. Every project I work on is an opportunity to blend 
                  creativity with functionality.
                </p>
                <p className="text-lg">
                  🚀 When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always learning, always growing, 
                  and always excited about the next challenge.
                </p>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skillGroup, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, j) => (
                        <span
                          key={j}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <exp.icon className="w-12 h-12 text-blue-400" />
                    <div className="flex-1">
                      <div className="text-sm text-blue-400 font-semibold mb-1">{exp.year}</div>
                      <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                      <p className="text-slate-400">{exp.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
