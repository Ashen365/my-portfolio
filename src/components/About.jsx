import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Award, Users, CheckCircle, BookOpen, Dumbbell, Briefcase, Monitor, Palette, Sparkles, GraduationCap } from 'lucide-react';
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
    { id: 'education', label: 'Education', icon: GraduationCap },
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

  const education = [
    { 
      year: 'Jan 2023 - Present', 
      degree: 'BSc (Hons) in Information Technology', 
      institution: 'University of Sri Lanka information Technology',
      type: 'Undergraduate',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      year: 'Jan 2021 - July 2021', 
      degree: 'Diploma In Software Engineering (DISE)', 
      institution: 'Esoft Metro Campus',
      type: 'Diploma',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      year: '2021', 
      degree: 'GCE A/L - Engineering Technology', 
      institution: 'Anuruddha Kumara National School, Nawalapitiya',
      type: 'Advanced Level',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      year: 'Jan 2018 - July 2018', 
      degree: 'Certificate in Graphic Designing', 
      institution: 'Esoft Metro Campus',
      type: 'Certificate',
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      year: '2017', 
      degree: 'GCE O/L', 
      institution: 'Anuruddha Kumara National School, Nawalapitiya',
      type: 'Ordinary Level',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      year: 'Dec 2016 - Apr 2017', 
      degree: 'Certificate in Information Technology', 
      institution: 'Esoft Metro Campus',
      type: 'Certificate',
      color: 'from-red-500 to-pink-500'
    },
  ];

  return (
    <section id="about" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
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
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-4 px-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-1 sm:p-2 overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
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
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                {photos.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
                      index === currentPhotoIndex 
                        ? 'bg-white w-6 sm:w-8' 
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
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-2 sm:p-3 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-2 sm:p-3 transition-all z-10 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Photo Counter */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/50 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium z-10">
                {currentPhotoIndex + 1} / {photos.length}
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 sm:pb-8"
              >
                <span className="text-white font-bold text-lg sm:text-2xl">✨ That's me!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Ashen Herath</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                I'm a passionate Full Stack Developer and UI/UX Designer with a love for creating beautiful, 
                functional digital experiences. I specialize in turning ideas into reality through clean code 
                and thoughtful design.
              </p>
              <motion.a
                href={resumePDF}
                download
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-sm sm:text-base"
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-2 mx-auto" />
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
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
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 flex-wrap px-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all inline-flex items-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
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
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
          >
            {activeTab === 'story' && (
              <div className="space-y-5 sm:space-y-6 text-slate-300 leading-relaxed">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-4 border-blue-500 pl-4 sm:pl-6 mb-6 sm:mb-8"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    👨‍💻 About Ashen Shanilka Herath
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400">
                    Final Year IT Undergraduate | Full Stack Web Developer | Tech Enthusiast
                  </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 sm:p-6"
                >
                  <p className="text-sm sm:text-base md:text-lg">
                    🎓 I am <span className="text-white font-semibold">Ashen Shanilka Herath</span>, a Final Year Undergraduate at 
                    <span className="text-blue-400 font-semibold"> SLIIT University</span>, currently pursuing a 
                    <span className="text-purple-400 font-semibold"> BSc (Hons) in Information Technology</span>.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg mt-3">
                    📅 Born on <span className="text-white font-semibold">August 12, 2001</span>, and based in 
                    <span className="text-white font-semibold"> Nawalapitiya, Sri Lanka</span>. From a young age, I have had a 
                    strong passion for technology and information systems, which inspired me to build a career in the IT field.
                  </p>
                </motion.div>

                {/* Tech Journey */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl">🚀</span> My Tech Journey
                  </h4>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
                    <p className="text-sm sm:text-base md:text-lg mb-3">
                      My journey in IT began during my university group assignments, where I initially worked as a 
                      <span className="text-purple-400 font-semibold"> UI/UX Designer and Developer</span>. Through these experiences, 
                      I gained a solid understanding of user-centered design, problem-solving, and teamwork.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">
                      As my interest grew, I expanded my skill set into <span className="text-blue-400 font-semibold">Frontend Development</span> and 
                      later <span className="text-green-400 font-semibold">Backend Development</span>. Today, I am actively working towards 
                      becoming a <span className="text-white font-bold">Full Stack Web Developer</span>, continuously learning and improving 
                      my technical expertise.
                    </p>
                  </div>
                </motion.div>

                {/* Professional Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl">💼</span> Professional Experience
                  </h4>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-sm sm:text-base md:text-lg">
                      Currently, I am working as an <span className="text-green-400 font-bold">Intern – Full Stack Web Developer</span> at 
                      the <span className="text-white font-semibold">Sri Lanka Ports Authority</span>. This role has provided me with 
                      valuable exposure to real-world enterprise systems, scalable web applications, and industry-standard development 
                      practices, helping me strengthen both my technical and professional skills.
                    </p>
                  </div>
                </motion.div>

                {/* Career Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl">🎯</span> Career Vision
                  </h4>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
                    <p className="text-sm sm:text-base md:text-lg">
                      My goal is to develop clean, scalable, and user-focused web applications while contributing meaningfully to 
                      innovative projects in the IT industry. I am highly motivated, eager to learn, and committed to growing as a 
                      skilled Full Stack Developer.
                    </p>
                  </div>
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative mt-6 sm:mt-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
                  <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 rounded-xl p-6 sm:p-8 text-center">
                    <span className="text-4xl sm:text-5xl mb-4 block">💡</span>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-white italic leading-relaxed">
                      "I believe continuous learning, creativity, and consistency are the foundations of a successful software engineer."
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skillGroup, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, j) => (
                        <span
                          key={j}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-slate-300"
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
              <div className="space-y-4 sm:space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 sm:gap-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <exp.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-blue-400 font-semibold mb-1">{exp.year}</div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h4>
                      <p className="text-sm sm:text-base text-slate-400">{exp.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-6 sm:mb-8"
                >
                  <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Academic Journey</h3>
                  <p className="text-slate-400 mt-2">Building knowledge, one step at a time</p>
                </motion.div>
                
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      className="relative bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative flex items-start gap-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${edu.color} text-white`}>
                              {edu.type}
                            </span>
                            <span className="text-xs sm:text-sm text-blue-400 font-semibold">{edu.year}</span>
                          </div>
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{edu.degree}</h4>
                          <p className="text-sm sm:text-base text-slate-400 flex items-center gap-2">
                            <span className="text-slate-500">📍</span>
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
