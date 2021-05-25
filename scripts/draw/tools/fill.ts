export function fillCanvas (ctx: any, r: number, g: number, b: number, a: number) {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}