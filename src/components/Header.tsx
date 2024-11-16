"use client"

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../public/images/hero/LOGO.png';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'BLOG', href: '/blog' },
  { 
    label: 'SERVICES', 
    href: '/services',
    subItems: [
      { label: 'Services', href: '/services/services' },
      { label: 'Bleaching Service', href: '/services/bleaching' },
      { label: 'Hair Smoothening', href: '/services/hair-smoothening' },
      { label: 'Skin Care Treatment', href: '/services/skin-care' },
      { label: 'Anti-Ageing Face Treatments', href: '/services/anti-ageing' },
      { label: 'Hair Color and Styling', href: '/services/hair-color-styling' },
      { label: 'Facial and Makeup', href: '/services/facial-makeup' },
    ]
  },
  // { 
  //   label: 'GET IN TOUCH', 
  //   href: '/get_in_touch',
  //   subItems: [
  //     { label: 'Contact', href: '/get_in_touch/contact' },
  //     { label: 'Appointment', href: '/get_in_touch/appointment' }
  //   ]
  // },
];

const FadeVariants = {
  hide: { opacity: 0, y: -20 },
  fade: { opacity: 1, y: 0 },
};  

function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return { isOpen, toggle, close };
}

export default function Header() {
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();
  const router = useRouter();
  const pathname = usePathname();

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  const handleBookNow = useCallback(() => {
    closeMobileMenu();
    router.push('/get_in_touch/appointment');
  }, [closeMobileMenu, router]);

  const navLinks = useMemo(() => navItems.map((item, index) => (
    <li key={index} className="relative group">
      <Link
        href={item.href}
        className={`relative text-sm md:text-base lg:text-lg py-2 px-2 md:px-4 transition-all duration-300 ${
          isActive(item.href) ? 'text-[#b7a576]' : 'text-[#6b5c4c] hover:text-[#b7a576]'
        } lg:font-normal font-bold`}
        onClick={closeMobileMenu}
        aria-current={isActive(item.href) ? 'page' : undefined}
      >
        <span className="relative inline-block">
          {item.label}
          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#b7a576] transform transition-transform duration-300 origin-left ${
            isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></span>
        </span>
      </Link>
    </li>
  )), [isActive, closeMobileMenu]);

  return (
    <nav className='sticky top-0 z-50 py-2 sm:py-4 bg-[#f5f0e8] border-b border-[#6b5c4c]/20 shadow-md transition-all duration-300' aria-label="Main navigation">
      <div className='container px-4 mx-auto relative'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-105'>
            <Image 
              src="/images/Logo.png" 
              alt="MakeupArtistry_Kor Logo" 
              width={80} 
              height={80} 
              className='h-auto w-16 sm:w-20 md:w-24 mr-2 sm:mr-3' 
            />
            <span className='text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#6b5c4c]'>MakeupArtistry_Kor</span>
          </div>
          
          {/* Desktop menu */}
          <ul className='hidden lg:flex ml-4 xl:ml-14 space-x-2 xl:space-x-6 relative'>
            {navLinks}
          </ul>

          <div className='hidden lg:flex justify-center items-center'>
            <button 
              onClick={handleBookNow}
              className='bg-[#6b5c4c] py-1.5 sm:py-2 px-4 sm:px-6 rounded-md text-[#f5f0e8] hover:bg-[#5a4d40] transition-all duration-300 text-base sm:text-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5'
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden text-[#6b5c4c] z-50 p-2 rounded-md hover:bg-[#6b5c4c]/10 transition-colors duration-300"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
          </button>
        </div>
        
        {/* Full-screen Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              className="fixed inset-0 bg-[#f5f0e8] z-40 flex flex-col items-center justify-center lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#6b5c4c] mb-6 sm:mb-8">
                MakeupArtistry_Kor
              </div>
              <nav className="flex flex-col items-center space-y-4 sm:space-y-6">
                <ul className="list-none p-0">
                  {navLinks}
                </ul>
              </nav>
              <motion.div
                variants={FadeVariants}
                initial="hide"
                animate="fade"
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-6 sm:mt-8"
              >
                <button 
                  onClick={handleBookNow}
                  className='bg-[#6b5c4c] py-2 px-6 rounded-md text-[#f5f0e8] hover:bg-[#5a4d40] transition-all duration-300 text-base sm:text-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5'
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