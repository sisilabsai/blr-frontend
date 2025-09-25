'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaEye, FaTimes, FaExpand, FaCompress, FaShare, FaDownload, FaHeart, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  // Enhanced mobile overlay management
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      setLastInteraction(Date.now());
      setShowOverlay(true);
      
      // Hide overlay after 3 seconds if video is playing
      if (isVideoPlaying) {
        if (overlayTimeoutRef.current) {
          clearTimeout(overlayTimeoutRef.current);
        }
        overlayTimeoutRef.current = setTimeout(() => {
          setShowOverlay(false);
        }, 3000);
      }
    };

    const modalElement = modalRef.current;
    if (modalElement && isModalOpen) {
      modalElement.addEventListener('touchstart', handleUserInteraction);
      modalElement.addEventListener('mousemove', handleUserInteraction);
      modalElement.addEventListener('click', handleUserInteraction);
      
      return () => {
        modalElement.removeEventListener('touchstart', handleUserInteraction);
        modalElement.removeEventListener('mousemove', handleUserInteraction);
        modalElement.removeEventListener('click', handleUserInteraction);
      };
    }
  }, [isModalOpen, isVideoPlaying]);

  // Handle video play/pause events
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (userInteracted) {
      // Auto-hide overlay after 3 seconds when video starts playing
      if (overlayTimeoutRef.current) {
        clearTimeout(overlayTimeoutRef.current);
      }
      overlayTimeoutRef.current = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    setShowOverlay(true);
    if (overlayTimeoutRef.current) {
      clearTimeout(overlayTimeoutRef.current);
    }
  };

  // Enhanced modal functions
  const openVideoModal = (item: MediaItem) => {
    setSelectedVideo(item);
    setIsModalOpen(true);
    setUserInteracted(false);
    setShowOverlay(true);
    setIsVideoPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setIsFullscreen(false);
    setUserInteracted(false);
    setShowOverlay(true);
    setIsVideoPlaying(false);
    if (overlayTimeoutRef.current) {
      clearTimeout(overlayTimeoutRef.current);
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement && modalRef.current) {
      await modalRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleLike = (videoId: number) => {
    setLikedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const shareVideo = async (video: MediaItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: video.videoUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(video.videoUrl);
      // You could add a toast notification here
    }
  };

  const downloadVideo = (video: MediaItem) => {
    const link = document.createElement('a');
    link.href = video.videoUrl;
    link.download = `${video.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp4`;
    link.click();
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
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-playfair-display font-bold text-gray-800 group-hover:text-emerald-700 transition-colors flex-1 pr-2">
                    {item.title}
                  </h3>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      likedVideos.has(item.id) 
                        ? 'text-red-500 bg-red-50' 
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaHeart className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                </div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <motion.button
                    onClick={() => openVideoModal(item)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full text-sm md:text-base font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                    whileHover={{ y: -2 }}
                  >
                    <FaPlay className="w-3 h-3 md:w-4 md:h-4" />
                    Watch Now
                  </motion.button>
                  
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareVideo(item);
                    }}
                    className="p-2 md:p-3 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaShare className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative w-full h-full ${isFullscreen ? '' : 'max-w-6xl max-h-[90vh] aspect-video m-4 rounded-2xl overflow-hidden'} bg-black`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Video Player */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls={showOverlay}
                autoPlay
                playsInline
                muted={isMuted}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = isMuted;
                  }
                }}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>

              {/* Smart Mobile-Optimized Overlay */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none"
                  >
                    {/* Top Controls */}
                    <div className="absolute top-0 left-0 right-0 p-4 md:p-6 pointer-events-auto">
                      <div className="flex items-center justify-between">
                        <motion.button
                          onClick={closeModal}
                          className="w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaTimes className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </motion.button>

                        <div className="flex items-center gap-2 md:gap-3">
                          {/* Like Button */}
                          <motion.button
                            onClick={() => toggleLike(selectedVideo.id)}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${
                              likedVideos.has(selectedVideo.id) 
                                ? 'bg-red-500/80 text-white' 
                                : 'bg-black/50 hover:bg-black/70 text-white'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaHeart className="w-4 h-4 md:w-5 md:h-5" />
                          </motion.button>

                          {/* Mute Toggle */}
                          <motion.button
                            onClick={toggleMute}
                            className="w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isMuted ? (
                              <FaVolumeMute className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            ) : (
                              <FaVolumeUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            )}
                          </motion.button>

                          {/* Fullscreen Toggle */}
                          <motion.button
                            onClick={toggleFullscreen}
                            className="w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isFullscreen ? (
                              <FaCompress className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            ) : (
                              <FaExpand className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Video Info - Hidden when playing on mobile */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 pointer-events-auto transition-all duration-300 ${
                      isVideoPlaying && typeof window !== 'undefined' && window.innerWidth < 768 && userInteracted ? 'transform translate-y-full opacity-0' : ''
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex-1">
                          <motion.h3 
                            className="text-lg md:text-2xl lg:text-3xl font-playfair-display font-bold text-white mb-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {selectedVideo.title}
                          </motion.h3>
                          <motion.p 
                            className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {selectedVideo.description}
                          </motion.p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 md:gap-3">
                          <motion.button
                            onClick={() => shareVideo(selectedVideo)}
                            className="px-3 py-2 md:px-4 md:py-2 bg-blue-500/80 hover:bg-blue-500 text-white rounded-full text-sm md:text-base font-semibold transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaShare className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">Share</span>
                          </motion.button>
                          
                          <motion.button
                            onClick={() => downloadVideo(selectedVideo)}
                            className="px-3 py-2 md:px-4 md:py-2 bg-emerald-500/80 hover:bg-emerald-500 text-white rounded-full text-sm md:text-base font-semibold transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaDownload className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">Download</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Tap to show controls hint for mobile */}
                    {!userInteracted && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center pointer-events-none md:hidden"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm"
                        >
                          <FaPlay className="w-6 h-6 text-white ml-1" />
                        </motion.div>
                        <p className="text-sm font-medium">Tap to play</p>
                        <p className="text-xs text-white/70 mt-1">Tap again for controls</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGalleryPage;