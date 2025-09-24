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
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 font-playfair-display bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-center text-sm md:text-lg text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the story behind Lake Bunyonyi&apos;s premier luxury destination
        </motion.p>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 mb-8 md:mb-12 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">Our Vision</h2>
            <p className="text-lg md:text-xl text-gray-800 mb-4 md:mb-6 font-semibold italic">
              &quot;To have the most beautiful luxurious resort in Uganda&quot;
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bunyonyi Luxury Resort stands as a beacon of elegance on the shores of Africa&apos;s second deepest lake. Nestled where volcanic legends meet luxury, our resort offers an extraordinary gateway to the mystical Lake Bunyonyi - a natural wonder formed by ancient lava flows from the legendary Virunga Mountains, home of the mountain gorillas.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 mb-6 md:mb-12 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">The Lake&apos;s Legendary Origin</h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Lake Bunyonyi&apos;s dramatic formation tells a tale of volcanic power and natural artistry. Born from massive lava flows cascading down from the majestic Virunga Mountains, the molten rock carved its path until it encountered the Ndego River. As the lava cooled and solidified, it created a natural dam that blocked the river&apos;s flow, giving birth to this extraordinary lake that now stretches before us in all its mystical beauty.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Fed by the pristine waters of River Kagoma flowing from the Highlands of Kigezi, and gracefully draining through River Heissesero, Lake Bunyonyi maintains its crystal-clear waters that reflect the surrounding hills like a natural mirror. With depths ranging from 44 to an astounding 900 meters, it ranks as the second deepest lake in Africa and third deepest in the world - a aquatic cathedral of unprecedented depth and beauty.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent">29 Islands of Wonder</h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Scattered across Lake Bunyonyi&apos;s pristine waters lie 29 enchanting islands, each with its own story and character. The largest, Bwama Island (locally known as Njuyeera Island), once housed a leprosy treatment center established by Scottish missionary Dr. Leonard Sharp - its facilities now serve as schools for island residents, transforming a place of healing into one of learning.
            </p>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              Among the most intriguing is tiny Akampene Island, known as Punishment Island - a sobering reminder of traditional justice where unmarried pregnant girls were once abandoned. Today, the ancient tree that witnessed those harsh times has become a sanctuary for all bird species around Lake Bunyonyi, where they gather in natural conference, turning a place of punishment into one of unity and life.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
