"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Happiesttt Birthdayyy Zahinnn! 🥹❤️🎂✨😘",
      content: (
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
          Aaj na main itnaaa khush hoon 🥹❤️ Is din ka itna wait kiya maine ki bas kab ye din aaye aur main tumhe wish karoonnn. 🫶🏻✨💋 Apno ko kitne mahine ho chuke hain, aur kitni baatein, ladaai-jhagde hue hain 😭😂❤️ phir bhi apan abhi tak saath hain. 🫂😘
          <br /><br />
          Shayad tum mere jaise friend ho, waisa koi mila hi nahi... na koi aur mil sakta hai. 🥹❤️ Aur bas yahi dua hai ki tum mere saath hamesha aise hi raho. 🤲🏻✨ Bhale main tumhe kitna bhi pareshan karun, ladun-jhagdu 😭😂, phir bhi bas apan saath rahein. 🫶🏻❤️😘
        </p>
      ),
      buttonText: "Read Next Part 💌"
    },
    {
      title: "Our Unbreakable Bond 🫂❤️",
      content: (
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
          Aur bohot zyada hi tumse khush hota hoon main. 🥹❤️ Aaj ka din mere liye bhi bohot khaas hai... jitna tum mere liye bohot khaas ho, utna hi ye din bhi. ✨🎂❤️💋
          <br /><br />
          Main tumhe kitna pareshan karta hoon na 😭😂... dekho na, apno mein kitna attachment ho gaya hai. 🥹❤️ Aur hona hi tha, kitna time jo ho chuka hai apno ko ek saath rehte hue. 🫂✨😘 Apno ko koi door nahi kar sakta. Log bhale apno ko door karna chahte hain, par hamein unse ghaas barabar bhi fark nahi padta. 😭😂❤️
          <br /><br />
          Warna to logon se itna bura sunne ke baad shayad hi koi saath rahe... 🥺 Par apan ek-dusre ko itna samajhte hain ki bhale koi bhi ho, apno ko alag nahi kar sakta. ❤️🫂💋
          <br /><br />
          Allah apno ko aise hi khush rakhe aur hamesha saath rakhe. 🤲🏻❤️✨😘
        </p>
      ),
      buttonText: "Read What I Wrote For You 🌸"
    },
    {
      subtitle: "Maine tumhare liye kuch likha hai... 🥹❤️",
      content: (
        <div className="bg-pink-50/80 p-4 sm:p-6 rounded-2xl border border-pink-200 text-pink-950 italic text-base sm:text-lg font-medium leading-relaxed sm:leading-loose text-center my-2 shadow-inner">
          “Tumse jo dil laga, toh phir dil kahin laga hi nahi,<br />
          Tumhare baad kisi aur mein woh baat mili hi nahi.<br />
          Waqt guzarta raha, log badalte rahe magar,<br />
          Ek tum ho jise chaha… aur chahna kabhi chhoda hi nahi.” ❤️✨💋
        </div>
      ),
      buttonText: "Next Shayari 📜"
    },
    {
      subtitle: "Aur ek aur... 🥹❤️😘",
      content: (
        <div className="bg-pink-50/80 p-4 sm:p-6 rounded-2xl border border-pink-200 text-pink-950 italic text-base sm:text-lg font-medium leading-relaxed sm:leading-loose text-center my-2 shadow-inner">
          “Tumko chaha hai toh phir tumko hi chahenge,<br />
          Waqt badlega magar hum nahi badal paayenge.” 🫶🏻✨💋
        </div>
      ),
      buttonText: "Next Shayari 📜"
    },
    {
      subtitle: "Aur ye wali bhi... 🥹🌸",
      content: (
        <div className="bg-pink-50/80 p-4 sm:p-6 rounded-2xl border border-pink-200 text-pink-950 italic text-base sm:text-lg font-medium leading-relaxed sm:leading-loose text-center my-2 shadow-inner">
          “Tumhare saath kabhi raat bhi nahi ki hai,<br />
          Aur is tarah ki koi baat bhi nahi ki hai.<br />
          Abhi se itna samajhne lagi ho mujhko tum,<br />
          Abhi to tumse pehli mulaqat bhi nahi ki hai.” ❤️😘
        </div>
      ),
      buttonText: "Answer to Your Question 🥹❤️"
    },
    {
      subtitle: "Aur ab jo shayari hai na... 🥹❤️💋",
      content: (
        <div className="space-y-3 my-1">
          <div className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-pink-300 relative">
            <img 
              src="/assets/zahin-eyes.jpg" 
              alt="Zahin Eyes" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-pink-50/80 p-4 sm:p-5 rounded-2xl border border-pink-200 text-pink-950 italic text-sm sm:text-base font-medium leading-relaxed text-center shadow-inner">
            “Tujhe kya khabar, kis tarah yaad kiya jaata hai,<br />
            Har muskurahat ke peeche ek naam chhupaya jaata hai.<br />
            Shikayat to tumne kar di ki ‘yaad nahi karte’,<br />
            Hum woh hain jo duaon mein bhi sirf tumhe hi dohraya karte hain.” 🤲🏻❤️✨😘
          </div>
        </div>
      ),
      buttonText: "Final Message 💌"
    },
    {
      title: "Bas itna hi kehna hai... 🤲🏻✨",
      content: (
        <div className="text-center space-y-3 my-2">
          <p className="text-xl sm:text-2xl font-bold text-pink-600">
            Happiesttt Birthdayyy once again Zahinnn! 🎂❤️🥹😘💋
          </p>
          <p className="text-sm sm:text-lg text-gray-800 leading-relaxed italic">
            Allah tumhe hamesha khush rakhe, tumhari har dua qubool ho, aur tum hamesha aise hi haste-muskurate raho. 🤲🏻✨🫂❤️
          </p>
        </div>
      ),
      buttonText: "Reasons I Love You 💖"
    }
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 font-serif">
      {!opened ? (
        <motion.div
          onClick={() => setOpened(true)}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          className="cursor-pointer bg-gradient-to-br from-amber-50 via-pink-50 to-orange-100 border-2 border-pink-200 p-8 sm:p-12 rounded-3xl shadow-2xl text-center max-w-xs sm:max-w-sm w-full"
        >
          <div className="text-6xl sm:text-7xl mb-4 animate-bounce">💌</div>
          <h3 className="text-xl sm:text-2xl font-bold text-pink-600">For Zahin</h3>
          <p className="text-pink-400 text-xs sm:text-sm mt-2 italic">Tap seal to open your special letter</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#fffdfa] border border-pink-200 p-5 sm:p-8 rounded-3xl shadow-2xl max-w-lg sm:max-w-xl w-full font-serif text-amber-950"
        >
          <div className="flex justify-between items-center mb-3 border-b border-pink-100 pb-2">
            <span className="text-[10px] sm:text-xs font-semibold text-pink-400 uppercase tracking-widest">
              Part {step + 1} of {steps.length}
            </span>
            <span className="text-xl">🕯️</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px] flex flex-col justify-center"
            >
              {steps[step].title && (
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600 italic">
                  {steps[step].title}
                </h2>
              )}
              {steps[step].subtitle && (
                <p className="text-base sm:text-lg font-medium text-pink-500 italic mb-2">
                  {steps[step].subtitle}
                </p>
              )}
              {steps[step].content}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 pt-4 border-t border-pink-100 flex justify-between items-center gap-2">
            {step > 0 ? (
              <button
                onClick={() => setStep((prev) => prev - 1)}
                className="px-3 sm:px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-all text-xs font-medium"
              >
                ← Back
              </button>
            ) : <div />}

            <button
              onClick={handleNextStep}
              className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all text-xs sm:text-sm font-semibold shadow-md shadow-pink-300/50"
            >
              {steps[step].buttonText}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}