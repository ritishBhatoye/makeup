'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MovingImagesProps {
  images: string[];
  direction: 'up' | 'down';
}

function MovingImages({ images, direction }: MovingImagesProps) {
  return (
    <div className="relative w-1/3 h-[600px] overflow-hidden">
      <motion.div
        initial={{ y: direction === 'down' ? '-100%' : '100%' }}
        animate={{ y: direction === 'down' ? '100%' : '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
        className="flex flex-col gap-4 absolute right-0"
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Moving image ${index + 1}`}
            width={200}
            height={250}
            className="rounded-2xl shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default MovingImages;