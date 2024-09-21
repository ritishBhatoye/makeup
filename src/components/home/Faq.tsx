'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const faqData: FaqItem[] = [
  {
    category: "Acne Care",
    questions: [
      {
        question: "How can I prevent acne breakouts?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        question: "What ingredients are effective for treating acne?",
        answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        question: "Are your acne care products suitable for all skin types?",
        answer: "Eget est lorem ipsum dolor sit amet. Faucibus ornare suspendisse sed nisi lacus sed viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
      }
    ]
  },
  {
    category: "Anti Aging",
    questions: [
      {
        question: "What are the best anti-aging ingredients?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
    ]
  },
  {
    category: "Sensitive Skin",
    questions: [
      {
        question: "How can I care for sensitive skin?",
        answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  }
];

const Faq: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Acne Care");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#f2ede8] py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-4xl md:text-5xl font-serif mb-2"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm mb-12"
        >
          GOT QUESTIONS?
        </motion.p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:w-1/3 bg-[#e5e0da] p-6 rounded-lg shadow-lg"
          >
            {faqData.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex justify-between items-center py-3 cursor-pointer transition-colors duration-300 ${activeCategory === item.category ? 'text-[#6b5c4c]' : 'text-gray-500'}`}
                onClick={() => setActiveCategory(item.category)}
              >
                <span className="font-medium">{`0${index + 1} / ${item.category}`}</span>
                <motion.span 
                  animate={{ rotate: activeCategory === item.category ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↗
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:w-2/3 bg-[#e5e0da] p-6 rounded-lg shadow-lg"
          >
            <AnimatePresence mode="wait">
              {faqData.find(item => item.category === activeCategory)?.questions.map((q, index) => (
                <motion.div 
                  key={q.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="flex justify-between items-center py-3 cursor-pointer border-b border-gray-300"
                    onClick={() => setOpenQuestion(openQuestion === q.question ? null : q.question)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">{q.question}</span>
                    <motion.span
                      animate={{ rotate: openQuestion === q.question ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openQuestion === q.question ? '−' : '+'}
                    </motion.span>
                  </motion.div>
                  <AnimatePresence>
                    {openQuestion === q.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="py-3 text-sm"
                      >
                        {q.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
