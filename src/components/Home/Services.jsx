import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Painting Services",
      description:
        "Expert painting services to refresh and beautify interiors and exteriors.",
      image: "/s1.jpg",
      color: "from-blue-500 to-cyan-500",
      link: "/Foodplante",
    },
    {
      id: 5,
      title: "Window Cleaning",
      description:
        "Professional service to make your windows spotless, streak-free, and sparkling.",
      image: "/s5.jpg",
      color: "from-yellow-500 to-orange-500",
      link: "/Postconstructioncleaning",
    },
    {
      id: 2,
      title: "Cleaning Services",
      description:
        "Comprehensive cleaning solutions for homes, offices, and commercial spaces.",
      image: "/s2.jpg",
      color: "from-green-500 to-emerald-500",
      link: "/commercial-cleaning",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 font-poppins scroll-m-10"
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-4">
          <h2 className="text-primary font-bold text-lg tracking-widest uppercase mb-2">
            • Our Services
          </h2>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-black dark:text-gray-100 text-center mb-6 max-w-3xl mx-auto">
          Key benefits that set us apart from other cleaning services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-aos="fade-up"
            className="group relative w-full sm:w-[48%] md:w-[40%] lg:w-[30%] bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-custom active:shadow-custom transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="mb-6 flex items-center justify-center w-full h-52 md:h-64 rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
              <img
                src="/logo.png"
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3
              className={`text-lg md:text-xl font-bold mb-3 text-center transition-all duration-300 
                ${hoveredIndex === index ? "text-primary-hover" : "text-gray-900 dark:text-gray-100"}`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-center flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-300">
              {service.description}
            </p>

            {/* Learn More Button */}
            <div className="flex justify-center mt-6">
              <a
                href={service.link}
                className="bg-primary bg-secondary-hover text-white dark:bg-primary dark:hover:bg-[#36afe7] px-6 py-2 rounded-md uppercase tracking-widest text-sm font-semibold transition flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
