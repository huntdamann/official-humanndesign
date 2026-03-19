import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
export function Model(props) {

  const ref = useRef();
  useLayoutEffect(() => {
    if (!ref.current) return
  
    const ctx = gsap.context(() => {
      gsap.to(ref.current.rotation, {
        x: -0.04,
        ease: "none",
        scrollTrigger: {
          trigger: ".scene-container",
          scrub: true,
          start: "20% top",
          end: "70% top",
        },
      })
    })
  
    return () => ctx.revert()
  }, [])

  const { nodes, materials } = useGLTF('/assets/scene.glb')
  return (
    <group ref={ref} {...props} position={[0, -3.5, 0]} dispose={null}>
      <group position={[0.732, 0, 0]} rotation={[-Math.PI / 2, 0, -0.833]} scale={0.143}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-0.55, -14.406, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group position={[0, 0, 19]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0'].geometry}
                  material={materials['Material_1.002']}
                  position={[62.966, 256.009, -19]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0001'].geometry}
                  material={materials['Material_1_0.002']}
                  position={[-62.966, 256.011, -18.998]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0002'].geometry}
                  material={materials['Material_1_1.002']}
                  position={[0, 256.011, -81.973]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0003'].geometry}
                  material={materials['Material_1_2.002']}
                  position={[0, 256.01, 43.966]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0004'].geometry}
                  material={materials['Material_1_3.002']}
                  position={[67.405, 210.835, -18.998]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0005'].geometry}
                  material={materials['Material_1_4.002']}
                  position={[-67.405, 210.835, -19.002]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0006'].geometry}
                  material={materials['Material_1_5.002']}
                  position={[0.002, 210.835, -86.405]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Material_#1_0007'].geometry}
                  material={materials['Material_1_6.002']}
                  position={[-0.002, 210.835, 48.405]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Steel_#1_0'].geometry}
                  material={materials['Steel_1.002']}
                  position={[232, 12.231, -19]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['uploads_files_147002_Piano_chair_Steel_#1_0001'].geometry}
                  material={materials['Steel_1_0.002']}
                  position={[-232, 12.231, -19]}
                />
                <group position={[0.905, 167.192, -19.686]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025'].geometry}
                    material={materials['Cherry_1_11.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_1'].geometry}
                    material={materials['Cherry_1_8.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_2'].geometry}
                    material={materials['Cherry_1_1.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_3'].geometry}
                    material={materials['Cherry_1.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_4'].geometry}
                    material={materials['Cherry_1_0.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_5'].geometry}
                    material={materials['Cherry_1_2.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_6'].geometry}
                    material={materials['Cherry_1_3.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_7'].geometry}
                    material={materials['Cherry_1_4.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_8'].geometry}
                    material={materials['Cherry_1_5.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_9'].geometry}
                    material={materials['Cherry_1_6.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_10'].geometry}
                    material={materials['Cherry_1_7.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_11'].geometry}
                    material={materials['Cherry_1_9.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_12'].geometry}
                    material={materials['Material_1_7.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_13'].geometry}
                    material={materials['Material_1_8.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_14'].geometry}
                    material={materials['Material_1_9.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_15'].geometry}
                    material={materials['Material_1_10.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_16'].geometry}
                    material={materials['Material_1_11.002']}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['uploads_files_147002_Piano_chair_Cherry_#1_0025_17'].geometry}
                    material={materials['Cherry_1_10.002']}
                  />
                </group>
              </group>
            </group>
            <group scale={10}>
              <group position={[-0.013, -0.864, 0.843]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LayerPIANO_B_KEYS_Paint_Gloss_Black_0.geometry}
                  material={materials['Paint_Gloss_Black.002']}
                  position={[0.011, -0.029, 0]}
                />
              </group>
              <group position={[0, 0.239, 0.047]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LayerPIANO_BRASS_Copper_Rough_0.geometry}
                  material={materials['Copper_Rough.002']}
                  position={[-0.087, -0.587, -0.01]}
                />
              </group>
              <group position={[0, 0.238, 0.596]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LayerPIANO_MAIN_Cherry_0.geometry}
                  material={materials['Cherry.002']}
                  position={[-0.155, -0.138, 0.332]}
                />
              </group>
              <group position={[0, -0.907, 0.82]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LayerPIANO_W_KEYS_Paint_Gloss_White_0.geometry}
                  material={materials['Paint_Gloss_White.002']}
                  position={[0.001, -0.005, 0.001]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-1.762, -0.014, 0.315]} rotation={[-Math.PI / 2, 0, -2.597]} scale={0.902}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.5, 1.763, 0.683]} rotation={[-Math.PI / 2, 0, 0]} scale={0.208}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials.camera_body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.camera_body_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.rings}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.strap}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.handle}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.camera_lens}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.tripod}
            position={[0.5, 1.56, 0.644]}
            scale={[0.1, 0.02, 0.1]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Bottom.geometry}
        material={materials.Bottomfloor}
        scale={4.476}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Top.geometry}
        material={materials['Material.005']}
        position={[-0.065, 8.964, -0.082]}
        rotation={[-Math.PI, 0, 0]}
        scale={4.476}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Side.geometry}
        material={materials['Material.004']}
        position={[-4.454, 4.454, -0.017]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={4.476}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Right.geometry}
        material={materials['Material.006']}
        position={[4.448, 4.484, 0.03]}
        rotation={[0, 0, Math.PI / 2]}
        scale={4.476}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Back.geometry}
        material={materials['Material.001']}
        position={[-0.009, 4.491, -4.476]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.476}
      />
    </group>
  )
}

useGLTF.preload('/assets/scene.glb')
