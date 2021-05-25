export function alphaOver(color1, color2, alpha) {
    let result = color1 + (color2 * alpha);
    return result;
}
export function multiply(color1, color2, alpha) {
    let result = (color1 * (color2 * alpha)) % 255;
    return result;
}
export function subtract(color1, color2, alpha) {
    let result = color1 - (color2 * alpha);
    return result;
}
