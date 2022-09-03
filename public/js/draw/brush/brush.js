//TODO Touch support for brushes
//TODO Fix Gaps on the lines
export function drawLineOnCanvas(
    event,
    ctx,
    size,
    opacity,
    r,
    g,
    b
) {
    let posX = event.offsetX,
        posY = event.offsetY;

    ctx.lineWidth = size;
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";

    ctx.beginPath();
    ctx.moveTo(posX - event.movementX, posY - event.movementY);
    ctx.lineTo(posX, posY);

    ctx.stroke();
}

export function brushMoveHandler(
    event,
    ctx,
    size,
    opacity,
    brushMode,
    r,
    g,
    b
) {
    if (event.buttons === 1 && brushMode) {
        drawLineOnCanvas(event, ctx, size, opacity, r, g, b);
    } else {
        ctx.lineWidth = 1;
    }
}

//Original code by Checker8763