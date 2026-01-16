import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import ProjectDetailModal from './ProjectDetailModal';

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Personal Portfolio',
    technology: 'React.js, Tailwind CSS',
    description: 'Creative Full-Stack Developer Portfolio showcasing Ashen Shanilka\'s expertise in React.js, Tailwind CSS, JavaScript, Node.js, and modern web development with a sleek black theme and neon accents.',
    link: 'https://my-portfolio-orpin-three-38.vercel.app/',
    githubLink: 'https://github.com/Ashen365/my-portfolio',
    category: 'Frontend',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'CABWAVE',
    technology: 'HTML, CSS, JavaScript, PHP',
    description: 'A web-based ride-booking platform inspired by PickMe, allowing users to book cabs and manage trips through a responsive interface built with core web technologies and PHP.',
    link: 'https://www.behance.net/gallery/212473329/CABWAVE',
    githubLink: 'https://github.com/Ashen365/CABWAVEE',
    category: 'Full Stack',
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
  },
  {
    title: 'Burgeez',
    technology: 'HTML, CSS, JavaScript, PHP',
    description: 'An online food ordering platform for burgers and fast food, featuring a visually appealing menu and order customization, built with core web technologies and PHP.',
    link: 'https://www.behance.net/gallery/215521261/Burgeez',
    githubLink: 'https://github.com/Ashen365/Burgeez',
    category: 'Full Stack',
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop',
  },
  {
    title: 'Medical Connect',
    technology: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    description: 'A Java-based hospital appointment system to streamline patient-doctor interactions, featuring appointment booking and schedule management with JSP, Servlets, and MySQL.',
    link: 'https://www.behance.net/gallery/215656507/Medi-Connect-E-channeling-System',
    githubLink: 'https://github.com/Ashen365/medical-connect',
    category: 'Backend',
    gradient: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  },
  {
    title: 'Ceylon Escape',
    technology: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    description: 'A travel booking platform for couples exploring Sri Lanka, offering hotel booking, activity planning, and package customization, built with the MERN stack.',
    link: 'https://www.behance.net/ashenshanilka',
    githubLink: 'https://github.com/Ashen365/ceylon-escape',
    category: 'Frontend',
    gradient: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  },
  {
    title: 'Factory Pro',
    technology: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    description: 'An industrial management system for handling raw materials, employee records, and sales tracking, featuring powerful CRUD operations and a clean React UI with the MERN stack.',
    link: 'https://github.com/yourusername/factory-pro',
    githubLink: 'https://github.com/AshanDilakshana/factoryManagementSystem',
    category: 'Full Stack',
    gradient: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  },
  {
    title: 'LearnHub',
    technology: 'React.js, Spring Boot, MongoDB',
    description: 'A skill-sharing and e-learning platform with posts, tutorials, comment threads, and quizzes, built with React, Spring Boot, and MongoDB, supporting OAuth2 login and real-time feedback.',
    link: 'https://github.com/yourusername/learnhub',
    githubLink: 'https://github.com/AshanDilakshana/LearnHub_WebApp',
    category: 'Full Stack',
    gradient: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
  },
  {
    title: 'TripWavee',
    technology: 'Full Stack',
    description: 'A comprehensive travel and trip management application built with modern full-stack technologies, featuring trip planning, booking management, and real-time updates for seamless travel experiences.',
    link: 'https://github.com/Ashen365/TripWavee',
    githubLink: 'https://github.com/Ashen365/TripWavee',
    category: 'Full Stack',
    gradient: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
  },
  {
    title: 'Tic-Tac-Toe',
    technology: 'JavaScript, HTML, CSS',
    description: 'An interactive and engaging Tic-Tac-Toe game with a clean UI, smooth animations, and intelligent gameplay. Features include player vs player mode, score tracking, and responsive design.',
    link: 'https://github.com/Ashen365/tic-tac-toe',
    githubLink: 'https://github.com/Ashen365/tic-tac-toe',
    category: 'Gaming',
    gradient: 'from-violet-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=600&fit=crop',
  },
  {
    title: 'TodoApp',
    technology: 'Kotlin, Android Jetpack, MVVM',
    description: 'A simple and clean ToDo application built using Kotlin and Android Jetpack libraries. Features include task creation, editing, deletion, and task completion tracking. Designed with MVVM architecture for clean code separation.',
    link: 'https://github.com/Ashen365/TodoApp',
    githubLink: 'https://github.com/Ashen365/TodoApp',
    category: 'Mobile App',
    gradient: 'from-emerald-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
  },
  {
    title: 'OCEANONE',
    technology: 'HTML5, CSS3, Vanilla JavaScript',
    description: 'Modern responsive ocean services website with stunning video backgrounds, smooth animations, and multi-page navigation. Features an elegant UI design showcasing marine services with immersive visuals.',
    link: 'https://github.com/Ashen365/OCEANONE',
    githubLink: 'https://github.com/Ashen365/OCEANONE',
    category: 'Frontend',
    gradient: 'from-blue-600 to-cyan-400',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  },
  {
    title: 'Donely Form Editor',
    technology: 'JavaScript, Form Builder',
    description: 'An intuitive drag-and-drop form editor for creating dynamic forms with ease. Features include custom field types, validation rules, and export functionality for seamless integration.',
    link: 'https://github.com/Ashen365/donely-form-editor',
    githubLink: 'https://github.com/Ashen365/donely-form-editor',
    category: 'Frontend',
    gradient: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  {
    title: 'TripWave',
    technology: 'PHP, MySQL',
    description: 'A comprehensive travel booking and management system built with PHP and MySQL. Features include tour packages, booking management, customer profiles, and payment processing for travel agencies.',
    link: 'https://github.com/Ashen365/TripWave',
    githubLink: 'https://github.com/Ashen365/TripWave',
    category: 'Backend',
    gradient: 'from-sky-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
  },
  {
    title: 'Data Science & Analytics',
    technology: 'Python, Jupyter Notebook, Data Analysis',
    description: 'A collection of data science projects and analytics experiments using Python. Includes data visualization, statistical analysis, machine learning models, and exploratory data analysis notebooks.',
    link: 'https://github.com/Ashen365/Data_Science-Analytics',
    githubLink: 'https://github.com/Ashen365/Data_Science-Analytics',
    category: 'Data Science',
    gradient: 'from-fuchsia-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'Calculator C++',
    technology: 'C++, Command Line',
    description: 'A simple yet powerful C++ command-line calculator supporting basic arithmetic operations, power calculations, square root functions, and memory functions for advanced calculations.',
    link: 'https://github.com/Ashen365/calculator-c',
    githubLink: 'https://github.com/Ashen365/calculator-c',
    category: 'Backend',
    gradient: 'from-slate-500 to-gray-700',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop',
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="16px"
        scale={1.02}
        className="project-card"
      >
        <motion.div
          className="relative group h-full"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Glassmorphism Card */}
          <div className="h-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply`}
                animate={isHovered ? { opacity: 0.6 } : { opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Category badge on image */}
              <motion.div 
                className="absolute top-3 right-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm`}>
                  {project.category}
                </span>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-6 relative">
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={isHovered ? { x: ["-100%", "100%"] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10">
              
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300"
                  layoutId={`title-${project.title}`}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-sm font-medium text-blue-400 mb-3">
                  {project.technology}
                </p>
                
                <p className="text-sm text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex gap-3 flex-wrap">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.a>
                
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white border border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="mr-1.5 h-4 w-4" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                )}
              </div>
              </div>
            </div>

            {/* Corner accent */}
            <motion.div
              className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl`}
              animate={isHovered ? { scale: [1, 1.5, 1], rotate: 360 } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technology.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={headingRef} 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 inline-block mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          >
            My Projects
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work across various technologies and platforms
          </p>
          
          {/* Search Bar */}
          <motion.div
            className="max-w-xl mx-auto mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by name, technology, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-all"
              />
              {searchQuery && (
                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </motion.button>
              )}
            </div>
          </motion.div>
          
          {/* Category Filter with enhanced animations */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile App', 'Gaming'].map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                  filter === category
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {filter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        {filteredProjects.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-2xl text-slate-400">No projects found matching your search.</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter + searchQuery}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <div key={project.title} onClick={() => setSelectedProject(project)}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
