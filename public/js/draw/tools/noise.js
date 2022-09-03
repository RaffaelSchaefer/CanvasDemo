import {color} from "../util/color.js";

export function colorNoise(
    ctx,
    width,
    height,
    resolution,
    alpha
) {
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let randomColor = new color(
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
    ctx,
    width,
    height,
    resolution,
    alpha
) {
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let randomColorValue = Math.floor(Math.random() * 255);
            let randomColor = new color(
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
    ctx,
    width,
    height,
    resolution,
    alpha
) {
    let randomColorValue = 255;
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let lastRandomColorValue = randomColorValue;
            randomColorValue = Math.floor(Math.random() * 255);
            if (x % 2 && y % 2) {
                let fillColor = new color(
                    randomColorValue,
                    randomColorValue,
                    randomColorValue,
                    alpha
                );
                ctx.fillStyle = fillColor.RGBA;
            } else {
                let fillColorValue = (lastRandomColorValue + randomColorValue) / 2;
                let fillColor = new color(
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
    ctx,
    width,
    height,
    resolution,
    alpha
) {
    let randomColor = new color(255, 255, 255, alpha);
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let lastRandomColor = randomColor;
            randomColor.setColor(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
            if (x % 2 && y % 2) {
                ctx.fillStyle = randomColor.RGBA;
            } else {
                let blendedColor = new color(
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
