import { colorRGBA } from "../util/color.js";
export function rgbParticle(ctx, width, height, res) {
  for (let x = 0; x <= width / 50; x++) {
    for (let y = 0; y <= height / 50; y++) {
      let alpha = Math.random();
      let randomWidth = Math.floor(Math.random() * res);
      let randomHeight = Math.floor(Math.random() * res);
      let randomPosX = Math.floor(Math.random() * width);
      let randomPosY = Math.floor(Math.random() * height);
      let randomColor = new colorRGBA(
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        alpha
      );
      ctx.fillStyle = randomColor.color;
      ctx.fillRect(randomPosX, randomPosY, randomWidth, randomHeight);
    }
  }
}
