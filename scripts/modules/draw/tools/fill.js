import { colorRGBA } from "../util/color.js";
export function fillCanvas(ctx, r, g, b, a) {
    let fillColor = new colorRGBA(r, g, b, a);
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}
