varying vec2 vUv;
uniform float uAlpha;

void main() {
    vec3 colorStart = vec3(0.79, 1.0, 0.2);
    vec3 colorEnd = vec3(0.098, 0.098, 0.098);
    vec3 color = mix(colorEnd, colorStart, vUv.x);

    gl_FragColor = vec4(color, vUv.x * uAlpha);
}
