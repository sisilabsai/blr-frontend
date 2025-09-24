'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Activity {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const ActivitiesPage = () => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      name: "Island Hopping & Cultural Heritage Tour",
      description: "Explore the 29 mystical islands of Lake Bunyonyi, including historic Bwama Island and the legendary Punishment Island. Discover stories of Scottish missionaries, traditional justice, and island communities.",
      category: "Adventure",
      price: 85,
      image: "/images/island-hopping.jpg"
    },
    {
      id: 2,
      name: "Birdwatching Paradise",
      description: "Observe the magnificent Grey Crowned Crane, Pied Kingfisher, Malachite Kingfisher, Papyrus Gonolek, and Great Cormorant in their natural habitat around Africa's bird conference tree.",
      category: "Family",
      price: 45,
      image: "/images/birdwatching.jpg"
    },
    {
      id: 3,
      name: "Traditional Canoeing Experience",
      description: "Paddle through the crystal-clear waters of Africa's second deepest lake in traditional dugout canoes. Learn ancient fishing techniques while enjoying breathtaking mountain views.",
      category: "Adventure",
      price: 35,
      image: "/images/canoeing.jpg"
    },
    {
      id: 4,
      name: "Zip Lining Over Lake Bunyonyi",
      description: "Soar above the pristine waters on our thrilling zip line course, offering panoramic views of all 29 islands and the Virunga Mountains where mountain gorillas roam.",
      category: "Adventure",
      price: 75,
      image: "/images/zip-lining.jpg"
    },
    {
      id: 5,
      name: "Mountain Biking Trails",
      description: "Cycle through the scenic Highlands of Kigezi on mountain trails that wind past River Kagoma's source and offer spectacular vistas of Lake Bunyonyi's volcanic landscape.",
      category: "Adventure",
      price: 55,
      image: "/images/mountain-biking.jpg"
    },
    {
      id: 6,
      name: "Traditional Fishing Experience",
      description: "Try your hand at catching Tilapia, Crayfish, and Catfish using local techniques. While not as abundant as other Ugandan lakes, the experience is deeply cultural and rewarding.",
      category: "Family",
      price: 40,
      image: "/images/fishing.jpg"
    },
    {
      id: 7,
      name: "Swimming in Sacred Waters",
      description: "Experience the unique pleasure of swimming in Africa's second deepest lake (44-900m deep). Join locals in this cherished tradition in designated safe swimming areas.",
      category: "Relaxation",
      price: 25,
      image: "/images/swimming.jpg"
    },
    {
      id: 8,
      name: "Sunset River Walk to Heissesero Outlet",
      description: "Walk along the scenic River Heissesero outlet path during golden hour, where Lake Bunyonyi's waters begin their journey back to the greater watershed system.",
      category: "Relaxation",
      price: 20,
      image: "/images/river-walk.jpg"
    }
  ]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/activities');
        if (res.ok) {
          const data = await res.json();
          setActivities(data);
        }
      } catch (error) {
        console.log('Using default activities - API not available yet');
      }
    };

    fetchActivities();
  }, []);

  const filteredActivities =
    filter === 'All'
      ? activities
      : activities.filter((activity) => activity.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-20 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center mb-4 font-playfair-display bg-gradient-to-r from-emerald-700 via-blue-700 to-amber-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Activities & Experiences
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience authentic Lake Bunyonyi adventures - from birdwatching Grey Crowned Cranes to exploring 29 mystical islands, canoeing pristine waters, and zip-lining through breathtaking landscapes
        </motion.p>
        <motion.div 
          className="flex justify-center mb-12 gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'All' 
                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/50 hover:shadow-md'
            }`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'Adventure' 
                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/50 hover:shadow-md'
            }`}
            onClick={() => setFilter('Adventure')}
          >
            Adventure
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'Relaxation' 
                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/50 hover:shadow-md'
            }`}
            onClick={() => setFilter('Relaxation')}
          >
            Relaxation
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'Family' 
                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/50 hover:shadow-md'
            }`}
            onClick={() => setFilter('Family')}
          >
            Family
          </button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <motion.div
              key={activity.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={activity.image} alt={activity.name} fill className="object-cover transition-transform duration-500 hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 font-playfair-display bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">{activity.name}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">${activity.price}</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Add to Itinerary
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
