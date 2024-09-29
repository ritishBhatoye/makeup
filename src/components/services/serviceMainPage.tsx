'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 text-text overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="w-full lg:w-1/2 mb-8 lg:mb-0 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/images/image_4.jpg"
              alt="Women with hair rollers"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto -mt-24 ml-auto">
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
          className="w-full lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl text-text font-semibold mb-2 gsap-animate">Services</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 gsap-animate">WHY WOULD YOU TAKE OUR SERVICES</h2>
          <p className="text-lg text-text mb-8 gsap-animate">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ind typesetting ipsum has been the industry's standard dumard 
            dummy text ever since the More when standard dumard dummy text ever 
            since the 1500s, when standard dumard dummy
          </p>
          <div className="flex space-x-8 gsap-animate">
            <div className="flex items-center">
              <svg className="w-12 h-12 text-text mr-4"  viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <div>
                <h4 className="text-3xl font-bold text-text">1500+</h4>
                <p className="text-text">Customers</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-12 h-12 text-text mr-4"  viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <div>
                <h4 className="text-3xl font-bold text-text">350+</h4>
                <p className="text-text">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/services/bleaching" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceMainPage;
