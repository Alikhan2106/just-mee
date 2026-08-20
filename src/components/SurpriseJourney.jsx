"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GiftReveal from './GiftReveal';
import LoveLetter from './LoveLetter';
import ReasonsGrid from './ReasonsGrid';
import CakeInteraction from './CakeInteraction';
import FinalSurprise from './FinalSurprise';
import { surpriseData } from '@/data/config';

export default function SurpriseJourney({ onRestart }) {
  const [stage, setStage] = useState(1);
  const totalStages = 5;

  const nextStage = () => setStage((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 text-gray-800 relative overflow-hidden font-serif">
      {/* Progress Dots */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50">
        {Array.from({ length: totalStages }).map((_, i) => (
          <div
            key={i}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              stage === i + 1 ? 'w-8 bg-pink-500' : 'w-2 bg-pink-200'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Stage 1: Gift Box Reveal */}
        {stage === 1 && (
          <motion.div key="stage1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <GiftReveal onNext={nextStage} />
          </motion.div>
        )}

        {/* Stage 2: Love Letter */}
        {stage === 2 && (
          <motion.div key="stage2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LoveLetter onNext={nextStage} />
          </motion.div>
        )}

        {/* Stage 3: Reasons Why I Love You */}
        {stage === 3 && (
          <motion.div key="stage3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ReasonsGrid reasons={surpriseData.reasons} onNext={nextStage} />
          </motion.div>
        )}

        {/* Stage 4: Birthday Cake & Candles */}
        {stage === 4 && (
          <motion.div key="stage4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CakeInteraction onNext={nextStage} />
          </motion.div>
        )}

        {/* Stage 5: Final Grand Finale */}
        {stage === 5 && (
          <motion.div key="stage5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FinalSurprise
              name={surpriseData.name}
              onReplay={() => setStage(1)}
              onHome={onRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}