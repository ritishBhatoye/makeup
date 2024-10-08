'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, FileText, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceData = {
  'bleaching': {
    title: 'Bleaching Service',
    description: 'Achieve a brighter, more radiant complexion with our professional bleaching services.',
    image: '/images/bleaching-service.jpg',
    benefits: ['Even skin tone', 'Reduced pigmentation', 'Brighter complexion', 'Customized treatments'],
  },
  'hair-smoothening': {
    title: 'Hair Smoothening',
    description: 'Transform frizzy, unmanageable hair into silky smooth locks with our hair smoothening treatments.',
    image: '/images/hair-smoothening.jpg',
    benefits: ['Frizz-free hair', 'Easier styling', 'Long-lasting results', 'Healthier-looking hair'],
  },
  'skin-care': {
    title: 'Skin Care Treatment',
    description: 'Revitalize and nourish your skin with our comprehensive skincare treatments.',
    image: '/images/skin-care.jpg',
    benefits: ['Improved skin texture', 'Hydration boost', 'Acne control', 'Anti-aging effects'],
  },
  'anti-ageing': {
    title: 'Anti-Ageing Face Treatments',
    description: 'Turn back the clock with our advanced anti-aging facial treatments.',
    image: '/images/anti-ageing.jpg',
    benefits: ['Reduced fine lines', 'Increased collagen production', 'Firmer skin', 'Youthful glow'],
  },
  'hair-color-styling': {
    title: 'Hair Color and Styling',
    description: 'Express yourself with vibrant hair colors and expert styling services.',
    image: '/images/hair-color-styling.jpg',
    benefits: ['Customized color options', 'Professional application', 'Trendy styles', 'Hair health protection'],
  },
  'facial-makeup': {
    title: 'Facial and Makeup',
    description: 'Enhance your natural beauty with our facial treatments and professional makeup services.',
    image: '/images/facial-makeup.jpg',
    benefits: ['Glowing skin', 'Expert makeup application', 'Personalized looks', 'Long-lasting results'],
  },
};

const ServicePage = ({ params }: { params: { service: string } }) => {
  const service = serviceData[params.service as keyof typeof serviceData];
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-[#f2ede8]">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#6b5c4c] mb-6 sm:mb-8 text-center"
        >
          {service.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <motion.div
            ref={imageRef}
            className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            ref={ref}
            className="mt-6 lg:mt-0"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#6b5c4c] mb-6"
            >
              {service.description}
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-[#6b5c4c] mb-4"
            >
              Benefits:
            </motion.h2>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-[#6b5c4c]"
                >
                  <ChevronRight className="w-5 h-5 text-[#6b5c4c] mr-2" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 lg:mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#6b5c4c] mr-3 sm:mr-4" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#6b5c4c]">Detailed Services</h3>
                <p className="text-sm sm:text-base text-[#6b5c4c]">Download PDF</p>
              </div>
            </div>
            <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b5c4c]" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#6b5c4c] mr-3 sm:mr-4" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#6b5c4c]">Service Details</h3>
                <p className="text-sm sm:text-base text-[#6b5c4c]">Download TXT</p>
              </div>
            </div>
            <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b5c4c]" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6b5c4c] mb-6">Ready to experience our {service.title}?</h2>
          <Link href="/booknow" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#6b5c4c] text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg transition-all duration-300 hover:bg-[#5a4d3f] hover:shadow-xl"
            >
              Book Now
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;