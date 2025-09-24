'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface GalleryProps {
  gallery_links: string[];
  title: string;
}

export default function Gallery({ gallery_links, title }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery_links.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery_links.length) % gallery_links.length);
  };

  // Display featured image larger, with smaller thumbnails below
  return (
    <div className="w-full space-y-4">
      {/* Featured Image */}
      <div 
        className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-lg"
        onClick={() => openLightbox(0)}
      >
        <Image
          src={gallery_links[0]}
          alt={`${title} - Featured Image`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/10" />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {gallery_links.slice(1).map((imageUrl: string, index: number) => (
          <div
            key={index + 1}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index + 1)}
          >
            <Image
              src={imageUrl}
              alt={`${title} - Image ${index + 2}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 25vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        
        <div className="relative z-50 h-screen w-screen p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="flex h-full items-center justify-center">
            <div className="relative h-[85vh] w-full max-w-7xl">
              <Image
                src={gallery_links[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
            <button
              onClick={previousImage}
              className="rounded-full bg-white/10 px-6 py-3 text-white transition-colors hover:bg-white/20"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="rounded-full bg-white/10 px-6 py-3 text-white transition-colors hover:bg-white/20"
            >
              Next
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}