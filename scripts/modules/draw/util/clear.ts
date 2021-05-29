export function clearCanvas(ctx: any) {
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  ctx.clearRect(0, 0, screenWidth, screenHeight);
}
