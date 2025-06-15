import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Diniduliyanage from '../assets/Diniduliyanage.jpg';
import Lakshitha from '../assets/Lakshitha.jpg';
import Osanda from '../assets/Osanda.jpg';
import Thilina from '../assets/Thilina.jpg';
import Ashan from '../assets/Ashan.jpg';
import Dilanka from '../assets/Dilanka.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initial testimonials data
const initialTestimonials = [
  {
    text: "Ashen is a highly skilled developer. He transformed our vision into a reality with his great technical expertise and attention to detail. The project was delivered on time and exceeded our expectations.",
    name: "Dinidu Liyanage",
    role: "UnderGraduate Student , SLIIT",
    img: Diniduliyanage,
    rating: 5,
  },
  {
    text: "Working with Ashen was a fantastic experience. He brought our vision for EchoLanka to life with a clean, intuitive UI and smooth frontend functionality. His creative input and attention to user experience really helped us connect better with our audience. I highly recommend him for any design or frontend work!",
    name: "Thilina Ihalagedara",
    role: "EchoLanka Founder",
    img: Thilina,
    rating: 3,
  },
  {
    text: "Working alongside Ashen on multiple projects was a great experience. He stood out as a dependable and committed team member who naturally stepped into a leadership role. Ashen wasn't just focused on his own tasks—he made sure the entire group stayed on track. He regularly offered support, clarified responsibilities, and stepped up during challenging moments. His collaborative mindset and steady guidance played a big part in our team's overall success.",
    name: "Ashan Dilakshana",
    role: "UnderGraduate Student , SLIIT",
    img: Ashan,
    rating: 4,
  },
  {
    text: "I've had the pleasure of working alongside Ashen Shanilka, and I can confidently say they're a talented and hardworking full-stack developer. From front-end design to back-end logic, they handle every part of the development process with skill and focus. They're always eager to learn, help others, and bring real solutions to the table. Anyone would be lucky to have them on their team!",
    name: "Lakshitha Karunaweera",
    role: "UnderGraduate Student , SLIIT",
    img: Lakshitha,
    rating: 3,
  },
  {
    text: "Ashen is an excellent learner with a strong willingness to grasp new concepts quickly. He is a responsible and supportive team member who manages his time effectively. Whenever he faces a challenge, he approaches it with a clear and thoughtful mindset, always providing well-explained solutions. His dedication, discipline, and positive attitude make him stand out as a promising and professional individual.",
    name: "Tharindu Dilanka",
    role: "CodeCey, Founder",
    img: Dilanka,
    rating: 5,
  },
  {
    text: "I had the opportunity to work with Ashen on several projects, and I can confidently say he was one of the most reliable and dedicated members of our team. From the very beginning, he consistently showed strong leadership qualities—not just by taking initiative, but by genuinely supporting everyone in the group. Whether it was organizing tasks, helping others understand their parts, or stepping in when things got tough, Ashen was always there to ensure the team moved forward.",
    name: "Osanda Lakshitha",
    role: "Founder, Design Studio",
    img: Osanda,
    rating: 4,
  }
];

// Star Rating Component with framer-motion effects
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i}
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
        >
          <svg 
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
        </motion.div>
      ))}
    </div>
  );
};

// Selectable Star Rating Component
const SelectableStarRating = ({ value, onChange }) => {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <motion.button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="focus:outline-none"
          aria-label={`Rate ${i + 1} stars`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={i < value ? "currentColor" : "none"}
            stroke={i < value ? "currentColor" : "currentColor"}
            className={`w-6 h-6 ${i < value ? "text-yellow-400" : "text-slate-400"} hover:text-yellow-300 transition-colors`}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={i < value ? 0 : 1.5}
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
            />
          </svg>
        </motion.button>
      ))}
    </div>
  );
};

