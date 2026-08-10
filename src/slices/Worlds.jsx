import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Worlds({ world, entrySetter }) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".three-d-world",
          pin: true,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".desc-1", {
        opacity: 0,
        duration: 0.2,
        ease: "power3.inOut",
      });

      tl.to(".world-one", {
        width: 0,
        duration: 1,
        ease: "power3.inOut",
      }); // starts right after desc-1 finishes, since no position arg = sequential
      tl.to(
        ".square-1",
        {
          opacity: 0.7,
          duration: 0.1,
          rotate: "225deg",
          ease: "power3.inOut",
        },
        "-=0.5" // start 0.5s before world-one's tween ends
      );
      tl.to(
        ".square-2",
        {
          opacity: 1,
          duration: 0.1,
          delay: 0.01,
          rotate: "225deg",
          ease: "power3.inOut",
        },
        "-=0.5" // start 0.5s before world-one's tween ends
      );
      tl.to(
        ".square-3",
        {
          duration: 0.1,
          delay: 0.03,
          rotate: "225deg",
          ease: "power3.inOut",
        },
        "-=0.5" // start 0.5s before world-one's tween ends
      );

      tl.to(".desc-2", {
        opacity: 0,
        duration: 0.2,
        ease: "power3.inOut",
      });
      tl.to(".world-two", {
        width: 0,
        duration: 1,
        ease: "power3.inOut",
      }); // starts right after world-one finishes

      tl.to(
        ".square-1",
        {
          opacity: 0.7,
          duration: 0.1,
          rotate: "405deg",
          ease: "power3.inOut",
        },
        "-=0.5" // start 0.5s before world-one's tween ends
      );
      tl.to(
        ".square-2",
        {
          opacity: 0.5,
          duration: 0.1,
          delay: 0.01,
          rotate: "405deg",
          ease: "power3.inOut",
        },
        "-=0.5" // start 0.5s before world-one's tween ends
      );
      tl.to(
        ".square-3",
        {
          duration: 0.1,
          opacity: 1,

          delay: 0.03,
          rotate: "405deg",
          ease: "power3.inOut",
        },
        "-=0.5" // start 0.5s before world-one's tween ends
      );
    });
    ScrollTrigger.refresh();
    return () => context.revert();
  });
  return (
    <>
      <section ref={world} className="three-d-world">
        <div className="world-entry-container">
          <div className="world-entry world-one">
            <div className="description-world">
              <div className="desc-back"></div>
              <div className="desc desc-1">
                <h3 className="world-title">Cave</h3>
                <span>A small cave to explore</span>
                <button onClick={entrySetter} className="enter-world">
                  Enter
                </button>
              </div>
            </div>

            <div className="backdrop-container">
              <Image
                src="/images/dark_cave.jpeg"
                fill
                // ref={previewRef}
                alt="snowy background"
                className="world-image-preview"
              ></Image>
            </div>
          </div>
          <div className="world-entry world-two">
            <div className="description-world">
              <div className="desc-back"></div>
              <div className="desc desc-2">
                <h3 className="world-title">Mars</h3>
                <span>Under Construction</span>
                {/* <button className="enter-world"></button> */}
              </div>
            </div>

            <div className="backdrop-container">
              <Image
                src="/images/mars.jpeg"
                fill
                // ref={previewRef}
                alt="Mars background"
                className="world-image-preview"
              ></Image>
            </div>
          </div>
          <div className="world-entry world-three">
            <div className="description-world">
              <div className="desc-back"></div>
              <div className="desc">
                <h3 className="world-title">Loading...</h3>
                <span>More experiences soon to come</span>
              </div>
            </div>

            <div className="backdrop-container">
              <Image
                src="/snowy.jpg"
                fill
                // ref={previewRef}
                alt="snowy background"
                className="world-image-preview"
              ></Image>
            </div>
          </div>
        </div>
        <div className="ass-controls">
          <div className="square square-1"></div>
          <div className="square square-2"></div>
          <div className="square square-3"></div>
        </div>
      </section>
    </>
  );
}
