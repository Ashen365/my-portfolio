import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Success/error message state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Animation refs
  const formElementRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setSubmitError(null);
      const serviceId = 'service_dus19y8';
      const templateId = 'template_nlfl385';
      const publicKey = 'CqG8i8q3aPbG6q3Um';
      emailjs.sendForm(serviceId, templateId, formElementRef.current, publicKey)
        .then((result) => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          setSubmitError('Failed to send email. Please try again later.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  // Contact info data
  const contactInfo = [
    {
      emoji: "📞",
      title: "Call Me",
      content: ["+94 776376306", "+94 702376306"],
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      emoji: "✉️",
      title: "Email",
      content: "ashenherath365@gmail.com",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      emoji: "📍",
      title: "Location",
      content: "Nawalapitiya, Sri Lanka",
      gradient: "from-green-400 to-emerald-400"
    }
  ];

  const socialLinks = [
    {
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashen-herath-b88879257/",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      label: "GitHub",
      href: "https://github.com/Ashen365",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
      label: "Instagram",
      href: "https://www.instagram.com/ashen_shanilka_herath/",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
      label: "Twitter",
      href: "https://x.com/ashanilka62",
      gradient: "from-sky-400 to-blue-500"
    }
  ];

  return (
    <section id="contact" className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-blue-500"
        style={{ left: '10%', top: '20%' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-purple-500"
        style={{ right: '10%', bottom: '20%' }}
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-block text-6xl mb-4"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            📬
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">✍️</span>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="mb-6 p-4 rounded-2xl bg-green-500/20 border border-green-500/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center text-green-400">
                    <span className="text-2xl mr-2">✅</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitError && (
                <motion.div
                  className="mb-6 p-4 rounded-2xl bg-red-500/20 border border-red-500/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center text-red-400">
                    <span className="text-2xl mr-2">❌</span>
                    <span>{submitError}</span>
                  </div>
                </motion.div>
              )}

              <form ref={formElementRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-slate-500 transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-slate-500 transition-all`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-slate-500 transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-slate-500 transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="ml-2 text-2xl">🚀</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative flex items-center gap-4">
                    <motion.span 
                      className="text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {item.emoji}
                    </motion.span>
                    <div>
                      <h4 className="text-sm text-slate-400 mb-1">{item.title}</h4>
                      {Array.isArray(item.content) ? (
                        <div className="flex flex-col gap-1">
                          {item.content.map((phone, i) => (
                            <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                              {phone}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white font-medium">{item.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌐</span>
                <h3 className="text-xl font-bold text-white">Connect With Me</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-gradient-to-br ${link.gradient} p-4 rounded-xl overflow-hidden`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative flex items-center gap-2 text-white">
                      {link.icon}
                      <span className="text-white font-medium">{link.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h4 className="text-white font-bold text-lg">Currently Available</h4>
                </div>
                <p className="text-slate-300">
                  I'm currently taking on new projects and available for freelance work or full-time opportunities. 🎯
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
            <p className="text-slate-300 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <span>Let's turn your ideas into reality!</span>
              <span className="text-2xl">✨</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;