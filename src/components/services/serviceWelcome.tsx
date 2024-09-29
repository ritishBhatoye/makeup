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
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(services.length - 3, 0) : prevIndex - 3
    );
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 md:px-8 lg:px-16"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-primary font-script text-3xl mb-2">Welcome</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR BEAUTY SERVICES</h2>
        <p className="text-text-light max-w-2xl mx-auto">
          Discover our range of professional makeup services tailored to make you look and feel your best for any occasion.
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex justify-center gap-8 overflow-hidden">
          {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
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
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>
    </motion.section>
  );
};

export default ServiceWelcome;
