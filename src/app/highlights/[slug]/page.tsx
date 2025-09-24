'use client';

import MediaGallery from '@/components/ui/MediaGallery';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaHome, FaShare } from 'react-icons/fa';
import ShareButton from '@/components/ui/ShareButton';

interface Media {
  type: 'image' | 'video';
  src: string;
}

interface Highlight {
  title: string;
  description: string;
  media: Media[];
}

const highlightDetails: { [key: string]: Highlight } = {
  '29-mystical-islands': {
    title: '29 Mystical Islands',
    description: 'Embark on a journey through Lake Bunyonyi\'s legendary 29 islands, each with its own unique story and character. From the historic Bwama Island (Njuyeera), once home to a Scottish missionary leprosy treatment center, to the mysterious Punishment Island (Akampene) where traditional justice unfolded, discover the rich tapestry of culture, history, and natural beauty that makes each island a treasure waiting to be explored.',
    media: [
      { type: 'image', src: '/images/highlights/sb-1.jpg' },
      { type: 'image', src: '/images/activities/wb-2.png' },
      { type: 'image', src: '/images/highlights/lunch.png' },
      { type: 'video', src: '/videos/hero-video.mp4' },
    ],
  },
  'africa\'s-2nd-deepest-lake': {
    title: 'Africa\'s 2nd Deepest Lake',
    description: 'Dive into the extraordinary depths of Lake Bunyonyi, Africa\'s second deepest lake with depths ranging from 44 to an astounding 900 meters. Formed by ancient Virunga volcanic activity, these crystal-clear waters offer safe swimming experiences in designated areas. Feel the unique sensation of floating above geological wonders while surrounded by the pristine mountain landscape of southwestern Uganda.',
    media: [
      { type: 'image', src: '/images/highlights/sp-1.jpg' },
      { type: 'image', src: '/images/activities/wb-4.png' },
      { type: 'image', src: '/images/highlights/sb-1.jpg' },
      { type: 'video', src: '/videos/hero-video.mp4' },
    ],
  },
  'virunga-mountain-views': {
    title: 'Virunga Mountain Views',
    description: 'Wake up to breathtaking panoramic views of the legendary Virunga Mountains, the volcanic range that gave birth to Lake Bunyonyi and home to the endangered mountain gorillas. These ancient peaks tell the story of geological forces that shaped this landscape millions of years ago, creating the dramatic backdrop that makes every sunrise and sunset an unforgettable spectacle of natural artistry.',
    media: [
      { type: 'image', src: '/images/highlights/zl-2.jpg' },
      { type: 'image', src: '/images/highlights/rm-1.jpg' },
      { type: 'image', src: '/images/highlights/dinner-4.png' },
      { type: 'video', src: '/videos/hero-video.mp4' },
    ],
  },
  'luxury-lakefront-suites': {
    title: 'Luxury Lakefront Suites',
    description: 'Experience unparalleled luxury in our thoughtfully designed lakefront suites, where every window frames a masterpiece of Lake Bunyonyi\'s pristine waters and rolling hills. Each suite features premium amenities, private balconies, and panoramic views that connect you intimately with the natural splendor of Africa\'s Switzerland, creating a serene sanctuary for your ultimate getaway.',
    media: [
      { type: 'image', src: '/images/highlights/rm-1.jpg' },
      { type: 'image', src: '/images/highlights/sp-1.jpg' },
      { type: 'image', src: '/images/highlights/dinner-4.png' },
      { type: 'image', src: '/images/activities/breakfast.png' },
    ],
  },
  'traditional-canoeing': {
    title: 'Traditional Canoeing',
    description: 'Navigate the sacred waters of Lake Bunyonyi in authentic dugout canoes, just as local fishermen have done for generations. Learn ancient techniques passed down through centuries while paddling through crystal-clear waters that reflect the surrounding mountains. This cultural immersion connects you with the timeless traditions of the Bakiga people and their deep relationship with these legendary waters.',
    media: [
      { type: 'image', src: '/images/highlights/wb-4.png' },
      { type: 'image', src: '/images/activities/wb-2.png' },
      { type: 'image', src: '/images/highlights/sb-1.jpg' },
      { type: 'video', src: '/videos/hero-video.mp4' },
    ],
  },
  'birdwatcher\'s-paradise': {
    title: 'Birdwatcher\'s Paradise',
    description: 'Discover why Lake Bunyonyi is renowned as a birdwatcher\'s paradise, home to the magnificent Grey Crowned Crane (Uganda\'s national bird), the vibrant Pied Kingfisher, the elusive Malachite Kingfisher, the rare Papyrus Gonolek, and the majestic Great Cormorant. Visit the legendary "conference tree" on Punishment Island where all bird species gather in natural harmony, creating a spectacular avian symphony.',
    media: [
      { type: 'image', src: '/images/activities/breakfast.png' },
      { type: 'image', src: '/images/highlights/zl-2.jpg' },
      { type: 'image', src: '/images/highlights/lunch.png' },
      { type: 'image', src: '/images/activities/wb-2.png' },
    ],
  },
  'cultural-heritage-tours': {
    title: 'Cultural Heritage Tours',
    description: 'Immerse yourself in the rich cultural tapestry of Lake Bunyonyi through guided heritage tours that unveil the fascinating stories of Scottish missionary Dr. Leonard Sharp, the traditional justice system of Punishment Island, and the vibrant island communities that call this lake home. Experience authentic Bakiga culture, traditional crafts, and hear the oral histories that have shaped this UNESCO-worthy landscape.',
    media: [
      { type: 'image', src: '/images/activities/wb-2.png' },
      { type: 'image', src: '/images/highlights/sb-1.jpg' },
      { type: 'image', src: '/images/activities/breakfast.png' },
      { type: 'image', src: '/images/highlights/dinner-4.png' },
    ],
  },
  'volcanic-formation-story': {
    title: 'Volcanic Formation Story',
    description: 'Journey back millions of years to witness the dramatic volcanic forces that created Lake Bunyonyi when massive lava flows from the Virunga Mountains carved their path until meeting the Ndego River. Learn how this geological masterpiece became Africa\'s second deepest lake, fed by the pristine River Kagoma from Kigezi Highlands and drained by River Heissesero, creating the aquatic cathedral we see today.',
    media: [
      { type: 'image', src: '/images/highlights/dinner-4.png' },
      { type: 'image', src: '/images/highlights/zl-2.jpg' },
      { type: 'image', src: '/images/highlights/rm-1.jpg' },
      { type: 'video', src: '/videos/hero-video.mp4' },
    ],
  },
};

const HighlightDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const highlight = highlightDetails[slug as keyof typeof highlightDetails];
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const highlightSlugs = Object.keys(highlightDetails);
  const currentIndex = highlightSlugs.indexOf(slug as string);

  const navigateToHighlight = (direction: 'next' | 'prev') => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % highlightSlugs.length
        : (currentIndex - 1 + highlightSlugs.length) % highlightSlugs.length;
    router.push(`/highlights/${highlightSlugs[newIndex]}`);
  };

  if (!highlight) {
    return <div>Highlight not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-playfair-display font-bold text-center mb-6 text-navy-900"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
      >
        {highlight.title}
      </motion.h1>
      <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-700 leading-relaxed"
      >
        {highlight.description}
      </motion.p>
      <MediaGallery media={highlight.media} />
      
      {/* Mobile-optimized action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12">
        {/* Home Button */}
        <motion.a
          href="/"
          className="group relative w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Back to Home"
        >
          <FaHome className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
        </motion.a>

        {/* Previous Button */}
        <motion.button
          onClick={() => navigateToHighlight('prev')}
          className="group relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Previous Highlight"
        >
          <FaArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.button>

        {/* Book Now - Primary Action */}
        <motion.a
          href="/booking"
          className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCalendarAlt className="w-4 h-4 md:w-5 md:h-5 text-white" />
          <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Book Now</span>
        </motion.a>

        {/* Share Button */}
        <motion.div
          className="group relative w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShareButton title={highlight.title} url={url} />
        </motion.div>

        {/* Next Button */}
        <motion.button
          onClick={() => navigateToHighlight('next')}
          className="group relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Next Highlight"
        >
          <FaArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.button>
      </div>

      {/* Optional: Add labels below for better UX on larger screens */}
      <div className="hidden md:flex items-center justify-center gap-4 mt-3 text-xs text-gray-500">
        <span className="w-14 text-center">Home</span>
        <span className="w-14 text-center">Previous</span>
        <span className="px-8 text-center">Book Experience</span>
        <span className="w-14 text-center">Share</span>
        <span className="w-14 text-center">Next</span>
      </div>
    </div>
  );
};

export default HighlightDetailPage;
