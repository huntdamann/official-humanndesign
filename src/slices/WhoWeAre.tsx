"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import "../css/WhoWeAre.css"

/**
 * Shared animation config
 * Motion One does NOT use variants
 */
const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  exit: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      easing: [0.25, 0.1, 0.25, 1], // easeOut
    },
  },
  viewport: {
    margin: "-20px",
  },
}

/**
 * Stagger container
 */
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: {
    margin: "-120px",
  },
}

export default function WhoWeAre() {
  return (
    <AnimatePresence mode="wait">
    <motion.section
      className="section-content-1 noise"
      id="about"
      {...staggerContainer}

    >
       <p className="ham"> 
        
        At HumannDesign, our values are inspired by the principles of the Human
      Design system. From this, we’ve built our agency around five core pillars:
      </p>
        
      {/* Logo */}
      <motion.div className="mt-5 lg:mt-20" {...fadeUp}>
        <Image
          src="/images/Humann_design_logo.png"
          alt="Second Logo"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Description */}
    

      <div className="flex">
        <motion.span className="pillars word-1" {...fadeUp}>
          1. Ideas
        </motion.span>

        <motion.span className="pillars word-2" {...fadeUp}>
        2. Instinct
        </motion.span>

        <motion.span className="pillars word-4" {...fadeUp}>
          3. Drive
        </motion.span>

        <motion.span className="pillars word-5" {...fadeUp}>
          4. Emotion
        </motion.span>
        <motion.span className="pillars word-3" {...fadeUp}>
          5. Love
        </motion.span>

      </div>
   


    </motion.section>
    </AnimatePresence>
  )
}
