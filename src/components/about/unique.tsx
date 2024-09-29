'use client'
import { motion } from 'framer-motion';
import { FaLeaf } from "react-icons/fa";
// import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  
  NoSymbolIcon
} from '@heroicons/react/24/outline';

interface FeatureProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div 
      className="mb-4 text-[#6b5c4c]"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-12 h-12" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-[#6b5c4c]">{title}</h3>
    <p className="text-sm text-[#6b5c4c]">{description}</p>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Unique() {
  return (
    <section className="py-16 bg-[#f2ede8]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#6b5c4c]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Makes Us Unique
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Feature
            Icon={BeakerIcon}
            title="Fast Absorbing"
            description="Our formula is designed to be quickly absorbed, leaving your skin feeling refreshed and nourished."
          />
          <Feature
            Icon={HeartIcon}
            title="Cruelty Free"
            description="We're committed to ethical practices. All our products are cruelty-free and never tested on animals."
          />
          <Feature
            Icon={FaLeaf}
            title="Natural Ingredients"
            description="We use only the finest natural ingredients, sourced responsibly to ensure quality and effectiveness."
          />
          <Feature
            Icon={ShieldCheckIcon}
            title="Sulfates Free"
            description="Our products are free from harsh sulfates, ensuring gentle care for your skin and hair."
          />
          <Feature
            Icon={SparklesIcon}
            title="Clinically Proven"
            description="Our formulas are backed by scientific research and clinical studies for proven results."
          />
          <Feature
            Icon={NoSymbolIcon}
            title="No SLS"
            description="We've eliminated Sodium Lauryl Sulfate (SLS) from our products for a gentler, safer experience."
          />
        </motion.div>
      </div>
    </section>
  );
}
