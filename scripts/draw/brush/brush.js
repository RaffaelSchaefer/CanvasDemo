export function drawLineOnCanvas(event, ctx, size) {
    let posX = event.offsetX, posY = event.offsetY;

    ctx.lineWidth = size;

    ctx.beginPath()
    ctx.moveTo(posX - event.movementX, posY - event.movementY);
    ctx.lineTo(posX, posY);

    ctx.stroke();
}

export function brushMoveHandler(event, ctx, size, brushMode) {
    if (event.buttons === 1 && brushMode) {
        drawLineOnCanvas(event, ctx, size);
    } else {
        ctx.lineWidth = 1;
    }
}
//Original code by Checker8763