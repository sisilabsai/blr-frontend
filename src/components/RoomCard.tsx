import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/types/room';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const mainImage = room.gallery_links && room.gallery_links.length > 0 
    ? room.gallery_links[0]
    : '/images/room-placeholder.jpg';

  return (
    <Link href={`/rooms/${room.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={mainImage}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1.5 backdrop-blur">
            <p className="font-semibold text-primary">${room.price}<span className="text-sm text-gray-600">/night</span></p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{room.description}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>{room.capacity} guests</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <span>Lake View</span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <span className="inline-flex rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}