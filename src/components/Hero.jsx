"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero({ onEnter }) {
  const [dodgeX, setDodgeX] = useState(0);
  const [dodgeY, setDodgeY] = useState(0);

  const handleDodge = () => {
    setDodgeX(Math.random() * 160 - 80);
    setDodgeY(Math.random() * 160 - 80);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden font-serif text-center">
      {/* Floating Teddy (Scaled for mobile) */}
      <motion.img 
        animate={{ y: [0, -12, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        src="/assets/teddy-cloud.png" 
        className="absolute top-4 right-4 w-20 sm:w-28 md:w-36 pointer-events-none opacity-90"
        alt="Floating Teddy"
      />

      {/* Main Responsive Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 mb-4 px-2 leading-tight"
      >
        Warning: Too much love ahead,<br className="hidden sm:inline" /> proceed carefully 💖
      </motion.h1>
      
      <p className="text-base sm:text-xl text-pink-500 italic mb-8 sm:mb-12 font-medium">
        A special birthday surprise is waiting for you 🌸
      </p>

      {/* Responsive Stacking Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xs sm:max-w-none relative">
        <button 
          onClick={onEnter}
          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg shadow-pink-300/60 hover:scale-105 active:scale-95 transition-all text-base"
        >
          Come With Me ☁️
        </button>
        
        <motion.button 
          onHoverStart={handleDodge}
          onTouchStart={handleDodge}
          onClick={handleDodge}
          animate={{ x: dodgeX, y: dodgeY }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-md text-gray-500 rounded-full border border-white/80 text-base"
        >
          Maybe Later...
        </motion.button>
      </div>
    </div>
  );
}