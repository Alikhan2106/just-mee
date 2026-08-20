"use client";
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalSurprise({ name = "Zahin", onReplay, onHome }) {
  const triggerFireworks = () => {
    const count = 180;
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
    <div className="min-h-[100dvh] bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-950 text-white flex flex-col items-center justify-center p-4 sm:p-6 text-center relative overflow-hidden font-serif">
      {/* Floating lanterns */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: `${i * 22}%` }}
            animate={{ y: '-10vh' }}
            transition={{ repeat: Infinity, duration: 12 + i * 2, ease: "linear" }}
            className="w-6 sm:w-8 h-9 sm:h-12 bg-amber-400/80 rounded-t-full rounded-b-lg blur-[1px] shadow-[0_0_15px_rgba(251,191,36,0.8)] absolute"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-sm sm:max-w-xl bg-white/10 backdrop-blur-md p-5 sm:p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center w-full"
      >
        {/* Aspect-ratio safe portrait frame */}
        <div className="w-36 h-48 sm:w-52 sm:h-68 bg-white p-2.5 rounded-2xl shadow-xl mb-4 sm:mb-6 border-2 border-pink-300 transform -rotate-1">
          <img 
            src="/assets/zahin-portrait.jpg" 
            alt="Zahin" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-pink-300 mb-2 sm:mb-3">
          Happy Birthday, {name}! ❤️
        </h1>
        
        <p className="text-xs sm:text-base text-purple-100 italic leading-relaxed mb-6">
          "You are my favorite thought, my happiest place, and my favorite adventure. Thank you for being everything you are."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center w-full">
          <button
            onClick={triggerFireworks}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/50 text-xs sm:text-sm min-h-[42px]"
          >
            Fireworks 🎆
          </button>

          <button
            onClick={onReplay}
            className="w-full sm:w-auto px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-medium rounded-full border border-white/30 backdrop-blur-md text-xs sm:text-sm min-h-[42px]"
          >
            Replay Surprise 🔄
          </button>

          <button
            onClick={onHome}
            className="w-full sm:w-auto px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white/80 font-medium rounded-full border border-white/10 backdrop-blur-md text-xs sm:text-sm min-h-[42px]"
          >
            Home 🏠
          </button>
        </div>
      </motion.div>
    </div>
  );
}