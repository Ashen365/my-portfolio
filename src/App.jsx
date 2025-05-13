import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
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
    <div className="bg-background text-white">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;