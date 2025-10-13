'use client';


import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { FaVideo, FaImage } from 'react-icons/fa';

interface Media {
  type: 'image' | 'video';
  src: string;
}

interface MediaGalleryProps {
  media: Media[];
}

const MediaGallery = ({ media }: MediaGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer z-10 group"
            onClick={() => setSelected(index)}
            layoutId={`media-${index}`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt="" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <video src={item.src} className="w-full h-full object-cover rounded-lg" />
            )}
            {/* Type Icon Overlay */}
            <div className="absolute bottom-2 right-2 bg-black/70 rounded-full p-1 flex items-center justify-center">
              {item.type === 'video' ? (
                <FaVideo className="text-white w-4 h-4" title="Video" />
              ) : (
                <FaImage className="text-white w-4 h-4" title="Image" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl h-full max-h-[80vh]"
              layoutId={`media-${selected}`}
            >
              {media[selected].type === 'image' ? (
                <img src={media[selected].src} alt="" className="w-full h-full object-contain" />
              ) : (
                <VideoPlayer src={media[selected].src} />
              )}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="text-white text-4xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((selected! - 1 + media.length) % media.length);
                  }}
                >
                  &#8249;
                </button>
                <button
                  className="text-white text-4xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((selected! + 1) % media.length);
                  }}
                >
                  &#8250;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGallery;
