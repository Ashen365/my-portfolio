import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
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
  
  // Create refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialLinksRef = useRef(null);
  const formElementRef = useRef(null); // Reference to the form element for EmailJS
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
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
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      setSubmitError(null);
      
      // EmailJS configuration - replace with your actual service ID, template ID, and public key
      const serviceId = 'service_dus19y8';
      const templateId = 'template_nlfl385';
      const publicKey = 'CqG8i8q3aPbG6q3Um';
      
      // Send email using EmailJS
      emailjs.sendForm(serviceId, templateId, formElementRef.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          
          // Show success message
          setIsSubmitted(true);
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          
          // Animate success message
          gsap.fromTo(
            ".success-message",
            { 
              opacity: 0,
              y: -20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out"
            }
          );
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            gsap.to(".success-message", {
              opacity: 0,
              duration: 0.5,
              onComplete: () => setIsSubmitted(false)
            });
          }, 5000);
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
          setSubmitError('Failed to send email. Please try again later.');
          
          // Animate error message
          gsap.fromTo(
            ".error-message",
            { 
              opacity: 0,
              y: -20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out"
            }
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  // Set up animations
  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
    
    // Form animation
    gsap.fromTo(
      formRef.current,
      { 
        opacity: 0, 
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );
    
    // Contact info animation
    gsap.fromTo(
      contactInfoRef.current,
      { 
        opacity: 0, 
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );
    
    // Social links animation - staggered
    gsap.fromTo(
      socialLinksRef.current.children,
      { 
        opacity: 0, 
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: "top 80%",
        }
      }
    );
    
    // Input field focus animations
    const inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach(field => {
      field.addEventListener("focus", () => {
        gsap.to(field, {
          borderColor: "#4ade80",
          boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.2)",
          duration: 0.3
        });
      });
      
      field.addEventListener("blur", () => {
        gsap.to(field, {
          borderColor: field.value ? "#374151" : "#1f2937",
          boxShadow: "none",
          duration: 0.3
        });
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      inputFields.forEach(field => {
        field.removeEventListener("focus", () => {});
        field.removeEventListener("blur", () => {});
      });
    };
  }, []);

  // Contact info data
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Call Me",
      content: "+94 77 637 6306"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      content: "ashen365@gmail.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Location",
      content: "Nawalapitiya, Sri Lanka"
    }
  ];

  // Social media links
  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: "https://www.linkedin.com/in/ashen-herath-b88879257/",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      href: "https://github.com/Ashen365",
      label: "GitHub"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "https://www.instagram.com/ashen_shanilka_herath/",
      label: "Instagram"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
      href: "https://x.com/ashanilka62",
      label: "Twitter"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-slate-950"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col space-y-3 mb-12 text-center">
          <h2
            ref={titleRef}
            id="contact-title"
            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 inline-block"
          >
            Get In Touch
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to contact me.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <div 
            ref={formRef}
            className="bg-slate-900/60 backdrop-blur-sm rounded-lg border border-slate-800 p-6 lg:p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            {/* Success message */}
            {isSubmitted && (
              <div className="success-message mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              </div>
            )}
            
            {/* Error message */}
            {submitError && (
              <div className="error-message mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{submitError}</span>
                </div>
              </div>
            )}
            
            <form ref={formElementRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field w-full px-4 py-2 bg-slate-800/70 border ${
                    errors.name ? "border-red-500" : "border-slate-700"
                  } rounded-md focus:outline-none text-white placeholder-slate-500`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field w-full px-4 py-2 bg-slate-800/70 border ${
                    errors.email ? "border-red-500" : "border-slate-700"
                  } rounded-md focus:outline-none text-white placeholder-slate-500`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field w-full px-4 py-2 bg-slate-800/70 border border-slate-700 rounded-md focus:outline-none text-white placeholder-slate-500"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`input-field w-full px-4 py-2 bg-slate-800/70 border ${
                    errors.message ? "border-red-500" : "border-slate-700"
                  } rounded-md focus:outline-none text-white placeholder-slate-500`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
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
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div 
            ref={contactInfoRef}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/60 backdrop-blur-sm rounded-lg border border-slate-800 p-4 shadow-md flex items-center transition-all duration-300 hover:border-slate-700 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-400">{item.title}</h4>
                    <p className="text-white font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social media links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
              <div 
                ref={socialLinksRef}
                className="flex flex-wrap gap-3"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-slate-700 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Availability section with glowing effect */}
            <div className="bg-slate-900/80 rounded-lg border border-slate-800 p-6 relative overflow-hidden">
              {/* Gradient orb */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <h4 className="text-white font-bold">Currently Available</h4>
                </div>
                <p className="text-slate-300 mb-4">
                  I'm currently taking on new projects and available for freelance work or full-time opportunities.
                </p>
                <a 
                  href="#schedule" 
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center font-medium"
                >
                  Check my availability
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;