export function drawLineOnCanvas(event, ctx, size, opacity) {
    let posX = event.offsetX, posY = event.offsetY;

    ctx.lineWidth = size;
    ctx.strokeStyle = "rgba(0,0,0,"+opacity+")";

    ctx.beginPath()
    ctx.moveTo(posX - event.movementX, posY - event.movementY);
    ctx.lineTo(posX, posY);

    ctx.stroke();
}

export function brushMoveHandler(event, ctx, size, opacity, brushMode) {
    if (event.buttons === 1 && brushMode) {
        drawLineOnCanvas(event, ctx, size, opacity);
    } else {
        ctx.lineWidth = 1;
    }
}
//Original code by Checker8763