import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, X, Phone } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Mail, label: 'Email', href: 'mailto:ashenherath365@gmail.com', color: 'from-green-400 to-emerald-500' },
    { icon: Phone, label: 'Call', href: 'tel:+94776376306', color: 'from-blue-400 to-cyan-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Ashen365', color: 'from-gray-600 to-gray-800' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashen-herath-b88879257/', color: 'from-blue-500 to-blue-600' },
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 md:bottom-20 right-0 flex flex-col gap-2 md:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-full bg-gradient-to-r ${action.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen 
            ? '0 0 0 0 rgba(59, 130, 246, 0)'
            : [
                '0 0 0 0 rgba(59, 130, 246, 0.7)',
                '0 0 0 20px rgba(59, 130, 246, 0)',
              ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isOpen ? 0 : Infinity,
          }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
