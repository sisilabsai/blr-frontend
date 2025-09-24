'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Link from 'next/link';
import { toast } from 'sonner';

interface BookingConfirmationProps {
  params: {
    reference: string;
  };
}

interface Booking {
  id: number;
  booking_reference: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: string;
  room: {
    id: number;
    name: string;
    gallery_links: string[];
  };
}

export default function BookingConfirmationPage({ params }: BookingConfirmationProps) {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${params.reference}`);
        if (!res.ok) throw new Error('Booking not found');
        const data = await res.json();
        setBooking(data);
      } catch (error) {
        console.error('Error fetching booking:', error);
        toast.error('Error loading booking details');
      } finally {
        setLoading(false);
      }
    };

    if (params.reference) {
      fetchBooking();
    }
  }, [params.reference]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Booking not found</h1>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h1>
          <p className="mt-2 text-lg text-gray-600">
            Thank you for choosing Lake Bunyonyi Resort
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
          </div>
          
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-gray-900">Guest Information</h3>
                <dl className="mt-2 space-y-1">
                  <div>
                    <dt className="inline text-sm text-gray-600">Name: </dt>
                    <dd className="inline text-sm font-medium">
                      {booking.first_name} {booking.last_name}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline text-sm text-gray-600">Email: </dt>
                    <dd className="inline text-sm font-medium">{booking.email}</dd>
                  </div>
                  {booking.phone && (
                    <div>
                      <dt className="inline text-sm text-gray-600">Phone: </dt>
                      <dd className="inline text-sm font-medium">{booking.phone}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Stay Details</h3>
                <dl className="mt-2 space-y-1">
                  <div>
                    <dt className="inline text-sm text-gray-600">Room: </dt>
                    <dd className="inline text-sm font-medium">{booking.room.name}</dd>
                  </div>
                  <div>
                    <dt className="inline text-sm text-gray-600">Check-in: </dt>
                    <dd className="inline text-sm font-medium">
                      {format(new Date(booking.check_in), 'MMM dd, yyyy')}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline text-sm text-gray-600">Check-out: </dt>
                    <dd className="inline text-sm font-medium">
                      {format(new Date(booking.check_out), 'MMM dd, yyyy')}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline text-sm text-gray-600">Guests: </dt>
                    <dd className="inline text-sm font-medium">{booking.guests}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Booking Reference</p>
                  <p className="font-mono text-lg font-bold text-gray-900">
                    {booking.booking_reference}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-lg font-bold text-primary">${booking.total_price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}