import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser'; // Import EmailJS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  // Calendar state for availability
  const [selectedDate, setSelectedDate] = useState(null);
  const [workUpdates, setWorkUpdates] = useState({});
  const [calendarMessage, setCalendarMessage] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showCalendarView, setShowCalendarView] = useState(true);
  
  // Animation and refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialLinksRef = useRef(null);
  const formElementRef = useRef(null); // Reference to the form element for EmailJS
  const scheduleSectionRef = useRef(null); // For "Check my availability" scroll
  const calendarRef = useRef(null); // For calendar animations

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
          gsap.fromTo(
            ".success-message",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          );
          setTimeout(() => {
            gsap.to(".success-message", {
              opacity: 0, duration: 0.5, onComplete: () => setIsSubmitted(false)
            });
          }, 5000);
        })
        .catch((error) => {
          setSubmitError('Failed to send email. Please try again later.');
          gsap.fromTo(
            ".error-message",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  // Set up animations
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
    );
    gsap.fromTo(
      contactInfoRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
    );
    gsap.fromTo(
      socialLinksRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: socialLinksRef.current, start: "top 80%" } }
    );
    const inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach(field => {
      field.addEventListener("focus", () => {
        gsap.to(field, { borderColor: "#4ade80", boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.2)", duration: 0.3 });
      });
      field.addEventListener("blur", () => {
        gsap.to(field, { borderColor: field.value ? "#374151" : "#1f2937", boxShadow: "none", duration: 0.3 });
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      inputFields.forEach(field => {
        field.removeEventListener("focus", () => {});
        field.removeEventListener("blur", () => {});
      });
    };
  }, []);

  // Scroll to calendar section when clicking "Check my availability"
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === "#schedule" && scheduleSectionRef.current) {
        scheduleSectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        
        // Add animation to the calendar section when scrolling to it
        gsap.fromTo(
          scheduleSectionRef.current,
          { opacity: 0.5, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }
    };
    window.addEventListener("hashchange", handleHashScroll, false);
    handleHashScroll();
    return () => window.removeEventListener("hashchange", handleHashScroll, false);
  }, []);

  // Calendar animation on mount
  useEffect(() => {
    if (calendarRef.current) {
      gsap.fromTo(
        calendarRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [showCalendarView]);

  // Handle calendar work updates
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarMessage("");
    
    // Animate the date selection
    gsap.fromTo(
      ".calendar-info-panel",
      { opacity: 0.7, x: 10 },
      { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
    );
    
    // Reset time slot selection when date changes
    setSelectedTimeSlot(null);
  };
  
  const handleWorkUpdateChange = (e) => {
    setCalendarMessage(e.target.value);
  };
  
  const handleSaveWorkUpdate = () => {
    if (!selectedDate) return;
    
    // Create update with time slot if selected
    const update = selectedTimeSlot 
      ? `Available at ${selectedTimeSlot}. ${calendarMessage}` 
      : calendarMessage;
    
    setWorkUpdates({
      ...workUpdates,
      [selectedDate.toDateString()]: update
    });
    
    // Show success animation
    gsap.fromTo(
      ".update-success",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
    
    setTimeout(() => {
      gsap.to(".update-success", { opacity: 0, duration: 0.4 });
    }, 2000);
    
    setCalendarMessage("");
  };

  // Time slot selection handler
  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot === selectedTimeSlot ? null : slot);
  };

  // Toggle between calendar and list view
  const toggleCalendarView = () => {
    setShowCalendarView(!showCalendarView);
  };

  // Generate time slots for the selected date
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  // Contact info data, social links, etc. (unchanged)
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
      content: "ashenherath365@gmail.com"
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

  // Modern Calendar Styles
  const modernCalendarStyle = `
    /* Base calendar container */
    .modern-calendar .react-datepicker {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      border: none;
      border-radius: 24px;
      font-family: system-ui, -apple-system, sans-serif;
      padding: 24px;
      box-shadow: 
        0 20px 25px -5px rgba(0, 0, 0, 0.2),
        0 10px 10px -5px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
      overflow: hidden;
      position: relative;
    }
    
    /* Glassmorphism effect overlay */
    .modern-calendar .react-datepicker::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        rgba(56, 189, 248, 0.03) 0%,
        rgba(74, 222, 128, 0.03) 100%
      );
      z-index: 0;
      pointer-events: none;
    }
    
    /* Month container */
    .modern-calendar .react-datepicker__month-container {
      position: relative;
      z-index: 1;
    }
    
    /* Current month */
    .modern-calendar .react-datepicker__current-month {
      color: white;
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(to right, #38bdf8, #4ade80);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
    
    /* Day names (Mon, Tue, etc.) */
    .modern-calendar .react-datepicker__day-name {
      color: #94a3b8;
      font-size: 0.85rem;
      font-weight: 500;
      width: 2.5rem;
      margin: 0.3rem;
    }
    
    /* Day cells */
    .modern-calendar .react-datepicker__day {
      color: #e2e8f0;
      font-size: 0.95rem;
      width: 2.5rem;
      height: 2.5rem;
      margin: 0.3rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: relative;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Hover effect */
    .modern-calendar .react-datepicker__day:hover:not(.react-datepicker__day--selected):not(.react-datepicker__day--disabled) {
      background: rgba(100, 116, 139, 0.3);
      color: white;
      transform: scale(1.05);
    }
    
    /* Selected day */
    .modern-calendar .react-datepicker__day--selected {
      background: linear-gradient(135deg, #38bdf8 0%, #4ade80 100%);
      color: white;
      font-weight: 600;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
      transform: scale(1.1);
    }
    
    /* Today's date */
    .modern-calendar .react-datepicker__day--today {
      border: 2px solid rgba(56, 189, 248, 0.5);
      background-color: rgba(56, 189, 248, 0.1);
      font-weight: 600;
    }
    
    /* Days with scheduled updates */
    .modern-calendar .react-datepicker__day--has-update::after {
      content: '';
      position: absolute;
      bottom: 3px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: #4ade80;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(74, 222, 128, 0.5);
    }
    
    /* Navigation buttons */
    .modern-calendar .react-datepicker__navigation {
      top: 1.5rem;
    }
    
    .modern-calendar .react-datepicker__navigation-icon::before {
      border-color: #38bdf8;
      border-width: 2px 2px 0 0;
      height: 8px;
      width: 8px;
    }
    
    /* Header and triangle */
    .modern-calendar .react-datepicker__header {
      background: transparent;
      border-bottom: 1px solid rgba(100, 116, 139, 0.2);
      padding-top: 0;
    }
    
    .modern-calendar .react-datepicker__triangle {
      display: none;
    }
    
    /* Time slot styles */
    .time-slot {
      padding: 0.75rem 1rem;
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(71, 85, 105, 0.5);
      border-radius: 12px;
      margin-bottom: 0.5rem;
      color: #e2e8f0;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
    }
    
    .time-slot:hover {
      background: rgba(51, 65, 85, 0.9);
      border-color: rgba(100, 116, 139, 0.8);
      transform: translateY(-2px);
    }
    
    .time-slot.selected {
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(74, 222, 128, 0.2) 100%);
      border-color: #38bdf8;
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
    }
    
    .time-slot-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 0.75rem;
      background: #475569;
      transition: all 0.2s;
      position: relative;
    }
    
    .time-slot.selected .time-slot-indicator {
      background: #4ade80;
      box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
    }
    
    .time-slot.selected .time-slot-indicator::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
    }
    
    /* View toggle button */
    .view-toggle-button {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(71, 85, 105, 0.5);
      color: #e2e8f0;
      border-radius: 12px;
      padding: 0.6rem 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .view-toggle-button:hover {
      background: rgba(51, 65, 85, 0.9);
      border-color: rgba(100, 116, 139, 0.8);
    }
    
    /* Animation for the success message */
    .update-success {
      opacity: 0;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, rgba(74, 222, 128, 0.9) 0%, rgba(56, 189, 248, 0.9) 100%);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-weight: 500;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }
    
    /* Calendar info panel animations */
    .calendar-info-panel {
      transition: opacity 0.3s, transform 0.3s;
    }
    
    /* Availability indicator */
    .availability-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      background: rgba(56, 189, 248, 0.1);
      border-radius: 30px;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    
    .availability-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #4ade80;
      box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
    }
    
    /* List view styles */
    .calendar-list-view {
      max-height: 350px;
      overflow-y: auto;
      padding-right: 0.5rem;
      scrollbar-width: thin;
      scrollbar-color: rgba(100, 116, 139, 0.5) transparent;
    }
    
    .calendar-list-view::-webkit-scrollbar {
      width: 4px;
    }
    
    .calendar-list-view::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .calendar-list-view::-webkit-scrollbar-thumb {
      background-color: rgba(100, 116, 139, 0.5);
      border-radius: 20px;
    }
    
    .calendar-list-item {
      padding: 1rem;
      border-radius: 12px;
      margin-bottom: 0.75rem;
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(71, 85, 105, 0.5);
      transition: all 0.2s;
    }
    
    .calendar-list-item:hover {
      background: rgba(51, 65, 85, 0.9);
      transform: translateY(-2px);
    }
    
    .calendar-list-date {
      font-weight: 600;
      font-size: 1rem;
      color: #38bdf8;
      margin-bottom: 0.5rem;
    }
    
    .calendar-list-content {
      color: #e2e8f0;
      font-size: 0.9rem;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .modern-calendar .react-datepicker {
        padding: 16px;
      }
      
      .modern-calendar .react-datepicker__day-name,
      .modern-calendar .react-datepicker__day {
        width: 2rem;
        height: 2rem;
        margin: 0.2rem;
        font-size: 0.85rem;
      }
    }
  `;
  
  useEffect(() => {
    let style = document.createElement("style");
    style.innerHTML = modernCalendarStyle;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Custom day class for calendar highlight
  const dayClassName = (date) => {
    let classNames = [];
    if (workUpdates[date.toDateString()]) classNames.push("react-datepicker__day--has-update");
    return classNames.join(" ");
  };

  return (
    <>
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
      
      {/* Modern Calendar Section - Check Availability */}
      <section
        ref={scheduleSectionRef}
        id="schedule"
        className="max-w-5xl mx-auto mb-24 mt-10 px-4 sm:px-6"
        aria-labelledby="schedule-title"
      >
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/80 p-8 lg:p-10 shadow-xl overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl opacity-20"></div>
          
          {/* Success message animation */}
          <div className="update-success">Update saved successfully!</div>
          
          <div className="relative z-10">
            <h2
              id="schedule-title"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-8"
            >
              My Availability Calendar
            </h2>
            
            <div className="availability-indicator">
              <span className="availability-dot"></span>
              <span className="text-slate-200">Currently accepting new projects</span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Calendar view toggle */}
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={toggleCalendarView} 
                  className="view-toggle-button"
                >
                  {showCalendarView ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                      <span>List View</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Calendar View</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Calendar or List view */}
              <div className="flex-1">
                {showCalendarView ? (
                  <div ref={calendarRef} className="modern-calendar">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      inline
                      calendarClassName="w-full"
                      dayClassName={dayClassName}
                    />
                    <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full inline-block"></span>
                        <span>Has update</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 border-2 border-blue-400 rounded-full inline-block"></span>
                        <span>Today</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="calendar-list-view">
                    {Object.keys(workUpdates).length > 0 ? (
                      Object.keys(workUpdates).map((dateString) => (
                        <div key={dateString} className="calendar-list-item">
                          <div className="calendar-list-date">{dateString}</div>
                          <div className="calendar-list-content">{workUpdates[dateString]}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-slate-400 text-center py-6">
                        No availability updates yet.
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Time slots and update panel */}
              <div className="flex-1 calendar-info-panel">
                {selectedDate ? (
                  <>
                    <div className="mb-5">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {selectedDate.toDateString()}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Select a time slot or add availability details
                      </p>
                    </div>
                    
                    <div className="mb-5">
                      <h4 className="text-blue-400 font-medium mb-3">Available Time Slots</h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {timeSlots.map((slot) => (
                          <div
                            key={slot}
                            className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}
                            onClick={() => handleTimeSlotSelect(slot)}
                          >
                            <div className="time-slot-indicator"></div>
                            <span>{slot}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <textarea
                        className="w-full min-h-[100px] rounded-xl p-4 bg-slate-800/70 text-white border border-slate-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder-slate-400 resize-none"
                        placeholder="Add details about your availability on this date..."
                        value={calendarMessage ?? workUpdates[selectedDate.toDateString()] ?? ""}
                        onChange={handleWorkUpdateChange}
                      />
                    </div>
                    
                    <button
                      onClick={handleSaveWorkUpdate}
                      className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-medium rounded-xl shadow transition-all duration-300 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Save Availability
                    </button>
                    
                    {workUpdates[selectedDate.toDateString()] && (
                      <div className="mt-4 p-4 rounded-xl bg-slate-800/60 border border-blue-500/30 text-slate-200">
                        <div className="text-blue-400 text-sm font-medium mb-1">Current Status:</div>
                        {workUpdates[selectedDate.toDateString()]}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-400 p-8">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p>Please select a date on the calendar to view or update availability.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;