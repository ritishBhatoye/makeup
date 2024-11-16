'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const IntroductionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.gsap-animate'), {
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#f2ede8]">
      <motion.div className="max-w-7xl mx-auto py-4" style={{ opacity, scale }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="w-full lg:w-1/2 overflow-visible"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/image_2.jpg"
                alt="Hairstylist working on client"

                layout="fill"
                objectFit="cover"
                className="filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/image_6.jpg"
                alt="Client getting hair styled"
                layout="fill"
                objectFit="cover"
                className="filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#6b5c4c] mb-4 sm:mb-6 md:mb-8 gsap-animate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            OUR VISION AND MISSION
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-[#6b5c4c] max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 gsap-animate leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We strive to empower individuals through the art of beauty, creating transformative experiences that boost confidence and celebrate unique personalities.
          </motion.p>
          <motion.button 
            className="bg-[#6b5c4c] text-white py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 gsap-animate"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(107, 92, 76, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Discover More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export const WhyILoveSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.gsap-animate'), {
        // opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#6b5c4c] gsap-animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why I Love What I Do
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-[#6b5c4c] mb-12 leading-relaxed gsap-animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Makeup is not just about applying products; it's about creating a unique bond with my clients and bringing their vision to life. There's nothing more fulfilling than seeing the joy and confidence on someone's face when they look in the mirror and feel truly amazing.
        </motion.p>
        <motion.div
          className="w-32 h-32 mx-auto mb-12 gsap-animate"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <Image
            src="/path/to/icon.png"
            alt="Makeup icon"
            width={128}
            height={128}
            className="filter drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export const LetsConnectSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.gsap-animate'), {
        // opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 lg:px-16 bg-[#f2ede8]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#6b5c4c] gsap-animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-[#6b5c4c] mb-12 leading-relaxed gsap-animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I would love the opportunity to bring your vision to life. Feel free to browse my portfolio, and don't hesitate to reach out with any questions or to book a session.
        </motion.p>
        <motion.button
          className="bg-[#6b5c4c] text-white py-4 px-10 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 gsap-animate"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(107, 92, 76, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </div>
    </section>
  );
};

