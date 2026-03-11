uniform vec2 uMouse;
varying vec2 vUv;

void main() {
    // Grid
    float gridSize = 30.0;
    vec2 coords = fract(vUv * gridSize);
    vec2 cellCenter = vec2(0.5);
    float dist = distance(coords, cellCenter);

    // Radial gradient (3 stops matching Figma design)
    // Gradient center — top-left, axis along diagonal
    vec2 focus = vec2(0.2, 0.8);
    float focusDist = distance(vUv, focus);

    // Normalize distance (max ~1.1 for diagonal)
    float normDist = focusDist / 1.1;

    // 3 stops: 20% dark → 35% bright (#CAFF33) → 61% dark
    float inner = smoothstep(0.20, 0.35, normDist); // 0→1 from dark to bright
    float outer = smoothstep(0.61, 0.35, normDist); // 0→1 from dark to bright
    float gradient = inner * outer;                  // intersection = ring of light

    float dotRadius = 0.1;

    // Enlarge dots near cursor for hover effect
    vec2 cellUV = (floor(vUv * gridSize) + 0.5) / gridSize;
    float mouseDist = distance(cellUV, uMouse);
    float hover = smoothstep(0.15, 0.0, mouseDist);
    dotRadius *= (1.0 + 3.0 * hover);

    // Color: mix between #191919 (dark) and #CAFF33 (bright)
    vec3 darkColor = vec3(0.22, 0.22, 0.18);
    vec3 brightColor = vec3(0.792, 1.0, 0.2);
    vec3 color = mix(darkColor, brightColor, gradient);

    // Dot
    float strength = step(dist, dotRadius);
    float alpha = mix(0.5, 1.0, gradient);

    gl_FragColor = vec4(color, strength * alpha);
}
