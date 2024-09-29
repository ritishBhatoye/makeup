'use client'
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../app/globals.css';
gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finalNumber = parseFloat(number.replace(/[^0-9.]/g, ''));
    const suffix = number.replace(/[0-9.]/g, '');
    
    gsap.to(numberRef.current, {
      innerHTML: finalNumber,
      duration: 2,
      snap: { innerHTML: 1 },
      scrollTrigger: {
        trigger: numberRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        scrub: true,
      },
      onUpdate: function() {
        if (numberRef.current) {
          numberRef.current.innerHTML = 
            Math.round(parseFloat(numberRef.current.innerHTML)) + suffix;
        }
      }
    });
  }, [number]);

  return (
    <div className="text-center py-4 border-b border-[#6b5c4c] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 min-w-[150px] sm:min-w-[200px] md:min-w-[250px] flex-1 sm:flex-none">
      <motion.div
        ref={numberRef}
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#6b5c4c] mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        0
      </motion.div>
      <motion.div
        className="text-xs sm:text-sm md:text-lg text-[#6b5c4c]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {label}
      </motion.div>
    </div>
  );
};

const Numbers = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top bottom-=100',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-[#f2ede8] py-20">
      <div ref={statsRef} className="w-full" aria-label="Company Statistics">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <StatItem number="45+" label="Branches in World" />
          <StatItem number="86K" label="Satisfied Customers" />
          <StatItem number="147+" label="Professional Skin Experts" />
          <StatItem number="60+" label="Years of Experience" />
          <StatItem number="0.01%" label="Defective Returns" />
          <StatItem number="60+" label="Years of Experience" />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
