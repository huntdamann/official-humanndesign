import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useMediaQuery from "../../hooks/useMediaQuery";

export const Model = React.memo(function Model({ active, ...props }) {
  const { nodes, materials } = useGLTF(
    "/3dassets/cave_on_an_alien_planet_skybox.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Sphere_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={4091.932}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/3dassets/cave_on_an_alien_planet_skybox.glb");
