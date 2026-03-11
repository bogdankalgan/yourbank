uniform float uTime;
uniform float uPointSize;

varying float vAlpha;

void main() {
    vec3 pos = position;

    vec2 corner = vec2(-10.0, 10.0);
    float dist = length(pos.xy - corner);
    float normilizeDist = dist / 28.0;

    float power = 2.0;
    float intensity = 5.0;
    float spread = 1.0 - pow(normilizeDist, power) * intensity;

    pos.xy = corner + (pos.xy - corner) * spread;

    pos.z = sin(pos.y * 1.0 + uTime * 0.6) * 0.3 + sin(pos.x * 0.8 + uTime * 0.4) * 0.2 + sin((pos.x + pos.y) * 0.5 + uTime * 0.3) * 0.15;

    vAlpha = smoothstep(20.0, 0.0, dist);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    float sizeFalloff = smoothstep(18.0, 0.0, dist);
    gl_PointSize = uPointSize * sizeFalloff * (1.0 / -mvPosition.z);
}