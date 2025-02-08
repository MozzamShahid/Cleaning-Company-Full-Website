'use client';  // Add this for client-side interactivity

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import Link from 'next/link';  // Use Next.js Link

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Location', href: '/location' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-black hover:text-blue-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className={`space-y-2 ${isScrolled ? 'text-gray-700' : 'text-black'}`}>
              <span className="block w-8 h-0.5 bg-current"></span>
              <span className="block w-8 h-0.5 bg-current"></span>
              <span className="block w-8 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-blue-600 text-lg font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}; 