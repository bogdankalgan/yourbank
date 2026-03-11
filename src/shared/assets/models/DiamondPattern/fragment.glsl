varying vec2 vUv;

void main() {
    vec2 cell = fract(vUv * 6.0);

    cell-=0.5;

    bool aboveDiag1 = cell.y > cell.x;
    bool aboveDiag2 = cell.y > -cell.x;

    vec3 base = vec3(0.106, 0.106, 0.106);
    float brightness;
    if (aboveDiag1 && aboveDiag2) brightness = 1.0;
    else if (aboveDiag1 && !aboveDiag2) brightness = 0.93;
    else if (!aboveDiag1 && aboveDiag2) brightness = 0.87;
    else brightness = 0.80;

    gl_FragColor = vec4(base * brightness, 1.0);
}