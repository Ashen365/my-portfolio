import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blog = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const blogCardsRef = useRef([]);

  const addToCardsRef = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      blogCardsRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
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
        },
      }
    );

    blogCardsRef.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt:
        "Learn how to construct responsive and interactive web applications using React.js and modern design principles for an optimal user experience.",
      date: "May 10, 2025",
      readTime: "7 min read",
      tags: ["React", "Web Development"],
      link: "https://ashen-designs.blogspot.com/2025/06/building-modern-web-applications-with.html",
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS for Rapid UI Development",
      excerpt:
        "Discover how Tailwind CSS can dramatically speed up your front-end development workflow and create beautiful, consistent interfaces with minimal effort.",
      date: "April 28, 2025",
      readTime: "5 min read",
      tags: ["Tailwind", "CSS", "UI Design"],
      link: "https://ashen-designs.blogspot.com/2025/06/the-power-of-tailwind-css-for-rapid-ui.html",
    },
    {
      id: 3,
      title: "Creating Stunning Animations with GSAP",
      excerpt:
        "Explore how to implement eye-catching animations that enhance user engagement using the GSAP animation library in your web projects.",
      date: "April 15, 2025",
      readTime: "8 min read",
      tags: ["GSAP", "Animation", "JavaScript"],
      link: "https://ashen-designs.blogspot.com/2025/06/blogger-name-gsap-glow.html",
    },
    {
      id: 4,
      title: "Optimizing Web Performance for Better User Experience",
      excerpt:
        "Learn essential techniques for improving web performance, reducing load times, and creating smoother interactions for your users.",
      date: "April 3, 2025",
      readTime: "6 min read",
      tags: ["Performance", "Web Development"],
      link: "https://ashen-designs.blogspot.com/2025/06/perfboost.html",
    },
    {
      id: 5,
      title: "Mastering Responsive Design for All Devices",
      excerpt:
        "A comprehensive guide to creating truly responsive websites that look and function perfectly across desktops, tablets, and mobile devices.",
      date: "March 22, 2025",
      readTime: "9 min read",
      tags: ["Responsive Design", "CSS"],
      link: "https://ashen-designs.blogspot.com/2025/06/mastering-responsive-design-for-all.html",
    },
    {
      id: 6,
      title: "The Future of UI/UX Design Trends",
      excerpt:
        "An exploration of emerging design trends that will shape the future of user interfaces and experiences in the coming years.",
      date: "March 10, 2025",
      readTime: "5 min read",
      tags: ["UI/UX", "Design Trends"],
      link: "https://ashen-designs.blogspot.com/2025/06/the-future-of-uiux-design-trends.html",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 inline-block mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on web development, design, and modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              ref={addToCardsRef}
              className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:border-slate-700 flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-800/80 px-2.5 py-0.5 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center text-sm text-slate-400 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <p className="text-slate-300 text-sm mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-bl-3xl rounded-tr-lg -z-10"></div>

              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-400 hover:underline"
                >
                  <span className="mr-2">Read article</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://ashen-designs.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-md hover:brightness-110 transition-all duration-300"
          >
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
