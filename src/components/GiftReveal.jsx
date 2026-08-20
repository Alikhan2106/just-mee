"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function GiftReveal({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#f43f5e', '#e879f9']
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      {!isOpen ? (
        <motion.div 
          onClick={handleOpen}
          whileHover={{ scale: 1.05 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer bg-pink-400 text-white p-10 rounded-3xl shadow-2xl border-4 border-pink-200 relative group"
        >
          <div className="text-8xl select-none mb-4">🎁</div>
          <p className="text-xl font-medium tracking-wide">Someone very special has a birthday today...</p>
          <p className="text-sm opacity-80 mt-2 italic">(Click the box to open your gift)</p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
            Happiest Birthday My Zahin ❤️
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed italic mb-8">
            "You make every moment brighter just by being you. Every step of this journey was created to show you how deeply loved you are."
          </p>
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-md shadow-pink-300"
          >
            Read My Letter 💌
          </button>
        </motion.div>
      )}
    </div>
  );
}