import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Till Thelet | Full-Stack Developer & AI Specialist",
  description:
    "I craft modern web applications with cutting-edge technologies. Specializing in React, Next.js, and AI integration to deliver exceptional user experiences.",
  openGraph: {
    title: "Till Thelet | Portfolio",
    description:
      "I craft modern web applications with cutting-edge technologies. Specializing in React, Next.js, and AI integration.",
    url: "https://tilldev.com",
    siteName: "TillDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Till Thelet",
    description:
      "I craft modern web applications with cutting-edge technologies. Specializing in React, Next.js, and AI integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
