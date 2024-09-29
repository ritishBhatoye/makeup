'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MovingImages from './MovingImages';

const column1Images = ['/images/hero/hero_0.jpg', '/images/hero/hero_1.jpg', '/images/hero/hero_2.jpg', '/images/hero/hero_3.jpg'];
const column2Images = ['/images/hero/hero_4.jpg', '/images/hero/hero_5.jpg', '/images/hero/hero_6.jpg', '/images/hero/hero_7.jpg'];
const column3Images = ['/images/hero/hero_8.jpg', '/images/hero/hero_9.jpg', '/images/hero/hero_10.jpg', '/images/hero/hero_11.jpg'];

const heroContent = [
  {
    heading: "Welcome to Sheena's Makeup",
    paragraph: "Discover the art of beauty with our expert services.",
    buttonText: "Shop Now"
  },
  {
    heading: "Transform Your Look",
    paragraph: "Experience professional makeup artistry at its finest.",
    buttonText: "Book Now"
  },
  {
    heading: "Unleash Your Beauty",
    paragraph: "Find the perfect products for your unique style.",
    buttonText: "Explore"
  }
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

const leafVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.2, scale: 1, transition: { duration: 1, delay: 0.5 } }
};

const gradientVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.7 } }
};

export default function HeroSection() {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[contentIndex];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row relative z-10">
        {/* Text content */}
        <div className="w-full md:w-1/3 pr-2 flex flex-col justify-center mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={contentIndex}
              initial="visible"
              animate="visible"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 className="text-4xl font-bold mb-4">
                {currentContent.heading}
              </motion.h1>
              <motion.p className="text-lg mb-8">
                {currentContent.paragraph}
              </motion.p>
              <motion.button
                className="bg-text text-background px-6 py-2 rounded-full w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentContent.buttonText}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Moving images */}
        <div className="w-full md:w-2/3 h-[600px] overflow-hidden">
          <div className="grid grid-cols-3 gap-4 h-full">
            <MovingImages images={column1Images} direction="down" />
            <MovingImages images={column2Images} direction="up" />
            <MovingImages images={column3Images} direction="down" />
          </div>
        </div>
      </div>

      {/* Simple leaf design (bottom-left) */}
      <motion.svg
        className="absolute bottom-0 left-0 w-64 h-64 text-[#6b5c4c]"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        variants={leafVariants}
      >
        <path
          d="M10,90 Q30,40 50,90 T90,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10,70 Q30,20 50,70 T90,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </motion.svg>

      {/* Dark gradient (bottom-right) */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-tl-full"
        style={{
          background: `radial-gradient(circle at bottom right, rgba(107,92,76,0.3) 0%, rgba(107,92,76,0) 70%)`
        }}
        initial="hidden"
        animate="visible"
        variants={gradientVariants}
      />
    </section>
  );
}