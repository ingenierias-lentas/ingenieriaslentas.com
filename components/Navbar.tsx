"use client"; // This ensures the component is client-side

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for the hamburger menu

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for handling mobile menu

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll down, hide the navbar
        setShowNavbar(false);
      } else {
        // Scroll up, show the navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black py-4 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="text-lg font-bold">
          {/* Show the full name on large screens and the logo on mobile */}
          <Link href="/" className="text-black dark:text-white">
            <span className="hidden sm:block">Ingenierías Lentas</span>
            <span className="block sm:hidden">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <AiOutlineClose className="text-black dark:text-white w-6 h-6" />
            ) : (
              <AiOutlineMenu className="text-black dark:text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="/" className="text-black dark:text-white">
            Home
          </Link>
          <Link href="/services" className="text-black dark:text-white">
            Services
          </Link>
          <Link href="/blog" className="text-black dark:text-white">
            Blog
          </Link>
          <Link href="/contact" className="text-black dark:text-white">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-black py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-black dark:text-white" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/services" className="text-black dark:text-white" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/blog" className="text-black dark:text-white" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contact" className="text-black dark:text-white" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
