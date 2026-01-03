import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Zap, Rocket, Award, BookOpen, MessageCircle, Mail, FileText, Menu, X } from 'lucide-react';
import resumePDF from "../assets/Ashen's shanilkaCV.pdf";

const NAV_LINKS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Zap },
  { id: "projects", label: "Projects", icon: Rocket },
  { id: "skills", label: "Skills", icon: Award },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "testimonials", label: "Testimonials", icon: MessageCircle },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      NAV_LINKS.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.id);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
              Ashen Herath
            </h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 ml-24">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveSection(link.id)}
                >
                  <motion.div
                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === link.id
                        ? "bg-white/10 backdrop-blur-md text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <link.icon className="w-4 h-4" />
                      <span className="hidden xl:inline">{link.label}</span>
                    </span>
                  </motion.div>
                  
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* CV Button */}
            <motion.a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-16 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span>Resume</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FileText className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      setActiveSection(link.id);
                      setIsOpen(false);
                    }}
                  >
                    <motion.div
                      className={`px-4 py-3 rounded-xl transition-all cursor-pointer ${
                        activeSection === link.id
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-white"
                          : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-3">
                        <link.icon className="w-6 h-6" />
                        <span className="font-medium">{link.label}</span>
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CV Button */}
              <motion.a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Download Resume</span>
                  <FileText className="w-5 h-5" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;