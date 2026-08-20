"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function CakeInteraction({ onNext }) {
  const [lit, setLit] = useState(true);

  const blowCandles = () => {
    setLit(false);
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Make a Wish! 🕯️</h2>
      <p className="text-gray-500 mb-10 italic">Click the flames to blow out the candles</p>

      {/* Cake Container */}
      <div className="relative cursor-pointer" onClick={blowCandles}>
        {/* Flames */}
        <div className="flex justify-center gap-6 mb-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              {lit && (
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="w-4 h-6 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full blur-[1px]"
                />
              )}
              <div className="w-2 h-10 bg-pink-300 rounded-t-sm" />
            </div>
          ))}
        </div>

        {/* Cake Layers */}
        <div className="w-56 h-20 bg-pink-200 rounded-t-3xl border-b-4 border-pink-300 flex items-center justify-center shadow-inner">
          <span className="text-pink-400 text-xl font-bold">✨ ✨ ✨</span>
        </div>
        <div className="w-72 h-24 bg-pink-300 rounded-b-3xl shadow-xl flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Happy Birthday!</span>
        </div>
      </div>

      {!lit && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-4"
        >
          <p className="text-xl text-pink-600 font-semibold">May all your wishes come true! 🎉</p>
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-md"
          >
            Final Surprise 🎆
          </button>
        </motion.div>
      )}
    </div>
  );
}