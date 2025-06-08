import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const roles = ["UI/UX Designer", "Frontend Developer", "Backend Developer"];

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial hidden state
    gsap.set([nameRef.current, titleRef.current, cardRef.current, btnRef.current], {
      opacity: 0,
      y: 30
    });

    // Entrance animation
    tl.to(nameRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(cardRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(btnRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");

    // Typing effect loop
    const typingTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    roles.forEach((role) => {
      typingTl.to(titleRef.current, {
        text: role,
        duration: 1.5,
        ease: "none",
        opacity: 1
      }).to({}, { duration: 1 }); // Pause before next
    });

    // Optional hover animation on name
    gsap.to(nameRef.current, {
      duration: 0.8,
      color: "#4ade80",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-3xl text-center space-y-8">
        <h1
          ref={nameRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Hi, I'm Ashen
        </h1>

        <p
          ref={titleRef}
          className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium"
        >
          {/* Typing text will go here */}
        </p>

        <div
          ref={cardRef}
          className="p-6 border border-slate-800 shadow-lg bg-slate-800/90 backdrop-blur-sm rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="3" x2="21" y1="9" y2="9"></line>
                  <line x1="9" x2="9" y1="21" y2="9"></line>
                </svg>
              </div>
              <span className="font-medium text-slate-200">UI/UX Design</span>
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-600" />

            <div className="flex items-center gap-3">
              <div className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <span className="font-medium text-slate-200">Frontend Development</span>
            </div>
          </div>
        </div>

        <div ref={btnRef}>
          <a
            href="https://www.behance.net/ashenshanilka"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
