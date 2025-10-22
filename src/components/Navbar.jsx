import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
import Theme from "./Theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-poppins z-30 transition-all duration-300 
      ${isScrolled 
        ? "bg-white shadow-lg dark:bg-black" 
        : "bg-transparent dark:bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="ARCON Logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav
          className={`hidden lg:flex space-x-10 font-medium uppercase tracking-wider absolute left-1/2 transform -translate-x-1/2
          text-black dark:text-gray-100`}
        >
          <Link to="/#home" className="text-primary-hover transition">
            Home
          </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 text-primary-hover transition uppercase dark:text-gray-100"
              onClick={() => setShowServices((prev) => !prev)}
            >
              Services
              <FiChevronDown
                className={`transition-transform ${
                  showServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          <Link to="/#testimonials" className="text-primary-hover transition">
            Client
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <div className="block">
          <Theme />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-black dark:text-gray-100 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden fixed top-0 left-0 p-3 mt-20 w-full 
        bg-black/90 dark:bg-neutral-900/95 backdrop-blur-sm 
        flex flex-col items-center justify-center space-y-8 
        text-white dark:text-gray-100 text-xl font-semibold uppercase tracking-wider 
        transition-transform duration-300 
        ${isOpen ? "translate-x-0 max-h-[80vh] overflow-y-auto" : "-translate-x-full"}`}
      >
        <Link to="/#home" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/#about" onClick={() => setIsOpen(false)}>
          About
        </Link>

        <details className="w-full text-center">
          <summary className="cursor-pointer select-none">Services</summary>
        </details>

        <Link to="/#testimonials" onClick={() => setIsOpen(false)}>
          Client
        </Link>
      </div>
    </header>
  );
}
