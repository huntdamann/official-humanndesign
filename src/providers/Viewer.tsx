'use client'
import React from 'react'
import { useSpring, animated } from '@react-spring/three';

import { Canvas } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'

import ModelCandle from '../components/3d/Candle'
import { Model } from '../components/3d/Bottle'

const sceneMap = {
    candle: <ModelCandle spacing={null} />,
}

const SPACING = 4; // distance between each item


const Scene3D = ({ modelSelect, index }: { modelSelect: string; index: number }) => {
    const { posX } = useSpring({
        posX: -index * SPACING,
        config: { mass: 1, tension: 170, friction: 26 }
    });

    return (
        <animated.group position-x={posX}>
            <Model />
            <ModelCandle spacing={SPACING} />
           
           
        </animated.group>
    );
};

export default function Viewer({ modelSelect, positionX }: { modelSelect: string; positionX: number }) {
    return (
        <div style={{ width: '100%', minHeight: '300px' }}>
            <Canvas style={{height: "300px"}} camera={{ position: [0, 0, 5], fov: 20 }}>
                <ambientLight intensity={1.8} />
                <pointLight intensity={5} position={[0, 6, 0]} />
                <Float>
                    <Scene3D modelSelect={modelSelect} index={positionX} />
                </Float>
                {/* <Environment preset="city" /> */}
            </Canvas>
        </div>
    )
}