import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Diniduliyanage from '../assets/Diniduliyanage.jpg';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initial testimonials data
const initialTestimonials = [
  {
    text: "Ashen is a highly skilled developer. He transformed our vision into a reality with his great technical expertise and attention to detail. The project was delivered on time and exceeded our expectations.",
    name: "Dinidu Liyanage",
    role: "UnderGraduate , Student",
    img: Diniduliyanage,
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    text: "Working with Ashen was a pleasure. He delivered top-notch solutions with an eye for detail and a focus on user experience. His communication was clear throughout the process.",
    name: "Jane Smith",
    role: "UX Designer, Creative Agency",
    img: "/api/placeholder/60/60",
    rating: 5,
    project: "Portfolio Website",
  },
  {
    text: "Ashen brought innovative ideas to our project that we hadn't even considered. His technical knowledge combined with creative problem-solving made him an invaluable asset.",
    name: "Robert Johnson",
    role: "Product Manager, StartUp Inc",
    img: "/api/placeholder/60/60",
    rating: 5,
    project: "Mobile Application",
  },
  {
    text: "I was impressed by Ashen's ability to understand our business needs and translate them into elegant technical solutions. He's more than just a developer - he's a strategic thinker.",
    name: "Sarah Williams",
    role: "Marketing Director, Brand Co",
    img: "/api/placeholder/60/60",
    rating: 4,
    project: "Marketing Website",
  },
  {
    text: "Ashen's approach to problem-solving is both creative and methodical. He not only delivered an excellent product but also provided valuable insights throughout the development process.",
    name: "Michael Chen",
    role: "CTO, Future Systems",
    img: "/api/placeholder/60/60",
    rating: 5,
    project: "SaaS Application",
  },
  {
    text: "What sets Ashen apart is his attention to detail and commitment to quality. He treats each project as if it were his own, resulting in exceptional outcomes every time.",
    name: "Emily Rodriguez",
    role: "Founder, Design Studio",
    img: "/api/placeholder/60/60",
    rating: 5,
    project: "Brand Website",
  }
];

