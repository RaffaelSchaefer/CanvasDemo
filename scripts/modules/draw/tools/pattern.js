import { colorRGBA } from "../util/color.js";
export function dots(ctx, width, height, size, alpha, r, g, b) {
  let fillColor = new colorRGBA(r, g, b, alpha);
  for (let x = 0; x <= width / size; x++) {
    for (let y = 0; y <= height / size; y++) {
      if (x % 2 && y % 2) {
        ctx.fillStyle = fillColor.color;
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  }
}
export function saw(ctx, width, height, size, alpha, r, g, b) {
  let fillColor = new colorRGBA(r, g, b, alpha);
  for (let x = 0; x <= width / size; x++) {
    for (let y = 0; y <= height / size; y++) {
      if ((y + x) % 2 && !((y + x) % 3)) {
        ctx.fillStyle = fillColor.color;
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  }
}
export function checkeredPattern(ctx, width, height, size, alpha, r, g, b) {
  let fillColor = new colorRGBA(r, g, b, alpha);
  for (let x = 0; x <= width / size; x++) {
    for (let y = 0; y <= height / size; y++) {
      if ((y + x) % 2) {
        ctx.fillStyle = fillColor.color;
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  }
}
