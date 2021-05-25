export function dots(ctx, width, height, size, alpha, r, g, b) {
    for (let x = 0; x <= width / size; x++) {
        for (let y = 0; y <= height / size; y++) {
            if (x % size === 0 && y % size === 0) {
                ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
                ctx.fillRect(x * size, y * size, size, size);
            }
            else {
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.fillRect(x * size, y * size, size, size);
            }
        }
    }
}
