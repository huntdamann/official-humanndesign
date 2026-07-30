"use client";

import { useState, forwardRef, RefObject } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-scroll";

interface HeaderProps {
  menuRef: RefObject<HTMLSpanElement | null>;
}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header(
  { menuRef },
  ref
) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      console.log("section is ready");
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "section-content-1" },
    { label: "Services", id: "section-info" },
    { label: "Work", id: "section-work" },
    { label: "Blog", id: "blog" },
  ];

  return (
    <header
      style={{ padding: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
      ref={ref}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full lg:px-12 py-2 bg-transparent text-white">
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="px-3 rounded shrink-0"
        >
          <span
            ref={menuRef}
            style={{ display: "inline-flex" }}
            className="burger-container"
          >
            <TbMenu style={{ fontSize: "32px" }} className="burger" />
          </span>
        </button>
        <div className="available">
          <span>Freelance Availability:</span>
          <span>October 2026</span>
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
            className="my-class"
          >
            <ul className="drop-down">
              {navItems.map(({ label, id }) => (
                <li
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="drop-down-link"
                >
                  <Link
                    className="menu-label"
                    style={{
                      fontFamily: "var(--fort-orbitron)",
                      color: "white",
                    }}
                    to={id}
                    smooth={true}
                    duration={500}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="drop-down-button">Let&apos;s Connect</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Header;
