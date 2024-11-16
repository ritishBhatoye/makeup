'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useSpring as useReactSpring, animated } from 'react-spring';
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

export const AboutMeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const whyILoveRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const springProps = useReactSpring({
    from: { opacity: 1, transform: 'translateY(9px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (sectionRef.current && imageRef.current && textRef.current && whyILoveRef.current) {
      gsap.from(imageRef.current, {
        x: -10,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from(textRef.current, {
        x: 10,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      anime({
        targets: '.award-icon',
        scale: [0.5, 1],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutElastic(1, .5)'
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#f2ede8]">
      <motion.div 
        className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            ref={imageRef}
            className="w-full"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/images/image_1.jpg"
                alt="Komal - Professional Makeup Artist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-2">Komal</h3>
                  <p className="text-xl text-white/80">Makeup Artist</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            ref={textRef}
            className="w-full flex flex-col gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#6b5c4c]">ABOUT MY STORY</h2>
            <animated.p style={springProps} className="text-lg text-[#6b5c4c]">
              Hi, I'm Komal, a professional makeup artist based in Montreal, Canada. Makeup is both my passion and my profession. I specialize in transforming looks and boosting confidence through the power of makeup. My goal is to help you feel your most beautiful, empowered, and camera-ready.
            </animated.p>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-[#6b5c4c]">Get different award my achievement work</h3>
              <div className="flex flex-row gap-4">
                <Image
                  width={60}
                  height={60}
                  src="/images/award.png" 
                  alt="Premium Quality" 
                  className="award-icon"
                />
                <Image 
                  width={60}
                  height={60}
                  src="/images/guarante.png" 
                  alt="100% Guaranteed" 
                  className="award-icon"
                />
                <Image 
                  width={60}
                  height={60}
                  src="/images/bestQuality.png" 
                  alt="Best Quality" 
                  className="award-icon"
                />
              </div>
            </div>

            <motion.button 
              className="bg-[#6b5c4c] text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-fit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(107, 92, 76, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Passion', 'Creativity', 'Transformation'].map((item, index) => (
            <motion.div
              key={item}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(107, 92, 76, 0.2)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <h3 className="text-xl font-semibold text-[#6b5c4c] mb-3">{item}</h3>
              <p className="text-[#6b5c4c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
