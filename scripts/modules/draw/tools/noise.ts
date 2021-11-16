import {color} from "../util/color.js";

export function colorNoise(
    ctx: any,
    width: number,
    height: number,
    resolution: number,
    alpha: number
) {
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let randomColor: color = new color(
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
                alpha
            );
            ctx.fillStyle = randomColor.RGBA;
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
            let randomColor: color = new color(
                randomColorValue,
                randomColorValue,
                randomColorValue,
                alpha
            );
            ctx.fillStyle = randomColor.RGBA;
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
                let fillColor: color = new color(
                    randomColorValue,
                    randomColorValue,
                    randomColorValue,
                    alpha
                );
                ctx.fillStyle = fillColor.RGBA;
            } else {
                let fillColorValue = (lastRandomColorValue + randomColorValue) / 2;
                let fillColor: color = new color(
                    fillColorValue,
                    fillColorValue,
                    fillColorValue,
                    alpha
                );
                ctx.fillStyle = fillColor.RGBA;
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
    let randomColor: color = new color(255, 255, 255, alpha);
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let lastRandomColor: color = randomColor;
            randomColor.setColor(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
            if (x % 2 && y % 2) {
                ctx.fillStyle = randomColor.RGBA;
            } else {
                let blendedColor: color = new color(
                    (randomColor.color[0] + lastRandomColor.color[0]) / 2,
                    (randomColor.color[1] + lastRandomColor.color[1]) / 2,
                    (randomColor.color[2] + lastRandomColor.color[2]) / 2,
                    alpha
                );
                ctx.fillStyle = blendedColor.RGBA;
            }
            ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
        }
    }
}
