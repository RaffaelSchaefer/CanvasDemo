export function dots(ctx, width, height, size, alpha, r, g, b) {
    for (let x = 0; x <= width / size; x++) {
        for (let y = 0; y <= height / size; y++) {
            if (x % 2 && y % 2) {
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + "," + alpha + ")";
                ctx.fillRect(x * size, y * size, size, size);
            }
        }
    }
}
export function saw(ctx, width, height, size, alpha, r, g, b) {
    for (let x = 0; x <= width / size; x++) {
        for (let y = 0; y <= height / size; y++) {
            if ((y + x) % 2 && !((y + x) % 3)) {
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + "," + alpha + ")";
                ctx.fillRect(x * size, y * size, size, size);
            }
        }
    }
}
//TODO Add more patterns
