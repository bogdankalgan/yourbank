import * as THREE from 'three'
import fragmentShader from "@/shared/assets/models/Arrow/shaders/fragment.glsl"
import arrowheadFragmentShader from "@/shared/assets/models/Arrow/shaders/arrowhead.fragment.glsl"
import vertexShader from "@/shared/assets/models/Arrow/shaders/vertex.glsl"
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";


export default function Arrow({scale, position, speed = 1, direction = [1,0,0]}) {
    const arrowRef = useRef()
    const bodyMatRef = useRef()
    const headMatRef = useRef()

    useFrame((state) => {
        const t = (state.clock.elapsedTime * speed) % 1
        arrowRef.current.position.x = position[0] + t * direction[0]
        arrowRef.current.position.y = position[1] + t * direction[1]

        // Smooth fade in + fade out towards edge
        const fadeIn = Math.min(t / 0.2, 1)        // 0 → 1 over first 20%
        const fadeOut = 1 - t * t                    // fades towards edge
        const alpha = fadeIn * fadeOut

        if (bodyMatRef.current) bodyMatRef.current.uniforms.uAlpha.value = alpha
        if (headMatRef.current) headMatRef.current.uniforms.uAlpha.value = alpha
    })

    return (
        <group scale={scale} position={position} ref={arrowRef}>
            <mesh rotation={[0, 0, Math.PI / 4]}>
                <planeGeometry args={[12, 0.6]} />
                <shaderMaterial
                    ref={bodyMatRef}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    transparent={true}
                    uniforms={{uAlpha: {value: 1.0}}}
                />
            </mesh>

            {/* Arrow tip — shader chevron */}
            <mesh
                position={[3.6, 3.6, 0.1]}
                rotation={[0, 0, Math.PI / 4]}
            >
                <planeGeometry args={[3.0, 3.0]} />
                <shaderMaterial
                    ref={headMatRef}
                    vertexShader={vertexShader}
                    fragmentShader={arrowheadFragmentShader}
                    transparent={true}
                    side={THREE.DoubleSide}
                    uniforms={{uAlpha: {value: 1.0}}}
                />
            </mesh>
        </group>
    )
}
