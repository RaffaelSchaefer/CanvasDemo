export function previewColor (canvas, r, g, b) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb("+r+","+g+","+b+")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}