"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReplyMessage({ onNext }) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: 'Zahin',
          content: message,
          timestamp: new Date().toISOString()
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-5rem)] p-4 font-serif text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#fffdfa] border border-pink-200 p-6 sm:p-8 rounded-3xl shadow-xl max-w-lg w-full text-amber-950 flex flex-col"
      >
        <div className="text-4xl sm:text-5xl mb-2 animate-bounce">💬</div>
        <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-2 italic">
          Leave a Note for Me 🥹❤️
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 italic">
          Write whatever is on your mind... it will be sent straight to my private inbox. ✨
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3.5 border border-pink-200 rounded-2xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/40 resize-none"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md shadow-pink-300/50 hover:from-pink-600 hover:to-rose-600 transition-all min-h-[42px]"
            >
              {isSubmitting ? 'Sending...' : 'Send Message 💌'}
            </button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 py-4">
            <p className="text-pink-600 font-bold text-sm sm:text-base">
              Message sent successfully! Thank you ❤️✨
            </p>
            <button
              onClick={onNext}
              className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-md min-h-[42px]"
            >
              See Final Surprise 🎆
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}