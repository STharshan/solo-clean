"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nosa Lovely",
      text: `Beautiful job, prompt at delivering effective job. I would recommend their services over and over again.`,
      rating: 5,
    },
    {
      name: "Phylbert Ugbomeh",
      text: `I had a good experience with the staff who came to my property for maintenance, they were fast and professional... I will recommend Sole Diamond Limited to anyone🤩`,
      rating: 5,
    },
    {
      name: "ruthnkem ugbomeh",
      text: `Amazing company! Very impressed with their services`,
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[current];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-white dark:bg-black text-black dark:text-gray-100 scroll-m-20 py-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-poppins"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 transition-all duration-500 ease-in-out">
        {/* Left Side - Text Content */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left -mt-25"
          data-aos="fade-right"
        >
          <h2 className="uppercase font-semibold text-primary dark:text-primary mb-3">
            • What Our Clients Say
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-gray-100">
            TRUSTED BY MANY, LOVED BY ALL
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Our clients' success stories reflect our commitment to excellence. See how we've helped them find their dream homes, sustainable investments, and perfect getaways.
          </p>
        </div>

        {/* Right Side - Testimonial Card */}
        <div
          className="w-full lg:w-1/2 relative"
          data-aos="fade-left"
        >
          <div className="relative bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 rounded-2xl shadow-2xl dark:shadow-black/30 p-6 sm:p-10 hover:shadow-custom dark:hover:shadow-custom active:shadow-custom cursor-pointer">
            {/* Quote mark */}
            <div className="absolute top-4 right-4 text-red-500/30 text-6xl font-serif select-none">
              &rdquo;
            </div>

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              {testimonial.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>

            {/* Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-neutral-700">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="mt-10 flex flex-col items-center">
            {/* Arrows */}
            <div className="flex justify-center items-center gap-4 mb-5">
              <button
                onClick={handlePrev}
                className="bg-primary bg-secondary-hover text-white dark:bg-primary dark:hover:bg-secondary p-3 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                className="bg-primary bg-secondary-hover text-white dark:bg-primary dark:hover:bg-secondary p-3 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary w-8"
                      : "bg-zinc-700 dark:bg-gray-400 w-2 hover:bg-zinc-600 dark:hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
