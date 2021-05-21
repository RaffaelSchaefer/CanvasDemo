export function clearCanvas (ctx) {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    ctx.clearRect(0,0,screenWidth,screenHeight);
}