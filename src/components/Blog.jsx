import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      category: 'React',
      emoji: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Discover tips and tricks to build beautiful, responsive interfaces with Tailwind CSS utility classes.',
      date: 'Dec 10, 2023',
      readTime: '7 min read',
      category: 'CSS',
      emoji: '🎨',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop',
    },
    {
      title: 'Modern JavaScript ES2023',
      excerpt: 'Explore the latest features in JavaScript ES2023 and how they improve your development workflow.',
      date: 'Dec 5, 2023',
      readTime: '6 min read',
      category: 'JavaScript',
      emoji: '⚡',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop',
    },
    {
      title: 'Building RESTful APIs with Node.js',
      excerpt: 'A comprehensive guide to creating scalable and secure RESTful APIs using Node.js and Express.',
      date: 'Nov 28, 2023',
      readTime: '10 min read',
      category: 'Backend',
      emoji: '🚀',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    },
    {
      title: 'UI/UX Design Principles',
      excerpt: 'Essential design principles every developer should know to create better user experiences.',
      date: 'Nov 20, 2023',
      readTime: '8 min read',
      category: 'Design',
      emoji: '✨',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
      title: 'Web Performance Optimization',
      excerpt: 'Learn techniques to optimize your web applications for speed and better user experience.',
      date: 'Nov 15, 2023',
      readTime: '9 min read',
      category: 'Performance',
      emoji: '⚡',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="blog" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-purple-500"
        style={{ right: '10%', top: '40%' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

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
            📝
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} mix-blend-multiply`}
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Category Badge on Image */}
                <div className="absolute top-3 left-3">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${post.color} text-white backdrop-blur-sm`}>
                    {post.category}
                  </span>
                </div>
                
                {/* Emoji on Image */}
                <motion.div
                  className="absolute top-3 right-3 text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {post.emoji}
                </motion.div>
              </div>

              <div className="relative p-8">
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>

                {/* Read More Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center text-white text-xl`}>
                    →
                  </div>
                </motion.div>
              </div>
            </motion.article>
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
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