// Testimonial Card for Infinite Scroll
const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Create scroll trigger for this card element
    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top bottom-=50px",
      onEnter: () => setIsVisible(true),
      once: true
    });
    
    return () => {
      trigger.kill();
    };
  }, []);
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1 % 0.3 // Repeating staggered effect
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className="flex-shrink-0 w-[300px] mx-4 bg-slate-900/80 border border-slate-800 rounded-lg overflow-hidden shadow-md backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:shadow-lg group"
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)"
      }}
    >
      <div className="p-5 relative h-full flex flex-col">
        {/* Highlight effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex mb-3">
            <StarRating rating={testimonial.rating} />
          </div>
          
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.2, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-2 -left-1 text-3xl text-green-500/20 group-hover:text-green-500/40 transition-colors duration-300"
            >"</motion.span>
            <p className="text-sm text-slate-300 mb-5 line-clamp-3 relative">
              {testimonial.text.length > 120 ? `${testimonial.text.substring(0, 120)}...` : testimonial.text}
            </p>
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.2, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-4 -right-1 text-3xl text-green-500/20 group-hover:text-green-500/40 transition-colors duration-300"
            >"</motion.span>
          </div>
          
          <div className="flex items-center mt-4">
            <div className="flex-shrink-0 relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-green-500/50 group-hover:border-green-500/70 transition-colors"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/10 to-blue-500/10 group-hover:opacity-70 opacity-0 transition-opacity rounded-full"></div>
              </motion.div>
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm">{testimonial.name}</h4>
              <p className="text-xs text-slate-400">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Form Input Component
const FormInput = ({ label, id, name, type = "text", value, onChange, error, placeholder = "", className = "" }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-slate-800 text-white border ${error ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Main Testimonials component
const Testimonials = () => {
  // State management
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    text: '',
    rating: 5,
    img: '/api/placeholder/60/60'
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Animation controls
  const controls = useRef(null);

  // Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const carouselRef = useRef(null);
  const indicatorRef = useRef(null);
  const modalRef = useRef(null);
  
  // Refs for infinite scroll
  const scrollersRef = useRef([]);
  const scrollTweenRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Set up refs array for testimonial cards
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, testimonials.length);
  }, [testimonials.length]);

  // Fetch testimonials from localStorage
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

  // Set up GSAP animations for heading and testimonials
  useEffect(() => {
    // Create a timeline for smoother sequencing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    // Heading animation
    tl.fromTo(
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
      }
    );

    // Stagger animation for testimonial cards
    tl.fromTo(
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
      },
      "-=0.4" // Overlap with previous animation
    );

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [testimonials]);
  
  // Set up infinite horizontal scroll with GSAP
  useEffect(() => {
    if (scrollersRef.current.length === 0) return;
    
    // Initialize both scrollers with the same content
    const scrollers = scrollersRef.current;
    if (scrollers[1]) {
      scrollers[1].innerHTML = scrollers[0].innerHTML;
    }
    
    // Kill any existing scroll animations
    if (scrollTweenRef.current) {
      scrollTweenRef.current.kill();
    }
    
    // Calculate the total width of the scroller content
    const scrollWidth = scrollers[0].offsetWidth;
    
    // Create the infinite scroll animation
    scrollTweenRef.current = gsap.to(scrollers, {
      x: `-=${scrollWidth}`,
      ease: "none",
      repeat: -1,
      duration: 30, // Slower, smoother scroll
      onReverseComplete: () => {
        gsap.set(scrollers, { x: 0 });
      },
      paused: isPaused
    });
    
    // Play/pause based on state
    if (isPaused) {
      scrollTweenRef.current.pause();
    } else {
      scrollTweenRef.current.play();
    }
    
    return () => {
      // Cleanup
      if (scrollTweenRef.current) {
        scrollTweenRef.current.kill();
      }
    };
  }, [testimonials, isPaused]);
  
  // Update carousel indicators and animation
  useEffect(() => {
    if (!indicatorRef.current) return;
    
    // Animate the active indicator
    gsap.to(indicatorRef.current.children, {
      width: 12,
      backgroundColor: '#374151',
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(indicatorRef.current.children[activeIndex], {
      width: 24,
      backgroundColor: '#4ade80',
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Animate carousel transition
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `${-activeIndex * 100}%`,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  }, [activeIndex]);

  // Toggle infinite scroll pause state
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
    
    if (scrollTweenRef.current) {
      if (isPaused) {
        scrollTweenRef.current.play();
      } else {
        scrollTweenRef.current.pause();
      }
    }
  }, [isPaused]);

  // Handle mouse interactions for the scroller
  const handleMouseEnter = useCallback(() => {
    if (scrollTweenRef.current && !isPaused) {
      scrollTweenRef.current.pause();
    }
  }, [isPaused]);
  
  const handleMouseLeave = useCallback(() => {
    if (scrollTweenRef.current && !isPaused) {
      scrollTweenRef.current.play();
    }
  }, [isPaused]);

  // Navigate testimonial carousel
  const navigateTestimonial = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Form handling with validation
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  }, [formErrors]);

  const validateForm = useCallback(() => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.role.trim()) errors.role = "Role is required";
    if (!formData.company.trim()) errors.company = "Company is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.text.trim()) errors.text = "Testimonial text is required";
    else if (formData.text.length < 50) errors.text = "Testimonial should be at least 50 characters";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    try {
      // Create new testimonial
      const newTestimonial = {
        ...formData,
        date: new Date().toISOString(),
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add to state and localStorage
      const updatedTestimonials = [newTestimonial, ...testimonials];
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
      setTestimonials(updatedTestimonials);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          role: '',
          company: '',
          email: '',
          text: '',
          rating: 5,
          img: '/api/placeholder/60/60'
        });
        setIsModalOpen(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setSubmitting(false);
    }
  }, [formData, testimonials, validateForm]);
  
  // Handle rating change
  const handleRatingChange = useCallback((rating) => {
    setFormData(prev => ({ ...prev, rating }));
  }, []);
  
  // Memoize markup for better performance
  const testimonialCards = useMemo(() => (
    testimonials.map((testimonial, index) => (
      <TestimonialCard 
        key={`${testimonial.name}-${index}`} 
        testimonial={testimonial} 
        index={index}
      />
    ))
  ), [testimonials]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 inline-block mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Feedback from clients I've had the pleasure of working with
          </p>
        </motion.div>

        {/* Infinite Scroll with Play/Pause Control */}
        <div className="relative mb-16 overflow-hidden" ref={scrollContainerRef}>
          {/* Play/Pause Control */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePause}
            className="absolute top-4 right-4 z-20 bg-slate-800/80 border border-slate-700 rounded-full w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors backdrop-blur-sm"
            aria-label={isPaused ? "Play scrolling testimonials" : "Pause scrolling testimonials"}
          >
            {isPaused ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
              </svg>
            )}
          </motion.button>

          {/* Scrollers Container */}
          <div 
            className="flex whitespace-nowrap" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {/* First scroller */}
            <div 
              ref={el => scrollersRef.current[0] = el} 
              className="flex"
            >
              {testimonialCards}
            </div>
            
            {/* Second scroller (duplicate for infinite effect) */}
            <div 
              ref={el => scrollersRef.current[1] = el} 
              className="flex"
            >
              {/* Will be populated via useEffect */}
            </div>
          </div>
          
          {/* Overlay gradients for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Featured Testimonial - Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-lg overflow-hidden backdrop-blur-sm border border-slate-800 bg-slate-900/60 shadow-lg h-full"
                  >
                    <div className="p-6 relative">
                      {/* Glass effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex mb-4">
                          <StarRating rating={testimonial.rating} />
                        </div>
                        
                        <div className="relative">
                          <span className="absolute -top-2 -left-1 text-4xl text-green-500/20">"</span>
                          <p className="text-base text-slate-300 mb-6 relative z-10">{testimonial.text}</p>
                          <span className="absolute -bottom-6 -right-1 text-4xl text-green-500/20">"</span>
                        </div>
                        
                        <div className="flex items-center mt-8">
                          <div className="relative">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                              <img
                                src={testimonial.img}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full border-2 border-green-500/50 object-cover"
                              />
                            </motion.div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full"></span>
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-slate-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-green-400' : 'w-3 bg-slate-700'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout - Enhanced with Framer Motion */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              ref={el => cardRefs.current[index] = el}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="rounded-lg overflow-hidden backdrop-blur-sm border border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/5 group"
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)"
              }}
            >
              <div className="p-6 relative h-full flex flex-col">
                {/* Background glow effect */}
                <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Content */}
                <div className="flex mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <div className="relative flex-grow">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0.2, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-2 -left-1 text-4xl text-green-500/20 group-hover:text-green-500/40 transition-colors duration-300"
                  >"</motion.span>
                  
                  <p className="text-base text-slate-300 mb-6 relative z-10">
                    {testimonial.text}
                  </p>
                  
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 0.2, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -bottom-6 -right-1 text-4xl text-green-500/20 group-hover:text-green-500/40 transition-colors duration-300"
                  >"</motion.span>
                </div>
                
                <div className="flex items-center mt-auto">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-green-500/50 object-cover group-hover:border-green-500/70 transition-colors duration-300"
                      />
                    </motion.div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full"></span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(74, 222, 128, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-500"
            style={{
              backgroundSize: "200% auto"
            }}
          >
            Share Your Experience
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Testimonial Submission Modal - Enhanced with Framer Motion */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div 
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-2xl font-bold text-white"
                  >
                    Share Your Experience
                  </motion.h3>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", damping: 20 }}
                      className="text-center py-8"
                    >
                      <motion.div 
                        className="mb-4 text-green-400"
                        initial={{ scale: 0.5, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 10, stiffness: 100 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <motion.h4 
                        className="text-xl font-semibold text-white mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Thank You!
                      </motion.h4>
                      <motion.p 
                        className="text-slate-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Your testimonial has been submitted successfully.
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormInput 
                          label="Your Name*"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          error={formErrors.name}
                        />
                        <FormInput 
                          label="Your Role*"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          error={formErrors.role}
                        />
                        <FormInput 
                          label="Company/Organization*"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          error={formErrors.company}
                        />
                        <div>
                          <FormInput 
                            label="Email Address*"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            error={formErrors.email}
                          />
                          <p className="mt-1 text-xs text-slate-400">Your email won't be displayed publicly</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Rating*</label>
                        <SelectableStarRating value={formData.rating} onChange={handleRatingChange} />
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
                          className={`w-full bg-slate-800 text-white border ${formErrors.text ? 'border-red-500' : 'border-slate-600'} rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200`}
                        ></textarea>
                        {formErrors.text && <p className="mt-1 text-sm text-red-500">{formErrors.text}</p>}
                      </div>

                      <div className="pt-4">
                        <motion.button
                          type="submit"
                          disabled={submitting}
                          whileHover={!submitting ? { scale: 1.02 } : {}}
                          whileTap={!submitting ? { scale: 0.98 } : {}}
                          className="w-full flex justify-center items-center rounded-md bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                          style={{
                            backgroundSize: "200% auto"
                          }}
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
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Testimonials;