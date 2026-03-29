"use client";

import React from "react";
import Link from "next/link";
import GenericButton from "../components/ui/GenericButton";
import { motion } from 'motion/react'

function Footer() {
  return (
    <motion.footer initial={{y: 40, opacity: 0}} whileInView={{y:0, opacity: 1}} viewport={{amount: 0.2, once: true }} className="w-full bg-black text-white px-6 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Left Section — Resources */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-6 text-[#72d0c8] uppercase tracking-wide">
            Resources
          </h3>
          <ul className="space-y-3 text-sm uppercase text-gray-300">
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="#services">Web Services</Link>
                </li>
                <li  className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="#work">Recent Work</Link>
                </li>
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/solutions">Solutions</Link>
                </li>
                
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/blog">Blog</Link>
                </li>
               
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="https://calendly.com/hunter-mann2433/30min">Contact</Link>
                </li>
            </ul>
        </div>

        {/* Right Section — Connect */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-6 text-[#72d0c8] uppercase tracking-wide">
            Let&apos;s Connect
          </h3>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            I would love to hear from you! Click on the button below to schedule a call to discuss the next step together.
          </p>
            <GenericButton text="Need a Quote" link="https://calendly.com/hunter-mann2433/30min" />

        </div>
      </div>

      {/* Divider + Footer bottom */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-xs text-gray-500">
        <span>© {new Date().getFullYear()} HUMANNDESIGN. All rights reserved.</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
