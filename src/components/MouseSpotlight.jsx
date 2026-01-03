import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MouseSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={spotlightRef}
      className="pointer-events-none fixed z-[9999] w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(40px)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default MouseSpotlight;
