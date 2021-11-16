import {color} from "../../draw/util/color.js";

export function previewColor(
    canvas: HTMLCanvasElement,
    r: number,
    g: number,
    b: number
) {
    let fillColor: color = new color(r, g, b);
    let ctx = canvas.getContext("2d");
    ctx!.fillStyle = fillColor.RGB;
    ctx!.fillRect(0, 0, canvas.width, canvas.height);
}
