import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelCandle({spacing}) {
  const { nodes, materials } = useGLTF('/3dassets/onlyflyshit.glb')
  return (
    <group position={[spacing, 0, 0]} scale={[0.6, 0.6, 0.6]} rotation={[0, 9, 0]}  dispose={null}>
      <group scale={[0.756, 0.424, 0.756]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label.geometry}
        material={materials['Material.001']}
        position={[-0.02, 0, 0]}
        rotation={[Math.PI, -0.189, Math.PI]}
        scale={[1.005, 0.539, 1.005]}
      />
    </group>
  )
}

useGLTF.preload('/onlyflyshit.glb')