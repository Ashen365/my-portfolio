import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Personal Portfolio',
    technology: 'React.js, Tailwind CSS',
    description: 'Creative Full-Stack Developer Portfolio showcasing Ashen Shanilka\'s expertise in React.js, Tailwind CSS, JavaScript, Node.js, and modern web development with a sleek black theme and neon accents.',
    link: 'https://your-portfolio-link.com', // Replace with actual portfolio link
    category: 'Frontend',
  },
  {
    title: 'CABWAVE',
    technology: 'HTML, CSS, JavaScript, PHP',
    description: 'A web-based ride-booking platform inspired by PickMe, allowing users to book cabs and manage trips through a responsive interface built with core web technologies and PHP.',
    link: 'https://www.behance.net/gallery/212473329/CABWAVE',
    category: 'Full Stack',
  },
  {
    title: 'Burgeez',
    technology: 'HTML, CSS, JavaScript, PHP',
    description: 'An online food ordering platform for burgers and fast food, featuring a visually appealing menu and order customization, built with core web technologies and PHP.',
    link: 'https://www.behance.net/gallery/215521261/Burgeez',
    category: 'Full Stack',
  },
  {
    title: 'Medical Connect',
    technology: 'Java (JSP/Servlets), JavaScript, MySQL',
    description: 'A Java-based hospital appointment system to streamline patient-doctor interactions, featuring appointment booking and schedule management with JSP, Servlets, and MySQL.',
    link: 'https://www.behance.net/gallery/215656507/Medi-Connect-E-channeling-System',
    category: 'Backend',
  },
  {
    title: 'Ceylon Escape',
    technology: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    description: 'A travel booking platform for couples exploring Sri Lanka, offering hotel booking, activity planning, and package customization, built with the MERN stack.',
    link: 'https://www.behance.net/ashenshanilka',
    category: 'Full Stack',
  },
  {
    title: 'Factory Pro',
    technology: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    description: 'An industrial management system for handling raw materials, employee records, and sales tracking, featuring powerful CRUD operations and a clean React UI with the MERN stack.',
    link: 'https://github.com/yourusername/factory-pro',
    category: 'Full Stack',
  },
  {
    title: 'LearnHub',
    technology: 'React.js, Spring Boot, MongoDB',
    description: 'A skill-sharing and e-learning platform with posts, tutorials, comment threads, and quizzes, built with React, Spring Boot, and MongoDB, supporting OAuth2 login and real-time feedback.',
    link: 'https://github.com/yourusername/learnhub',
    category: 'Full Stack',
  },
];

const Projects = () => {
  const [filter, setFilter] = React.useState('All');
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    // GSAP animations for section heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
    
    // Staggered animation for project cards
    gsap.fromTo(
      cardsRef.current,
      { 
        y: 60, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Re-run animations when filter changes
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { 
          y: 20, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [filter]);

  // Reset refs when projects change
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, filteredProjects.length);
  }, [filteredProjects]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 inline-block mb-4">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work across various technologies and platforms
          </p>
          
          {/* Category Filter - inspired by shadcn/ui tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Frontend', 'Backend', 'Full Stack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              ref={el => cardsRef.current[index] = el}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card inspired by shadcn/ui card component */}
              <div className="h-full rounded-lg border border-slate-800 bg-slate-900/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-lg">
                {/* Project category badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-slate-800/80 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm font-medium text-slate-400 mb-2">
                  {project.technology}
                </p>
                
                <p className="text-sm text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
                
                {/* Visual embellishment for hover state - inspired by shadcn/ui hover card */}
                {hoveredIndex === index && (
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500 to-green-500 opacity-20 blur-sm transition-all duration-300 group-hover:opacity-30 -z-10"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Show this if no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;