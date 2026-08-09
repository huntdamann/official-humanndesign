"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/src/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/all";

import { TiArrowDown } from "react-icons/ti";

import HeroWorld from "../src/components/3d/HeroWorld";
import WhoWeAre from "@/src/slices/WhoWeAre";
import RecentWork from "@/src/slices/RecentWork";
import CTA from "@/src/slices/CTA";
import { SocialCTASection } from "@/src/slices/SocialCTA";
import Scene from "@/src/components/3d/Scene";
import SimpleMenu from "../src/components/SimpleMenu";
import { StockTicker } from "@/src/components/ui/Marquee";
import Mockups from "@/src/slices/Mockups";
import Header from "@/src/slices/Header";
import VideoPlayer from "@/src/components/ui/VideoPlayer";
import Footer from "../src/slices/Footer";
import useMediaQuery from "../src/hooks/useMediaQuery";
import InteractiveGradient from "../src/webgl/InteractiveGradient";

import Image from "next/image";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Home() {
  // const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const heroWorldRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);
  const vibeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const videoPrevRef = useRef<HTMLDivElement>(null);
  const [videoPrev, setVideoPrevActive] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [vibeSelect, setVibeSelect] = useState("main");
  const profileRef = useRef<HTMLDivElement>(null);

  const mRef = useRef<HTMLLIElement>(null);
  const pRef = useRef<HTMLLIElement>(null);
  const dRef = useRef<HTMLLIElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const elementFourRef = useRef<HTMLDivElement>(null);
  const elementThreeRef = useRef<HTMLDivElement>(null);
  const elementTwoRef = useRef<HTMLDivElement>(null);
  const text = "Checkout The Blog";
  const [screenSize, setScreenSize] = useState(0);

  // useEffect(() => {
  //   // Get screen size on load
  //   const handleSet = () => {
  //     // const width = window.innerWidth;
  //     setScreenSize(window.innerWidth);
  //     console.log("Screen Size Set:", window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleSet);
  //   return () => window.removeEventListener("resize", handleSet);
  // }, []); // Empty dependency array ensures this runs only once on load

  // Small Device Media Query
  const isSmallDevice = (screenSize ?? 0) <= 1023;
  const isDesktopBreak = (screenSize ?? 0) <= 1024;
  console.log(isSmallDevice);
  const headerRef = useRef<HTMLElement>(null);
  const elementFiveRef = useRef<HTMLDivElement>(null);
  const elementSixRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLSpanElement>(null);
  const createRef = useRef<HTMLSpanElement>(null);
  const worldOneRef = useRef<HTMLDivElement>(null);
  const entryRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const entryButtonRef = useRef<HTMLButtonElement>(null);
  const sectionWorldRef = useRef<HTMLElement>(null);
  const exitRef = useRef<HTMLButtonElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);

  const [windowSize, setWindowSize] = useState({ width: 1024, height: 0 });

  // animate from the previous state to the current one:

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      console.log("Menu Open");
    } else {
      setIsOpen(true);
      console.log("Menu Closed");
    }
  };
  const handleVibeClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const vibe = target.dataset.vibe;
    if (!vibe) return;
    if (vibe === "dark") {
      setVibeSelect("dark");
      dRef.current?.classList.add("vibe-highlight");

      pRef.current?.classList.remove("vibe-highlight");
      mRef.current?.classList.remove("vibe-highlight");

      console.log("Vibeset:", vibe);
    } else if (vibe === "main") {
      setVibeSelect("main");
      mRef.current?.classList.add("vibe-highlight");
      pRef.current?.classList.remove("vibe-highlight");
      dRef.current?.classList.remove("vibe-highlight");
    } else if (vibe === "hustle") {
      setVibeSelect("hustle");
      pRef.current?.classList.add("vibe-highlight");
      mRef.current?.classList.remove("vibe-highlight");
      dRef.current?.classList.remove("vibe-highlight");
    }
  };

  // Listen for window resize
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //     console.log(
  //       "Window resized:",
  //       window.innerWidth,
  //       "x",
  //       window.innerHeight
  //     );
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       elementFiveRef.current!,
  //       { opacity: 0, y: 100 },
  //       { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.2 }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        yPercent: -100,
        scrollTrigger: {
          trigger: grid.current,
          pin: true,
          start: "top top",
          end: "+=800",
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const el = elementFiveRef.current!;

      if (window.innerWidth >= 1024) {
        // Desktop animations
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
        );
        tl.to(
          gridRef.current!,
          {
            backgroundColor: "#0d0d0d",
            opacity: 0.9,

            duration: 0.1,
            ease: "power3.out",
          },
          0.001
        );

        tl.to(
          headerRef.current!,
          {
            color: "#000000",
            backgroundColor: "hsl(0, 0%, 80%, 0.9)",
            duration: 0.1,
            ease: "power2.out",
            borderRadius: "10px",
            width: "50%",
          },
          0.001
        );

        tl.to(
          burgerRef.current!,
          {
            color: "#ffffff",
            duration: 0.1,
            ease: "power2.out",
          },
          0.001
        );

        tl.to(
          contentRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );

        tl.to(
          instructionRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );
        tl.to(
          heroWorldRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );

        tl.to(
          vibeRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );

        tl.to(
          profileRef.current!,
          {
            y: "0",
            opacity: 1,
          },
          0.003
        );

        tl.fromTo(
          elementRef.current!,
          { y: 200, x: -600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.3
        );
        tl.fromTo(
          elementFourRef.current!,
          { y: 200, x: -600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.35
        );
        tl.fromTo(
          elementSixRef.current!,
          { y: 300, opacity: 0 },
          { y: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.35
        );
        tl.fromTo(
          elementThreeRef.current!,
          { y: 200, x: 600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.4
        );
        tl.fromTo(
          elementTwoRef.current!,
          { y: 200, x: 600, opacity: 0 },
          { y: 0, x: 0, duration: 0.4, ease: "power3.out", opacity: 1 },
          0.45
        );
      }

      // Mobile animations
      if (window.innerWidth < 1024) {
        tl.to(el, {}, 0.001);
        tl.to(grid.current!, { paddingTop: 30, paddingBottom: 50 }, 0.001);
        console.log("Mobile Breakpoint Reached");

        tl.to(
          headerRef.current!,
          {
            color: "#ffffff",

            backgroundColor: "hsl(0, 0%, 80%, 0.9)",
            duration: 0.1,
            ease: "power2.out",
            borderRadius: "10px",
          },
          0.001
        );

        tl.to(
          gridRef.current!,
          {
            backgroundColor: "#0d0d0d",
            duration: 0.1,
            ease: "power2.out",
          },
          0.001
        );

        tl.to(
          elementTwoRef.current!,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.002
        );
        tl.to(
          elementFiveRef.current!,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.002
        );

        tl.to(
          elementFourRef.current!,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.002
        );
        tl.to(elementThreeRef.current!, {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });
        tl.to(
          elementRef.current!,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.002
        );
        tl.to(
          elementSixRef.current!,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.002
        );
        tl.to(
          burgerRef.current!,
          {
            color: "blue",
            duration: 0.1,
            ease: "power2.out",
          },
          0.001
        );

        tl.to(
          burgerRef.current!,
          {
            color: "#ffffff",
            duration: 0.1,
            ease: "power2.out",
          },
          0.001
        );

        tl.to(
          contentRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );

        tl.to(
          instructionRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );
        tl.to(
          heroWorldRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );

        tl.to(
          vibeRef.current!,
          {
            opacity: 0,
            duration: 0.1,
            scale: 0.55,
          },
          0.001
        );

        tl.to(
          profileRef.current!,
          {
            y: "0",
            opacity: 1,
          },
          0.003
        );
      }

      // if (isDesktopBreak) {
      //   console.log("Desktop Breakpoint Reached");
      //   tl.to(
      //     gridRef.current!,
      //     {
      //       y: 0,
      //       backgroundColor: "#0d0d0d",
      //       duration: 0.1,
      //       ease: "power3.out",
      //     },
      //     0.001
      //   );

      //   tl.to(
      //     headerRef.current!,
      //     {
      //       color: "#000000",
      //       backgroundColor: "hsl(0, 0%, 80%, 0.9)",
      //       duration: 0.1,
      //       ease: "power2.out",
      //       borderRadius: "10px",
      //       width: "50%",
      //     },
      //     0.001
      //   );
      //   tl.to(
      //     el,
      //     {
      //       height: "auto",
      //       width: "auto",
      //       gridColumn: "4 / span 3",
      //       gridRow: "2 / span 6",
      //       position: "relative",
      //       borderRadius: "20px",
      //       duration: 0.3,
      //       ease: "power3.inOut",
      //       clearProps: "none",
      //     },
      //     0.001
      //   );
      // }
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [windowSize]);

  useLayoutEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId); // Clear the previous timeout
      timeoutId = setTimeout(() => {
        setScreenSize(window.innerWidth); // Update screen size after delay
      }, 800); // D
      setIsOpen(false); // Reset menu state on resize
      console.log("screen changed");

      console.log("Screen Size Set:", screenSize);
      gsap.to(".vibe-select-container", { xPercent: 0 }); // Reset position
    };

    handleResize(); // Call it once to set the initial sizexd
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sentences = ["Creative Engineer."];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.context scopes selectors to this component and
    // gives you a single cleanup function — essential in React
    // since effects can re-run (e.g. StrictMode double-invokes in dev)
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".line");

      lines.forEach((line, i) => {
        gsap.to(line, {
          scrambleText: { text: sentences[i], chars: "█▓▒░" },
          duration: 5.5,

          ease: "sine.inOut",
          delay: i * 2,
          repeat: -1,
          yoyo: true,
        });
      });
    }, containerRef); // scope: only finds .line inside this ref

    return () => ctx.revert(); // cleanup: kills tweens, restores DOM on unmount
  }, []); // empty deps = run once on mount

  const handleWorldClick = () => {
    console.log("World Clicked");
    if (!worldOneRef.current) return;

    const state = Flip.getState(worldOneRef.current);
    worldOneRef.current.classList.toggle("element-expanded");
    Flip.from(state, {
      duration: 0.8,
      ease: "power1.inOut",
      absolute: true,
      onComplete: () => {
        console.log("Flip Animation Complete");
        if (!entryRef.current || !previewRef.current) return;
        entryRef.current.classList.toggle("show");
        previewRef.current.classList.toggle("hide");
        entryButtonRef.current?.classList.toggle("add-pointer");
        setUserClicked(true);
      },
    });
  };

  const handleEntryClick = () => {
    if (!sectionWorldRef.current || !exitRef.current) return;
    sectionWorldRef.current.classList.toggle("hide");
    exitRef.current.classList.toggle("show");
    promptRef.current?.classList.toggle("show");
  };

  const handleExitClick = () => {
    if (!sectionWorldRef.current || !exitRef.current || !promptRef.current)
      return;

    setUserClicked(false);
    promptRef.current.classList.toggle("show");
    exitRef.current.classList.toggle("show");
    sectionWorldRef.current.classList.toggle("hide");
  };

  return (
    <>
      <Header ref={headerRef} menuRef={burgerRef} />
      <main>
        <section ref={grid} id="grid-section" className="">
          {/* Scrollable Grid */}
          <div ref={gridRef} className="grid-container">
            <div ref={elementFiveRef} className="grid-element el-5">
              <div ref={profileRef} className="profile-pic">
                <Image
                  src="/images/profile.png"
                  fill
                  alt="Profile Pic"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 20%",
                    borderRadius: "20px",
                  }}
                />
              </div>

              <div ref={contentRef} className="element-content">
                <div ref={containerRef} className="hero-heading">
                  <h1 className="">
                    {/* <span
                  
                      style={{
                        color: vibeSelect === "dark" ? "purple" : "#97d4d4",
                        transition: "all 0.8s ease",
                      }}
                    >
                      {" "}
                      Creative{" "}
                    </span>
                    Engineer */}
                  </h1>
                  <p className="line">█▓▒░ ▒█▓░ █▒▓░ ▓█▒░</p>
                </div>
                <div className="super-script">[2433]</div>

                <div className="hero-tag">
                  <span>{""}</span>
                </div>
              </div>
            </div>
            <div ref={elementSixRef} className="grid-element el-6">
              <span className="text-[#4dc9c9]">Hunter Mann</span>
            </div>

            <div ref={elementRef} className="grid-element el-1">
              <h3 className="text-[#4dc9c9]">About Me</h3>
              <p className="text-[#c8c8c8]">
                {" "}
                Just an engineer that likes to make problem solving and
                solutions not only look cool, but also feel right.
              </p>
            </div>

            <div ref={elementTwoRef} className="grid-element el-2">
              <h3 className="text-[#4dc9c9]">Offerings</h3>
              <ul className="text-[#c8c8c8]">
                <li>ThreeJS/WebGL Development</li>
                <li>Web + Motion Design</li>
                <li>3D Experiences</li>
                <li>Vision Creation</li>
                <li>Product Visualization</li>
              </ul>
            </div>

            {/* <div ref={elementThreeRef} className="grid-element el-3">
              <div className="element-container">
                <Image
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                  src="/snowy.jpg"
                  fill
                  alt="snowy background"
                ></Image>
              </div>
            </div> */}
            {/* <div ref={elementFourRef} className="grid-element el-4">
              <video
                src="/videos/site.mp4"
                poster="/snowy.jpg"
                // autoPlay
                muted
                loop
                preload="auto"
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div> */}
          </div>
          {/* Bottom Half of Hero Section */}
          <HeroWorld container={heroWorldRef} />

          <div ref={instructionRef} id="instructions" className="">
            <span>Scroll Into My World</span>
          </div>
          {/* Vibe Select Container */}
          <div
            ref={vibeRef}
            className={`vibe-select-container ${isOpen ? "open-vibe" : ""}`}
          >
            <ul className="vibe-select">
              <li
                ref={mRef}
                onClick={handleVibeClick}
                className="vibe vibe-highlight"
                data-vibe="main"
              >
                M-Mode
              </li>
              <li
                ref={pRef}
                onClick={handleVibeClick}
                className="vibe"
                data-vibe="hustle"
              >
                H-Mode
              </li>
              <li
                ref={dRef}
                onClick={handleVibeClick}
                className="vibe"
                data-vibe="dark"
              >
                D-Mode
              </li>
            </ul>
            <button onClick={toggleMenu} className="vibe-o-c">
              Click
            </button>
          </div>
        </section>
        <section ref={sectionWorldRef} className="three-d-world">
          <h2 className="immersive-scene-header">3D Worlds</h2>
          <div className="world-entry-container">
            <div
              ref={worldOneRef}
              onClick={handleWorldClick}
              className="world-entry"
            >
              <div ref={entryRef} className="entry-prompt">
                <button
                  ref={entryButtonRef}
                  onClick={handleEntryClick}
                  className="entry-button"
                >
                  Click to Enter
                </button>
              </div>
              <Image
                src="/snowy.jpg"
                fill
                ref={previewRef}
                alt="snowy background"
                className="world-image-preview"
              ></Image>
            </div>
          </div>
        </section>
        <section className="wrld-holder">
          <button
            onClick={handleExitClick}
            ref={exitRef}
            className="wrld-overlay"
          >
            Click to exit
          </button>
          <Scene clicked={userClicked} />
          <div ref={promptRef} className="wrld-text">
            <span>Move Around</span>
          </div>
        </section>

        {/* <InteractiveGradient option={vibeSelect} size={isSmallDevice} /> */}

        {/* <WhoWeAre /> */}
        {/* <section className="relative min-h-screen w-screen"> */}
        {/* <div
            id="scene-data-container"
            className="absolute border  text-[#4dc9c9] rounded-[10px] top-20 lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] z-50 left-10"
          >
            <span id="scene-data" className="lg:text-[2.2em] text-[1.2em]">
              Design is the backbone of creativity, the unseen force that
              connects everything together...
            </span>
          </div> */}
        {/* <Scene /> */}
        {/* </section> */}
        {/* <section id="services" className="section-info">
          <h2>Offerings</h2>
          <SimpleMenu />
        </section> */}
        {/* <RecentWork /> */}
        {/* <VideoPlayer /> */}
        {/* <Mockups /> */}
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
        {/* <CTA /> */}

        {/* <SocialCTASection /> */}

        {/* <div className="absolute border">
          <span>{windowSize.width} px</span>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
