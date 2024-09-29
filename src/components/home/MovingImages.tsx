'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface MovingImagesProps {
  images: string[];
  direction: 'up' | 'down';
}

export default function MovingImages({ images, direction }: MovingImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let startTime: number;
    const speed = 50; // Pixels per second

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const totalHeight = container.offsetHeight / 3;
      let position = (elapsed * speed / 1000) % totalHeight;

      if (direction === 'up') {
        position = totalHeight - position;
      }

      container.style.transform = `translateY(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  // Triple the images array to ensure seamless looping
  const tripleImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
      <div ref={containerRef} className="flex flex-col">
        {tripleImages.map((src, index) => (
          <div key={index} className="w-full aspect-[3/4] relative mb-4">
            <Image
              src={src}
              alt={`Moving image ${(index % images.length) + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}