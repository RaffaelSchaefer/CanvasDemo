export function alphaOver (color1: number, color2: number, alpha: number) {
    let result: number = color1+(color2*alpha);
    return result;
}

export function multiply (color1: number, color2: number, alpha: number) {
    let result: number = (color1*(color2*alpha))%255;
    return result;
}

export function subtract (color1: number, color2: number, alpha: number) {
    let result: number = color1-(color2*alpha);
    return result;
}