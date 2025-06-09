import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
// Import the CV file
import resumePDF from "../assets/Ashen's Resume.pdf";

const NAV_LINKS = [
  "home",
  "about",
  "services",
  "projects",
  "skills",
  "blog",
  "testimonials",
  "contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const desktopCvBtnRef = useRef(null);
  const mobileCvBtnRef = useRef(null);
  const downloadIconDesktopRef = useRef(null);
  const downloadIconMobileRef = useRef(null);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      // This is a simplified approach - you might want to improve this
      NAV_LINKS.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // GSAP Animations
  useEffect(() => {
    // Initial animation for navbar elements
    gsap.fromTo(
      logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    
    gsap.fromTo(
      menuItemsRef.current,
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.4, 
        stagger: 0.1, 
        ease: "power2.out",
        delay: 0.3
      }
    );

    // Setup CV button hover animations
    if (desktopCvBtnRef.current) {
      // Create a timeline for desktop CV button
      const tlDesktop = gsap.timeline({ paused: true });
      tlDesktop
        .to(desktopCvBtnRef.current, { 
          scale: 1.05, 
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)", 
          duration: 0.3 
        })
        .to(downloadIconDesktopRef.current, { 
          y: 3, 
          yoyo: true, 
          repeat: 1, 
          duration: 0.3 
        }, 0);
      
      // Apply hover events
      desktopCvBtnRef.current.addEventListener("mouseenter", () => tlDesktop.play());
      desktopCvBtnRef.current.addEventListener("mouseleave", () => tlDesktop.reverse());
    }
    
    if (mobileCvBtnRef.current) {
      // Create a timeline for mobile CV button
      const tlMobile = gsap.timeline({ paused: true });
      tlMobile
        .to(mobileCvBtnRef.current, { 
          scale: 1.02, 
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)", 
          duration: 0.3 
        })
        .to(downloadIconMobileRef.current, { 
          y: 3, 
          yoyo: true, 
          repeat: 1, 
          duration: 0.3 
        }, 0);
      
      // Apply hover events
      mobileCvBtnRef.current.addEventListener("mouseenter", () => tlMobile.play());
      mobileCvBtnRef.current.addEventListener("mouseleave", () => tlMobile.reverse());
    }
    
    // Add a pulsing animation for the CV buttons
    gsap.to([desktopCvBtnRef.current, mobileCvBtnRef.current], {
      boxShadow: "0 0 15px 2px rgba(74, 222, 128, 0.4)",
      repeat: -1,
      yoyo: true,
      duration: 1.5
    });
  }, []);
  
  // Animation for mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in"
        });
      }
    }
  }, [isOpen]);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center" ref={logoRef}>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Ashen Shanilka Herath
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {NAV_LINKS.map((section, index) => (
              <div 
                key={section} 
                ref={(el) => (menuItemsRef.current[index] = el)}
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className={`relative px-3 py-2 text-sm font-medium capitalize rounded-md cursor-pointer transition-all duration-200 ease-in-out ${
                    activeSection === section
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  onClick={() => setActiveSection(section)}
                  aria-label={`Navigate to ${section} section`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
                  )}
                </Link>
              </div>
            ))}
            
            {/* CV Button for Desktop */}
            <a
              ref={desktopCvBtnRef}
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white transition-all duration-300 flex items-center"
              aria-label="Download CV"
            >
              <span>Get Resum</span>
              <svg 
                ref={downloadIconDesktopRef}
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          {NAV_LINKS.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                activeSection === section
                  ? "bg-slate-800 text-white" 
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
              onClick={() => {
                setActiveSection(section);
                setIsOpen(false);
              }}
              aria-label={`Navigate to ${section} section`}
            >
              {section}
            </Link>
          ))}
          
          {/* CV Button for Mobile */}
          <a
            ref={mobileCvBtnRef}
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 flex items-center"
            aria-label="Download CV"
          >
            <span>Get Resum</span>
            <svg 
              ref={downloadIconMobileRef}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;