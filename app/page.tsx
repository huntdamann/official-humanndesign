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
import Header from '@/src/slices/Header'
import Footer from '../src/slices/Footer'
import useMediaQuery from '../src/hooks/useMediaQuery'

import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  // const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
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





  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
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
            gridRow: "1 / span 6",
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
          backgroundColor: "#1d9797",
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
  

 

  
 
  return (
    <>
     <Header ref={headerRef} menuRef={burgerRef}/> 
     <section  ref={gridRef} className="grid-container">

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
              <h1>Design Engineer</h1>
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
                <span>Just a regular guy that likes to make cool things for people </span>
              </div>
             
            </div>

          </div>
           {/* Name */}
           <div ref={elementSixRef} className="grid-element el-6">
              <span>Hunter Mann</span>
          </div> 


          {/* About Me */}
         <div ref={elementRef} className="grid-element el-1">
              <h3>About Me:</h3>
              <p className=""> Your favorite engineer&apos;s favorite engineer — I build, design, and solve whatever you need.</p>
          </div>
          
          {/* Offerings */}
          <div ref={elementTwoRef} className="grid-element el-2">
          <h3>Offerings:</h3>
              <ul>
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
         
          
          
        </section>




        {/* <section className="section-info">
          <div style={{
            position: "absolute",
            height: "500px",
            borderRadius: "20px",
            width: "500px",
            right: "2rem",
            top: "5rem",
            padding: "1rem",
            marginLeft: "1rem",
            backgroundColor: "rgb(255, 255, 255, 0.9)",
            color: "black"
          }}>
            <span>
              
              Design is the backbone of creativity—the invisible structure that unites music, art, photography, videography, and every expressive medium into a coherent experience.

            </span>
          </div>
            <Scene />
        </section> */}
        <WhoWeAre />
        <section className="section-info">
          <h2>Offerings</h2>
          <SimpleMenu />
        </section>
        <RecentWork />
        {/* Desing is invisible Section */}
        <section className="section-content-1">
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
