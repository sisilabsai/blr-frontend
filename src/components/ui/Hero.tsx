'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Video background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-blue-700/30 to-emerald-400/30 animate-gradient-move" />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Floating magical elements */}
        <motion.div
          className="absolute left-10 top-20 w-24 h-24 rounded-full bg-amber-300/40 blur-2xl animate-float-slow"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-16 bottom-24 w-32 h-32 rounded-full bg-blue-400/30 blur-2xl animate-float-slower"
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 w-16 h-16 rounded-full bg-emerald-300/40 blur-2xl animate-float-fast"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-playfair-display font-bold drop-shadow-lg text-center px-4 leading-tight"
        >
          Welcome to <span className="bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">Bunyonyi Luxury Resort</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter drop-shadow text-center px-4 max-w-4xl"
        >
          Discover Africa&apos;s second deepest lake - where volcanic legends meet luxury on the shores of the mystical Lake Bunyonyi
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto"
        >
          <a
            href="/booking"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300 text-center text-sm md:text-base"
          >
            Book Your Stay
          </a>
          <a
            href="/activities"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white text-center text-sm md:text-base"
          >
            Explore Experiences
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
