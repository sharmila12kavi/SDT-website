import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Skill Decode Tech - From Code to Creativity | Technology Education Institute Chennai",
  description:
    "Leading technology education institute in Chennai offering hands-on training in Web Development, Mobile App Development, Robotics, AI, IoT, 3D Printing for students Grade 2 to College level.",
  keywords:
    "technology education, coding classes Chennai, web development course, mobile app development, robotics training, AI course, IoT training, programming classes, skill development, tech institute Chennai",
  authors: [{ name: "Skill Decode Tech" }],
  creator: "Skill Decode Tech",
  publisher: "Skill Decode Tech",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph tags
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skilldecodetech.com",
    siteName: "Skill Decode Tech",
    title: "Skill Decode Tech - From Code to Creativity",
    description:
      "Leading technology education institute in Chennai offering hands-on training in Web Development, Mobile App Development, Robotics, AI, IoT, 3D Printing for students Grade 2 to College level.",
    images: [
      {
        url: "/images/skill-decode-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Skill Decode Tech Logo",
      },
    ],
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Skill Decode Tech - From Code to Creativity",
    description:
      "Leading technology education institute in Chennai offering hands-on training in Web Development, Mobile App Development, Robotics, AI, IoT, 3D Printing.",
    images: ["/images/skill-decode-logo.jpg"],
  },

  // Additional meta tags
  other: {
    "theme-color": "#3b82f6",
    "msapplication-TileColor": "#3b82f6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