const Testimonials = () => {
  // State variables
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    project: '',
    text: '',
    rating: 5,
    img: '/api/placeholder/60/60'
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const carouselRef = useRef(null);
  const indicatorRef = useRef(null);
  const modalRef = useRef(null);

  // Set up refs array for testimonial cards
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, testimonials.length);
  }, [testimonials.length]);

  // Fetch testimonials from storage (localStorage in this example)
  useEffect(() => {
    const fetchTestimonials = () => {
      try {
        const storedTestimonials = localStorage.getItem('testimonials');
        if (storedTestimonials) {
          setTestimonials(JSON.parse(storedTestimonials));
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // GSAP animations
  useEffect(() => {
    // Main section animation context
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
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
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );

      // Testimonial cards animation with stagger
      gsap.fromTo(
        cardRefs.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate the testimonial carousel indicators
      if (indicatorRef.current?.children[activeIndex]) {
        gsap.to(indicatorRef.current.children[activeIndex], {
          width: 24,
          backgroundColor: '#4ade80',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }, sectionRef);

    return () => {
      // Clean up ScrollTriggers and context
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [testimonials]);

  // Update active indicator when activeIndex changes
  useEffect(() => {
    if (!indicatorRef.current) return;
    
    // Reset all indicators
    gsap.to(indicatorRef.current.children, {
      width: 12,
      backgroundColor: '#374151',
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Animate the active indicator
    gsap.to(indicatorRef.current.children[activeIndex], {
      width: 24,
      backgroundColor: '#4ade80',
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Animate the card transition
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `${-activeIndex * 100}%`,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  }, [activeIndex]);

  // Modal animation effect
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
        }
      );
    }
  }, [isModalOpen]);

  // Function to navigate testimonials
  const navigateTestimonial = (index) => {
    setActiveIndex(index);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "currentColor" : "currentColor"}
        className={`w-4 h-4 ${i < rating ? "text-green-400" : "text-slate-600"}`}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={i < rating ? 0 : 1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
        />
      </svg>
    ));
  };

  // Function to render selectable star ratings for form
  const renderSelectableStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setFormData({...formData, rating: i + 1})}
        className="focus:outline-none"
        aria-label={`Rate ${i + 1} stars`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={i < formData.rating ? "currentColor" : "none"}
          stroke={i < formData.rating ? "currentColor" : "currentColor"}
          className={`w-6 h-6 ${i < formData.rating ? "text-yellow-400" : "text-slate-400"} hover:text-yellow-300 transition-colors`}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={i < formData.rating ? 0 : 1.5}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
          />
        </svg>
      </button>
    ));
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.role.trim()) errors.role = "Role is required";
    if (!formData.company.trim()) errors.company = "Company is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.project.trim()) errors.project = "Project type is required";
    if (!formData.text.trim()) errors.text = "Testimonial text is required";
    else if (formData.text.length < 50) errors.text = "Testimonial should be at least 50 characters";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend/API
      // For now, we'll simulate this with localStorage
      
      // Create a new testimonial object
      const newTestimonial = {
        ...formData,
        date: new Date().toISOString(),
        // In a real implementation, you'd handle image upload separately
        // and have a way to associate it with this testimonial
      };
      
      // Simulating an API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add the new testimonial to the list
      const updatedTestimonials = [newTestimonial, ...testimonials];
      
      // Save to localStorage (in a real app, this would be saved to a database)
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
      
      // Update state
      setTestimonials(updatedTestimonials);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          role: '',
          company: '',
          email: '',
          project: '',
          text: '',
          rating: 5,
          img: '/api/placeholder/60/60'
        });
        setIsModalOpen(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      // Handle submission error (would show an error message in a real app)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 inline-block mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Feedback from clients I've had the pleasure of working with
          </p>
        </div>

        {/* Featured Testimonial - Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="rounded-lg overflow-hidden backdrop-blur-sm border border-slate-800 bg-slate-900/60 transition-all duration-300 shadow-lg h-full">
                    {/* Card content */}
                    <div className="p-6">
                      {/* Project type badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-green-400 border border-green-500/20">
                          {testimonial.project}
                        </span>
                      </div>
                      
                      {/* Rating stars */}
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Testimonial text */}
                      <p className="text-base text-slate-300 mb-6 relative">
                        <span className="absolute -top-2 -left-1 text-4xl text-green-500/20">"</span>
                        <span className="relative z-10">{testimonial.text}</span>
                        <span className="absolute -bottom-6 -right-1 text-4xl text-green-500/20">"</span>
                      </p>
                      
                      {/* Client info */}
                      <div className="flex items-center mt-8">
                        <div className="relative">
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-green-500/50 object-cover"
                          />
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full"></span>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-slate-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-6" ref={indicatorRef}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateTestimonial(index)}
                className={`h-2 rounded-full bg-slate-700 transition-all duration-300 ${activeIndex === index ? 'w-6 bg-green-400' : 'w-3'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="rounded-lg overflow-hidden backdrop-blur-sm border border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {/* Card content */}
              <div className="p-6 relative h-full flex flex-col">
                {/* Background glow effect */}
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {/* Project type badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-green-400 border border-green-500/20">
                    {testimonial.project}
                  </span>
                </div>
                
                {/* Rating stars */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial text */}
                <p className="text-base text-slate-300 mb-6 relative">
                  <span className="absolute -top-2 -left-1 text-4xl text-green-500/20 group-hover:text-green-500/30 transition-colors duration-300">"</span>
                  <span className="relative z-10">{testimonial.text}</span>
                  <span className="absolute -bottom-6 -right-1 text-4xl text-green-500/20 group-hover:text-green-500/30 transition-colors duration-300">"</span>
                </p>
                
                {/* Client info */}
                <div className="flex items-center mt-auto">
                  <div className="relative">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-green-500/50 object-cover group-hover:border-green-500/70 transition-colors duration-300"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full"></span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-md hover:brightness-110 transition-all duration-300"
          >
            Share Your Experience
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonial Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            ref={modalRef}
            className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">Share Your Experience</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="mb-4 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
                  <p className="text-slate-300">Your testimonial has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-800 text-white border ${formErrors.name ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      />
                      {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-1">Your Role*</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-800 text-white border ${formErrors.role ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      />
                      {formErrors.role && <p className="mt-1 text-sm text-red-500">{formErrors.role}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">Company/Organization*</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-800 text-white border ${formErrors.company ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      />
                      {formErrors.company && <p className="mt-1 text-sm text-red-500">{formErrors.company}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-800 text-white border ${formErrors.email ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      />
                      <p className="mt-1 text-xs text-slate-400">Your email won't be displayed publicly</p>
                      {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-slate-300 mb-1">Project Type*</label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-800 text-white border ${formErrors.project ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    >
                      <option value="">Select project type</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Mobile Application">Mobile Application</option>
                      <option value="E-commerce Platform">E-commerce Platform</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Marketing Website">Marketing Website</option>
                      <option value="SaaS Application">SaaS Application</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.project && <p className="mt-1 text-sm text-red-500">{formErrors.project}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Rating*</label>
                    <div className="flex gap-2">
                      {renderSelectableStars()}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="text" className="block text-sm font-medium text-slate-300 mb-1">Your Testimonial*</label>
                    <textarea
                      id="text"
                      name="text"
                      value={formData.text}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Share your experience working with me..."
                      className={`w-full bg-slate-800 text-white border ${formErrors.text ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    ></textarea>
                    {formErrors.text && <p className="mt-1 text-sm text-red-500">{formErrors.text}</p>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex justify-center items-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-md hover:brightness-110 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : "Submit Testimonial"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;