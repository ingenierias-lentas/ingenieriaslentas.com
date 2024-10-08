"use client";

import Image from "next/image";
import leafbug from "@/public/images/leafbug.webp";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section (full-screen height) */}
      <section className="relative flex h-screen w-full justify-center items-center bg-[#d6ebe9]">
        <div className="absolute inset-0 z-0">
          <Image
            src={leafbug}
            alt="Leafbug"
            fill
            className="object-contain" // Adjust to fit the full image
            priority
          />
          {/* Add a dark overlay to improve contrast */}
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
        </div>
        <div className="relative z-20 flex flex-col items-center p-4 text-center sm:p-9">
          <h1 className="text-4xl sm:text-6xl font-bold text-white"> {/* Adjusted text size for mobile */}
            Ingenierías Lentas
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white max-w-xl sm:max-w-2xl">
            We support small and medium sized e-commerce businesses that want to use technology to improve their operation.
          </p>
          <a
            href="#about"
            className="mt-6 sm:mt-8 inline-block bg-white text-black py-2 px-4 sm:py-3 sm:px-6 rounded-md font-semibold text-base sm:text-lg hover:bg-gray-300 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Additional Content Section */}
      <section id="about" className="flex flex-col justify-center items-center bg-white dark:bg-black p-6 sm:p-9">
        <div className="mx-auto max-w-xl sm:max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
            About Ingenierías Lentas
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-black dark:text-white">
            Ingenierías Lentas is a technology management company focused on improving the experience of small and medium sized organizations that want to compete
            in a crowded market.
          </p>
        </div>
      </section>
    </div>
  );
}