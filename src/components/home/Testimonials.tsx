'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    quote: "White Glove Golf Trip transformed our annual golf getaway into an unforgettable experience. Every detail was perfect.",
    name: "Kurt Arbuckle",
    location: "Pebble Beach, CA",
    rating: 5,
    photo: "/images/testimonials/kurt.jpg"
  },
  {
    quote: "The attention to detail and personalized service exceeded all expectations. Truly a five-star experience.",
    name: "Chase Welsh",
    location: "St Andrews, Scotland",
    rating: 5,
    photo: "/images/testimonials/chase.jpg"
  },
  {
    quote: "From course selection to dinner reservations, they handled everything flawlessly. Can't wait for our next trip!",
    name: "Sam Wehrspann",
    location: "Augusta, GA",
    rating: 5,
    photo: "/images/testimonials/sam.jpg"
  },
  {
    quote: "The team's knowledge of golf destinations worldwide is unmatched. They created the perfect itinerary for our group.",
    name: "Nick Mahn",
    location: "Bandon Dunes, OR",
    rating: 5,
    photo: "/images/testimonials/nick.jpg"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join hundreds of satisfied golfers who have experienced the White Glove difference
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <figure className="relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-gold-500" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-6 text-xl font-semibold leading-8 text-gray-900">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name.replace(/"/g, '&quot;')}
                      className="h-10 w-10 rounded-full object-cover border-2 border-gold-500"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.location}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold-500 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 