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
          "Only Fly Shit is a brand that creates handcrafted items and gifts for their supporters.",
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
          src: "/images/numbers_logo.png",
          drop: false,
        },
        {
          quote:
          "Professional product showcase/promotional. This is just a template!",
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
          "Lucky Liquids is a fun and playful Ready-To-Drink (RTD) tea brand located in Dallas, Texas. It's a fruit-flavored, flavor-focused tea primed to takeover.",
          name: "LuckyLiquids",
          designation: "Web Application + Content",
          src:"/images/lucky.png",
          drop: false,
        },
        {
          quote:
          "Calisthenics & Conversation is a movement based emotional wellness program that helps boys build confidence, discipline, and emotional intelligence",
          name: "Calisthenics & Conversation",
          designation: "Web Application",
          src:"/images/logo.png",
          drop: false,
          
        },
        
       
      ];

    return (
        <>
            <section style={{textAlign: "center", paddingBottom: "48px"}} className="section-work">

                <motion.h2 style={{fontSize: "2em", }}  whileInView={{y: 0, opacity: 1}} transition={{ease: "circOut"}} initial={{y:40, opacity: 0}} viewport={{amount: 0.4}}>Work</motion.h2>

                <AnimatedTestimonials testimonials={testimonials}/>
                
            </section>
        
        </>
    )
}