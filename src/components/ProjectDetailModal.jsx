import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 shadow-2xl"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all z-10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40`} />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-bold shadow-lg`}>
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title & Tech Stack */}
            <div className="mb-6">
              <h2 className="text-4xl font-black text-white mb-3">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-blue-400">
                <Code className="w-5 h-5" />
                <p className="text-lg font-medium">{project.technology}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                📝 Project Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                ✨ Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Responsive Design',
                  'Modern UI/UX',
                  'Fast Performance',
                  'SEO Optimized',
                  'Cross-browser Compatible',
                  'Accessibility Ready'
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">2024</p>
                <p className="text-sm text-slate-400">Year</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Solo</p>
                <p className="text-sm text-slate-400">Team Size</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Code className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Web</p>
                <p className="text-sm text-slate-400">Platform</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-lg hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </motion.a>
              
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
