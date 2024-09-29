'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MovingImagesProps {
  images: string[];
  direction: 'up' | 'down';
}

function MovingImages({ images, direction }: MovingImagesProps) {
  return (
    <div className="relative w-full sm:w-1/2 md:w-1/3 h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden bg-[#f2ede8]">
      <motion.div
        initial={{ y: direction === 'down' ? '-100%' : '100%' }}
        animate={{ y: direction === 'down' ? '100%' : '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
        className="flex flex-col gap-2 sm:gap-3 md:gap-4 absolute right-0 left-0 sm:right-0 sm:left-auto"
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Moving image ${index + 1}`}
            width={200}
            height={250}
            className="rounded-xl sm:rounded-2xl shadow-md w-full sm:w-auto h-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default MovingImages;