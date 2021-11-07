import { colorRGBA } from "../util/color.js";

export function colorNoise(
  ctx: any,
  width: number,
  height: number,
  resolution: number,
  alpha: number
) {
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let randomColor: colorRGBA = new colorRGBA(
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        alpha
      );
      ctx.fillStyle = randomColor.color;
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

export function bwNoise(
  ctx: any,
  width: number,
  height: number,
  resolution: number,
  alpha: number
) {
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let randomColorValue = Math.floor(Math.random() * 255);
      let randomColor: colorRGBA = new colorRGBA(
        randomColorValue,
        randomColorValue,
        randomColorValue,
        alpha
      );
      ctx.fillStyle = randomColor.color;
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

export function blendedBWNoise(
  ctx: any,
  width: number,
  height: number,
  resolution: number,
  alpha: number
) {
  let randomColorValue: number = 255;
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let lastRandomColorValue = randomColorValue;
      randomColorValue = Math.floor(Math.random() * 255);
      if (x % 2 && y % 2) {
        let fillColor: colorRGBA = new colorRGBA(
          randomColorValue,
          randomColorValue,
          randomColorValue,
          alpha
        );
        ctx.fillStyle = fillColor.color;
      } else {
        let fillColorValue = (lastRandomColorValue + randomColorValue) / 2;
        let fillColor: colorRGBA = new colorRGBA(
          fillColorValue,
          fillColorValue,
          fillColorValue,
          alpha
        );
        ctx.fillStyle = fillColor.color;
      }
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

export function blendedRGBNoise(
  ctx: any,
  width: number,
  height: number,
  resolution: number,
  alpha: number
) {
  let randomColor: colorRGBA = new colorRGBA(255, 255, 255, alpha);
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let lastRandomColor: colorRGBA = randomColor;
      randomColor.setColor(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
      if (x % 2 && y % 2) {
        ctx.fillStyle = randomColor.color;
      } else {
        let blendedColor: colorRGBA = new colorRGBA(
          (randomColor.getColorValue[0] + lastRandomColor.getColorValue[0]) / 2,
          (randomColor.getColorValue[1] + lastRandomColor.getColorValue[1]) / 2,
          (randomColor.getColorValue[2] + lastRandomColor.getColorValue[2]) / 2,
          alpha
        );
        ctx.fillStyle = blendedColor.color;
      }
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}
