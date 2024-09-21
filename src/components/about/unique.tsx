'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4">
      <Image src={icon} alt={title} width={48} height={48} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

export function Unique() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What&apos;s Unique
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Feature
            icon="/icons/fast-absorbing.svg"
            title="Fast Absorbing"
            description="Enim sed faucibus turpis in eu mi bibendum neque egestas."
          />
          <Feature
            icon="/icons/cruelty-free.svg"
            title="Cruelty Free"
            description="Enim sed faucibus turpis in eu mi bibendum neque egestas."
          />
          <Feature
            icon="/icons/natural-ingredients.svg"
            title="Natural Ingredients"
            description="Facilisi etiam dignissim diam quis enim lobortis dolor."
          />
          <Feature
            icon="/icons/sulfates-free.svg"
            title="Sulfates Free"
            description="Dolor morbi non arcu risus quis enim ut sem viverra varius."
          />
          <Feature
            icon="/icons/clinically-proven.svg"
            title="Clinically Proven"
            description="Rhoncus mattis rhoncus urna neque viverra justo nec."
          />
          <Feature
            icon="/icons/no-sls.svg"
            title="No SLS"
            description="Est lorem ipsum dolor sit amet consectetur adipiscing."
          />
        </div>
      </div>
    </section>
  );
}
