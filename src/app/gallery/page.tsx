'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaPlay, FaEye, FaTimes } from 'react-icons/fa';

interface MediaItem {
  id: number;
  title: string;
  description: string;
  category: 'resort-tour' | 'boat-cruising' | 'water-activities';
  videoUrl: string;
  thumbnail?: string;
  duration?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: 'Resort Tour & Views',
    description: 'Experience the breathtaking beauty of Bunyonyi Luxury Resort with stunning lakefront views, premium accommodations, and world-class facilities nestled in the heart of Africa\'s Switzerland.',
    category: 'resort-tour',
    videoUrl: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1758783523/WhatsApp_Video_2025-09-24_at_23.23.28_8c442d6f_x6j9qx.mp4',
    duration: '2:15'
  },
  {
    id: 2,
    title: 'Luxury Boat Cruising Experience',
    description: 'Glide across the pristine waters of Lake Bunyonyi on our luxury boat, exploring the 29 mystical islands while enjoying panoramic views of the Virunga Mountains.',
    category: 'boat-cruising',
    videoUrl: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1758783542/WhatsApp_Video_2025-09-24_at_23.23.29_be6ed5e7_gpxrl8.mp4',
    duration: '3:42'
  },
  {
    id: 3,
    title: 'Island Hopping Adventure',
    description: 'Discover the legendary islands of Lake Bunyonyi including historic Bwama Island and mysterious Punishment Island, each with their own captivating stories.',
    category: 'boat-cruising',
    videoUrl: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1758783213/WhatsApp_Video_2025-09-24_at_23.23.33_c3967b3d_ym4yzn.mp4',
    duration: '4:18'
  },
  {
    id: 4,
    title: 'Water Bicycle Adventures',
    description: 'Experience the unique thrill of pedaling across Africa\'s second deepest lake on our eco-friendly water bicycles, offering a fun way to explore the pristine waters.',
    category: 'water-activities',
    videoUrl: 'https://res.cloudinary.com/dc0uiujvn/video/upload/v1758783264/WhatsApp_Video_2025-09-24_at_23.23.32_eb2fb2c8_fekjwk.mp4',
    duration: '2:56'
  }
];

const categories = [
  { id: 'all', name: 'All Videos', icon: '🎬' },
  { id: 'resort-tour', name: 'Resort Tour', icon: '🏨' },
  { id: 'boat-cruising', name: 'Boat Cruising', icon: '🚤' },
  { id: 'water-activities', name: 'Water Activities', icon: '🚲' }
];

const MediaGalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openVideoModal = (item: MediaItem) => {
    setSelectedVideo(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair-display font-bold mb-6 bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent">
            Media Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the authentic beauty of Lake Bunyonyi through exclusive videos showcasing our resort, activities, and the magical experiences that await you.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-white/50'
              }`}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
            >
              {/* Video Thumbnail/Preview */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  loop
                  preload="metadata"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={() => openVideoModal(item)}
                    className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPlay className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 ml-1" />
                  </motion.button>
                </div>

                {/* Duration Badge */}
                {item.duration && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {item.duration}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-playfair-display font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {item.description}
                </p>
                <motion.button
                  onClick={() => openVideoModal(item)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  whileHover={{ y: -2 }}
                >
                  <FaEye className="w-4 h-4" />
                  Watch Video
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes className="w-5 h-5 text-white" />
            </button>

            {/* Video Player */}
            <video
              className="w-full h-full"
              controls
              autoPlay
              playsInline
            >
              <source src={selectedVideo.videoUrl} type="video/mp4" />
            </video>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {selectedVideo.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MediaGalleryPage;