import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      className="w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 hover:scale-105"
          priority={delay === 0}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#6b5c4c]">{title}</h3>
        <p className="text-sm sm:text-base text-[#6b5c4c]">{description}</p>
      </div>
    </motion.div>
  );
};

