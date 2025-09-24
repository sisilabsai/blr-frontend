'use client';

import { Room } from '@/types/room';
import RoomCard from './RoomCard';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface OtherRoomsProps {
  currentRoomId: string;
}

export default function OtherRooms({ currentRoomId }: OtherRoomsProps) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`);
        if (!res.ok) throw new Error('Failed to fetch rooms');
        const data = await res.json();
        // Filter out the current room and limit to 4 rooms
        const otherRooms = data
          .filter((room: Room) => room.id.toString() !== currentRoomId)
          .slice(0, 4);
        setRooms(otherRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [currentRoomId]);

  if (loading) {
    return (
      <div className="flex h-32 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (rooms.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-gray-200 pt-16">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">Other Rooms You Might Like</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RoomCard room={room} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}