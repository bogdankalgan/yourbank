



varying float vAlpha;

void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    if (length(center) > 0.5) discard;

    vec3 color = vec3(0.75, 0.88, 0.12);

    gl_FragColor = vec4(color, vAlpha);
}
