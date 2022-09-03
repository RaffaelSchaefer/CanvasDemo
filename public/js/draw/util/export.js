export function exportCanvas(canvas) {
    let link = document.createElement("a");
    link.download = "Noise-Art.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    link.delete;
}
