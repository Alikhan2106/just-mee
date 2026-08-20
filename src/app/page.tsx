"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SurpriseJourney from "@/components/SurpriseJourney";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingPetals from "@/components/FloatingPetals";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleEnter = () => {
    console.log("Next page transition goes here!");

    setStarted(true);
    setPlayMusic(true);
  };

  const handleRestart = () => {
    setStarted(false);
  };

  return (
    <main className="min-h-screen bg-pink-50 relative">
      {/* Floating Petals across all pages */}
      <FloatingPetals />

      {/* Music Player stays active across the journey */}
      <MusicPlayer shouldPlay={playMusic} />

      {/* Page Content */}
      {!started ? (
        <Hero onEnter={handleEnter} />
      ) : (
        <SurpriseJourney onRestart={handleRestart} />
      )}
    </main>
  );
}