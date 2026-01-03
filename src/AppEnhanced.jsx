import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { ThemeProvider, ThemeToggle } from './components/ThemeContext';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingActionButton from './components/FloatingActionButton';
import MusicToggle from './components/MusicToggle';
import MouseSpotlight from './components/MouseSpotlight';
import Navbar from './components/Navbar';
import HomeEnhanced from './components/HomeEnhanced';
import About from './components/About';
import Services from './components/Services';
import ProjectsEnhanced from './components/ProjectsEnhanced';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/contact';
import Footer from './components/Footer';

AOS.init({
  duration: 1000,
  once: true,
});

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background text-white relative">
        {/* Loading Screen */}
        <LoadingScreen />
        
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />
        
        {/* Mouse Spotlight Effect */}
        <MouseSpotlight />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Floating Action Button */}
        <FloatingActionButton />
        
        {/* Music Toggle */}
        <MusicToggle />
        

        {/* Page Transition Wrapper */}
        <PageTransition>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            
            {/* Sections with stagger animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <HomeEnhanced />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <About />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Services />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProjectsEnhanced />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Skills />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Blog />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Testimonials />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Contact />
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Footer />
              </motion.div>
            </motion.div>
          </motion.div>
        </PageTransition>
        
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 origin-left z-50"
          style={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
