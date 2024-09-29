"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';

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
  { 
    label: 'GET IN TOUCH', 
    href: '/get_in_touch',
    subItems: [
      { label: 'Contact', href: '/get_in_touch/contact' },
      { label: 'Appointment', href: '/get_in_touch/appointment' }
    ]
  },
];

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNavBar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileDrawerOpen]);

  const isActive = (href: string) => pathname === href;

  const handleBookNow = () => router.push('/get_in_touch/appointment');

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-text/20 bg-background/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <Image src="/images/logo.png" alt="Sheena Logo" width={80} height={80} className='h-auto w-20 mr-2' />
            <span className='text-l tracking-tight text-text'>Sheena</span>
          </div>
          
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link 
                  href={item.href}
                  className={`relative py-2 px-3 transition-colors duration-400 ${isActive(item.href) ? 'text-[#b7a576]' : 'text-text hover:text-[#b7a576]'}`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 ${isActive(item.href) ? 'bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
                </Link>
                {item.subItems && (
                  <ul className="absolute left-0 mt-2 w-64 bg-background shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-text hover:bg-text hover:text-background transition-colors duration-300"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className='hidden lg:flex justify-center items-center'>
            <button 
              onClick={handleBookNow}
              className='bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] py-2 px-3 rounded-md text-background'
            >
              BOOK NOW
            </button>
          </div>
          <button onClick={toggleNavBar} className="lg:hidden text-text">
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {mobileDrawerOpen && (
          <div className='fixed inset-0 z-20 bg-background p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={`relative py-2 px-3 transition-colors duration-300 ${isActive(item.href) ? 'text-[#b7a576]' : 'text-text hover:text-[#b7a576]'}`}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            href={subItem.href}
                            onClick={() => setMobileDrawerOpen(false)}
                            className="block py-1 text-sm text-text hover:text-[#b7a576] transition-colors duration-300"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => {
                setMobileDrawerOpen(false);
                handleBookNow();
              }}
              className='mt-8 bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] py-2 px-3 rounded-md text-background'
            >
              BOOK NOW
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}