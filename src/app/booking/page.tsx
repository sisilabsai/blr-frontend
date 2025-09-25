'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaBed, 
  FaUmbrellaBeach,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaStar,
  FaCreditCard,
  FaLock,
  FaShieldAlt,
  FaExpand
} from 'react-icons/fa';

interface Room {
  id: number;
  name: string;
  type: 'deluxe' | 'suite' | 'villa' | 'cottage';
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  amenities: string[];
  capacity: number;
  size: string;
  view: string;
  availability: 'available' | 'limited' | 'booked';
  rating: number;
  reviews: number;
  specialOffer?: string;
}

interface Activity {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'water' | 'adventure' | 'cultural' | 'wildlife';
  included?: boolean;
}

interface BookingStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Lake View Deluxe Room',
    type: 'deluxe',
    price: 280,
    originalPrice: 350,
    description: 'Elegant room with panoramic views of Lake Bunyonyi and the mystical 29 islands. Perfect for couples seeking luxury and tranquility.',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format'
    ],
    amenities: ['King Bed', 'Lake View', 'Private Balcony', 'WiFi', 'Mini Bar', 'Room Service'],
    capacity: 2,
    size: '45 m²',
    view: 'Lake Bunyonyi & Islands',
    availability: 'available',
    rating: 4.8,
    reviews: 142,
    specialOffer: '20% OFF - Limited Time!'
  },
  {
    id: 2,
    name: 'Presidential Villa Suite',
    type: 'villa',
    price: 650,
    description: 'Luxurious villa with private terrace, panoramic lake views, and exclusive access to all resort facilities.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format'
    ],
    amenities: ['King Bed', 'Living Room', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'WiFi'],
    capacity: 4,
    size: '120 m²',
    view: 'Panoramic Lake & Mountains',
    availability: 'limited',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Romantic Honeymoon Cottage',
    type: 'cottage',
    price: 420,
    description: 'Intimate cottage perfect for honeymooners, featuring a private garden and stunning sunset views.',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format'
    ],
    amenities: ['Queen Bed', 'Private Garden', 'Fireplace', 'Romantic Setup', 'WiFi', 'Champagne'],
    capacity: 2,
    size: '65 m²',
    view: 'Garden & Sunset',
    availability: 'available',
    rating: 4.7,
    reviews: 76
  }
];

const activities: Activity[] = [
  {
    id: 1,
    name: 'Island Hopping Tour',
    description: 'Explore the legendary 29 islands including Punishment Island and Bwama Island',
    price: 45,
    duration: '4 hours',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format',
    category: 'water'
  },
  {
    id: 2,
    name: 'Luxury Boat Cruise',
    description: 'Sunset cruise with champagne and traditional Ugandan music',
    price: 65,
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&auto=format',
    category: 'water'
  },
  {
    id: 3,
    name: 'Gorilla Trekking Experience',
    description: 'Once-in-a-lifetime encounter with mountain gorillas in Virunga Mountains',
    price: 180,
    duration: 'Full Day',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&auto=format',
    category: 'wildlife'
  },
  {
    id: 4,
    name: 'Cultural Village Tour',
    description: 'Immerse yourself in local Bakiga culture and traditional practices',
    price: 35,
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format',
    category: 'cultural'
  },
  {
    id: 5,
    name: 'Canoe Adventure',
    description: 'Traditional dugout canoe experience across pristine waters',
    price: 25,
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&auto=format',
    category: 'water',
    included: true
  }
];

