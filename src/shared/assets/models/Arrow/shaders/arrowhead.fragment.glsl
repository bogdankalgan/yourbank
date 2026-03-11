varying vec2 vUv;
uniform float uAlpha;

void main() {
    // UV space: (0,0) = bottom-left, (1,1) = top-right
    // Remap so center is (0, 0), range from -1 to 1
    vec2 uv = vUv * 2.0 - 1.0;

    // Chevron ">" pointing right
    // Tip on the right (uv.x = 1), wings extend to the left
    //
    // Upper wing: line from (1, 0) to (-1, 1)  — outer edge
    // Lower wing: line from (1, 0) to (-1, -1) — outer edge
    //
    // Upper wing outer edge: y = -0.5 * (x - 1)  =>  y = -0.5x + 0.5
    // Inner edge (offset by thickness): y = -0.5x + 0.5 - thickness
    //
    // Pixel is inside upper wing if:
    //   y < -0.5x + 0.5   AND   y > -0.5x + 0.5 - thickness

    float thickness = 0.28;

    // Upper wing
    float upperOuter = -0.5 * uv.x + 0.5;    // line from (1,0) to (-1,1)
    float upperInner = upperOuter - thickness;
    bool inUpper = uv.y < upperOuter && uv.y > upperInner && uv.y > 0.0;

    // Lower wing (mirrored)
    float lowerOuter = 0.5 * uv.x - 0.5;     // line from (1,0) to (-1,-1)
    float lowerInner = lowerOuter + thickness;
    bool inLower = uv.y > lowerOuter && uv.y < lowerInner && uv.y < 0.0;

    // If pixel is not in either wing — discard
    if (!inUpper && !inLower) {
        discard;
    }

    vec3 color = vec3(0.79, 1.0, 0.2); // #CAFF33
    gl_FragColor = vec4(color, uAlpha);
}
