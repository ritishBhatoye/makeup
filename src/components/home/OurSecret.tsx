'use client'
import { motion } from 'framer-motion';
import { BeakerIcon, SparklesIcon, NoSymbolIcon, HeartIcon } from '@heroicons/react/24/outline';

interface SecretFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: SecretFeature[] = [
  {
    icon: BeakerIcon,
    title: 'Chemicals Free',
    description: 'Cursus sit amet dictum sit amet. Cras adipiscing enim eu turpis egestas pretium aenean.',
  },
  {
    icon: SparklesIcon,
    title: 'Oil Free Formula',
    description: 'Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Enim nulla aliquet porttitor lacus.',
  },
  {
    icon: NoSymbolIcon,
    title: '100% Fragrance Free',
    description: 'Amet venenatis urna cursus eget. Dictum non consectetur a erat nam at lectus urna.',
  },
  {
    icon: HeartIcon,
    title: 'Cruelty Free',
    description: 'Elit ut aliquam purus sit amet. Pellentesque diam volutpat commodo sed egestas egestas fringilla.',
  },
];

export function OurSecret() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#f2ede8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 text-[#6b5c4c]">OUR SECRET FOR</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#6b5c4c]">Younger Looking Skin</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative p-6 bg-white rounded-lg shadow-sm"      
            >
              <div className="mb-4 sm:mb-6">
                <feature.icon className="h-16 w-16 sm:h-20 sm:w-20 mx-auto text-[#6b5c4c] transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3 text-[#6b5c4c]">{feature.title}</h3>
              <p className="text-sm text-[#6b5c4c] opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSecret;
