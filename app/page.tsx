"use client"

import {  useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "motion/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { TiArrowDown } from "react-icons/ti";


import WhoWeAre from "@/src/slices/WhoWeAre"
import RecentWork from "@/src/slices/RecentWork"
import CTA from "@/src/slices/CTA"
import Scene from "@/src/components/3d/Scene"
import SimpleMenu from '../src/components/SimpleMenu'
import { StockTicker } from "@/src/components/ui/Marquee"
import GenericButton from "@/src/components/ui/GenericButton"
import Mockups from "@/src/slices/Mockups"
import Header from '@/src/slices/Header'
import Footer from '../src/slices/Footer'
import useMediaQuery from '../src/hooks/useMediaQuery'

import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  // const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
    const grid = useRef<HTMLDivElement>(null)

  const contentRef = useRef<HTMLDivElement>(null)
  const instructionRef = useRef<HTMLDivElement>(null)

  const profileRef = useRef<HTMLDivElement>(null)


  const elementRef = useRef<HTMLDivElement>(null)
  const elementFourRef = useRef<HTMLDivElement>(null)
  const elementThreeRef = useRef<HTMLDivElement>(null)
  const elementTwoRef = useRef<HTMLDivElement>(null)
  const text = "Checkout The Blog"


  // Small Device Media Query
  const isSmallDevice = useMediaQuery("(min-width: 320px) and (max-width: 425px)");



  const headerRef = useRef<HTMLElement>(null)
  const elementFiveRef = useRef<HTMLDivElement>(null)
  const elementSixRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLSpanElement>(null)


  //Process Adding Apple Like Animation

  //Prepare Image Sequence Frames
  //Setup Canvas and image dimensions
  //Load Images 
  //Draw first frame immediately 
  //Setup trigger to update canvas image on scroll
  //Animate in
  //Handle Heading Text transitions


  // Not covered is ...

  //Mobile responsiveness
  //loading images upfront
  //Error Handling




  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        yPercent: -100, // slides the pinned section up

        scrollTrigger: {
          trigger: grid.current,
          pin: true,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
  
      const el = elementFiveRef.current!
  
      // ---- Animations that run at 0.001 ----
  
      // Element Five
      if (!isSmallDevice) {
        tl.to(
          el,
          {
            height: "auto",
            width: "auto",
            gridColumn: "4 / span 3",
            gridRow: "2 / span 6",
            position: "relative",
            borderRadius: "20px",
            duration: 0.3,
            ease: "power3.inOut",
            clearProps: "none",
          },
          0.001
        )
      } else {
        tl.to(el, { height: "50dvh" }, 0.001)
      }
  
      // Grid
      if (isSmallDevice) {
        tl.to(gridRef.current!, { y: 60 }, 0.001)
      }
  
      // Header
      if (!isSmallDevice) {
        tl.to(
          headerRef.current!,
          {
            width: "50vw",
            borderRadius: "15px",
            duration: 0.6,
            ease: "power3.out",
          },
          0.001
        )
      }
  
      tl.to(
        headerRef.current!,
        {
          color: "#000000",
          backgroundColor: "hsl(0, 0%, 80%, 0.9)",
          duration: 0.1,
          ease: "power2.out",
        },
        0.001
      )
  
      tl.to(
        gridRef.current!,
        {
          backgroundColor: "#0d0d0d",
          duration: 0.1,
          ease: "power2.out",
        },
        0.001
      )
  
      // Burger
      if (isSmallDevice) {
        tl.to(
          burgerRef.current!,
          {
            color: "blue",
            duration: 0.1,
            ease: "power2.out",
          },
          0.001
        )
      }
  
      tl.to(
        burgerRef.current!,
        {
          color: "#ffffff",
          duration: 0.1,
          ease: "power2.out",
        },
        0.001
      )
  
      // Content + Instruction fade out
      tl.to(
        contentRef.current!,
        {
          opacity: 0,
          duration: 0.1,
          scale: 0.55,
        },
        0.001
      )
  
      tl.to(
        instructionRef.current!,
        {
          opacity: 0,
          duration: 0.1,
          scale: 0.55,
        },
        0.001
      )
  
      // ---- Profile ----
      tl.to(
        profileRef.current!,
        {
          y: "0",
          opacity: 1,
        },
        0.003
      )
  
     
      // ---- Grid elements fly in (desktop only) ----
      if (!isSmallDevice) {
        tl.fromTo(
          elementRef.current!,
          { y: 200, x: -600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.3
        )
        tl.fromTo(
          elementFourRef.current!,
          { y: 200, x: -600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.35
        )
        tl.fromTo(
          elementSixRef.current!,
          { y: 300, opacity: 0 },
          { y: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.35
        )
        tl.fromTo(
          elementThreeRef.current!,
          { y: 200, x: 600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.4
        )
        tl.fromTo(
          elementTwoRef.current!,
          { y: 200, x: 600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.45
        )
      }
    })
  
    ScrollTrigger.refresh()
  
    return () => ctx.revert()
  }, [isSmallDevice])
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementFiveRef.current!,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.2 }
      )
      gsap.fromTo(
        headerRef.current!,
        { opacity: 0, y: -60 },
        { opacity: 1, y: 0, duration: 1.5, animationDelay: 1, ease: "power2.out", delay: 0.2 }
      )
    })
  
    return () => ctx.revert()
  }, [])

  
 
  return (
    <>
     <Header ref={headerRef} menuRef={burgerRef}/> 
     <section ref={grid} className="h-[150svh] relative z-10 lg:h-[100svh] w-full">
       
        <div  ref={gridRef} className="grid-container">

            {/* Hero */}
            <div ref={elementFiveRef} className="grid-element el-5">
              {/* Background video */}
              <div className="bg-video">
                <Image loading="eager" src='/snowy.jpg' fill alt="Profile Pic" style={{objectFit: 'cover', borderRadius: "20px"}} />

              </div>
                
              <div ref={profileRef} className="profile-pic">
                  <Image src='/images/profile.png' fill alt="Profile Pic" style={{objectFit: 'cover', borderRadius: "20px"}} />
              </div>

              <div ref={contentRef} className="element-content">
                <div className="hero-heading">
                <h1>Design <span className="text-[#4dc9c9]">Engineer</span></h1>
                {/* <div className="slider-containter">

                <div ref={slider} className="sub-heading">
                  <p ref={firstText}>Web Design</p>
                  <p ref={secondText}>Web Development</p>

                </div>

                </div> */}

                    <StockTicker />

              
                <div className="super-script">
                  [2433]
                </div>
                </div>
                <div className="hero-tag">
                  <span>Multi-disciplined engineer that builds across different domains</span>
                </div>
              
              </div>

            </div>
            {/* Name */}
            <div ref={elementSixRef} className="grid-element el-6">
                <span className="text-[#4dc9c9]">Hunter Mann</span>
            </div> 


            {/* About Me */}
          <div ref={elementRef} className="grid-element el-1">
                <h3 className="text-[#4dc9c9]">About Me</h3>
                <p className="text-[#c8c8c8]"> Your favorite engineer&apos;s favorite engineer — I build, design, and solve whatever you need.</p>
            </div>
            
            {/* Offerings */}
            <div ref={elementTwoRef} className="grid-element el-2">
            <h3 className="text-[#4dc9c9]">Offerings</h3>
                <ul className="text-[#c8c8c8]">
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Graphic Design</li>
                  <li>Vision Creation</li>
                  <li>Product Visualization</li>

                </ul>
            </div>
            
            <div ref={elementThreeRef} className="grid-element el-3">
            <video
                src="/videos/Rough_Draft.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div ref={elementFourRef} className="grid-element el-4">
              <video
                src="/videos/site.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div ref={instructionRef} id="instructions" className="animate-bounce">
                  <span style={{fontSize: "2.5em"}}><TiArrowDown />
                  </span>
                  <span>Scroll Down</span>
            </div>
          
            
            
        </div>

     </section>

        <WhoWeAre />
        <section className="relative h-screen w-screen">

        <div id="scene-data-container" className='absolute border  text-[#4dc9c9] rounded-[10px] top-20 p-6 lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] z-50 left-10'>
              <span id="scene-data" className="lg:text-[2.2em] text-[1.2em]">
                Design is the backbone of creativity, the unseen force that connects everything together...
              </span>
            </div>
            <Scene />

        </section>
        <section className="section-info">
          <h2>Offerings</h2>
          <SimpleMenu />
        </section>
        <RecentWork />
        <Mockups />
        {/* Desing is invisible Section */}
        <section className="section-content-2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{
                once: false,
                amount: 0.6,
              }}
            >
              The best design is invisible...
            </motion.h2>
        </section>

        {/* Call To Action Section */}
        <CTA />


        <div className="blog-plug">
          <div className="">
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
             ))}
          </div>

          
          <GenericButton text={"Go"} link={"/blog"} />
        </div>
        <Footer />
       

    </>
  )
}
