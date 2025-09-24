'use client';

import MediaGallery from '@/components/ui/MediaGallery';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
  'speed-boats': {
    title: 'Speed Boats',
    description: 'Feel the wind in your hair as you glide across the pristine waters of Lake Bunyonyi. Our state-of-the-art speed boats offer an exhilarating experience, allowing you to explore the hidden gems of the lake in style and comfort.',
    media: [
      { type: 'image', src: '/images/highlights/sb-1.jpg' },
      { type: 'video', src: '/videos/speed-boat-tour.mp4' },
      { type: 'image', src: '/images/highlights/sb-2.jpg' },
    ],
  },
  'swimming-pool': {
    title: 'Swimming Pool',
    description: 'Immerse yourself in pure bliss at our infinity pool, where the water meets the sky. Surrounded by lush greenery and offering panoramic views of the lake, it\'s the perfect spot to unwind, soak up the sun, and let your worries drift away.',
    media: [
      { type: 'image', src: '/images/highlights/sp-1.jpg' },
      { type: 'image', src: '/images/highlights/sp-2.jpg' },
    ],
  },
  zipline: {
    title: 'Zipline',
    description: 'Embark on an adventure of a lifetime with our thrilling zipline experience. Soar through the air and witness the breathtaking beauty of the resort and its surroundings from a bird\'s-eye view. It\'s an adrenaline rush you won\'t forget!',
    media: [
      { type: 'video', src: '/images/zipline-tour.mp4' },
      { type: 'image', src: '/images/highlights/zl-3.jpg' },
      { type: 'image', src: '/images/highlights/zl-4.jpg' },
    ],
  },
  'premium-rooms': {
    title: 'Premium Rooms',
    description: 'Indulge in the ultimate luxury in our premium rooms. Each room is meticulously designed to provide you with a serene and comfortable retreat, complete with modern amenities and a private balcony offering stunning views of the lake.',
    media: [
      { type: 'image', src: '/images/highlights/rm-1.jpg' },
      { type: 'image', src: '/images/highlights/rm-2.jpg' },
      { type: 'image', src: '/images/highlights/rm-3.jpg' },
      { type: 'image', src: '/images/highlights/rm-4.jpg' },
      { type: 'image', src: '/images/highlights/rm-5.jpg' },
      { type: 'image', src: '/images/highlights/rm-6.jpg' },
      { type: 'image', src: '/images/highlights/rm-7.jpg' },
      { type: 'image', src: '/images/highlights/rm-8.jpg' },
    ],
  },
  'water-bicycle': {
    title: 'Water Bicycle',
    description: 'Experience the unique thrill of riding a bicycle on water. Our water bicycles are a fun and eco-friendly way to explore the serene beauty of Lake Bunyonyi. Perfect for all ages, this activity offers a memorable adventure on the water.',
    media: [
      { type: 'image', src: '/images/activities/wb-2-2.png' },
      {type: 'image', src: '/images/activities/wb-2.png' },
      {type: 'image', src: '/images/activities/wb-3.png' },
      { type: 'image', src: '/images/activities/wb-4.png' },
      { type: 'image', src: '/images/activities/wb-5.png' },
      {type: 'image', src: '/images/activities/wb-6.png' },
      { type: 'video', src: '/videos/hero-video.mp4' },
    ],
  },
  breakfast: {
    title: 'Breakfast',
    description: 'Start your day with a delightful breakfast experience. Enjoy a wide selection of fresh, locally sourced ingredients, from tropical fruits to freshly baked pastries, all while taking in the stunning morning views of the lake.',
    media: [
      { type: 'image', src: '/images/activities/breakfast.png' },
      { type: 'image', src: '/images/highlights/breakfast-2.png' },
      
    ],
  },
  lunch: {
    title: 'Lunch',
    description: 'Savor a delicious lunch prepared by our expert chefs. Our menu features a fusion of local and international cuisine, crafted to perfection. Enjoy your meal in a relaxed and scenic setting, with the gentle lake breeze as your companion.',
    media: [
      { type: 'image', src: '/images/highlights/lunch.png' },
      { type: 'image', src: '/images/highlights/lunch-2.png' },
    ],
  },
  dinner: {
    title: 'Dinner',
    description: 'Indulge in an unforgettable dinner experience under the stars. Our restaurant offers a romantic and elegant ambiance, perfect for a special evening. Enjoy a curated menu of exquisite dishes, paired with fine wines, for a truly memorable night.',
    media: [
      { type: 'image', src: '/images/highlights/dinner-1.png' },
      { type: 'image', src: '/images/highlights/dinner-3.png' },
      { type: 'image', src: '/images/highlights/dinner-4.png' },
      {type: 'image', src: '/images/highlights/dinner-5.png' },
      
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
      <div className="flex justify-center gap-8 mt-12">
        <button
          onClick={() => navigateToHighlight('prev')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
        >
          <FaArrowLeft />
          Previous
        </button>
        <a
          href="/booking"
          className="px-8 py-4 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition-colors text-lg"
        >
          Book This Experience
        </a>
        <ShareButton title={highlight.title} url={url} />
        <button
          onClick={() => navigateToHighlight('next')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
        >
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HighlightDetailPage;
