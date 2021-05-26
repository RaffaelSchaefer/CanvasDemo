export function colorNoise(ctx, width, height, resolution, alpha) {
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + alpha + ")";
            ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
        }
    }
}
export function bwNoise(ctx, width, height, resolution, alpha) {
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let randomColor = Math.floor(Math.random() * 255);
            ctx.fillStyle = "rgb(" + randomColor + "," + randomColor + "," + randomColor + "," + alpha + ")";
            ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
        }
    }
}
export function mixedNoise(ctx, width, height, resolution, alpha) {
    for (let x = 0; x <= width / resolution; x++) {
        for (let y = 0; y <= height / resolution; y++) {
            let randomColor = Math.floor(Math.random() * 255);
            if (x % 2 && y % 2) {
                ctx.fillStyle = "rgb(" + randomColor + "," + randomColor + "," + randomColor + "," + alpha + ")";
                ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
            }
            else {
                ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + alpha + ")";
                ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
            }
        }
    }
}
