import vertexShader from '../assets/models/Dots/shaders/vertex.glsl'
import fragmentShader from '../assets/models/Dots/shaders/fragment.glsl'
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const initialUniforms = {
    uTime: {value: 0},
    uPointSize: {value: 4.0},
}

export default function Dots() {
    const materialRef = useRef()

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta
        }
    })
    return (
        <>
            <points rotation={[-Math.PI / 3, 0, Math.PI / 6]} position={[-3, 2.5, 0]}>
                <planeGeometry args={[20, 20, 100, 100]}/>
                <shaderMaterial
                    ref={materialRef}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={initialUniforms}
                    transparent={true}
                    depthWrite={false}
                />
            </points>
        </>
    )
}
