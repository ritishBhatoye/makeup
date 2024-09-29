"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  const pathname = usePathname();

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => pathname === href;

  const handleBookNow = () => {
    router.push('/get_in_touch/appointment');
  };

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
              <li key={index} 
                  ref={item.subItems ? dropdownRef : null}
                  onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative group"
              > 
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
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavBar} className="text-text">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 bg-background w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <Link 
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={`relative py-2 px-3 transition-colors duration-300 ${isActive(item.href) ? 'text-orange-500' : 'text-text hover:text-orange-500'}`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-1 transition-width duration-300 ${isActive(item.href) ? 'bg-gradient-to-r from-orange-500 to-orange-800 w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex'>
              <button 
                onClick={() => {
                  setMobileDrawerOpen(false);
                  handleBookNow();
                }}
                className='bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] py-2 px-3 rounded-md text-background'
              >
                BOOK NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}