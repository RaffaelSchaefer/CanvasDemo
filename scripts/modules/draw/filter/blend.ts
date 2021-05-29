//TODO Include blend modes to Noise Art
export function alphaOver(color1: number, color2: number, alpha: number) {
  return color1 + color2 * alpha;
}

export function multiply(color1: number, color2: number, alpha: number) {
  return (color1 * (color2 * alpha)) % 255;
}

export function subtract(color1: number, color2: number, alpha: number) {
  return color1 - color2 * alpha;
}
