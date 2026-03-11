import vertexShader from "../assets/models/Noise/shaders/vertex.glsl"
import fragmentShader from "../assets/models/Noise/shaders/fragment.glsl"
import {useFrame} from "@react-three/fiber";
import {useMemo, useRef} from "react";
import {Vector2} from "three";


export default function Noise() {
    const uniforms = useMemo(() => ({
        uTime: {value: 0},
        uMouse: {value: new Vector2(-1, -1)}
    }), [])

    const shaderRef = useRef()

    useFrame((state,delta) => {
        if (shaderRef.current) {
            shaderRef.current.uniforms.uTime.value += delta
        }
    })

    return (
        <>
            <mesh
            onPointerMove={(e) => shaderRef.current?.uniforms.uMouse.value.copy(e.uv)}
            onPointerLeave={() => shaderRef.current?.uniforms.uMouse.value.set(-1, -1)}
            >
                <planeGeometry args={[2,2]}/>
                <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} ref={shaderRef} transparent/>
            </mesh>
        </>
    )
}