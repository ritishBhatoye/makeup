'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceItem } from './serviceItem';

const services = [
  {
    title: "Party Makeup",
    description: "Get ready to shine at any event with our stunning party makeup looks.",
    image: "/images/image_2.jpg"
  },
  {
    title: "Pre-Wedding Makeup",
    description: "Look radiant for all your pre-wedding events with our expert makeup services.",
    image: "/images/image_4.jpg"
  },
  {
    title: "E-Shoots",
    description: "Capture your best self with makeup tailored for engagement and photo shoots.",
    image: "/images/image_1.jpg"
  },
  {
    title: "Full Glam Makeup",
    description: "Go all out with our full glam makeup for a show-stopping appearance.",
    image: "/images/full-glam-makeup.jpg"
  },
  {
    title: "Bridal Makeup",
    description: "Look breathtaking on your special day with our professional bridal makeup.",
    image: "/images/bridal-makeup.jpg"
  }
];

const ServiceWelcome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= services.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#f2ede8]"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h3 className="text-[#6b5c4c] font-script text-2xl sm:text-3xl mb-2">Welcome</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#6b5c4c]">OUR BEAUTY SERVICES</h2>
        <p className="text-[#6b5c4c] max-w-2xl mx-auto text-sm sm:text-base">
          Discover our range of professional makeup services tailored to make you look and feel your best for any occasion.
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex justify-center overflow-hidden">
          {[services[currentIndex]].map((service, index) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              delay={index + 1}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-[#6b5c4c]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          aria-label="Next service"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#6b5c4c]" />
        </button>
      </div>
    </motion.section>
  );
};

export default ServiceWelcome;