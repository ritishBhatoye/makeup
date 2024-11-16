'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useSpring as useReactSpring, animated } from 'react-spring';
import anime from 'animejs';
import { useSpring } from 'react-spring';

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
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#f2ede8] overflow-hidden">
      <motion.div className="max-w-7xl mx-auto" style={{ opacity, scale }}>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/image_1.jpg"
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

  const whyILoveSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
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

      gsap.from(whyILoveRef.current, {
        y: 50,
        // opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whyILoveRef.current,
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
    <section ref={sectionRef} className=" px-4 md:px-8 lg:px-16 bg-[#f2ede8] overflow-y-auto">
      <motion.div className="max-w-7xl mx-auto "  style={{ opacity, scale }}>
        <div className="flex flex-col lg:flex-row items-center justify-between  ">
          <motion.div 
            ref={imageRef}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/image_1.jpg"
                alt="Komal - Professional Makeup Artist"
                layout="fill"
                objectFit="cover"
                className="filter brightness-95 hover:brightness-100 transition-all duration-300"
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
            className="w-full lg:w-1/2  flex flex-col gap-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#6b5c4c]">ABOUT MY STORY</h2>
            <animated.p style={springProps} className="text-lg text-[#6b5c4c] ">
              Hi, I'm Komal, a professional makeup artist based in Montreal, Canada. Makeup is both my passion and my profession. I specialize in transforming looks and boosting confidence through the power of makeup. My goal is to help you feel your most beautiful, empowered, and camera-ready.
            </animated.p>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[#6b5c4c] flex">Get different award my achievement work</h3>
              <div className="flex flex-row space-x-4">
                <img src="/path/to/award1.png" alt="Premium Quality" className="w-16 h-16 award-icon" />
                <img src="/path/to/award2.png" alt="100% Guaranteed" className="w-16 h-16 award-icon" />
                <img src="/path/to/award3.png" alt="Best Quality" className="w-16 h-16 award-icon" />
              </div>
            </div>
            <motion.button 
              className="bg-[#6b5c4c] text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(107, 92, 76, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
            </motion.button>
          </motion.div>
        </div>
        
        <animated.div 
          ref={whyILoveRef}
          className="text-center"
          style={{
            // opacity: whyILoveSpring.opacity,
            transform: whyILoveSpring.y.to(y => `translateY(${y}px)`)
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6b5c4c] mb-8">Why I Love What I Do</h2>
          <div className="relative">
            <svg className="absolute left-0 top-0 w-16 h-16 text-[#6b5c4c] opacity-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-[#6b5c4c] max-w-4xl mx-auto mb-12 leading-relaxed italic relative z-10">
              Makeup is not just about applying products; it's about creating a unique bond with my clients and bringing their vision to life. There's nothing more fulfilling than seeing the joy and confidence on someone's face when they look in the mirror and feel truly amazing.
            </p>
            <svg className="absolute right-0 bottom-0 w-16 h-16 text-[#6b5c4c] opacity-10 transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <motion.div
            className="flex flex-col lg:flex-row  gap-2 justify-center "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {['Passion', 'Creativity', 'Transformation'].map((item, index) => (
              <motion.div
                key={item}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col "
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(107, 92, 76, 0.2)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <h3 className="text-xl font-semibold text-[#6b5c4c] ">{item}</h3>
                <p className="text-[#6b5c4c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </motion.div>
        </animated.div>
      </motion.div>
    </section>
  );
};