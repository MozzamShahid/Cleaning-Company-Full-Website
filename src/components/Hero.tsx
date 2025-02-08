'use client';  // Add this for client-side interactivity

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&h=1080",
      title: 'Professional Home Cleaning Services',
      subtitle: 'Let us make your home sparkle!',
      ctaText: 'Book Now',
    },
    {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1920&h=1080",
      title: 'Trusted & Reliable Service',
      subtitle: 'Experience the difference!',
      ctaText: 'Contact Us',
    },
  ];

  return (
    <div className="mt-20">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        className="w-full h-[calc(100vh-80px)]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-200">
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}; 