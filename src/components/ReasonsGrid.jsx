"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReasonsGrid({ reasons = [], onNext }) {
  const [flipped, setFlipped] = useState({});

  const toggleCard = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 max-w-4xl mx-auto font-serif text-center">
      <h2 className="text-3xl sm:text-4xl text-pink-600 font-bold mb-2">Reasons Why I Love You 💖</h2>
      <p className="text-gray-500 text-sm mb-6 italic">Tap any note to flip</p>

      {/* 2 columns on mobile, 4 on larger screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full mb-8">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            onClick={() => toggleCard(idx)}
            className="h-28 sm:h-36 cursor-pointer perspective"
          >
            <motion.div
              animate={{ rotateY: flipped[idx] ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full text-center rounded-2xl shadow-md border border-pink-200 bg-white p-3 flex items-center justify-center [transform-style:preserve-3d]"
            >
              {/* Front */}
              <div className="absolute inset-0 flex items-center justify-center bg-pink-100/80 rounded-2xl text-pink-600 font-bold text-sm sm:text-base [backface-visibility:hidden]">
                Card #{idx + 1} 💌
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center bg-pink-500 text-white rounded-2xl p-2 sm:p-3 text-xs sm:text-sm font-medium [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {reason}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-md shadow-pink-300 text-sm sm:text-base"
      >
        Blow Candles 🎂
      </button>
    </div>
  );
}