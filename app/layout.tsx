import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/src/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Hunter Mann | Design Engineer",
  description: "Just a regular guy that likes to make things look cool for people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${orbitron.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
