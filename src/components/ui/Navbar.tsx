'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/rooms', label: 'Rooms' },
  { href: '/activities', label: 'Activities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="backdrop-blur-lg bg-white/60 shadow-xl border-b border-white/30 fixed w-full z-[100] transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent drop-shadow z-[80] relative"
            onClick={closeMenu}
          >
            <span className="block md:hidden">BLR</span>
            <span className="hidden md:block">Bunyonyi Luxury Resort</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 font-medium text-gray-800 transition-colors duration-200 hover:text-blue-600 focus:outline-none"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <Link
              href="/booking"
              className="ml-2 md:ml-4 px-6 py-2 bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-[80] p-2 rounded-lg bg-white/80 shadow-lg"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute left-0 top-1 w-6 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-5 w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white backdrop-blur-xl shadow-2xl md:hidden z-[70] border-l border-gray-200"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gradient-to-r hover:from-amber-100 hover:to-blue-100 rounded-xl transition-all duration-200"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Book Now Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/booking"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 text-white text-center rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={closeMenu}
                >
                  Book Your Stay
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="mt-auto mb-8 p-6 bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
                <p className="text-sm text-gray-600 mb-1">+256 390 456 789</p>
                <p className="text-sm text-gray-600">info@bunyonyiluxuryresort.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
