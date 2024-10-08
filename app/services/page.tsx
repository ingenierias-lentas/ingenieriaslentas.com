"use client";

import Image from "next/image";

const SERVICES = [
  {
    name: "Shopify E-Commerce Development",
    description:
      "We work with Shopify merchants, collectives, and other partners to develop apps and storefronts that drive sales and retail product development lifecycle. We can work with Adobe or WooCommerce too.",
    image: "/images/shopify-ecommerce-development-service.webp",
  },
  {
    name: "Business Intelligence",
    description:
      "We compile data from typical e-commerce sources, such as Google Ads, Meta Business, and Shopify. We then analyze this data and synthesize into palatable reports for teams of all goals and experience levels.",
    image: "/images/business-intelligence-service.webp",
  },
  {
    name: "Cloud App and Infrastructure Management/Development",
    description:
      "We work with cloud services like AWS, Azure, and Google Cloud to develop and manage cloud infrastructure and applications. We can also help you migrate your existing infrastructure to the cloud.",
    image: "/images/cloud-app-and-infrastructure-management-development-service.webp",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-8">
          Our Services
        </h1>

        {SERVICES.map((service, index) => (
          <div
            key={service.name}
            className={`flex flex-col lg:flex-row items-center justify-between mb-12 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <Image
                src={service.image}
                alt={service.name}
                width={500}
                height={500}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 lg:pl-12">
              <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
                {service.name}
              </h2>
              <p className="text-lg text-black dark:text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
