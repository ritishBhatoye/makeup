import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

export function ServiceItem({ title, description, image, delay }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden w-64"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-light mb-4">{description}</p>
        <div className="flex items-center">
          <div className="flex-grow border-t border-primary"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-primary"></div>
          <Link 
            href={`/services/${title.toLowerCase().replace(/ /g, '-')}`}
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            {title}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

