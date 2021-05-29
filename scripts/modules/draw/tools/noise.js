import { colorRGBA } from "../util/color.js";
export function colorNoise(ctx, width, height, resolution, alpha) {
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let randomColor = new colorRGBA(
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
export function bwNoise(ctx, width, height, resolution, alpha) {
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let randomColorValue = Math.floor(Math.random() * 255);
      let randomColor = new colorRGBA(
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
export function blendedBWNoise(ctx, width, height, resolution, alpha) {
  let randomColorValue = 255;
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let lastRandomColorValue = randomColorValue;
      randomColorValue = Math.floor(Math.random() * 255);
      if (x % 2 && y % 2) {
        let fillColor = new colorRGBA(
          randomColorValue,
          randomColorValue,
          randomColorValue,
          alpha
        );
        ctx.fillStyle = fillColor.color;
      } else {
        let fillColorValue = (lastRandomColorValue + randomColorValue) / 2;
        let fillColor = new colorRGBA(
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
export function blendedRGBNoise(ctx, width, height, resolution, alpha) {
  let randomColor = new colorRGBA(255, 255, 255, alpha);
  for (let x = 0; x <= width / resolution; x++) {
    for (let y = 0; y <= height / resolution; y++) {
      let lastRandomColor = randomColor;
      randomColor.r = Math.floor(Math.random() * 255);
      randomColor.g = Math.floor(Math.random() * 255);
      randomColor.b = Math.floor(Math.random() * 255);
      if (x % 2 && y % 2) {
        ctx.fillStyle = randomColor.color;
      } else {
        let blendedColor = new colorRGBA(
          (randomColor.r + lastRandomColor.r) / 2,
          (randomColor.g + lastRandomColor.g) / 2,
          (randomColor.b + lastRandomColor.b) / 2,
          alpha
        );
        ctx.fillStyle = blendedColor.color;
      }
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}
