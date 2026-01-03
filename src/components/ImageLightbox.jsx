import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 0.5));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>

        {/* Zoom Controls */}
        <div className="absolute top-6 left-6 flex gap-2">
          <motion.button
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
          >
            <ZoomIn className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
          >
            <ZoomOut className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <motion.button
            className="absolute left-6 p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <motion.button
            className="absolute right-6 p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        )}

        {/* Image */}
        <motion.div
          className="max-w-[90vw] max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s' }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          />
        </motion.div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md overflow-x-auto max-w-[80vw]">
            {images.map((img, idx) => (
              <motion.button
                key={idx}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex ? 'border-blue-500 scale-110' : 'border-transparent opacity-50'
                }`}
                whileHover={{ scale: 1.1, opacity: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                  setZoom(1);
                }}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
