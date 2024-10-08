import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";
import Navbar from "@/components/Navbar"; // Import the client-side Navbar
import ThemeToggle from "@/components/theme-toggle"; // For the fixed theme toggle
import localFont from "next/font/local";

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Ingenierías Lentas",
  generator: "Next.js",
  applicationName: "Ingenierías Lentas",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Boilerplate",
    "Template",
    "shadcn-ui",
  ],
  authors: [{ name: "Eric Solomon", url: "https://errcsool.com" }],
  creator: "Eric Solomon",
  publisher: "Eric Solomon",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ingenieriaslentas.com"),
  openGraph: {
    title: "Ingenierías Lentas",
    description: "Website for Ingenierías Lentas group",
    url: "https://ingenieriaslentas.com",
    siteName: "Ingenierías Lentas",
    images: [
      {
        url: "https://ingenieriaslentas.com/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://ingenieriaslentas.com/og-dark.png",
        width: 1800,
        height: 1600,
        alt: "Website for Ingenierías Lentas group",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar from client-side */}
          <Navbar />

          {/* Main Content */}
          <main
            className={`pt-16 text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black min-h-screen overflow-x-hidden`}
          >
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full bg-white dark:bg-black py-6 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-black dark:text-white">
                &copy; {new Date().getFullYear()} Ingenierías Lentas. All rights reserved.
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                <div className="flex flex-wrap justify-center space-x-6">
                  <a href="https://github.com/your-profile" target="_blank" className="text-black dark:text-white">
                    GitHub
                  </a>
                  <a href="https://twitter.com/your-profile" target="_blank" className="text-black dark:text-white">
                    X (Twitter)
                  </a>
                  <a href="https://instagram.com/your-profile" target="_blank" className="text-black dark:text-white">
                    Instagram
                  </a>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" className="text-black dark:text-white">
                    LinkedIn
                  </a>
                </div>
                <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
                  <a href="/" className="text-black dark:text-white">
                    Home
                  </a>
                  <a href="/privacy" className="text-black dark:text-white">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </footer>

          {/* Fixed Theme Toggle at bottom right */}
          <div className="fixed bottom-4 right-4">
            <ThemeToggle />
          </div>
        </Provider>
      </body>
    </html>
  );
}