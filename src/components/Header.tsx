"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'BLOG', href: '/blog' },
  { label: 'SERVICES', href: '/services' },
  { label: 'GET IN TOUCH', href: '/get_in_touch' },
];

const FadeVariants = {
  hide: { opacity: 0, y: -20 },
  fade: { opacity: 1, y: 0 },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isActive = (href: string) => pathname === href;

  const handleBookNow = () => router.push('/get_in_touch/appointment');

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className='sticky top-0 z-50 py-4 bg-[#f5f0e8] border-b border-[#6b5c4c]/20'>
      <div className='container px-4 mx-auto relative'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <Image src="/images/logo.png" alt="Sheena Logo" width={80} height={80} className='h-auto w-24 mr-3' />
            <span className='text-2xl font-bold tracking-tight text-[#6b5c4c]'>MakeupArtistry_Kor</span>
          </div>
          
          {/* Desktop menu */}
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`relative text-lg py-2 px-4 transition-all duration-300 ${
                    isActive(item.href) ? 'text-[#b7a576]' : 'text-[#6b5c4c] hover:text-[#b7a576]'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="desktopUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b7a576]"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.25 }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className='hidden lg:flex justify-center items-center'>
            <button 
              onClick={handleBookNow}
              className='bg-[#6b5c4c] py-2 px-6 rounded-md text-[#f5f0e8] hover:bg-[#5a4d40] transition-colors duration-300 text-lg font-bold'
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <button onClick={toggleMobileMenu} className="lg:hidden text-[#6b5c4c] z-50">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Full-screen Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-[#f5f0e8] z-40 flex flex-col items-center justify-center lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold tracking-tight text-[#6b5c4c] mb-8">
                MakeupArtistry_Kor
              </div>
              <nav className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={FadeVariants}
                    initial="hide"
                    animate="fade"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative text-xl py-2 px-4 transition-all duration-300 ${
                        isActive(item.href) ? 'text-[#b7a576]' : 'text-[#6b5c4c] hover:text-[#b7a576]'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="mobileUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b7a576]"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.25 }}
                        ></motion.span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                variants={FadeVariants}
                initial="hide"
                animate="fade"
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-8"
              >
                <button 
                  onClick={() => {
                    toggleMobileMenu();
                    handleBookNow();
                  }}
                  className='bg-[#6b5c4c] py-2 px-6 rounded-md text-[#f5f0e8] hover:bg-[#5a4d40] transition-colors duration-300 text-lg font-bold'
                >
                  BOOK NOW
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}