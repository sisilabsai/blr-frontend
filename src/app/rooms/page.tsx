'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Room } from '@/types/room';
import Link from 'next/link';
import Image from 'next/image';

const RoomsPage = () => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      name: "Standard Room",
      description: "A cozy and affordable room with essential amenities, perfect for short stays and budget travelers.",
      price: 100,
      capacity: 2,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311634/rm-8_ccsiez.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311631/rm-7_unmv2b.jpg", 
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311629/rm-5_fuaxjl.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 2,
      name: "Premium Room",
      description: "A spacious room with modern decor, featuring a private balcony offering serene views of Lake Bunyonyi.",
      price: 200,
      capacity: 2,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311631/rm-7_unmv2b.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311629/rm-5_fuaxjl.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311628/rm-6_v3fvv4.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 3,
      name: "Executive Room",
      description: "Sophisticated accommodations with premium finishes, work desk, and exclusive access to executive lounge with panoramic lake views.",
      price: 280,
      capacity: 2,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311628/rm-6_v3fvv4.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-3_tafmi5.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311631/rm-7_unmv2b.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 4,
      name: "Luxury Suite",
      description: "An elegant suite with a private balcony, jacuzzi, and personalized service for an unforgettable stay.",
      price: 350,
      capacity: 4,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311628/rm-6_v3fvv4.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-3_tafmi5.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-4_ypxdsz.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 5,
      name: "Deluxe Room",
      description: "Luxurious accommodations with premium amenities, marble bathrooms, and floor-to-ceiling windows showcasing the mystical 29 islands of Lake Bunyonyi.",
      price: 320,
      capacity: 3,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-4_ypxdsz.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-1_klz0kf.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311634/rm-8_ccsiez.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 6,
      name: "Family Cottage",
      description: "A spacious cottage designed for families, featuring multiple bedrooms, a living area, and easy access to outdoor activities.",
      price: 450,
      capacity: 6,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-4_ypxdsz.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-1_klz0kf.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-2_hzguyc.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 7,
      name: "Honeymoon Suite",
      description: "A private suite designed for couples, featuring a king-size bed, candlelit decor, and panoramic lake views.",
      price: 500,
      capacity: 2,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-2_hzguyc.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-5_qdfmye.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311634/rm-8_ccsiez.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 8,
      name: "Lakefront Cottage",
      description: "A traditional yet luxurious cottage built with local materials, located right by the lake for a unique eco-luxury experience.",
      price: 550,
      capacity: 3,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-5_qdfmye.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311628/rm-6_v3fvv4.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311631/rm-7_unmv2b.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 9,
      name: "Private Villa",
      description: "A fully serviced private villa with a plunge pool, lounge area, and butler service – ideal for families or groups seeking exclusivity.",
      price: 1200,
      capacity: 8,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311631/rm-7_unmv2b.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311634/rm-8_ccsiez.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-1_klz0kf.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    },
    {
      id: 10,
      name: "Presidential Suite",
      description: "The ultimate luxury suite featuring a private infinity pool, personal chef service, and unmatched panoramic views of Lake Bunyonyi.",
      price: 2000,
      capacity: 6,
      gallery_links: [
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311634/rm-8_ccsiez.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-3_tafmi5.jpg",
        "https://res.cloudinary.com/dc0uiujvn/image/upload/v1758311625/rm-4_ypxdsz.jpg"
      ],
      created_at: "2025-09-19 21:15:54",
      updated_at: "2025-09-19 21:15:54"
    }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`);
        if (res.ok) {
          const data = await res.json();
          setRooms(data);
        }
      } catch (error) {
        console.log('Using static rooms data - API not available yet');
      }
    };

    // Try to fetch from API, but fallback to static data
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.h1 
          className="mb-4 text-center text-3xl md:text-5xl lg:text-6xl font-bold font-playfair-display bg-gradient-to-r from-amber-700 via-blue-700 to-emerald-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rooms & Suites
        </motion.h1>
        <motion.p
          className="text-center text-sm md:text-lg text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Luxurious accommodations with breathtaking lake views and modern amenities
        </motion.p>
        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className="group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/rooms/${room.id}`}>
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                  <Image
                    src={room.gallery_links?.[0] || '/images/room-placeholder.jpg'}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                </div>
                <div className="p-4 md:p-6">
                  <h2 className="mb-2 text-lg md:text-2xl font-bold font-playfair-display bg-gradient-to-r from-amber-700 to-blue-700 bg-clip-text text-transparent">{room.name}</h2>
                  <p className="mb-4 text-sm md:text-base text-gray-700 line-clamp-2 leading-relaxed">{room.description}</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">${room.price}</p>
                    <span className="rounded-full bg-gradient-to-r from-amber-500 to-blue-500 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-200">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
