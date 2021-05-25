export function previewColor (canvas: HTMLCanvasElement, r: number, g: number, b: number) {
    let ctx = canvas.getContext('2d');
    ctx!.fillStyle = "rgb("+r+","+g+","+b+")";
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
}