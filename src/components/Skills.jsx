import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiTypescript, SiNextdotjs, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      emoji: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: '#06B6D4' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 98, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95, color: '#1572B6' },
      ],
    },
    {
      title: 'Backend',
      emoji: '⚙️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, level: 88, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#47A248' },
      ],
    },
    {
      title: 'Tools & Design',
      emoji: '🛠️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', icon: <FaFigma />, level: 92, color: '#F24E1E' },
        { name: 'GitHub', icon: <FaGithub />, level: 90, color: '#181717' },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-purple-500"
        style={{ right: '10%', top: '20%' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

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
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            💪
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-4 px-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
                <span className="text-3xl sm:text-4xl">{category.emoji}</span>
                <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                      style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <motion.div
                            className="text-3xl sm:text-4xl"
                            style={{ color: skill.color }}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-white">{skill.name}</span>
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}90)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <p className="text-slate-300 text-sm sm:text-base">
              <span className="text-xl sm:text-2xl mr-2">🚀</span>
              Always learning and exploring new technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
