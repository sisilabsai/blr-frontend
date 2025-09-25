'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMountain, FaTree, FaFish, FaCamera, FaMapMarkedAlt, FaEye } from 'react-icons/fa';

interface TabContent {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabContent: TabContent[] = [
    {
      id: 'story',
      title: 'Our Story',
      icon: <FaEye className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">Our Vision</h3>
            <p className="text-lg md:text-xl text-gray-800 mb-4 font-semibold italic">
              "To have the most beautiful luxurious resort in Uganda"
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Bunyonyi Luxury Resort stands as a beacon of elegance on the shores of Africa's second deepest lake. Nestled where volcanic legends meet luxury, our resort offers an extraordinary gateway to the mystical Lake Bunyonyi - a natural wonder formed by ancient lava flows from the legendary Virunga Mountains, home of the mountain gorillas.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'formation',
      title: 'Geological Formation',
      icon: <FaMountain className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">The Lake's Legendary Origin</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              Lake Bunyonyi's dramatic formation tells a tale of volcanic power and natural artistry. Born from massive lava flows cascading down from the majestic <strong>Virunga Mountains</strong> (home of Mountain Gorillas), the molten rock carved its path until it encountered the <strong>Ndego River</strong>. As the lava cooled and solidified, it created a natural dam that blocked the river's flow, giving birth to this extraordinary lake.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-emerald-700 mb-2">💧 Water System</h4>
                <p className="text-sm text-gray-700"><strong>Main Inlet:</strong> River Kagoma from Kigezi Highlands</p>
                <p className="text-sm text-gray-700"><strong>Outlet:</strong> River Heissesero</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-700 mb-2">📏 Lake Dimensions</h4>
                <p className="text-sm text-gray-700"><strong>Depth:</strong> 44m - 900m deep</p>
                <p className="text-sm text-gray-700"><strong>Rank:</strong> 2nd deepest in Africa, 3rd in the world</p>
                <p className="text-sm text-gray-700 mt-1"><em>After Lake Tanganyika (1,471m deep)</em></p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'wildlife',
      title: 'Wildlife & Nature',
      icon: <FaTree className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Large Animals */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-amber-700 to-emerald-700 bg-clip-text text-transparent">🦓 Large Wildlife</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg">
                  <span className="text-2xl">🦍</span>
                  <div>
                    <h4 className="font-semibold">Mountain Gorillas</h4>
                    <p className="text-sm text-gray-600">In nearby Virunga Mountains</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg">
                  <span className="text-2xl">🦌</span>
                  <div>
                    <h4 className="font-semibold">Uganda Kob</h4>
                    <p className="text-sm text-gray-600">National antelope of Uganda</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                  <span className="text-2xl">🦓</span>
                  <div>
                    <h4 className="font-semibold">Zebra</h4>
                    <p className="text-sm text-gray-600">Grazing in highland areas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg">
                  <span className="text-2xl">🦌</span>
                  <div>
                    <h4 className="font-semibold">Impala</h4>
                    <p className="text-sm text-gray-600">Graceful savanna dwellers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Birds */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-amber-700 bg-clip-text text-transparent">🦅 Birdwatcher's Paradise</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                  <span className="text-2xl">👑</span>
                  <div>
                    <h4 className="font-semibold">Grey Crowned Crane</h4>
                    <p className="text-sm text-gray-600">Uganda's national bird</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg">
                  <span className="text-2xl">🦢</span>
                  <div>
                    <h4 className="font-semibold">Heron</h4>
                    <p className="text-sm text-gray-600">Elegant wading birds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg">
                  <span className="text-2xl">💎</span>
                  <div>
                    <h4 className="font-semibold">Pied & Malachite Kingfisher</h4>
                    <p className="text-sm text-gray-600">Vibrant fishing experts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                  <span className="text-2xl">🐦</span>
                  <div>
                    <h4 className="font-semibold">Robin & Great Cormorant</h4>
                    <p className="text-sm text-gray-600">Lake residents</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">🌳 The Conference Tree</h4>
                <p className="text-sm text-gray-700">On Punishment Island stands the ancient tree where all bird species gather for their natural "conference" - a magical sight to behold!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'islands',
      title: '29 Islands',
      icon: <FaMapMarkedAlt className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair-display bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent">29 Islands of Wonder</h3>
            
            {/* Major Islands */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  🏝️ Bwama Island (Njuyeera)
                  <span className="text-sm bg-emerald-100 px-2 py-1 rounded-full">Largest</span>
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  The largest island in Lake Bunyonyi, once home to a leprosy treatment center established by Scottish missionary <strong>Dr. Leonard Sharp</strong>.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Today:</strong> The facilities now serve as schools for island residents, transforming a place of healing into one of learning.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                  ⚖️ Akampene (Punishment Island)
                  <span className="text-sm bg-red-100 px-2 py-1 rounded-full">Smallest</span>
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  The smallest island with the most powerful story. Used in traditional justice where unmarried pregnant girls were abandoned to starve.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Legacy:</strong> The ancient tree still stands as home to all bird species' "conference" - unity from tragedy.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-emerald-100 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-blue-800 mb-3">🗺️ Island Distribution</h4>
              <p className="text-sm text-gray-700 mb-2">
                The 29 islands are scattered across Lake Bunyonyi's pristine waters, each with unique characteristics:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="text-center"><strong>Northern:</strong> 7 islands</div>
                <div className="text-center"><strong>Central:</strong> 8 islands</div>
                <div className="text-center"><strong>Southern:</strong> 7 islands</div>
                <div className="text-center"><strong>Coastal:</strong> 7 islands</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'activities',
      title: 'Activities & Tourism',
      icon: <FaCamera className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Water Activities */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">🚤 Water Adventures</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">🛶</span>
                  <div>
                    <h4 className="font-semibold">Traditional Canoeing</h4>
                    <p className="text-sm text-gray-600">Authentic dugout canoe experiences</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <span className="text-xl">🏊‍♂️</span>
                  <div>
                    <h4 className="font-semibold">Swimming</h4>
                    <p className="text-sm text-gray-600">Safe areas for skilled swimmers & locals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <span className="text-xl">🏝️</span>
                  <div>
                    <h4 className="font-semibold">Island Tours</h4>
                    <p className="text-sm text-gray-600">Explore all 29 mystical islands</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">🚲</span>
                  <div>
                    <h4 className="font-semibold">Water Bicycles</h4>
                    <p className="text-sm text-gray-600">Unique pedaling across the lake</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Land Activities */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-amber-700 to-emerald-700 bg-clip-text text-transparent">🚵 Land Adventures</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <span className="text-xl">🪂</span>
                  <div>
                    <h4 className="font-semibold">Zip Lining</h4>
                    <p className="text-sm text-gray-600">Soar above the pristine waters</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <span className="text-xl">🚴</span>
                  <div>
                    <h4 className="font-semibold">Mountain Biking</h4>
                    <p className="text-sm text-gray-600">Scenic highland trails</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">🦅</span>
                  <div>
                    <h4 className="font-semibold">Bird Watching</h4>
                    <p className="text-sm text-gray-600">Grey Crowned Cranes & conference tree</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <span className="text-xl">📸</span>
                  <div>
                    <h4 className="font-semibold">Photography Tours</h4>
                    <p className="text-sm text-gray-600">Capture the natural beauty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fishing',
      title: 'Fishing & Marine Life',
      icon: <FaFish className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">🎣 Fishing & Aquatic Life</h3>
            
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2">🤔 "Do they do fishing? Yes, but not as much as normal lakes in Uganda."</h4>
              <p className="text-sm text-gray-700">
                While Lake Bunyonyi supports some fishing activities, it's more limited compared to other Ugandan lakes due to its unique ecosystem and depth characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">🐟</span>
                <h4 className="font-semibold text-blue-800 mb-2">Tilapia</h4>
                <p className="text-sm text-gray-700">Popular freshwater fish, excellent for eating</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">🦐</span>
                <h4 className="font-semibold text-emerald-800 mb-2">Crayfish</h4>
                <p className="text-sm text-gray-700">Freshwater crustaceans in shallow areas</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl text-center">
                <span className="text-3xl mb-2 block">🐱‍🐉</span>
                <h4 className="font-semibold text-amber-800 mb-2">Catfish</h4>
                <p className="text-sm text-gray-700">Bottom-dwelling species in deeper waters</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-emerald-100 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">🎣 Fishing Experience</h4>
              <p className="text-sm text-gray-700">
                Try traditional fishing techniques with local guides. While not the primary activity, it offers cultural immersion and connection with local communities who have fished these waters for generations.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-36 h-36 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 font-playfair-display bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Lake Bunyonyi
        </motion.h1>
        <motion.p
          className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the comprehensive story of Africa's Switzerland - from volcanic origins to wildlife paradise, 29 mystical islands, and authentic tourism experiences in Uganda's most beautiful lake.
        </motion.p>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-white/50'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[500px]"
          >
            {tabContent.find(tab => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutPage;
