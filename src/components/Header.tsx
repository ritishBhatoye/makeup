"use client";

import { useState, useEffect, useRef } from 'react';
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNavBar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href;
  const handleBookNow = () => router.push('/get_in_touch/appointment');

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-[#6b5c4c]/20 bg-[#f2ede8]/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <Image src="/images/logo.png" alt="Sheena Logo" width={80} height={80} className='h-auto w-16 sm:w-20 mr-2' />
            <span className='text-lg sm:text-xl font-semibold tracking-tight text-[#6b5c4c]'>Sheena</span>
          </div>
          
          <ul className='hidden lg:flex ml-4 xl:ml-14 space-x-6 xl:space-x-12'>
            {navItems.map((item, index) => (
              <li key={index} 
                  ref={item.subItems ? dropdownRef : null}
                  onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative group"
              > 
                <Link 
                  href={item.href}
                  className={`relative py-2 px-3 transition-colors duration-300 ${isActive(item.href) ? 'text-[#b7a576]' : 'text-[#6b5c4c] hover:text-[#b7a576]'}`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${isActive(item.href) ? 'bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
                </Link>
                {item.subItems && (
                  <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#6b5c4c] hover:bg-[#6b5c4c] hover:text-white transition-colors duration-300"
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
              className='bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] py-2 px-4 rounded-md text-white font-semibold hover:opacity-90 transition-opacity duration-300'
            >
              BOOK NOW
            </button>
          </div>
          <div className='lg:hidden flex flex-col justify-end'>
            <button onClick={toggleNavBar} className="text-[#6b5c4c]">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed inset-0 z-20 bg-[#f2ede8] flex flex-col justify-start items-center pt-20 lg:hidden'>
            <ul className='w-full'>
              {navItems.map((item, index) => (
                <li key={index} className='py-4 border-b border-[#6b5c4c]/20 last:border-b-0'>
                  <Link 
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={`block py-2 px-6 text-center transition-colors duration-300 ${isActive(item.href) ? 'text-[#b7a576]' : 'text-[#6b5c4c] hover:text-[#b7a576]'}`}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <ul className="mt-2 bg-white/50 rounded-md overflow-hidden">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            href={subItem.href}
                            onClick={() => setMobileDrawerOpen(false)}
                            className="block px-8 py-2 text-sm text-[#6b5c4c] hover:bg-[#6b5c4c] hover:text-white transition-colors duration-300"
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
            <div className='mt-8'>
              <button 
                onClick={() => {
                  setMobileDrawerOpen(false);
                  handleBookNow();
                }}
                className='bg-gradient-to-r from-[#b7a576] via-[#6b5c4c] to-[#f2ede8] py-2 px-6 rounded-md text-white font-semibold hover:opacity-90 transition-opacity duration-300'
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