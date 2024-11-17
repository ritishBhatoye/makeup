'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

export default function HeroSectionMobile() {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80dvh] bg-[#FAF7F5] overflow-hidden md:hidden">
    
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/leaf-pattern.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

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