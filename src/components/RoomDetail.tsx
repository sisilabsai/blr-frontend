'use client';

import { useEffect, useState } from 'react';
import { Room } from '@/types/room';
import Gallery from '@/components/Gallery';
import OtherRooms from '@/components/OtherRooms';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface RoomDetailProps {
  roomId: string;
}

export default function RoomDetail({ roomId }: RoomDetailProps) {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms/${roomId}`);
        if (!res.ok) throw new Error('Room not found');
        const data = await res.json();
        setRoom(data);
      } catch (error) {
        console.error('Error fetching room:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [roomId]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Room not found</h1>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Room Header */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{room.name}</h1>
            <p className="mt-2 text-lg text-gray-600">Experience luxury at Lake Bunyonyi</p>
          </div>
          <div className="flex items-center gap-4 rounded-xl bg-gray-50 px-6 py-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">${room.price}</p>
              <p className="text-sm text-gray-600">per night</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{room.capacity}</p>
              <p className="text-sm text-gray-600">guests</p>
            </div>
          </div>
        </div>

        {/* Room Gallery */}
        <div>
          <Gallery gallery_links={room.gallery_links} title={room.name} />
        </div>

        {/* Room Details */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">About this room</h2>
              <div className="prose max-w-none rounded-xl bg-gray-50 p-6">
                <p className="text-gray-700">{room.description}</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">Room Amenities</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: '🌅', name: 'Lake View' },
                  { icon: '🛏️', name: 'Premium Bedding' },
                  { icon: '🚿', name: 'Private Bathroom' },
                  { icon: '📶', name: 'Free Wi-Fi' },
                  { icon: '🪟', name: 'Large Windows' },
                  { icon: '❄️', name: 'Air Conditioning' }
                ].map((amenity) => (
                  <div key={amenity.name} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <span className="text-xl">{amenity.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold">Book This Room</h3>
              
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-primary/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Total Price</span>
                    <span className="text-lg font-bold text-primary">${room.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">per night, includes taxes & fees</p>
                </div>

                <Link 
                  href={`/booking?room=${room.id}`}
                  className="block w-full rounded-lg bg-primary px-6 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Book Now
                </Link>
                
                <div className="divide-y divide-gray-100 rounded-lg border border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-3 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Free cancellation</span>
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">No prepayment needed</span>
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Instant confirmation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Rooms Section */}
        <OtherRooms currentRoomId={roomId} />
      </motion.div>
    </main>
  );
}