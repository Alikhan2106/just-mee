"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MemoryTimeline({ memories = [], onNext }) {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-serif text-pink-600 font-bold mb-2">Our Favorite Memories 📸</h2>
      <p className="text-gray-500 mb-8 italic">Click a polaroid to enlarge</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-10">
        {memories.map((m, idx) => (
          <motion.div
            key={m.id || idx}
            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
            onClick={() => setSelectedIdx(idx)}
            className="cursor-pointer bg-white p-4 pb-6 rounded-lg shadow-xl border border-gray-100 transform transition-all"
          >
            <div className="w-full h-48 bg-pink-100 rounded mb-3 overflow-hidden">
              <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
            </div>
            <p className="font-serif text-center text-gray-800 font-semibold">{m.title}</p>
          </motion.div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-md"
      >
        Continue Journey ✨
      </button>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 max-w-lg rounded-2xl shadow-2xl text-center"
            >
              <img src={memories[selectedIdx].image} alt="" className="rounded-lg mb-4 max-h-80 w-full object-cover" />
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{memories[selectedIdx].title}</h3>
              <p className="text-gray-600 italic">{memories[selectedIdx].text}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}