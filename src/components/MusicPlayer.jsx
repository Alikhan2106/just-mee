"use client";
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ shouldPlay, src = "/assets/romantic-piano.mp3" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
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
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md border border-pink-200">
      <audio ref={audioRef} src={src} loop preload="auto" />

      <button 
        onClick={togglePlay}
        className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-pink-600 hover:text-pink-700"
      >
        <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
        <span>{isPlaying ? "Pause" : "Music"}</span>
      </button>

      <button onClick={toggleMute} className="text-pink-500 hover:text-pink-700">
        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}