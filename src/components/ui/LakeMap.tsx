'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const islands = [
  // Major Named Islands
  { id: 'island-1', name: 'Akampene (Punishment Island)', x: '25%', y: '45%' },
  { id: 'island-2', name: 'Bushara Island', x: '45%', y: '35%' },
  { id: 'island-3', name: 'Bwama Island (Njuyeera)', x: '65%', y: '25%' },
  { id: 'island-4', name: 'Kyahugye Island', x: '35%', y: '65%' },
  { id: 'island-5', name: 'Bucuranuka Island', x: '55%', y: '75%' },
  { id: 'island-6', name: 'Akabucuranuka Island', x: '75%', y: '55%' },
  { id: 'island-7', name: 'Habuharo Island', x: '20%', y: '25%' },
  { id: 'island-8', name: 'Njonga Island', x: '80%', y: '40%' },
  { id: 'island-9', name: 'Kahungye Island', x: '15%', y: '60%' },
  { id: 'island-10', name: 'Rwanjogyera Island', x: '85%', y: '70%' },
  
  // Smaller Islands - Northern Section
  { id: 'island-11', name: 'Northern Isle', x: '40%', y: '15%' },
  { id: 'island-12', name: 'Eagle Point', x: '60%', y: '18%' },
  { id: 'island-13', name: 'Misty Isle', x: '30%', y: '20%' },
  { id: 'island-14', name: 'Cedar Island', x: '50%', y: '22%' },
  
  // Central Cluster
  { id: 'island-15', name: 'Central Haven', x: '42%', y: '50%' },
  { id: 'island-16', name: 'Twin Rock East', x: '58%', y: '48%' },
  { id: 'island-17', name: 'Twin Rock West', x: '52%', y: '52%' },
  { id: 'island-18', name: 'Fisherman Isle', x: '38%', y: '55%' },
  
  // Southern Islands
  { id: 'island-19', name: 'Southern Bay', x: '25%', y: '80%' },
  { id: 'island-20', name: 'Sunset Point', x: '45%', y: '85%' },
  { id: 'island-21', name: 'Crane Roost', x: '35%', y: '75%' },
  { id: 'island-22', name: 'Palm Island', x: '65%', y: '80%' },
  
  // Eastern Shores
  { id: 'island-23', name: 'Morning Light', x: '90%', y: '30%' },
  { id: 'island-24', name: 'Hillside Isle', x: '88%', y: '50%' },
  { id: 'island-25', name: 'Canoe Landing', x: '85%', y: '60%' },
  
  // Western Edge
  { id: 'island-26', name: 'Sunrise Isle', x: '10%', y: '35%' },
  { id: 'island-27', name: 'Rocky Point', x: '12%', y: '50%' },
  { id: 'island-28', name: 'Quiet Cove', x: '8%', y: '45%' },
  { id: 'island-29', name: 'Heritage Isle', x: '18%', y: '70%' },
];

const LakeMap = () => {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated water ripples effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 md:top-20 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-300/30 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-16 md:bottom-32 right-1/3 w-24 md:w-48 h-24 md:h-48 bg-emerald-300/30 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-playfair-display font-bold text-center mb-4 bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent"
        >
          Explore Lake Bunyonyi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-sm md:text-lg text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto px-4"
        >
          Navigate 29 legendary islands formed by ancient Virunga lava flows, fed by River Kagoma from Kigezi Highlands and drained by River Heissesero - Africa&apos;s second deepest lake awaits your exploration
        </motion.p>
        <div className="relative">
          <img src="/images/lake-bunyonyi.svg" alt="Lake Bunyonyi Map" className="w-full" />
          {islands.map((island, index) => {
            // Vary island sizes - major islands are larger
            const isMajorIsland = index < 10;
            const isSmallIsland = index > 20;
            const sizeClass = isMajorIsland 
              ? "w-5 h-5 md:w-7 md:h-7" 
              : isSmallIsland 
                ? "w-3 h-3 md:w-4 md:h-4"
                : "w-4 h-4 md:w-5 md:h-5";
            
            return (
              <motion.div
                key={island.id}
                className="absolute"
                style={{ left: island.x, top: island.y }}
                onHoverStart={() => setHoveredIsland(island.name)}
                onHoverEnd={() => setHoveredIsland(null)}
              >
                <motion.div
                  className={`${sizeClass} bg-gradient-to-br from-amber-400 to-orange-500 rounded-full cursor-pointer shadow-lg border-2 border-white relative`}
                  whileHover={{ scale: 1.8 }}
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(251, 191, 36, 0.7)", "0 0 0 8px rgba(251, 191, 36, 0)"] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2 + (index * 0.1), // Slight timing variation
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
                    className="absolute bottom-full mb-3 w-40 md:w-56 p-2 md:p-4 bg-white/95 backdrop-blur-sm text-center rounded-xl shadow-2xl border border-white/50"
                  >
                    <h4 className="font-semibold text-sm md:text-base text-gray-800 font-playfair-display">{island.name}</h4>
                    <div className="w-6 md:w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-2" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LakeMap;
