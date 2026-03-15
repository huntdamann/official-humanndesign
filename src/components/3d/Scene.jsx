'use client'


import React from 'react'
import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { ScrollControls } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { Model } from './Model'

gsap.registerPlugin(ScrollTrigger)

export default function Scene() {

    const sceneRef = useRef(null)
    const modelRef = useRef<THREE.Group>(null)



      useLayoutEffect(() => {
        if (!sceneRef.current) {
            console.log('Something is wrong')
            return 
        }
        console.log(modelRef)
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sceneRef.current,
                    start: "top+=1000 top",
                    end: "bottom+=1000 bottom", 
                    // markers: true,
                    scrub: 1,

                }
            })
           
        })

        return () => ctx.revert()
      }, [])

    return (
        <div ref={sceneRef} className="scene-container">


            <Canvas style={{background: '#000000'}}>


              <Model />

                {/* Lights */}
                {/* <directionalLight intensity={2} position={[0, 2, 3]}/> */}

                <Environment preset="city" />
            </Canvas>
        </div>

    )
}

// function Box(props) {
//     // This reference gives us direct access to the THREE.Mesh object
//     const ref = useRef();
//     // Hold state for hovered and clicked events
//     const [hovered, hover] = useState(false);
//     const [clicked, click] = useState(false);
  
//     useLayoutEffect(() => {
//       if (!ref.current) return
    
//       const ctx = gsap.context(() => {
//         gsap.to(ref.current.rotation, {
//           x: ref.current.rotation.x + 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".scene-container",
//             scrub: true,
//           },
//         })
//       })
    
//       return () => ctx.revert()
//     }, [])
    
  
//     // Return the view, these are regular Threejs elements expressed in JSX
//     return (
//       <mesh
//         {...props}
//         ref={ref}
//         scale={clicked ? 1.5 : 1}
//         onClick={(event) => click(!clicked)}
//         onPointerOver={(event) => hover(true)}
//         onPointerOut={(event) => hover(false)}
//       >
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//       </mesh>
//     );
//   }