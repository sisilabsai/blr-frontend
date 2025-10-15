'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
        aria-hidden="true"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          aria-hidden
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
        <motion.div
          className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-purple-400/30 blur-2xl animate-float-medium"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/4 w-12 h-12 rounded-full bg-pink-300/40 blur-xl animate-float-slow"
          animate={{ y: [0, 8, 0], x: [0, -6, 0], rotate: [0, 360] }}
          transition={{ duration: 9, repeat: Infinity, rotate: { duration: 20 } }}
        />
        <motion.div
          className="absolute right-1/4 top-1/4 w-14 h-14 rounded-full bg-cyan-300/35 blur-xl animate-float-fast"
          animate={{ y: [0, -10, 0], x: [0, 5, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, textShadow: ['0px 0px 0px rgba(255,215,0,0)', '0px 0px 22px rgba(255,215,0,0.6)', '0px 0px 0px rgba(255,215,0,0)'] }}
          transition={{ duration: 0.8, delay: 0.2, textShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-playfair-display font-bold drop-shadow-lg text-center px-4 leading-tight relative"
        >
          <span className="inline-block">Welcome to</span>
          <div className="mt-2">
            <TypeAnimation
              sequence={[500, 'Bunyonyi Luxury Resort']}
              wrapper="span"
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 font-playfair-display"
              cursor={true}
              speed={60}
              repeat={Infinity}
            />

            {/* Animated underline SVG */}
            <svg viewBox="0 0 300 30" className="w-64 h-6 mt-1 mx-auto block" preserveAspectRatio="xMidYMid meet">
              <path d="M10 20 C60 0, 240 40, 290 20" fill="transparent" stroke="url(#g)" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" from="0,300" to="300,0" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0.6;1;0" dur="4s" begin="0.6s" repeatCount="indefinite" />
              </path>
              <defs>
                <linearGradient id="g" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#FFD166" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
            </svg>

            {/* Sparkles around title */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8], rotate: [0, 45, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2"
            >
              <span className="w-2 h-2 bg-amber-300 rounded-full blur-sm" />
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="w-2 h-2 bg-emerald-300 rounded-full blur-sm" />
            </motion.div>
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter drop-shadow text-center px-4 max-w-4xl relative"
        >
          <TypeAnimation
            sequence={[1500, "Discover Africa's second deepest lake - where volcanic legends meet luxury on the shores of the mystical Lake Bunyonyi"]}
            wrapper="span"
            cursor={false}
            speed={45}
          />

          {/* Subtle highlight that sweeps under subtitle */}
          <motion.span
            aria-hidden
            className="absolute left-1/2 -bottom-3 w-60 h-2 rounded-full bg-gradient-to-r from-amber-300/40 via-blue-400/30 to-emerald-300/30 blur-xl"
            initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: ['-60%', '-50%', '-40%'], opacity: [0, 0.7, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto"
        >
          <motion.a
            href="/booking"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-amber-300 text-center text-sm md:text-base"
            aria-label="Book your stay"
            role="button"
          >
            {/* glowing pulse */}
            <span className="absolute inset-0 rounded-full bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative">Book Your Stay</span>
            {/* ripple on click - will be handled by :active pseudo for now */}
          </motion.a>

          <motion.a
            href="/activities"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-white text-center text-sm md:text-base"
            aria-label="Explore experiences"
            role="button"
          >
            <span className="relative">Explore Experiences</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
