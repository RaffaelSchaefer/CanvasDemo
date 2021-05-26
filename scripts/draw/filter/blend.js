//TODO Include blend modes to Noise Art
export function alphaOver(color1, color2, alpha) {
    return color1 + (color2 * alpha);
}
export function multiply(color1, color2, alpha) {
    return (color1 * (color2 * alpha)) % 255;
}
export function subtract(color1, color2, alpha) {
    return color1 - (color2 * alpha);
}
