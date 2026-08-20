"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReasonsGrid({ reasons = [], onNext }) {
  const [flipped, setFlipped] = useState({});

  const toggleCard = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif text-pink-600 font-bold mb-2">Reasons Why I Love You 💖</h2>
      <p className="text-gray-500 mb-8 italic">Tap cards to flip</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-10">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            onClick={() => toggleCard(idx)}
            className="h-36 cursor-pointer perspective"
          >
            <motion.div
              animate={{ rotateY: flipped[idx] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full text-center rounded-2xl shadow-lg border border-pink-200 bg-white p-4 flex items-center justify-center [transform-style:preserve-3d]"
            >
              {/* Front */}
              <div className="absolute inset-0 flex items-center justify-center bg-pink-100 rounded-2xl text-pink-500 font-bold text-lg [backface-visibility:hidden]">
                Card #{idx + 1} 💌
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center bg-pink-500 text-white rounded-2xl p-3 text-sm font-medium [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {reason}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-md"
      >
        Final Surprise 🎆
      </button>
    </div>
  );
}