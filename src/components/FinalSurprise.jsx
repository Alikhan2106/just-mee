"use client";
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalSurprise({ name = "Zahin", onReplay, onHome }) {
  const triggerFireworks = () => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-950 text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-serif">
      {/* Floating lanterns */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: `${i * 18}%` }}
            animate={{ y: '-10vh' }}
            transition={{ repeat: Infinity, duration: 12 + i * 2, ease: "linear" }}
            className="w-8 h-12 bg-amber-400/80 rounded-t-full rounded-b-lg blur-[1px] shadow-[0_0_15px_rgba(251,191,36,0.8)] absolute"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center"
      >
        {/* Main Portrait Frame */}
        <motion.div 
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="w-48 h-64 md:w-56 md:h-72 bg-white p-3 rounded-2xl shadow-2xl mb-6 border-2 border-pink-300 transform -rotate-1"
        >
          <img 
            src="/assets/zahin-portrait.jpg" 
            alt="Zahin" 
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold text-pink-300 mb-4">
          Happy Birthday, {name}! ❤️
        </h1>
        
        <p className="text-base md:text-lg text-purple-100 italic leading-relaxed mb-8">
          "You are my favorite thought, my happiest place, and my favorite adventure. Thank you for being everything you are."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
          <button
            onClick={triggerFireworks}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-full shadow-lg shadow-pink-500/50 transition-all transform hover:scale-105 text-sm"
          >
            Fireworks 🎆
          </button>

          <button
            onClick={onReplay}
            className="w-full sm:w-auto px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-full border border-white/30 backdrop-blur-md transition-all transform hover:scale-105 text-sm"
          >
            Replay Surprise 🔄
          </button>

          <button
            onClick={onHome}
            className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white/80 font-medium rounded-full border border-white/10 backdrop-blur-md transition-all text-sm"
          >
            Back to Home 🏠
          </button>
        </div>
      </motion.div>
    </div>
  );
}