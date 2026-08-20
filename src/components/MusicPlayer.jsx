"use client";
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ shouldPlay, src = "/assets/romantic-piano.mp3" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Trigger audio playback when shouldPlay changes to true
  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay policy blocked sound:", err));
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback error:", err));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-pink-200">
      <audio ref={audioRef} src={src} loop preload="auto" />

      {/* Play / Pause Toggle */}
      <button 
        onClick={togglePlay}
        className="flex items-center gap-2 text-xs font-semibold text-pink-600 hover:text-pink-700 transition-colors"
      >
        <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
        <span>{isPlaying ? "Pause Music" : "Play Music"}</span>
      </button>

      {/* Mute Toggle */}
      <button onClick={toggleMute} className="text-pink-500 hover:text-pink-700 transition-colors">
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}