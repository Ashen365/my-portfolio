import React from 'react';
import { motion } from 'framer-motion';
import AshanImage from '../assets/Ashan.jpg';
import DilankaImage from '../assets/Dilanka.jpg';
import DiniduImage from '../assets/Diniduliyanage.jpg';
import LahiruImage from '../assets/Lahiru.jpeg';
import LakshithaImage from '../assets/Lakshitha.jpg';
import OsandaImage from '../assets/Osanda.jpg';
import ParamiImage from '../assets/Paramee.jpg';
import SathiraImage from '../assets/sathira.jpg';
import ThilinaImage from '../assets/Thilina.jpg';
import ManashaImage from '../assets/Manasha.jpeg';
const Testimonials = () => {
  const allTestimonials = [
    {
      name: 'Osanda Lakshitha',
      role: 'Full-Stack Developer',
      image: OsandaImage,
      text: 'Ashen\'s full-stack expertise is impressive. He built a robust application with clean architecture on both frontend and backend. His code quality and technical knowledge are top-notch!',
      rating: 5,
    },
    {
      name: 'Dinidu Liyanage',
      role: 'Celyna Tea(pvt) Ltd',
      image: DiniduImage,
      text: 'Ashen created an exceptional e-commerce platform for our tea business. The website perfectly showcases our products and has significantly increased our online sales. Highly professional work!',
      rating: 4,
    },
    {
      name: 'Ashan Dilakshana',
      role: 'Full Stack Developer',
      image: AshanImage,
      text: 'As a fellow developer, I\'m impressed by Ashen\'s technical skills. His code is well-structured, scalable, and follows best practices. Great collaboration experience!',
      rating: 5,
    },
    {
      name: 'Thilina Ihalagedara',
      role: 'E-commerce Owner',
      image: ThilinaImage,
      text: 'The e-commerce platform Ashen built for us is fast, secure, and user-friendly. Our sales have increased by 40% since launch!',
      rating: 5,
    },
    {
      name: 'Lahiru Madushanka',
      role: 'Creative Director',
      image: LahiruImage,
      text: 'Ashen has an incredible eye for design and a deep understanding of user experience. He transformed our outdated site into a modern masterpiece.',
      rating: 4,
    },
    {
      name: 'Tharindu Dilanka ',
      role: 'Tech Lead',
      image: DilankaImage,
      text: 'Outstanding work! Ashen\'s technical expertise and creative vision resulted in a product that our users absolutely love. Highly professional and reliable.',
      rating: 5,
    },
    {
      name: 'Lakshitha Karunaweera',
      role: 'Business Owner',
      image: LakshithaImage,
      text: 'Working with Ashen was effortless. He understood our vision immediately and delivered beyond expectations. Our website now converts 3x better!',
      rating: 5,
    },
    {
      name: 'Parami Aponsu',
      role: 'Project Manager',
      image: ParamiImage,
      text: 'Managing this project with Ashen was effortless. His professionalism, timely updates, and ability to adapt to changes made our collaboration seamless. Highly recommended!',
      rating: 4,
    },
    {
      name: 'Sathira Pramudith',
      role: 'Full Stack Developer',
      image: SathiraImage, 
      text: 'Working alongside Ashen was inspiring. His clean code, scalable architecture, and deep understanding of both frontend and backend make him a top-tier full-stack developer!',
      rating: 5,
    },
    {
      name: 'Manasha Sewmini',
      role: 'Full Stack Developer',
      image: ManashaImage,
      text: 'Collaborating with Ashen elevated my development skills. His technical expertise, problem-solving approach, and code quality set a high standard. Truly exceptional developer!',
      rating: 5,
    },
  ];

  // Split testimonials into 3 rows
  const row1 = allTestimonials.slice(0, 4);
  const row2 = allTestimonials.slice(4, 8);
  const row3 = allTestimonials.slice(8, 12);

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] mx-2 sm:mx-3">
      <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden h-full">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          {/* Emoji Badge */}
          <div className="absolute -top-2 -right-2 text-4xl">
            {testimonial.emoji}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/20"
            />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">{testimonial.name}</h4>
              <p className="text-xs sm:text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-3 sm:mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-base sm:text-lg md:text-xl">⭐</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-slate-300 leading-relaxed italic text-sm sm:text-base">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-blue-500"
        style={{ left: '10%', top: '30%' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-full mx-auto overflow-hidden">
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
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-4 px-4">
            Client <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Scrolling Testimonials - Row 1 (Left to Right) */}
        <div className="mb-4 sm:mb-6 md:mb-8 overflow-hidden -mx-4 sm:-mx-6">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
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
        <div className="mb-4 sm:mb-6 md:mb-8 overflow-hidden -mx-4 sm:-mx-6">
          <motion.div
            className="flex"
            animate={{
              x: [-1200, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
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
        <div className="mb-4 sm:mb-6 md:mb-8 overflow-hidden -mx-4 sm:-mx-6">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
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
          className="mt-8 sm:mt-12 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <p className="text-slate-300 text-sm sm:text-base">
              <span className="text-xl sm:text-2xl mr-2">🤝</span>
              Want to work together? Let's create something amazing!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
