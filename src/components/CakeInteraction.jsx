"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CakeInteraction({ onNext }) {
  const [candlesLit, setCandlesLit] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-5rem)] p-4 text-center font-serif">
      <h2 className="text-2xl sm:text-4xl font-bold text-pink-600 mb-2">
        Make a Wish & Blow Out the Candles 🎂
      </h2>
      <p className="text-gray-500 text-xs sm:text-sm mb-6">
        {candlesLit ? "Tap the candles to blow them out!" : "Your wish has been sent to the stars! ✨"}
      </p>

      {/* Responsive Cake Visual */}
      <div 
        onClick={() => setCandlesLit(false)}
        className="relative cursor-pointer my-4 p-4 flex flex-col items-center justify-center select-none"
      >
        {/* Flames */}
        <div className="flex gap-4 sm:gap-6 mb-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              {candlesLit && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 0.6 + i * 0.1 }}
                  className="w-3 h-4 bg-amber-400 rounded-full blur-[1px] shadow-[0_0_10px_#f59e0b]"
                />
              )}
              <div className="w-1.5 h-6 bg-pink-300 rounded-t" />
            </div>
          ))}
        </div>

        {/* Cake Body */}
        <div className="w-44 sm:w-60 h-20 sm:h-28 bg-pink-300 rounded-t-3xl border-b-8 border-pink-400 relative shadow-md flex items-center justify-center text-2xl">
          🍓 🍰 🍓
        </div>
        <div className="w-52 sm:w-72 h-8 sm:h-10 bg-amber-100 rounded-b-2xl shadow-lg border-t-2 border-amber-200" />
      </div>

      {!candlesLit && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={onNext}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg text-sm sm:text-base min-h-[44px]"
        >
          See Final Surprise ✨
        </motion.button>
      )}
    </div>
  );
}