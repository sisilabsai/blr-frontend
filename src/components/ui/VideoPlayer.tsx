'use client';

import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        autoPlay
        loop
        onTimeUpdate={handleProgress}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 flex items-center gap-4">
        <button onClick={togglePlay} className="text-white">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="w-full h-2 bg-gray-500 rounded-full">
          <motion.div
            className="h-full bg-amber-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
