"use client"

import React, { useState, forwardRef, useEffect, Suspense } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import  Image  from 'next/image'
import Link from 'next/link'
import  Bad  from '../../public/images/notgood.png'
import { IoDiamond } from "react-icons/io5";
import { FaCircleChevronLeft } from "react-icons/fa6";


import { FiMenu } from "react-icons/fi";

function LoadingProfile() {
    return <p className="text-black">Loading profile...</p>;
  }
const AboutUsSection = forwardRef( (props, ref) =>  { 


AboutUsSection.displayName = "Who We Are"
    const [isClicked, setIsClicked] = useState(false)
    const aboutBullets = ['Human-centered creativity', 'Intentional Design', 'Results-driven'] 


    // Menu Button Show logic
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowButton(true); // Scrolling up
      } else {
        setShowButton(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }
  useEffect(() => {
    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
    const handleClick = () => {
        setIsClicked(prev => !prev)
    }
    return (
        <>

        <Suspense fallback={<LoadingProfile />}>
        <div className=" w-full relative">
        <motion.button animate={{opacity: showButton ? 1 : 0}} className="fixed text-[#C0C0C0] text-4xl right-3 top-3 cursor-pointer z-50" onClick={handleOpen}>
          <FiMenu  />
        </motion.button>
      </div>
      <AnimatePresence>
      {isOpen && ( 

          <motion.header id="nav" initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} className="rounded-tr-md z-[60] rounded-br-md  flex flex-col justify-center fixed w-[100%] lg:w-[15%] h-screen">

                <FaCircleChevronLeft onClick={handleOpen} className="absolute right-3 cursor-pointer text-xl top-3" />

                <ul className="flex flex-col gap-6 justify-center lg:items-end items-center ">


                <Link href="/">
                
                
                <motion.li whileHover={{x:30, y:-10}}
                
                  transition={{type: 'tween', stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  bounce: 0.4}} 
                className="flex gap-2 bg-[black] cursor-pointer items-center p-2 rounded-sm">
                  <span className="text-md">Home</span>
                  <IoDiamond />

                </motion.li>

                </Link>


                </ul>

          </motion.header>


      )}
      </AnimatePresence>
        <section className="bg-white text-black lg:p-10 p-3 min-h-screen">


        <motion.section initial={{opacity: 0,  y:-20}} animate={{opacity: 1, y:0}} transition={{delay: 0.3}} className="flex flex-col gap-3 text-center">


            <h1 className="text-slate-400">Audit by HUMANNDESIGN</h1>
            <p className="text-black">

            As the saying goes, ‘Numbers don’t lie.’ At HumannDesign, we believe the same. We’re not here to wow you with flashy designs or empty features — our focus is on the numbers that truly matter to your business. By showing you the real data behind your digital presence, we give you clear, actionable reasons why partnering with us can drive your business forward.

            </p>

            <p>

            That’s why we offer <span className="text-green-400 hover:text-green-100 font-semibold">FREE</span> web audits. Using trusted industry tools and research, we’ll provide a detailed breakdown of how your site is performing against your goals. You’ll walk away with insights you can act on right away — and the confidence to know if HumannDesign is the right partner for your success.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScscm-zWaIUbfcxMG8tF53DjUm1XpgUB6h6QRc0yWB_d3lq6w/viewform?usp=preview" className="mt-5">
                
                    <button className="bg-black text-white border-slate-400 border-4 rounded-lg hover:bg-slate-500 p-2">Get Your Free Audit</button>

            </a>
            </motion.section>

            <motion.section initial={{opacity: 0,  y:20}} animate={{opacity: 1, y:0}} transition={{delay: 0.5}} className="flex  flex-col items-center mt-10 gap-6 text-center">

            <h2 className="lg:w-[30rem]  w-[15rem]">How This Affects Your Bottomline?</h2>

            <div className="border flex flex-col justify-center items-center">
                <Image src="/picture/notgood.png" width={1000} height={300} alt="Bad Example of Lighthouse Score" />
                <span>Lighthouse Report Score</span>
            </div>
            <p>
            One of the tools we use is Google’s Lighthouse API, which generates reports to reveal how your site is really performing. A low score — like the one shown above — can carry serious risks for your business. Research shows that users decide within just 0.5 seconds whether they’ll stay on a page or leave. If your site underperforms in these key areas, it could be the deciding factor in whether a potential customer chooses to buy from you — or from someone else.
            </p>

            <div className="border flex flex-col justify-center items-center">
                <Image src="/picture/perfect.png" width={1000} height={300} alt="Bad Example of Lighthouse Score" />
                <span>Lighthouse Report Score</span>

            </div>
            <p>
            At HumannDesign, our goal is to bring your website as close to a perfect score as possible — while adding the creative edge that makes your brand stand out. Using tools like Google Lighthouse, AI-driven insights, and a suite of proven technologies, we deliver the numbers you need to protect your revenue and maximize your online potential.
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScscm-zWaIUbfcxMG8tF53DjUm1XpgUB6h6QRc0yWB_d3lq6w/viewform?usp=preview" className="text-red-500 cursor-pointer "> Start your audit now.</a>
            </p>
            </motion.section>



        <motion.footer
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs text-gray-500 py-4"
        >
          © 2025 — Crafted by 
          <a href="https://humann.design" target="_blank" className="font-semibold hover:underline ml-1">
            HUMANNDESIGN
          </a>
      </motion.footer>

        </section>
    
        </Suspense>
        </>
    )
}
)

export default AboutUsSection;