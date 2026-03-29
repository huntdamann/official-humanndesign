import React, { useRef  } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useMediaQuery from '../../hooks/useMediaQuery'

export function Model({ active, ...props }) {
    const { nodes, materials } = useGLTF('/3dassets/cave_on_an_alien_planet_skybox.glb')

    const groupRef = useRef()
    const targetRotation = Math.PI * 1.5 // how far to rotate (adjust this)
    const hasReached = useRef(false)
    const isSmallDevice = useMediaQuery("(min-width: 320px) and (max-width: 425px)");

    useFrame((_, delta) => {
      if (!groupRef.current || !active || hasReached.current) return
  
      const current = groupRef.current.rotation.y
      const remaining = targetRotation - current
  
      if (Math.abs(remaining) < 0.01) {
        // Snap to exact target and stop
        groupRef.current.rotation.y = targetRotation
        hasReached.current = true
        return
      }
  
      // Lerp toward target — higher factor = faster
      groupRef.current.rotation.y = THREE.MathUtils.lerp(current, targetRotation, 0.008)
    })
  
    return (
        <group {...props} ref={groupRef} dispose={null}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={4091.932}
          />
        </group>
      </group>
    )
  }

  useGLTF.preload('/3dassets/cave_on_an_alien_planet_skybox.glb')
