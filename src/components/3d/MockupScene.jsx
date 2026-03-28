'use client'


import React from 'react'
import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { DepthOfField } from '@react-three/postprocessing'




export default function MockupScene() {

    const sceneRef = useRef(null)
 




  
  

   
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
            
            dpr={[1, 2]} style={{background: '#000000'}}>



                

                <ambientLight intensity={0.5} />
                <directionalLight intensity={2} position={[0, 2, 3]} />


           
            </Canvas>
        </div>

    )
}

