import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashen-herath-b88879257/",
      gradient: "from-blue-500 to-blue-600",
      color: "text-blue-400"
    },
    {
      icon: <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      label: "GitHub",
      href: "https://github.com/Ashen365",
      gradient: "from-gray-600 to-gray-800",
      color: "text-gray-400"
    },
    {
      icon: <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
      label: "Twitter",
      href: "https://x.com/ashanilka62",
      gradient: "from-sky-400 to-blue-500",
      color: "text-sky-400"
    },
    {
      icon: <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
      label: "Email",
      href: "mailto:ashenherath365@gmail.com",
      gradient: "from-green-400 to-emerald-500",
      color: "text-green-400"
    }
  ];

  const quickLinks = [
    { id: "home", label: "Home", emoji: "🏠" },
    { id: "about", label: "About", emoji: "👨‍💻" },
    { id: "services", label: "Services", emoji: "⚡" },
    { id: "projects", label: "Projects", emoji: "🚀" },
    { id: "skills", label: "Skills", emoji: "💪" },
    { id: "contact", label: "Contact", emoji: "📬" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-blue-500"
        style={{ left: '5%', top: '10%' }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-purple-500"
        style={{ right: '5%', bottom: '10%' }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ashen Herath
              </h3>
            </div>
            <p className="text-slate-400 mb-6">
              Full-Stack Developer passionate about creating beautiful and functional web experiences. Let's build something amazing together! 🚀
            </p>
            <div className="flex items-center gap-2 text-sm">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400 font-medium">Available for freelance</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              <span>Quick Links</span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{link.emoji}</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <span>Get in Touch</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <a href="mailto:ashenherath365@gmail.com" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">
                    ashenherath365@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Location</p>
                  <p className="text-sm text-slate-300">Nawalapitiya, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Phone</p>
                  <a href="tel:+94776376306" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">
                    +94 77 637 6306
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="border-t border-white/10 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌐</span>
            <h4 className="text-lg font-bold text-white">Connect With Me</h4>
          </div>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-all`}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className="relative flex flex-col items-center gap-2">
                  <motion.div
                    className={link.color}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.div>
                  <span className={`text-xs font-medium ${link.color}`}>{link.label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-400 text-sm mb-2">
            Crafted with <span className="text-red-500 animate-pulse">❤️</span> and lots of <span className="text-yellow-500">☕</span> by Ashen Herath
          </p>
          <p className="text-slate-500 text-xs">
            © 2026 Ashen Shanilka Herath. All rights reserved. ✨
          </p>
          <motion.div
            className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span>Built with</span>
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">React</span>
            <span>+</span>
            <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Framer Motion</span>
            <span>+</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tailwind CSS</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;