const bookingSteps: BookingStep[] = [
  {
    id: 1,
    title: 'Dates & Guests',
    subtitle: 'When would you like to stay?',
    icon: <FaCalendarAlt />
  },
  {
    id: 2,
    title: 'Choose Room',
    subtitle: 'Select your perfect accommodation',
    icon: <FaBed />
  },
  {
    id: 3,
    title: 'Add Activities',
    subtitle: 'Enhance your experience',
    icon: <FaUmbrellaBeach />
  },
  {
    id: 4,
    title: 'Guest Details',
    subtitle: 'Tell us about yourself',
    icon: <FaUsers />
  },
  {
    id: 5,
    title: 'Payment',
    subtitle: 'Secure your booking',
    icon: <FaCreditCard />
  }
];

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    selectedRoom: null as Room | null,
    selectedActivities: [] as Activity[],
    guestDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    },
    paymentMethod: 'card'
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: number]: number }>({});
  const [showImageGallery, setShowImageGallery] = useState<Room | null>(null);

  const nextStep = () => {
    if (currentStep < bookingSteps.length) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (bookingData.selectedRoom) {
      const nights = calculateNights();
      total += bookingData.selectedRoom.price * nights * bookingData.rooms;
    }
    bookingData.selectedActivities.forEach(activity => {
      if (!activity.included) {
        total += activity.price * bookingData.guests;
      }
    });
    return total;
  };

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 1;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const nextImage = (roomId: number, totalImages: number) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (roomId: number, totalImages: number) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DatesGuestsStep />;
      case 2:
        return <RoomSelectionStep />;
      case 3:
        return <ActivitiesStep />;
      case 4:
        return <GuestDetailsStep />;
      case 5:
        return <PaymentStep />;
      default:
        return <DatesGuestsStep />;
    }
  };

  const DatesGuestsStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Date Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Check-in Date</label>
          <div className="relative">
            <input
              type="date"
              value={bookingData.checkIn}
              onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg"
            />
            <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Check-out Date</label>
          <div className="relative">
            <input
              type="date"
              value={bookingData.checkOut}
              onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
              min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg"
            />
            <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Guests and Rooms */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Number of Guests</label>
          <div className="flex items-center bg-gray-50 rounded-xl p-2">
            <button
              onClick={() => setBookingData({...bookingData, guests: Math.max(1, bookingData.guests - 1)})}
              className="w-12 h-12 rounded-lg bg-white shadow-sm hover:bg-gray-100 flex items-center justify-center text-lg font-semibold"
            >
              -
            </button>
            <div className="flex-1 text-center text-xl font-semibold">{bookingData.guests}</div>
            <button
              onClick={() => setBookingData({...bookingData, guests: bookingData.guests + 1})}
              className="w-12 h-12 rounded-lg bg-white shadow-sm hover:bg-gray-100 flex items-center justify-center text-lg font-semibold"
            >
              +
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Number of Rooms</label>
          <div className="flex items-center bg-gray-50 rounded-xl p-2">
            <button
              onClick={() => setBookingData({...bookingData, rooms: Math.max(1, bookingData.rooms - 1)})}
              className="w-12 h-12 rounded-lg bg-white shadow-sm hover:bg-gray-100 flex items-center justify-center text-lg font-semibold"
            >
              -
            </button>
            <div className="flex-1 text-center text-xl font-semibold">{bookingData.rooms}</div>
            <button
              onClick={() => setBookingData({...bookingData, rooms: bookingData.rooms + 1})}
              className="w-12 h-12 rounded-lg bg-white shadow-sm hover:bg-gray-100 flex items-center justify-center text-lg font-semibold"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {bookingData.checkIn && bookingData.checkOut && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-2xl border border-emerald-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Your Stay</h3>
              <p className="text-gray-600">{calculateNights()} nights • {bookingData.guests} guests • {bookingData.rooms} room(s)</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-600">${calculateNights() > 0 ? '~' + (280 * calculateNights()) : '0'}</div>
              <div className="text-sm text-gray-500">Estimated total</div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  const RoomSelectionStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {rooms.map((room, index) => (
        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            bookingData.selectedRoom?.id === room.id
              ? 'border-emerald-500 shadow-xl bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
          onClick={() => setBookingData({...bookingData, selectedRoom: room})}
        >
          {room.specialOffer && (
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {room.specialOffer}
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Room Images */}
            <div className="relative">
              <img
                src={room.images[selectedImageIndex[room.id] || 0]}
                alt={room.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              
              {/* Image Navigation */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(room.id, room.images.length);
                    }}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(room.id, room.images.length);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                  >
                    <FaChevronRight />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowImageGallery(room);
                    }}
                    className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                  >
                    <FaExpand />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
                {(selectedImageIndex[room.id] || 0) + 1} / {room.images.length}
              </div>
            </div>

            {/* Room Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(room.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({room.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
              </div>

              {/* Amenities */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="w-3 h-3 text-emerald-500" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {room.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${room.originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-emerald-600">${room.price}</span>
                      <span className="text-gray-500">/ night</span>
                    </div>
                    <div className="text-sm text-gray-500">{room.capacity} guests • {room.size} • {room.view}</div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    room.availability === 'available' ? 'bg-green-100 text-green-800' :
                    room.availability === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {room.availability === 'available' ? 'Available' :
                     room.availability === 'limited' ? 'Limited' : 'Booked'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {bookingData.selectedRoom?.id === room.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 border-4 border-emerald-400 rounded-2xl pointer-events-none"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );

  const ActivitiesStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Enhance Your Experience</h2>
        <p className="text-gray-600 text-lg">Add unforgettable activities to your Lake Bunyonyi adventure</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
              bookingData.selectedActivities.find(a => a.id === activity.id)
                ? 'border-emerald-500 shadow-xl'
                : 'border-gray-200 hover:border-gray-300'
            } bg-white`}
            onClick={() => {
              const isSelected = bookingData.selectedActivities.find(a => a.id === activity.id);
              if (isSelected) {
                setBookingData({
                  ...bookingData,
                  selectedActivities: bookingData.selectedActivities.filter(a => a.id !== activity.id)
                });
              } else {
                setBookingData({
                  ...bookingData,
                  selectedActivities: [...bookingData.selectedActivities, activity]
                });
              }
            }}
          >
            {activity.included && (
              <div className="absolute top-4 left-4 z-10 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Included
              </div>
            )}

            <div className="relative">
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
                {activity.duration}
              </div>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold text-gray-800">{activity.name}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
              
              <div className="flex items-center justify-between pt-2">
                <div className="text-xl font-bold text-emerald-600">
                  {activity.included ? 'FREE' : `$${activity.price}`}
                  {!activity.included && <span className="text-sm font-normal text-gray-500"> / person</span>}
                </div>
                
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  bookingData.selectedActivities.find(a => a.id === activity.id)
                    ? 'border-emerald-500 bg-emerald-500'
                    : 'border-gray-300'
                }`}>
                  {bookingData.selectedActivities.find(a => a.id === activity.id) && (
                    <FaCheck className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {bookingData.selectedActivities.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-2xl border border-emerald-200"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Selected Activities</h3>
          <div className="space-y-2">
            {bookingData.selectedActivities.map(activity => (
              <div key={activity.id} className="flex items-center justify-between">
                <span className="text-gray-600">{activity.name}</span>
                <span className="font-semibold">
                  {activity.included ? 'Included' : `$${activity.price * bookingData.guests}`}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  const GuestDetailsStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Guest Information</h2>
        <p className="text-gray-600 text-lg">Help us prepare for your magical stay</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">First Name *</label>
          <input
            type="text"
            value={bookingData.guestDetails.firstName}
            onChange={(e) => setBookingData({
              ...bookingData,
              guestDetails: { ...bookingData.guestDetails, firstName: e.target.value }
            })}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg"
            placeholder="Enter your first name"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">Last Name *</label>
          <input
            type="text"
            value={bookingData.guestDetails.lastName}
            onChange={(e) => setBookingData({
              ...bookingData,
              guestDetails: { ...bookingData.guestDetails, lastName: e.target.value }
            })}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-lg font-semibold text-gray-800">Email Address *</label>
        <input
          type="email"
          value={bookingData.guestDetails.email}
          onChange={(e) => setBookingData({
            ...bookingData,
            guestDetails: { ...bookingData.guestDetails, email: e.target.value }
          })}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-lg font-semibold text-gray-800">Phone Number *</label>
        <input
          type="tel"
          value={bookingData.guestDetails.phone}
          onChange={(e) => setBookingData({
            ...bookingData,
            guestDetails: { ...bookingData.guestDetails, phone: e.target.value }
          })}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg"
          placeholder="+256 XXX XXX XXX"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-lg font-semibold text-gray-800">Special Requests</label>
        <textarea
          value={bookingData.guestDetails.specialRequests}
          onChange={(e) => setBookingData({
            ...bookingData,
            guestDetails: { ...bookingData.guestDetails, specialRequests: e.target.value }
          })}
          rows={4}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg resize-none"
          placeholder="Any special requests or dietary requirements..."
        />
      </div>
    </motion.div>
  );

  const PaymentStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Secure Payment</h2>
        <p className="text-gray-600 text-lg">Complete your magical Lake Bunyonyi experience</p>
      </div>

      {/* Booking Summary */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl border border-emerald-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Summary</h3>
        
        <div className="space-y-4">
          {/* Room Details */}
          {bookingData.selectedRoom && (
            <div className="flex items-center justify-between py-3 border-b border-emerald-200">
              <div>
                <h4 className="font-semibold text-gray-800">{bookingData.selectedRoom.name}</h4>
                <p className="text-sm text-gray-600">{calculateNights()} nights • {bookingData.guests} guests</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-800">
                  ${bookingData.selectedRoom.price * calculateNights() * bookingData.rooms}
                </div>
              </div>
            </div>
          )}

          {/* Activities */}
          {bookingData.selectedActivities.map(activity => (
            <div key={activity.id} className="flex items-center justify-between py-2">
              <div>
                <span className="text-gray-800">{activity.name}</span>
                {!activity.included && <span className="text-sm text-gray-500"> × {bookingData.guests}</span>}
              </div>
              <div className="font-semibold text-gray-800">
                {activity.included ? 'Included' : `$${activity.price * bookingData.guests}`}
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="pt-4 border-t-2 border-emerald-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">Total</span>
              <span className="text-3xl font-bold text-emerald-600">${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800">Payment Method</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
            bookingData.paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
          }`}
          onClick={() => setBookingData({...bookingData, paymentMethod: 'card'})}
          >
            <div className="flex items-center gap-3">
              <FaCreditCard className="text-2xl text-emerald-600" />
              <div>
                <h4 className="font-semibold">Credit/Debit Card</h4>
                <p className="text-sm text-gray-600">Secure payment with your card</p>
              </div>
            </div>
          </div>

          <div className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
            bookingData.paymentMethod === 'bank' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
          }`}
          onClick={() => setBookingData({...bookingData, paymentMethod: 'bank'})}
          >
            <div className="flex items-center gap-3">
              <FaLock className="text-2xl text-emerald-600" />
              <div>
                <h4 className="font-semibold">Bank Transfer</h4>
                <p className="text-sm text-gray-600">Direct bank transfer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        {bookingData.paymentMethod === 'card' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-semibold text-gray-800">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-semibold text-gray-800">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-semibold text-gray-800">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-semibold text-gray-800">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Notice */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-emerald-600 text-xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Secure Payment</h4>
              <p className="text-sm text-gray-600">Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-36 h-36 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair-display font-bold mb-6 bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent">
            Book Your Stay
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the magic of Lake Bunyonyi with our seamless booking process. Your luxury adventure awaits!
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {bookingSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  currentStep >= step.id ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.icon}
                  {currentStep > step.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 bg-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <FaCheck className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>
                
                {index < bookingSteps.length - 1 && (
                  <div className={`w-16 md:w-24 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-emerald-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {bookingSteps[currentStep - 1]?.title}
            </h2>
            <p className="text-gray-600">
              {bookingSteps[currentStep - 1]?.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Step Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: isAnimating ? (currentStep > 1 ? 50 : -50) : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isAnimating ? (currentStep > 1 ? -50 : 50) : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 mb-8"
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center gap-3 ${
              currentStep === 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
            }`}
            whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
          >
            <FaChevronLeft />
            Previous
          </motion.button>

          {/* Price Display */}
          <motion.button
            onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
            className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Total: ${calculateTotal()}
          </motion.button>

          <motion.button
            onClick={currentStep === 5 ? undefined : nextStep}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center gap-3 ${
              currentStep === 5
                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep === 5 ? 'Complete Booking' : 'Next'}
            <FaChevronRight />
          </motion.button>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showImageGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowImageGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{showImageGallery.name}</h3>
                  <button
                    onClick={() => setShowImageGallery(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {showImageGallery.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${showImageGallery.name} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setSelectedImageIndex(prev => ({
                          ...prev,
                          [showImageGallery.id]: index
                        }));
                        setShowImageGallery(null);
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingPage;
