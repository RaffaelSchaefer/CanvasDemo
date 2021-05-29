import { colorRGBA } from "../util/color.js";

export function bwGradient(
  ctx: any,
  width: number,
  height: number,
  resolution: number,
  alpha: number
) {
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let bwValue = (y * resolution) % 256;
      let fillColor: colorRGBA = new colorRGBA(
        bwValue,
        bwValue,
        bwValue,
        alpha
      );
      ctx.fillStyle = fillColor.color;
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

export function rbGradient(
  ctx: any,
  width: number,
  height: number,
  resolution: number,
  alpha: number
) {
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let rValue: number = (x * resolution) % 256;
      let bValue: number = (y * resolution) % 256;
      let fillColor: colorRGBA = new colorRGBA(rValue, 0, bValue, alpha);
      ctx.fillStyle = fillColor.color;
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

//TODO Add colorGradient
