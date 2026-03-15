"use client"

import { useState, forwardRef, RefObject } from "react"
import { motion, AnimatePresence } from "motion/react"
import { TbMenu } from "react-icons/tb"
import { Link } from 'react-scroll';

interface HeaderProps {
  menuRef: RefObject<HTMLSpanElement | null>
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header({ menuRef }, ref) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setOpen(false)
    const section = document.getElementById(id)
    if (section) {
      console.log('section is ready')
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "About", id: "section-content-1" },
    { label: "Services", id: "section-info" },
    { label: "Work", id: "section-work" },
    { label: "Blog", id: "blog" },
  ]

  return (
    <header ref={ref} className=" w-screen fixed px-6 left-0 lg:left-1/2 lg:-translate-x-1/2 z-50 overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full lg:px-12 py-2 bg-transparent text-white">
        
      <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="px-3 rounded shrink-0"
        >
          {open ? (
            "X"
          ) : (
            <span ref={menuRef} style={{ display: "inline-flex" }}>
              <TbMenu style={{  fontSize: "32px" }} className="burger" />
            </span>
          )}
        </button>
        <div className="flex rounded-[20px] min-w-0 text-center p-2 bg-black text-xs flex-col">
          <span>Freelance Availability:</span>
          <span>April 2026</span>
        </div>
        
       
      </div>

      {/* Expandable Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden rounded-md text-white w-full border"
            style={{ backgroundColor: "hsl(0, 0%, 80%, 0.9)" }}
          >
            <ul className="flex flex-col gap-6 px-6 py-8">
              {navItems.map(({ label, id }) => (
                <li
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="cursor-pointer transition-all duration-75 hover:border p-2 rounded-md hover:bg-black hover:opacity-70"
                >
                  <Link to={id} smooth={true} duration={500}>
                
                  {label} 

                  </Link>

                </li>
              ))}
              <li className="border-2 self-center text-center bg-black w-37.5 rounded-md cursor-pointer hover:opacity-70 transition-opacity">
                Let&apos;s Connect
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Header