'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const highlights = [
  {
    title: 'Speed Boats',
    description: 'Explore the lake at high speeds.',
    image: '/images/highlights/sb-1.jpg',
  },
  {
    title: 'Swimming Pool',
    description: 'Relax by our infinity pool.',
    image: '/images/highlights/sp-1.jpg',
  },
  {
    title: 'Zipline',
    description: 'Experience the thrill of our zipline.',
    image: '/images/highlights/zl-2.jpg',
  },
  {
    title: 'Premium Rooms',
    description: 'Luxurious rooms with stunning views.',
    image: '/images/highlights/rm-1.jpg',
  },
  {
    title: 'Water Bicycle',
    description: 'A unique experience on the water.',
    image: '/images/highlights/wb-4.png',
  },
  {
    title: 'Breakfast',
    description: 'Start your day with a delicious breakfast.',
    image: '/images/activities/breakfast.png',
  },
  {
    title: 'Lunch',
    description: 'Enjoy a delightful lunch with a view.',
    image: '/images/activities/wb-2.png',
  },
  {
    title: 'Dinner',
    description: 'Savor an exquisite dinner under the stars.',
    image: '/images/highlights/dinner-4.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const ResortHighlights = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair-display font-bold text-center mb-4 bg-gradient-to-r from-amber-600 via-blue-700 to-emerald-600 bg-clip-text text-transparent"
        >
          Resort Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Discover extraordinary experiences that make your stay unforgettable
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const isFirst = index === 0;
            const isLast = index === highlights.length - 1;
            const colSpan = isFirst || isLast ? 'lg:col-span-2' : '';

            return (
              <Link
                href={`/highlights/${highlight.title.toLowerCase().replace(/ /g, '-')}`}
                key={index}
                className={`${colSpan}`}
              >
                <motion.div
                  className="group relative w-full h-72 md:h-96 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 md:hover:-translate-y-3 md:hover:rotate-1 transition-all duration-500 cursor-pointer border border-white/20 backdrop-blur-sm"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <motion.h3 
                      className="text-xl md:text-2xl lg:text-3xl font-playfair-display font-bold text-white mb-2"
                      whileHover={{ y: -2 }}
                    >
                      {highlight.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 font-inter text-sm md:text-base leading-relaxed"
                      whileHover={{ y: -2 }}
                    >
                      {highlight.description}
                    </motion.p>
                    <motion.div
                      className="mt-3 w-12 h-1 bg-gradient-to-r from-amber-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResortHighlights;
