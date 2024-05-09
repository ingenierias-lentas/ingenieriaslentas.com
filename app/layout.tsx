import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";

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
          <main
            className={`text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black`}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
