import { motion } from "motion/react"
import React from "react";
import GenericButton from "@/src/components/ui/GenericButton"
import { FaYoutube } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import '../css/SocialCTA.css'
import { FaBlog } from "react-icons/fa6";
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function AnimatedText({ text }: { text: string }) {
  return (
    <div>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
}

export function SocialCTASection() {
  return (
    <motion.section
      className="social-cta-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 style={{fontSize: "2em"}}>Stay in the loop</h2>
      {/* YouTube Card */}
      <div className="flex lg:flex-row flex-col w-3/4 items-center justify-center gap-9">
      <motion.div className="cta-card" variants={wordVariants}>
        <h3 className="text-white self-start">Youtube</h3>
        <div className="flex items-center gap-3">
        <div className="cta-icon youtube-icon">
          {/* YouTube play icon */}
         <FaYoutube />
        </div>
        <span className="cta-handle">@HUMANNDesign</span>
        </div>
       
        <GenericButton text="Watch" link="https://www.youtube.com/@HUMANNDesign" />
      </motion.div>

      {/* Blog Card */}
      <motion.div className="cta-card" variants={wordVariants}>       
        <h3 className="text-white self-start">Blog</h3>
      <div className="flex items-center gap-3">
      <div className="cta-icon blog-icon">
          <FaBlogger />
        </div>
        <span className="cta-handle">Design Blog</span>
        </div>
        
        <GenericButton text="Read" link="/blog" />
      </motion.div>
      {/* Instagram Card */}
      <motion.div className="cta-card" variants={wordVariants}>
      <h3 className="text-white self-start">Instagram</h3>

      <div className="flex items-center gap-3">
      <div className="cta-icon instagram-icon">
        <FaSquareInstagram />

        </div>
        <span className="cta-handle">@HUMANNDesign</span>
        </div>
        
        <GenericButton text="Read" link="Follow" />
      </motion.div>
      </div>
      
    
    </motion.section>
  );
}