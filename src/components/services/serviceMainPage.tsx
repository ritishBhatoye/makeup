'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const ServiceMainPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.gsap-animate'), {
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 text-[#6b5c4c] overflow-hidden bg-[#f2ede8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="w-full lg:w-1/2 mb-8 lg:mb-0 space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto">
            <Image
              src="/images/image_4.jpg"
              alt="Women with hair rollers"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="relative aspect-[4/3] w-full max-w-xs sm:max-w-sm mx-auto -mt-16 sm:-mt-24 ml-auto">
            <Image
              src="/images/image_10_women_with_hair_rollers.jpg"
              alt="Hairstylist working on client"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 gsap-animate">Services</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gsap-animate">WHY CHOOSE OUR SERVICES</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 gsap-animate">
            Experience the pinnacle of beauty and care with our expert services. 
            Our skilled professionals use cutting-edge techniques and premium products 
            to deliver stunning results tailored to your unique style and preferences.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 gsap-animate">
            <div className="flex items-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mr-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">1500+</h4>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mr-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">20+</h4>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          {/* <div className="mt-6 sm:mt-8">
            <Link href="/services/bleaching" className="inline-block bg-[#6b5c4c] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a4d3f] transition-colors duration-300">
              Explore Our Services
            </Link>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceMainPage;