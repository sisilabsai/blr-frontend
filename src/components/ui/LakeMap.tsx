'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const islands = [
  { id: 'island-1', name: 'Punishment Island', x: '30%', y: '40%' },
  { id: 'island-2', name: 'Bushara Island', x: '50%', y: '60%' },
  { id: 'island-3', name: 'Bwama Island', x: '70%', y: '30%' },
];

const LakeMap = () => {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated water ripples effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-emerald-300/30 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair-display font-bold text-center mb-4 bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent"
        >
          Explore Lake Bunyonyi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Navigate through pristine waters and discover hidden islands
        </motion.p>
        <div className="relative">
          <img src="/images/lake-bunyonyi.svg" alt="Lake Bunyonyi Map" className="w-full" />
          {islands.map((island) => (
            <motion.div
              key={island.id}
              className="absolute"
              style={{ left: island.x, top: island.y }}
              onHoverStart={() => setHoveredIsland(island.name)}
              onHoverEnd={() => setHoveredIsland(null)}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full cursor-pointer shadow-lg border-2 border-white relative"
                whileHover={{ scale: 1.8 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(251, 191, 36, 0.7)", "0 0 0 20px rgba(251, 191, 36, 0)"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full" />
              </motion.div>
              {hoveredIsland === island.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute bottom-full mb-3 w-56 p-4 bg-white/95 backdrop-blur-sm text-center rounded-xl shadow-2xl border border-white/50"
                >
                  <h4 className="font-semibold text-gray-800 font-playfair-display">{island.name}</h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-2" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LakeMap;
