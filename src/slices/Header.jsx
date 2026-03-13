"use client"

import { useState, forwardRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { TbMenu } from "react-icons/tb"
import { FaArrowLeft } from "react-icons/fa6"

const Header = forwardRef(function Header({ menuRef, ...props }, ref) {
  const [open, setOpen] = useState(false)

  return (
    <header ref={ref} className="fixed w-full left-0 lg:left-1/2 lg:-translate-x-1/2 z-50 overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full lg:px-12 py-2 bg-transparent text-white">
        <div className="flex rounded-[20px] min-w-0 text-center p-2 bg-black text-xs flex-col">
          <span>Freelance Availability:</span>
          <span>April 2026</span>
        </div>
        
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="px-3 rounded flex-shrink-0"
        >
          {open ? "X" : <TbMenu ref={menuRef} style={{color: "black", fontSize: "32px"}} className="burger" />}
        </button>
      </div>

      {/* Expandable Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden rounded-md text-white w-full"
            style={{ backgroundColor: "hsl(0, 0%, 80%, 0.9)" }}
          >
            <ul className="flex flex-col gap-6 px-6 py-8">
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li className="border-2 text-center bg-black">Let's Connect</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Header