import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import resumePDF from "../assets/Ashen's shanilkaCV.pdf";

const DownloadPortfolioButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = "Ashen_Herath_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="group fixed top-24 right-8 z-40 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <FileText className="w-5 h-5" />
      <span className="font-medium hidden md:inline">Download Portfolio</span>
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Download className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
};

export default DownloadPortfolioButton;
