import {useRef, useMemo} from "react";
import {Vector2} from "three";
import vertexShader from "../assets/models/DotsPlane/shaders/vertex.glsl"
import fragmentShader from "../assets/models/DotsPlane/shaders/fragment.glsl"


export default function DotsPlane() {
    const materialRef = useRef()

    const uniforms = useMemo(() => ({
        uMouse: {value: new Vector2(-1, -1)},
    }), [])

    const handlePointerMove = (event) => {
        if (event.uv && materialRef.current) {
            materialRef.current.uniforms.uMouse.value.copy(event.uv)
        }
    }

    const handlePointerLeave = () => {
        if (materialRef.current) {
            materialRef.current.uniforms.uMouse.value.set(-1, -1)
        }
    }

    return (
        <>
            <mesh onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
                <planeGeometry args={[14, 14]}/>
                <shaderMaterial
                    ref={materialRef}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                />
            </mesh>
        </>
    )
}
