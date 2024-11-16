"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    position: "relative" as const,
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "600px",
    width: "90%",
    padding: 0,
    border: "none",
    background: "transparent",
  },
};

export function WelcomeModal() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setTimeout(() => {
        setIsLoading(false);
        setShowWelcomeModal(true);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 2000);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center bg-[#f2ede8]/80 backdrop-blur-sm z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotateY: [0, 360],
                rotateX: [0, 15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
              className="relative"
            >
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-stone-200/50 to-stone-400/50 rounded-full" />
              <Image
                src="/images/Logo.png"
                alt="Loading Logo"
                width={100}
                height={100}
                className="object-contain relative drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal
        isOpen={showWelcomeModal}
        onRequestClose={() => setShowWelcomeModal(false)}
        style={modalStyles}
        contentLabel="Welcome Modal"
      >
        <AnimatePresence>
          {showWelcomeModal && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-[#f2ede8] rounded-lg shadow-xl overflow-hidden p-8 md:p-12"
            >
              <button
                onClick={() => setShowWelcomeModal(false)}
                className="absolute right-4 top-4 text-stone-600 hover:text-stone-800"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg uppercase tracking-wider text-stone-600">
                    JOIN TODAY
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
                    Our Newsletter
                  </h2>
                </div>
                
                <p className="text-lg text-stone-600">
                  We're thrilled that you're interested in staying up-to-date with all the latest news
                </p>

                <div className="space-y-6">
                  <input
                    type="email"
                    placeholder="Your Email Id"
                    className="w-full px-4 py-3 border-b border-stone-400 focus:border-stone-600 outline-none bg-transparent text-stone-800 placeholder-stone-500"
                  />
                  
                  <label className="flex items-center space-x-3 text-stone-700">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 border-stone-400 rounded accent-stone-700"
                    />
                    <span>I Agree To The Privacy Policy</span>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-stone-700 hover:bg-stone-800 text-[#f2ede8] font-medium py-4 rounded-full transition-colors"
                  >
                    SUBMIT NOW
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}