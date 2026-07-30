"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { DepthOfField } from '@react-three/postprocessing'
// import { OrbitControls } from '@react-three/drei'

// import Stats from 'stats.js'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as THREE from 'three'
import { Model } from "./Skybox";
import useMediaQuery from "../../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const sceneRef = useRef(null);
  const [frameloop, setFrameloop] = useState("always");

  const [skyboxActive, setSkyboxActive] = useState(false);
  const isSmallDevice = useMediaQuery(
    "(min-width: 320px) and (max-width: 425px)"
  );

  useEffect(() => {
    const handleVisibilityChange = () =>
      setFrameloop(document.hidden ? "never" : "always");
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sceneRef.current,
      start: isSmallDevice ? "top+=1000 top" : "top 80%",
      once: true, // only fires once
      onEnter: () => setSkyboxActive(true),
    });
    return () => trigger.kill();
  }, [isSmallDevice]);

  return (
    <div ref={sceneRef} className="scene-container">
      <Canvas
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        frameloop={frameloop}
        dpr={[1, 2]}
        style={{ background: "#000000" }}
      >
        <Model active={skyboxActive} />
      </Canvas>
    </div>
  );
}
