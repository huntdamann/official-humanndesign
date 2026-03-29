'use client'


import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import { DepthOfField } from '@react-three/postprocessing'
// import { OrbitControls } from '@react-three/drei'

// import Stats from 'stats.js'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import * as THREE from 'three'
import { Model } from './Skybox'

gsap.registerPlugin(ScrollTrigger)

export default function Scene() {

    const sceneRef = useRef(null)
    // const modelRef = useRef<THREE.Group>(null)
    // const statsRef = useRef(null)
    const [frameloop, setFrameloop] = useState('always');

    const [skyboxActive, setSkyboxActive] = useState(false)



    useEffect(() => {
      const handleVisibilityChange = () => setFrameloop(document.hidden ? 'never' : 'always');
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);
    // useEffect(() => {
    //   const stats = new Stats()
    //   stats.showPanel(0) // start on FPS panel
    //   stats.dom.style.position = 'fixed'
    //   stats.dom.style.top = '0px'
    //   stats.dom.style.left = '0px'
    //   stats.dom.style.zIndex = '9999'
    //   document.body.appendChild(stats.dom)
    //   statsRef.current = stats
  
    //   const loop = () => {
    //     stats.begin()
    //     stats.end()
    //     requestAnimationFrame(loop)
    //   }
    //   requestAnimationFrame(loop)
  
    //   return () => {
    //     document.body.removeChild(stats.dom)
    //   }
    // }, [])
    useEffect(() => {
      ScrollTrigger.create({
        trigger: sceneRef.current,
        start: "top 80%",
        once: true, // only fires once
        onEnter: () => setSkyboxActive(true),
      })
    }, [])

   
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
            
              frameloop={frameloop} dpr={[1, 2]} style={{background: '#000000'}}>



                <Model active={skyboxActive} />
                {/* <ambientLight intensity={0.5} />
                <directionalLight intensity={2} position={[0, 2, 3]} /> */}


                {/* Post Processing */}
                 {/* <DepthOfField
                  focusDistance={0} // where to focus
                  focalLength={0.02} // focal length
                  bokehScale={2} // bokeh size
                /> */}
            </Canvas>
        </div>

    )
}

