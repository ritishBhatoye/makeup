"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'BLOG', href: '/blog' },
  { label: 'SHOP', href: '/shop' },
  { label: 'GET IN TOUCH', href: '/get_in_touch' },
];

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Call Now');
  const [modalOpen, setModalOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const pathname = usePathname();

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleText = () => {
    setButtonText(prev => (prev === 'Call Now' ? 'WhatsApp' : 'Call Now'));
  };

  useEffect(() => {
    const interval = setInterval(toggleText, 5000);
    return () => clearInterval(interval);
  }, []);

  const isActive = (href: string) => pathname === href;

  const handleButtonClick = () => {
    const isMobileDevice = window.innerWidth < 1024;

    if (buttonText === 'Call Now') {
      if (isMobileDevice) {
        window.location.href = 'tel:+9876125394';
      } else {
        setQrCodeValue('tel:9876125394');
        setModalMessage('SCAN TO CALL');
        setModalOpen(true);
      }
    } else {
      if (isMobileDevice) {
        window.location.href = 'https://wa.me/1234567890';
      } else {
        setQrCodeValue('https://wa.me/1234567890');
        setModalMessage('SCAN TO WHATSAPP MESSAGE');
        setModalOpen(true);
      }
    }
  };

  return (
    <>
      <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0'>
              <Image src="/images/logo.png" alt="Sheena Logo" width={80} height={80} className='h-auto w-20 mr-2' />
              <span className='text-l tracking-tight'>Sheena</span>
            </div>
            
            <ul className='hidden lg:flex ml-14 space-x-12'>
              {navItems.map((item, index) => (
                <li key={index}> 
                  <Link 
                    href={item.href}
                    className={`relative py-2 px-3 transition-colors duration-400 ${isActive(item.href) ? 'text-orange-500' : 'hover:text-orange-500'}`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 ${isActive(item.href) ? 'bg-gradient-to-r from-orange-500 to-orange-800 w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className='hidden lg:flex justify-center space-x-12 items-center'>
              <button 
                onClick={handleButtonClick}
                className='py-2 px-3 border rounded-md'
              >
                {buttonText}
              </button>
              <Link 
                href='/booknow'
                className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'
              >
                BOOK NOW
              </Link>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
              <button onClick={toggleNavBar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className='py-4'>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={`relative py-2 px-3 transition-colors duration-300 ${isActive(item.href) ? 'text-orange-500' : 'hover:text-orange-500'}`}
                    >
                      {item.label}
                      <span 
                        className={`absolute bottom-0 left-0 right-0 h-1 transition-width duration-300 ${isActive(item.href) ? 'bg-gradient-to-r from-orange-500 to-orange-800 w-full' : 'w-0 group-hover:w-full'}`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex space-x-6'>
                <button 
                  onClick={handleButtonClick}
                  className='py-2 px-3 border rounded-md'
                >
                  {buttonText}
                </button>
                <Link 
                  href='/booknow'
                  className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className='bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-md shadow-lg text-center flex flex-col items-center'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Replace QRCode with an Image component or implement QR code generation */}
              <div className="mb-4 w-32 h-32 bg-white"></div>
              <div className="flex space-x-4">
                <button 
                  className='px-4 py-2 border border-transparent text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black'
                >
                  {modalMessage}
                </button>
                <button 
                  className='px-4 py-2 border border-transparent text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black'
                  onClick={() => {
                    navigator.clipboard.writeText(qrCodeValue);
                  }}
                >
                  Copy to Clipboard
                </button>
              </div>
              <button 
                onClick={() => setModalOpen(false)}
                className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md'
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}