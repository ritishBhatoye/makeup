'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SecretFeature {
  icon: string;
  title: string;
  description: string;
}

const features: SecretFeature[] = [
  {
    icon: '/icons/chemicals-free.svg',
    title: 'Chemicals Free',
    description: 'Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis egestas pretium aenean.',
  },
  {
    icon: '/icons/oil-free.svg',
    title: 'Oil Free Formula',
    description: 'Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Enim nulla aliquet porttitor lacus.',
  },
  {
    icon: '/icons/fragrance-free.svg',
    title: '100% Fragrance Free',
    description: 'Amet venenatis urna cursus eget. Dictum non consectetur a erat nam at lectus urna.',
  },
  {
    icon: '/icons/cruelty-free.svg',
    title: 'Cruelty Free',
    description: 'Elit ut aliquam purus sit amet. Pellentesque diam volutpat commodo sed egestas egestas fringilla.',
  },
];

export function OurSecret() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-2">OUR SECRET FOR</h2>
          <h1 className="text-4xl md:text-5xl font-serif">Younger Looking Skin</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"      
            >
              <div className="mb-6">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={80} 
                  height={80} 
                  className="mx-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
              
              {index < features.length - 1 && (
                <div className="hidden lg:block  absolute   top-0 -right-2 w-px h-full bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSecret;
