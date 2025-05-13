import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Additional services for a more comprehensive list
const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: 'Frontend Development',
    description: 'Building responsive, interactive websites using React.js and Tailwind CSS with modern best practices.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Designing modern, clean, and user-friendly interfaces with Figma and Adobe XD.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    title: 'Responsive Design',
    description: 'Ensuring mobile-first, cross-device compatibility with pixel-perfect layouts and smooth user experience.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    ),
    title: 'Full-Stack Development',
    description: 'Creating end-to-end solutions with Node.js, Express, MongoDB, and modern JavaScript frameworks.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: 'Web Performance',
    description: 'Optimizing website speed, accessibility, and SEO to ensure the best user experience.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    title: 'Custom Web Solutions',
    description: 'Developing tailored web applications that solve specific business problems and enhance productivity.',
  },
];

const Services = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const serviceRefs = useRef([]);
  
  // Set up GSAP animations
  useEffect(() => {
    // Main section fade in
    gsap.fromTo(
      titleRef.current,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
    
    // Staggered animation for service cards
    gsap.fromTo(
      serviceRefs.current,
      { 
        y: 70, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      }
    );
    
    // Hover animations for service cards
    serviceRefs.current.forEach(card => {
      // Store original scale
      const originalScale = gsap.getProperty(card, "scale");
      
      // Create hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.03,
          y: -8,
          duration: 0.4,
          ease: 'power2.out',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        });
        
        // Animate the icon inside the card
        const icon = card.querySelector('.service-icon');
        gsap.to(icon, {
          rotate: 15,
          scale: 1.1,
          color: '#4ade80',
          duration: 0.4
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: originalScale,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        });
        
        // Reset the icon animation
        const icon = card.querySelector('.service-icon');
        gsap.to(icon, {
          rotate: 0,
          scale: 1,
          color: 'currentColor',
          duration: 0.4
        });
      });
    });
    
    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 inline-block mb-4">
            My Services
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Professional solutions to help bring your ideas to life with modern web technologies
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              ref={el => (serviceRefs.current[idx] = el)}
              className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:border-slate-700 flex flex-col"
            >
              {/* Service Icon */}
              <div className="service-icon h-12 w-12 flex items-center justify-center text-blue-400 mb-5 transition-all duration-300">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-slate-300 text-sm">
                {service.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-bl-3xl rounded-tr-lg -z-10"></div>
              
              {/* Interactive indicator */}
              <div className="mt-auto pt-5 flex items-center text-sm font-medium text-blue-400">
                <span className="mr-2">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-md hover:brightness-110 transition-all duration-300">
            Discuss Your Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;