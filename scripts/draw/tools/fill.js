export function fillCanvas(ctx, r, g, b, a) {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}
