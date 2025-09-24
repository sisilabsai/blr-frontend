'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-20 w-44 h-44 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-16 w-36 h-36 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center mb-4 font-playfair-display bg-gradient-to-r from-amber-700 via-emerald-700 to-blue-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to experience the magic of Lake Bunyonyi? Get in touch with us
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-playfair-display bg-gradient-to-r from-amber-700 to-emerald-700 bg-clip-text text-transparent">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-200" 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-200" 
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 resize-none" 
                  placeholder="Tell us about your dream getaway..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
              <h2 className="text-3xl font-bold mb-6 font-playfair-display bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.263222634143!2d29.9886!3d-1.2865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c1a4e5e5e5e5e5%3A0x19c1a4e5e5e5e5e5!2sLake%20Bunyonyi!5e0!3m2!1sen!2sug!4v1631986712354!5m2!1sen!2sug"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
              <h3 className="text-2xl font-bold mb-4 font-playfair-display bg-gradient-to-r from-amber-700 to-emerald-700 bg-clip-text text-transparent">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><span className="font-semibold text-emerald-600">Phone:</span> +256 123 456 789</p>
                <p className="flex items-center gap-3"><span className="font-semibold text-emerald-600">WhatsApp:</span> +256 123 456 789</p>
                <p className="flex items-center gap-3"><span className="font-semibold text-emerald-600">Email:</span> info@bunyonyiluxuryresort.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
