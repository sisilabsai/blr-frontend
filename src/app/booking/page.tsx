'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
}

interface Activity {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [booking, setBooking] = useState<{
    id?: number;
    dates: string;
    guests: number;
    room: Room | null;
    activities: any[];
    totalPrice: number;
  }>({
    dates: '',
    guests: 1,
    room: null,
    activities: [],
    totalPrice: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [roomsRes, activitiesRes] = await Promise.all([
        fetch('http://localhost:8000/api/rooms'),
        fetch('http://localhost:8000/api/activities'),
      ]);
      const [roomsData, activitiesData] = await Promise.all([
        roomsRes.json(),
        activitiesRes.json(),
      ]);
      setRooms(roomsData);
      setActivities(activitiesData);
    };

    fetchData();
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Select Dates & Guests</h2>
            <div className="mb-4">
              <label htmlFor="dates" className="block mb-2">Dates</label>
              <input
                type="date"
                name="dates"
                id="dates"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="guests" className="block mb-2">Guests</label>
              <input
                type="number"
                name="guests"
                id="guests"
                min="1"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Choose Room</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className={`p-4 border rounded cursor-pointer ${
                    booking.room === room ? 'border-blue-500' : ''
                  }`}
                  onClick={() => setBooking({ ...booking, room })}
                >
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <p>{room.description}</p>
                  <p className="font-bold">${room.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Add Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className={`p-4 border rounded cursor-pointer ${
                    booking.activities.find((a) => a.id === activity.id)
                      ? 'border-blue-500'
                      : ''
                  }`}
                  onClick={() => {
                    const newActivities = booking.activities.find(
                      (a) => a.id === activity.id
                    )
                      ? booking.activities.filter(
                          (a) => a.id !== activity.id
                        )
                      : [...booking.activities, activity];
                    setBooking({ ...booking, activities: newActivities });
                  }}
                >
                  <h3 className="text-xl font-bold">{activity.name}</h3>
                  <p>{activity.description}</p>
                  <p className="font-bold">${activity.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 4: Summary & Checkout</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Dates</h3>
              <p>{booking.dates}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Guests</h3>
              <p>{booking.guests}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Room</h3>
              <p>{booking.room?.name}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Activities</h3>
              <ul>
                {booking.activities.map((activity) => (
                  <li key={activity.id}>{activity.name}</li>
                ))}
              </ul>
            </div>
            <div className="text-2xl font-bold mt-8">
              Total: ${booking.totalPrice}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 5: Confirmation</h2>
            <p>Your booking has been confirmed!</p>
            <p>Booking ID: {booking.id}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center mb-4 font-playfair-display bg-gradient-to-r from-blue-700 via-emerald-700 to-amber-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Book Your Stay
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {step === 1 && "Select your dates and number of guests"}
          {step === 2 && "Choose your perfect room"}
          {step === 3 && "Add exciting activities to your stay"}
          {step === 4 && "Review and confirm your booking"}
          {step === 5 && "Booking confirmed! Get ready for an amazing experience"}
        </motion.p>
        <motion.div 
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {renderStep()}
          <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-all duration-200 transform hover:scale-105"
              onClick={prevStep}
            >
              ← Back
            </button>
          )}
          {step < 4 && (
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 ml-auto"
              onClick={nextStep}
            >
              Next →
            </button>
          )}
          {step === 4 && (
            <button
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 ml-auto"
              onClick={async () => {
                const res = await fetch('http://localhost:8000/api/bookings', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    room_id: booking.room?.id,
                    activities: booking.activities.map((a) => a.id),
                    dates: booking.dates,
                    guests: booking.guests,
                    total_price: booking.totalPrice,
                  }),
                });
                const data = await res.json();
                setBooking(data);
                nextStep();
              }}
            >
              Confirm Booking
            </button>
          )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;
