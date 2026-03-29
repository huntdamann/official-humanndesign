"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import "../css/WhoWeAre.css"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  exit: { opacity: 0 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      easing: [0.25, 0.1, 0.25, 1],
    },
  },
  viewport: { margin: "-20px" },
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.15 },
  },
  viewport: { margin: "-120px" },
}

const pillars = [
  {
    label: "1. Ideas",
    className: "word-1",
    header: "Ideas",
    description: "We treat every idea and perspective with equal importance. Sometimes, all it takes is the right spark to achieve something amazing. At HumannDesign, we provide your brand with an in-house incubator to bring those ideas to life.",
  },
  {
    label: "2. Instinct",
    className: "word-2",
    header: "Instinct",
    description:
      "We use instinct to elevate the services we offer. At HumannDesign, we break instinct down into three parts—the 3 E's: Education, Experience, and Exposure. We leverage what our team has learned, lived, and been exposed to in order to help your brand reach its full potential.",
  },
  {
    label: "3. Drive",
    className: "word-4",
    header: "Drive",
    description: "We approach every project with motivation and determination, seeing it through to maximize the impact it can have on your brand.",
  },
  {
    label: "4. Emotion",
    className: "word-5",
    header: "Emotion",
    description: "While we take pride in our analytical thinking and problem-solving methods, we never forget the human element. Emotion matters in marketing and branding, and we make it a priority to keep your customers’ wants and needs at the forefront of every decision.",
  },
  {
    label: "5. Love",
    className: "word-3",
    header: "Love",
    description: "We treat your brand with the same care and passion that you do. Your success is our passion, and we’re committed to achieving the best possible outcome for your brand.",
  },
]

export default function WhoWeAre() {
  const [activePillar, setActivePillar] = useState<typeof pillars[0] | null>(null)  

  return (
    <AnimatePresence mode="wait">
      <motion.section
        className="section-content-1 noise"
        id="about"
        {...staggerContainer}
      >
        <p className="ham">
          At HumannDesign, our values are inspired by the principles of the Human
          Design system. From this, we&apos;ve built our agency around five core pillars. Click to learn more about them!
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

        {/* Pillars */}
        <div className="flex flex-wrap gap-2">
          {pillars.map((pillar) => (
            <motion.span
              key={pillar.header}
              className={`pillars ${pillar.className}`}
              {...fadeUp}
              onClick={() => setActivePillar(pillar)}
            >
              {pillar.label}
            </motion.span>
          ))}
        </div>

        <AnimatePresence>
  {activePillar && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: "hsl(0, 0%, 80%, 0.9)" }}
      className="absolute flex flex-col rounded-lg border-[rgba(77,201,201,0.1)] items-center shadow-md p-8 gap-6 w-100 h-100 border"
    >
      <span id="pillar-description-header" className="text-[2em]">
        {activePillar.header}
      </span>
      <p id="pillar-description">{activePillar.description}</p>
      <button onClick={() => setActivePillar(null)} className="mt-10" id="pillar-close">        Close
      </button>
    </motion.div>
  )}
</AnimatePresence>

      </motion.section>
    </AnimatePresence>
  )
}