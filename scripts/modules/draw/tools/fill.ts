import { colorRGBA } from "../util/color.js";

export function fillCanvas(
  ctx: any,
  r: number,
  g: number,
  b: number,
  a: number
) {
  let fillColor: colorRGBA = new colorRGBA(r, g, b, a);
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  ctx.fillStyle = fillColor;
  ctx.fillRect(0, 0, screenWidth, screenHeight);
}
