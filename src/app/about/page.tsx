'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-36 h-36 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center mb-4 font-playfair-display bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the story behind Lake Bunyonyi's premier luxury destination
        </motion.p>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-12 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bunyonyi Luxury Resort is a haven of tranquility and luxury nestled on the shores of the beautiful Lake Bunyonyi. Our resort offers a unique blend of modern comfort and traditional African charm, providing our guests with an unforgettable experience.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-12 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">Our Story</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded in 2025, our resort was built with a vision to create a world-class destination that showcases the natural beauty of Lake Bunyonyi. We are proud of our heritage and our commitment to providing our guests with the highest level of service.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent">Sustainability</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to sustainable tourism and preserving the natural environment of Lake Bunyonyi. We work closely with the local Batwa community to support their culture and traditions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
