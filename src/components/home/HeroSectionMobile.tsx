'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroContent {
  subtitle: string;
  heading: string;
  subheading?: string;
  paragraph: string;
  buttonText: string;
}

const heroContent: HeroContent[] = [
  {
    subtitle: "NATURAL RADIANCE",
    heading: "Enhance Your Beauty",
    subheading: "Everyday",
    paragraph: "Cras adipiscing enim eu turpis egestas pretium aenean. Curabitur vitae nunc sed velit egestas. Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis Cursus sit amet dictum sit amet.",
    buttonText: "SHOP NOW"
  },
  {
    subtitle: "SKIN FRIENDLY",
    heading: "Best For Regular",
    subheading: "Makeup Routine",
    paragraph: "Curabitur vitae nunc sed velit egestas. Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis egestas pretium aenean.",
    buttonText: "SHOP NOW"
  },
  {
    subtitle: "CHEMICAL FREE",
    heading: "Unique Chemical Free",
    subheading: "Cosmetics",
    paragraph: "Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis egestas pretium aenean. Curabitur vitae nunc sed velit egestas. Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis",
    buttonText: "SHOP NOW"
  }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function FloatingLeaves() {
  const leaves = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden">
      {leaves.map((i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 text-[#6b5c4c]"
          initial={{
            x: Math.random() * 100,
            y: -20,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.75 12.5c-.162-.462-.457-.797-.916-1.027a5.583 5.583 0 0 1-3.249.994c-3.257 0-5.891-2.634-5.891-5.891c0-1.168.34-2.257.994-3.249C8.458 3.068 8.123 3.25 7.661 3.412C4.583 4.437 3.437 6.609 3.437 10.078c0 4.558 3.727 8.285 8.285 8.285c3.469 0 5.641-1.146 6.666-4.224c.162-.462.344-.797.344-1.256c0-.121-.121-.242-.242-.363c-.242-.121-.483-.121-.725 0z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSectionMobile() {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70dvh] bg-[#FAF7F5] overflow-hidden md:hidden">
      <FloatingLeaves />

      <div className="relative z-10 h-full flex flex-col justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={contentIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
            className="flex flex-col items-center text-center"
          >
            <motion.span 
              className="text-sm tracking-widest text-[#6b5c4c] mb-4"
              variants={textVariants}
            >
              {heroContent[contentIndex].subtitle}
            </motion.span>

            <motion.h1 
              className="font-serif text-4xl text-[#3C3C3C] mb-2"
              variants={textVariants}
            >
              {heroContent[contentIndex].heading}
            </motion.h1>

            {heroContent[contentIndex].subheading && (
              <motion.h2 
                className="font-serif text-4xl text-[#3C3C3C] mb-8"
                variants={textVariants}
              >
                {heroContent[contentIndex].subheading}
              </motion.h2>
            )}

            <motion.p 
              className="text-[#666666] leading-relaxed mb-8"
              variants={textVariants}
            >
              {heroContent[contentIndex].paragraph}
            </motion.p>

            <motion.button
              className="border border-[#6b5c4c] text-[#6b5c4c] px-8 py-3 rounded-full text-sm tracking-wider hover:bg-[#6b5c4c] hover:text-white transition-colors"
              variants={textVariants}
            >
              {heroContent[contentIndex].buttonText}
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8 mb-12">
          {heroContent.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === contentIndex ? 'bg-[#6b5c4c]' : 'bg-[#D9D9D9]'
              }`}
              onClick={() => setContentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}