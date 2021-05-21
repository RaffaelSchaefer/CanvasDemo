export function fillCanvas (ctx, r, g, b) {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    ctx.fillStyle = "rgb("+r+","+g+","+b+")";
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}