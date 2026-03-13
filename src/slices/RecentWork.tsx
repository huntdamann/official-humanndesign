import React from "react";
import Image from "next/image";
import '../css/WhoWeAre.css'
import { motion } from "motion/react"
import { AnimatedTestimonials } from "../components/animated-testimonials";

export default function RecentWork() {

    const testimonials = [
        {
          quote:
          "A clean, dynamic, and fully responsive portfolio template built with NextJS, TailwindCSS, and Framer Motion.",
          name: "Bentolio",
          designation: "Website Template",
          src: "/images/bento-design.webp",
          drop: true,
        },
        {
          quote:
          "A website designed for a brand that sells handcrafted items and gifts to their supporters",
          name: "Only Fly Shit",
          designation: "Brand Website",
          src: "/images/ofs.PNG",
          drop: true,
        },
        {
          quote:
          "Numbers gives everyday sports fans the data-backed confidence to place smarter bets without needing to be an expert.",
          name: "Numbers",
          designation: "Mobile Application",
          src: "/images/numbers.png",
          drop: false,
        },
        {
          quote:
          "A professional, modern, and fully responsive website template for restaurants, built with NextJS, TailwindCSS, and Framer Motion. This template includes various features seen across other professional brands for a sleek user experience.",
          name: "Drip",
          designation: "Promotional Video",
          src:"/images/drip_final.png",
          drop: true,
        },
        {
          quote:
          "A professional and fully responsive website template for restaurants, built with NextJS, TailwindCSS, and Framer Motion.",
          name: "Wingland",
          designation: "Web Application",
          src:"/images/thumbnail.jpeg",
          drop: true,
        },
        {
          quote:
          "A fun and playful website for a Ready-To-Drink (RTD) tea brand located in Dallas, Texas.",
          name: "LuckyLiquids",
          designation: "Web Application + Content",
          src:"/images/lucky.png",
          drop: false,
        },
        {
          quote:
          "A Website",
          name: "Calisthenics & Conversation",
          designation: "Web Application",
          src:"/images/logo.png",
          drop: false,
          
        },
        
       
      ];

    return (
        <>
            <section className="text-center">

                <motion.h2 style={{fontSize: "2em", }}  whileInView={{y: 0, opacity: 1}} transition={{ease: "circOut"}} initial={{y:40, opacity: 0}} viewport={{amount: 0.4}}>Work</motion.h2>

                <AnimatedTestimonials testimonials={testimonials}/>
                
            </section>
        
        </>
    )
}