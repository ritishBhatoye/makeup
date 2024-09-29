'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRightIcon, UserGroupIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

const serviceData = {
  'party-makeup': {
    title: 'Party Makeup',
    description: 'Get ready to shine at any event with our stunning party makeup looks.',
    image: '/images/party-makeup.jpg',
    stats: [
      { icon: UserGroupIcon, value: '1500+', label: 'Happy Clients' },
      { icon: ClockIcon, value: '10+', label: 'Years Experience' },
      { icon: SparklesIcon, value: '100%', label: 'Satisfaction' },
    ],
  },
  'pre-wedding-makeup': {
    title: 'Pre-Wedding Makeup',
    description: 'Look radiant for all your pre-wedding events with our expert makeup services.',
    image: '/images/pre-wedding-makeup.jpg',
    stats: [
      { icon: UserGroupIcon, value: '2000+', label: 'Brides Served' },
      { icon: ClockIcon, value: '15+', label: 'Years Experience' },
      { icon: SparklesIcon, value: '100%', label: 'Satisfaction' },
    ],
  },
  'e-shoots': {
    title: 'E-Shoots',
    description: 'Capture your best self with makeup tailored for engagement and photo shoots.',
    image: '/images/e-shoots.jpg',
    stats: [
      { icon: UserGroupIcon, value: '500+', label: 'Shoots Done' },
      { icon: ClockIcon, value: '8+', label: 'Years Experience' },
      { icon: SparklesIcon, value: '100%', label: 'Satisfaction' },
    ],
  },
  // Add other services here...
};

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = serviceData[params.service as keyof typeof serviceData];
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  if (!service) {
    return <div>Service not found</div>;
  }

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
    <div className="min-h-screen bg-[#f2ede8] text-[#6b5c4c]">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-center"
        >
          {service.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
            className="space-y-4 sm:space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl"
            >
              {service.description}
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold"
            >
              Why Choose Us:
            </motion.h2>
            <ul className="space-y-2 sm:space-y-3">
              {['Expert makeup artists', 'High-quality products', 'Personalized service'].map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-base sm:text-lg"
                >
                  <ChevronRightIcon className="w-5 h-5 text-[#6b5c4c] mr-2" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {service.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <stat.icon className="w-12 h-12 text-[#6b5c4c] mb-4" />
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to experience our {service.title}?</h2>
          <Link href="/booknow" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6b5c4c] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-[#5a4d3f]"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
