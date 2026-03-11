import vertexShader from "@/shared/assets/models/DiamondPattern/vertex.glsl"
import fragmentShader from "@/shared/assets/models/DiamondPattern/fragment.glsl"

export default function DiamondPattern() {
    return (
        <>
            <mesh>
                <planeGeometry args={[5,5]}/>
                <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} transparent/>
            </mesh>
        </>
    )
}