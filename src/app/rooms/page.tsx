'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Room } from '@/types/room';
import Link from 'next/link';
import Image from 'next/image';

const RoomsPage = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`);
        const data = await res.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

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
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1 
          className="mb-4 text-center text-5xl md:text-6xl font-bold font-playfair-display bg-gradient-to-r from-amber-700 via-blue-700 to-emerald-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rooms & Suites
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Luxurious accommodations with breathtaking lake views and modern amenities
        </motion.p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={room.gallery_links?.[0] || '/images/room-placeholder.jpg'}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold font-playfair-display bg-gradient-to-r from-amber-700 to-blue-700 bg-clip-text text-transparent">{room.name}</h2>
                  <p className="mb-4 text-gray-700 line-clamp-2 leading-relaxed">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">${room.price}</p>
                    <span className="rounded-full bg-gradient-to-r from-amber-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-200">
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
