'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaVideo } from 'react-icons/fa';

const highlights = [
  {
    title: '29 Mystical Islands',
    description: 'Explore legendary Bwama Island and mysterious Punishment Island across Lake Bunyonyi.',
    media: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350750/WhatsApp_Image_2025-10-13_at_12.55.04_16d8a42c_ysupy2.jpg',
    type: 'image',
  },
  {
    title: 'Africa\'s 2nd Deepest Lake',
    description: 'Swim in crystal waters that plunge 900 meters into volcanic depths.',
    media: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760362018/new-7_p0ieul.mp4',
    type: 'video',
  },
  {
    title: 'Virunga Mountain Views',
    description: 'Witness breathtaking vistas of the volcanic mountains, home to mountain gorillas.',
    media: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1760362046/new-13_nyazfc.mp4',
    type: 'video',
  },
  {
    title: 'Luxury Lakefront Suites',
    description: 'Wake up to panoramic views of pristine waters and rolling hills.',
    media: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760366565/rooms_cpkut1.jpg',
    type: 'image',
  },
  {
    title: 'Traditional Canoeing',
    description: 'Navigate ancient waters in authentic dugout canoes like local fishermen.',
    media: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760361833/new-4_piblee.jpg',
    type: 'image',
  },
  {
    title: 'Birdwatcher\'s Paradise',
    description: 'Spot Grey Crowned Cranes, Kingfishers, and exotic birds at the conference tree.',
    media: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760350885/WhatsApp_Image_2025-10-13_at_12.55.09_dc7e0506_snhdyh.jpg',
    type: 'image',
  },
  {
    title: 'Cultural Heritage Tours',
    description: 'Discover Scottish missionary history and traditional island communities.',
    media: 'https://res.cloudinary.com/dc0uiujvn/image/upload/v1760362203/new-1_isri7b.jpg',
    type: 'image',
  },
  {
    title: 'Volcanic Formation Story',
    description: 'Learn how Virunga lava flows created this natural wonder blocking River Ndego.',
    media: '/images/highlights/dinner-4.png',
    type: 'image',
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
          className="text-center text-base md:text-lg text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto px-4"
        >
          Discover extraordinary experiences that make your stay unforgettable
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
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
                  className="group relative w-full h-64 md:h-72 lg:h-96 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden transform hover:-translate-y-1 md:hover:-translate-y-3 md:hover:rotate-1 transition-all duration-500 cursor-pointer border border-white/20 backdrop-blur-sm"
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
                  <div className="relative w-full h-full">
                    {highlight.type === 'video' ? (
                      <video
                        src={highlight.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={highlight.media}
                        alt={highlight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                    {highlight.type === 'video' && (
                      <motion.div
                        className="absolute top-4 right-4 bg-black/50 rounded-full p-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <FaVideo className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                    <motion.h3 
                      className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-playfair-display font-bold text-white mb-1 md:mb-2"
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
