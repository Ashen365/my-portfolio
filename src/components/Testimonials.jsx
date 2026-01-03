import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const allTestimonials = [
    {
      name: 'John Doe',
      role: 'CEO at TechCorp',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      text: 'Ashen delivered an exceptional website that exceeded our expectations. His attention to detail and creative problem-solving made the entire process smooth and enjoyable.',
      rating: 5,
      emoji: '⭐',
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      text: 'Working with Ashen was a game-changer for our product. He brought our vision to life with stunning animations and intuitive design. Highly recommended!',
      rating: 5,
      emoji: '🎯',
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      text: 'From concept to launch, Ashen was professional, responsive, and incredibly talented. Our app looks amazing and performs flawlessly. Best developer we\'ve worked with!',
      rating: 5,
      emoji: '🚀',
    },
    {
      name: 'Emma Williams',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      text: 'Ashen\'s design skills are outstanding! He created a beautiful, conversion-focused website that has significantly improved our business metrics.',
      rating: 5,
      emoji: '💎',
    },
    {
      name: 'David Lee',
      role: 'E-commerce Owner',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      text: 'The e-commerce platform Ashen built for us is fast, secure, and user-friendly. Our sales have increased by 40% since launch!',
      rating: 5,
      emoji: '📈',
    },
    {
      name: 'Lisa Anderson',
      role: 'Creative Director',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      text: 'Ashen has an incredible eye for design and a deep understanding of user experience. He transformed our outdated site into a modern masterpiece.',
      rating: 5,
      emoji: '✨',
    },
    {
      name: 'Robert Kim',
      role: 'Tech Lead',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      text: 'Outstanding work! Ashen\'s technical expertise and creative vision resulted in a product that our users absolutely love. Highly professional and reliable.',
      rating: 5,
      emoji: '🔥',
    },
    {
      name: 'Jennifer Martinez',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      text: 'Ashen brings both technical skill and design sensibility to every project. His work is always pixel-perfect and user-friendly. A true professional!',
      rating: 5,
      emoji: '🎨',
    },
    {
      name: 'James Wilson',
      role: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      text: 'Working with Ashen was effortless. He understood our vision immediately and delivered beyond expectations. Our website now converts 3x better!',
      rating: 5,
      emoji: '💰',
    },
    {
      name: 'Amanda Taylor',
      role: 'Digital Marketing Manager',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      text: 'The website Ashen built is not just beautiful, it\'s a marketing powerhouse. SEO-optimized, fast, and converts visitors into customers consistently.',
      rating: 5,
      emoji: '📊',
    },
    {
      name: 'Daniel Brown',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      text: 'Impressed by Ashen\'s clean code and scalable architecture. He built a robust system that\'s easy to maintain and extend. Top-tier developer!',
      rating: 5,
      emoji: '⚡',
    },
    {
      name: 'Sophia Garcia',
      role: 'Entrepreneur',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      text: 'Ashen turned my startup idea into reality. His dedication, creativity, and technical skills are unmatched. Couldn\'t have asked for a better partner!',
      rating: 5,
      emoji: '🌟',
    },
  ];

  // Split testimonials into 3 rows
  const row1 = allTestimonials.slice(0, 4);
  const row2 = allTestimonials.slice(4, 8);
  const row3 = allTestimonials.slice(8, 12);

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[400px] mx-3">
      <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden h-full">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          {/* Emoji Badge */}
          <div className="absolute -top-2 -right-2 text-4xl">
            {testimonial.emoji}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-2 border-white/20"
            />
            <div>
              <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-slate-300 leading-relaxed italic">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-blue-500"
        style={{ left: '10%', top: '30%' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-full mx-auto">
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
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Client <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Scrolling Testimonials - Row 1 (Left to Right) */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the row for seamless loop */}
            {[...row1, ...row1].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Scrolling Testimonials - Row 2 (Right to Left) */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [-1600, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the row for seamless loop */}
            {[...row2, ...row2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Scrolling Testimonials - Row 3 (Left to Right) */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the row for seamless loop */}
            {[...row3, ...row3].map((testimonial, index) => (
              <TestimonialCard key={`row3-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
            <p className="text-slate-300">
              <span className="text-2xl mr-2">🤝</span>
              Want to work together? Let's create something amazing!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
