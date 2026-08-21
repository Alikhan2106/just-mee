"use client";
import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const SECRET_PIN = "1234"; // Set your custom passcode here

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 5000); // Auto-refresh every 5s
      return () => clearInterval(interval);
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 font-sans">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 max-w-sm w-full">
          <h1 className="text-xl font-bold text-center mb-4 text-pink-400">Admin Authentication</h1>
          <input
            type="password"
            placeholder="Enter Admin PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-center text-lg mb-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={() => pin === SECRET_PIN ? setAuthenticated(true) : alert("Wrong PIN")}
            className="w-full py-2.5 bg-pink-500 hover:bg-pink-600 rounded-xl font-semibold transition-all"
          >
            Access Inbox
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-bold text-pink-400">Received Messages 📩</h1>
          <button 
            onClick={fetchMessages}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg border border-slate-700"
          >
            Refresh
          </button>
        </div>

        {messages.length === 0 ? (
          <p className="text-slate-500 text-center py-12 italic">No messages received yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-pink-300 text-sm">{msg.sender}</span>
                  <span className="text-[10px] text-slate-500">
                    {new Date(msg.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-slate-200 text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}