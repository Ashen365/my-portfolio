import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    const audioInstance = new Audio();
    audioInstance.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    audioInstance.loop = true;
    audioInstance.volume = 0.2;
    audioInstance.preload = 'auto';
    return audioInstance;
  });

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMusic = async () => {
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Reset audio if it ended
        if (audio.ended) {
          audio.currentTime = 0;
        }
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error('Audio playback error:', err);
      // Silently fail - browser might be blocking autoplay
      setIsPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        boxShadow: isPlaying 
          ? [
              '0 0 0 0 rgba(168, 85, 247, 0.7)',
              '0 0 0 20px rgba(168, 85, 247, 0)',
            ]
          : '0 10px 40px rgba(168, 85, 247, 0.3)'
      }}
      transition={{
        boxShadow: {
          duration: 1.5,
          repeat: isPlaying ? Infinity : 0,
        }
      }}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
          >
            <Volume2 className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="paused"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
          >
            <VolumeX className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated sound waves */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-white rounded-full"
              animate={{
                height: ['8px', '16px', '8px'],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
};

export default MusicToggle;
