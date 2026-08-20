// components/Hero.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero({ onEnter }) {
  const [dodgeX, setDodgeX] = useState(0);
  const [dodgeY, setDodgeY] = useState(0);

  const handleDodge = () => {
    setDodgeX(Math.random() * 200 - 100);
    setDodgeY(Math.random() * 200 - 100);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center justify-center overflow-hidden font-serif">
      {/* Floating Teddy & Clouds */}
      <motion.img 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        src="/assets/teddy-cloud.png" 
        className="absolute top-10 right-20 w-32 cursor-pointer"
        alt="Floating Teddy"
      />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400 mb-4"
      >
        Warning: Too much love ahead,<br/> proceed carefully
      </motion.h1>
      
      <p className="text-xl text-pink-400 italic mb-12 font-script">
        A special surprise is waiting for you 🌸
      </p>

      <div className="flex gap-6 relative">
        <button 
          onClick={onEnter}
          className="px-8 py-4 bg-pink-400 text-white rounded-full shadow-lg shadow-pink-300/50 hover:bg-pink-500 transition-all"
        >
          Come With Me ☁️
        </button>
        
        <motion.button 
          onHoverStart={handleDodge}
          animate={{ x: dodgeX, y: dodgeY }}
          className="px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-400 rounded-full border border-white/40"
        >
          Maybe Later...
        </motion.button>
      </div>
    </div>
  );
}