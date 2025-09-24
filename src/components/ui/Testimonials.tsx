'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    quote: 'An unforgettable experience! The views were breathtaking and the service was impeccable.',
    author: 'Wilson Ecaat',
  },
  {
    quote: 'The perfect getaway. We will definitely be back!',
    author: 'Owora Pius',
  },
  {
    quote: 'A truly luxurious resort. Every detail was perfect.',
    author: 'E.L Mari',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-16 right-20 text-emerald-200/30 text-6xl md:text-9xl font-serif">&quot;</div>
        <div className="absolute bottom-16 left-20 text-blue-200/30 text-6xl md:text-9xl font-serif transform rotate-180">&quot;</div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-playfair-display font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-emerald-700 via-blue-700 to-amber-700 bg-clip-text text-transparent px-4"
        >
          What Our Guests Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-base md:text-lg text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto px-4"
        >
          Real experiences from guests who&apos;ve discovered the magic of Lake Bunyonyi
        </motion.p>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="p-2 md:p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-8 h-full flex flex-col justify-between border border-white/50 hover:shadow-3xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div>
                      <div className="text-amber-400 text-2xl md:text-4xl mb-2 md:mb-4">&quot;</div>
                      <p className="text-gray-700 font-inter text-sm md:text-lg mb-4 md:mb-6 leading-relaxed italic">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
                      <p className="text-gray-800 font-semibold font-playfair-display">
                        {testimonial.author}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
