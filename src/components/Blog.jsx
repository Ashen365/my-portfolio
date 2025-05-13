import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blog = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Create refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const blogCardsRef = useRef([]);
  
  // Add cards to ref array
  const addToCardsRef = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el);
    }
  };

  // Set up animations
  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
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
          start: "top 75%",
        }
      }
    );
    
    // Blog cards staggered animation
    gsap.fromTo(
      blogCardsRef.current,
      { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
    
    // Hover animations for blog cards
    blogCardsRef.current.forEach(card => {
      // Create hover animations
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -5,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        });
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Blog data
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt: "Learn how to construct responsive and interactive web applications using React.js and modern design principles for an optimal user experience.",
      date: "May 10, 2025",
      readTime: "7 min read",
      tags: ["React", "Web Development"]
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS for Rapid UI Development",
      excerpt: "Discover how Tailwind CSS can dramatically speed up your front-end development workflow and create beautiful, consistent interfaces with minimal effort.",
      date: "April 28, 2025",
      readTime: "5 min read",
      tags: ["Tailwind", "CSS", "UI Design"]
    },
    {
      id: 3,
      title: "Creating Stunning Animations with GSAP",
      excerpt: "Explore how to implement eye-catching animations that enhance user engagement using the GSAP animation library in your web projects.",
      date: "April 15, 2025",
      readTime: "8 min read",
      tags: ["GSAP", "Animation", "JavaScript"]
    },
    {
      id: 4,
      title: "Optimizing Web Performance for Better User Experience",
      excerpt: "Learn essential techniques for improving web performance, reducing load times, and creating smoother interactions for your users.",
      date: "April 3, 2025",
      readTime: "6 min read",
      tags: ["Performance", "Web Development"]
    },
    {
      id: 5,
      title: "Mastering Responsive Design for All Devices",
      excerpt: "A comprehensive guide to creating truly responsive websites that look and function perfectly across desktops, tablets, and mobile devices.",
      date: "March 22, 2025",
      readTime: "9 min read",
      tags: ["Responsive Design", "CSS"]
    },
    {
      id: 6,
      title: "The Future of UI/UX Design Trends",
      excerpt: "An exploration of emerging design trends that will shape the future of user interfaces and experiences in the coming years.",
      date: "March 10, 2025",
      readTime: "5 min read",
      tags: ["UI/UX", "Design Trends"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 inline-block mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on web development, design, and modern technologies
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={addToCardsRef}
              className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:border-slate-700 flex flex-col"
            >
              {/* Tag badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center rounded-full bg-slate-800/80 px-2.5 py-0.5 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Blog post title */}
              <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              
              {/* Meta information */}
              <div className="flex items-center text-sm text-slate-400 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              {/* Excerpt */}
              <p className="text-slate-300 text-sm mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-bl-3xl rounded-tr-lg -z-10"></div>
              
              {/* Read more link */}
              <div className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-400">
                <span className="mr-2">Read article</span>
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
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;