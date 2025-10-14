'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      "Lake Bunyonyi has become my home away from home. As a local guide, I've witnessed how this magical place transforms visitors from around the world. The resort's commitment to preserving our cultural heritage while providing world-class hospitality is inspiring. The traditional canoeing experiences I lead connect guests with our Bakiga ancestors' wisdom. The Grey Crowned Crane sightings and the mystical stories of the 29 islands create unforgettable memories that guests carry back to their countries.",
    author: 'Wilson Ecaat',
    country: 'Uganda',
  },
  {
    quote:
      "The sustainable tourism approach here sets a benchmark for East Africa. Coming from Kenya, I was impressed by how the resort integrates local communities into tourism. The farm-to-table dining featuring fresh tilapia from the lake and organic vegetables from nearby gardens is exceptional. The cultural exchange programs where guests learn traditional Ugandan dances and crafts create meaningful connections. The Virunga Mountain views and volcanic lake formation stories make every visit educational and awe-inspiring.",
    author: 'Owora Pius',
    country: 'Kenya',
  },
  {
    quote:
      "The biodiversity of Lake Bunyonyi rivals anything I've seen in Ethiopia's national parks. The 29 islands, each with unique ecosystems and historical significance, create a natural laboratory for conservation. The resort's birdwatching safaris, where we spot over 200 species including the rare Papyrus Gonolek, are world-class. The geological wonders - lava flows that formed this deepest lake in East Africa - fascinate scientists and nature lovers alike. The authentic cultural immersion through community visits and traditional ceremonies makes this destination truly special.",
    author: 'E.L Mari',
    country: 'Ethiopia',
  },
  {
    quote:
      "Our family vacation at Lake Bunyonyi was magical. The kids loved the water bicycle tours and we all enjoyed the traditional canoeing experience. The resort staff went above and beyond to make our stay special, even organizing a private birdwatching session where we saw the Grey Crowned Cranes up close. The lakefront suites provided stunning sunrise views every morning.",
    author: 'Sarah Mitchell',
    country: 'United Kingdom',
  },
  {
    quote:
      "As a photographer, I was blown away by the natural beauty here. The Virunga Mountains as a backdrop for every shot, and the crystal-clear waters of Africa's second deepest lake made for incredible compositions. The luxury boat cruise at sunset was particularly memorable - the colors reflected on the water were simply breathtaking. The resort's attention to detail and authentic Ugandan hospitality made this trip unforgettable.",
    author: 'Marcus Johansson',
    country: 'Sweden',
  },
  {
    quote:
      "We celebrated our honeymoon at this paradise and it exceeded all expectations. The Presidential Suite with its infinity pool overlooking the lake was pure luxury. The gourmet breakfast experience featuring local Ugandan coffee and tropical fruits was divine. The staff arranged a romantic dinner on Punishment Island, complete with traditional music and storytelling about the island's history. Every moment felt special and intimate.",
    author: 'Priya Sharma',
    country: 'India',
  },
  {
    quote:
      "The zip-lining adventure over Lake Bunyonyi was the highlight of our African safari. Soaring above the pristine waters with the Virunga Mountains in the distance was exhilarating. The resort's safety standards were impeccable, and the guides were incredibly knowledgeable about the local ecosystem. The Executive Room we stayed in had floor-to-ceiling windows showcasing the lake views perfectly. We've traveled extensively, but this experience stands out.",
    author: 'David Chen',
    country: 'Canada',
  },
  {
    quote:
      "Lake Bunyonyi is a birdwatcher's dream! We spotted over 20 species including the rare Papyrus Gonolek and Malachite Kingfisher. The resort organized an early morning boat tour to the \"conference tree\" where hundreds of birds gather. The Deluxe Room was spacious and comfortable, with excellent WiFi for sharing our sightings online. The cultural heritage tour taught us so much about the Bakiga people and their connection to the lake.",
    author: 'Anna Rodriguez',
    country: 'Spain',
  },
  {
    quote:
      "The geological story behind Lake Bunyonyi fascinated me as a geologist. Learning how the Virunga lava flows created this natural wonder was incredible. The volcanic formation tour was expertly guided, and the resort's library had excellent reference materials. The Lakefront Cottage we rented was charming and authentically built with local materials. The swimming pool experience with lake views was the perfect way to unwind after our explorations.",
    author: 'Dr. Thomas Müller',
    country: 'Germany',
  },
  {
    quote:
      "Our group of 8 friends had the most amazing time at the Private Villa. The butler service was exceptional, and the plunge pool overlooking the lake was pure luxury. The speed boat adventures were thrilling, racing between the 29 mystical islands. The resort arranged a traditional fishing demonstration with local fishermen, and we even got to try our hand at it. The food was outstanding - fresh tilapia from the lake prepared in authentic Ugandan styles.",
    author: 'Fatima Al-Zahra',
    country: 'United Arab Emirates',
  },
  {
    quote:
      "As a yoga instructor, I was drawn to the peaceful energy of Lake Bunyonyi. The resort offered daily yoga sessions on the lakefront with mountain views that were spiritually uplifting. The Luxury Suite had a perfect balcony for meditation and sunrise practices. The cultural immersion was deep - we learned traditional Ugandan dances and participated in community activities. The organic, locally-sourced meals supported our wellness journey beautifully.",
    author: 'Yuki Tanaka',
    country: 'Japan',
  },
  {
    quote:
      "The historical significance of the islands fascinated our family. Visiting Bwama Island and learning about Dr. Leonard Sharp's missionary work was deeply moving. The resort's heritage tours were comprehensive and respectful. Our Family Cottage was perfect for our three children, with plenty of space and lake views from every window. The kids' favorite was the water bicycle tour - they felt like they were in a real adventure movie!",
    author: 'Marie Dubois',
    country: 'France',
  },
  {
    quote:
      "Lake Bunyonyi exceeded our expectations for a sustainable luxury experience. The eco-friendly practices, from solar power to local sourcing, impressed us greatly. The Honeymoon Suite was romantically perfect, with candlelit decor and private balcony. The birdwatching safari was exceptional - we saw the national bird, Grey Crowned Crane, in its natural habitat. The resort's commitment to conservation and community support made our stay meaningful.",
    author: 'James Wilson',
    country: 'Australia',
  },
  {
    quote:
      "The deep diving experience in Africa's second deepest lake was incredible. Reaching depths of 44 meters in such clear, volcanic water was unforgettable. The resort's dive center was professional and well-equipped. The Standard Room was clean and comfortable, perfect for our adventure-focused trip. The post-dive massages and local Ugandan cuisine helped us recover beautifully. We've dived in many places, but this volcanic lake holds a special place in our hearts.",
    author: 'Isabella Santos',
    country: 'Brazil',
  },
  {
    quote:
      "Our photographic safari captured the essence of Uganda's natural beauty. The Virunga Mountain backdrop for wildlife photography was spectacular. The resort provided expert guides who knew the best spots for golden hour shots. The Premium Room had excellent lighting for editing our photos. The cultural photography workshop taught us about traditional Ugandan crafts and ceremonies. The lake's misty mornings created ethereal scenes that will forever be in our portfolio.",
    author: 'Ahmed Hassan',
    country: 'Egypt',
  },
  {
    quote:
      "The fishing experience was authentic and memorable. Learning traditional methods from local fishermen on the lake was a highlight. The resort arranged our equipment and boat, and we caught beautiful tilapia that was prepared for our dinner. The Executive Room's work desk was perfect for journaling our experiences. The geological tours explained how the lake was formed by volcanic activity, adding depth to our understanding of this unique ecosystem.",
    author: 'Emma Thompson',
    country: 'New Zealand',
  },
  {
    quote:
      "Lake Bunyonyi is a paradise for nature lovers. The biodiversity is incredible - from the 29 islands to the surrounding mountains. Our stay in the Deluxe Room gave us front-row seats to daily wildlife sightings. The resort's conservation efforts are commendable, and their guides are passionate about protecting this ecosystem. The traditional canoeing experience connected us deeply with the lake's history and the local Bakiga culture.",
    author: 'Luca Rossi',
    country: 'Italy',
  },
  {
    quote:
      "The resort's attention to detail made our anniversary celebration perfect. The Presidential Suite's infinity pool and personal chef service were luxurious beyond words. The private island dinner with views of all 29 islands was magical. The staff remembered our special occasion and arranged surprises throughout our stay. The lake's serene beauty provided the perfect romantic backdrop for our celebration.",
    author: 'Sophie Anderson',
    country: 'Netherlands',
  },
  {
    quote:
      "As researchers studying African lakes, we were fascinated by Lake Bunyonyi's unique formation. The volcanic origins and extreme depth make it scientifically remarkable. The resort provided access to local experts and historical records. Our Family Cottage accommodated our team comfortably. The birdwatching opportunities were exceptional for our ornithology studies. This trip combined research with genuine hospitality.",
    author: 'Dr. Chen Wei',
    country: 'China',
  },
  {
    quote:
      "The speed boat tour was adrenaline-pumping! Racing across the crystal-clear waters between islands was thrilling. The Virunga Mountains provided a dramatic backdrop. The resort's safety briefings were thorough, and the guides were entertaining. The Luxury Suite we upgraded to had panoramic windows perfect for enjoying the lake views. The local Ugandan cuisine, especially the fresh fish, was outstanding.",
    author: 'Carlos Mendoza',
    country: 'Mexico',
  },
  {
    quote:
      "Lake Bunyonyi is a hidden gem that exceeded all our expectations. The peaceful atmosphere, stunning natural beauty, and warm hospitality created memories that will last forever. The resort's commitment to sustainability and community support was inspiring. Every activity, from canoeing to island hopping, was expertly organized. The lake's mystical energy touched our souls deeply.",
    author: 'Amara Okafor',
    country: 'Nigeria',
  },
  {
    quote:
      "Our wildlife photography expedition was incredibly successful thanks to the resort's expert guides. We captured amazing shots of zebras, impalas, and even spotted Uganda kob near the lake. The early morning boat safaris were particularly productive. The Premium Room's large windows were perfect for nature watching. The cultural exchanges with local communities added authentic stories to our photographs.",
    author: 'Raj Patel',
    country: 'Singapore',
  },
  {
    quote:
      "The resort's eco-luxury approach impressed us greatly. From the solar-powered cottages to the organic farm-to-table dining, sustainability was evident everywhere. The Lakefront Cottage blended modern comfort with traditional Ugandan architecture beautifully. The zip-lining experience with mountain gorilla habitat views was breathtaking. The staff's knowledge about local conservation efforts was inspiring.",
    author: 'Hannah Schmidt',
    country: 'Switzerland',
  },
  {
    quote:
      "Lake Bunyonyi provided the perfect setting for our creative writing retreat. The serene lake views and peaceful atmosphere sparked our imaginations. The resort arranged writing workshops on the islands and poetry readings by the water. The Deluxe Room's balcony became our favorite writing spot. The local stories and legends shared by the guides enriched our work tremendously.",
    author: 'Oliver Brown',
    country: 'Ireland',
  },
  {
    quote:
      "The volcanic lake's unique ecosystem fascinated our biology students. Studying the lake's formation and aquatic life was educational and exciting. The resort partnered with local schools for our field studies. The Family Cottage accommodated our group perfectly. The birdwatching and fishing demonstrations provided hands-on learning experiences. This trip combined education with authentic cultural immersion.",
    author: 'Dr. Maria Gonzalez',
    country: 'Argentina',
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
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 flex">
                <motion.div
                  className="p-2 md:p-4 flex-1 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-8 flex-1 flex flex-col justify-between border border-white/50 hover:shadow-3xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="overflow-hidden">
                      <div className="text-amber-400 text-2xl md:text-4xl mb-2 md:mb-4">&quot;</div>
                      <p className="text-gray-700 font-inter text-sm md:text-lg mb-4 md:mb-6 leading-relaxed italic max-h-40 md:max-h-56 overflow-auto">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
                      <div className="text-right">
                        <p className="text-gray-800 font-semibold font-playfair-display">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-600 text-sm">{testimonial.country}</p>
                      </div>
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
    