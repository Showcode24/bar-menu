import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "DOCKERS' CLUB | Premium Nigerian Drinks Experience",
  description: "Explore our signature drinks and cocktails at DOCKERS' CLUB, a premium Nigerian bar experience.",
  keywords: "bar, cocktails, drinks, menu, premium, luxury, Nigerian, Lagos",
  openGraph: {
    title: "DOCKERS' CLUB | Premium Nigerian Drinks Experience",
    description: "Explore our signature drinks and cocktails at DOCKERS' CLUB, a premium Nigerian bar experience.",
    url: "https://DOCKERS'-bar.vercel.app",
    siteName: "DOCKERS' CLUB",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DOCKERS' CLUB",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: 'ByteCodes'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white`}>{children}</body>
    </html>
  )
}
