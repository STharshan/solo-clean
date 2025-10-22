import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with settings
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins" id="home">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
      ></video>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        {/* Title */}
        <h1
          className="text-[85px] font-bold tracking-widest mb-2 text-primary dark:text-primary"
          data-aos="fade-up"
        >
         Sole Diamond Limited
        </h1>

        {/* Subtitle */}
        <h2
          className="text-xl font-bold uppercase mt-5 mb-6 text-white dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Reliable Team Professional Service
        </h2>

        {/* Button */}
        <a href="#contact">
          <button
            className="bg-primary bg-secondary-hover text-white px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold transition dark:bg-primary dark:hover:bg-secondary"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Contact us
          </button>
        </a>
      </div>
    </div>
  );
}
