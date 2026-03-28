"use client"
import React, { useState } from "react";
import '../css/Mockups.css'
import { motion, AnimatePresence } from "motion/react"
import Viewer from "../providers/Viewer";


import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default function Mockups() {

  const mockups = [
    {
      title: "Lucky Tea Bottle",
      tags: ["Website", "Digital Promotion"],
    },
    // {
    //   title: "Drip Credit Card",
    //   tags: ["Product Mockup", "Promotional Ad"],
    // },
    {
      title: "Only Fly Shit Candle",
      tags: ["E-Commerce", "Website"],
    },
  ];
  const [mockupNum, setMockupNum] = useState(0);


  const [index, setIndex] = useState(0);
  const TOTAL = 2; // number of items

  const handleBack  = () => setIndex(prev => Math.max(prev - 1, 0));
  const handleFront = () => setIndex(prev => Math.min(prev + 1, TOTAL - 1));

    return (
        <>
            <section style={{textAlign: "left", paddingBottom: "48px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}} className="section-work">

                <motion.h2 style={{fontSize: "2em", }}  whileInView={{y: 0, opacity: 1}} transition={{ease: "circOut"}} initial={{y:40, opacity: 0}} viewport={{amount: 0.4, once: true}}>Mockups</motion.h2>
                <div className="mockup-container">
                  <div className="mockup-controls">
                    <div onClick={handleBack} className="control-back">
                      <FaArrowLeft size={36} />
                    </div>
                    <div onClick={handleFront} className="control-front">
                      <FaArrowRight size={36} />
                    </div>
                  </div>
                  <div className="viewer-container">
                    <Viewer positionX={index} modelSelect="" />

                  </div>

                </div>
                <AnimatePresence mode="wait">
                <motion.div
                  key={mockupNum}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mockup-description">{mockups[index].title}</h3>
                  <ul>
                    {mockups[index].tags.map(tag => (
                      <li className="mockup-use" key={tag}>{tag}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
                
            </section>
        
        </>
    )
}