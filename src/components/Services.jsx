import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      emoji: '💻',
      title: 'Frontend Development',
      description: 'Building responsive, interactive websites using React.js, Next.js, and Tailwind CSS with modern best practices.',
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Friendly'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      emoji: '🎨',
      title: 'UI/UX Design',
      description: 'Designing modern, clean, and user-friendly interfaces with Figma and Adobe XD that users love.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Visual Design'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      emoji: '📱',
      title: 'Mobile Development',
      description: 'Creating responsive mobile applications tailored for both Android and iOS platforms.',
      features: ['Cross-platform', 'Native Performance', 'Clean UI/UX', 'App Store Ready'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      emoji: '⚙️',
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and databases like MongoDB.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Integration'],
      color: 'from-orange-500 to-red-500',
    },
    {
      emoji: '🚀',
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from concept to deployment with scalable architecture.',
      features: ['Full MERN Stack', 'DevOps', 'CI/CD', 'Cloud Deployment'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      emoji: '✨',
      title: 'Animation & Effects',
      description: 'Adding life to your projects with smooth animations using Framer Motion and GSAP.',
      features: ['Micro-interactions', 'Page Transitions', 'Scroll Effects', '3D Elements'],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6">
      {/* Background Blobs */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10"
          style={{
            background: i === 0 ? '#3b82f6' : '#ec4899',
            left: `${i * 70}%`,
            top: `${i * 50}%`,
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
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🛠️
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient Overlay on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.emoji}
                </motion.div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-xl`}>
                    →
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
