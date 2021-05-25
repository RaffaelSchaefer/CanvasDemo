import { setupHighDpiCanvas } from "./util/setup.js";
import { clearCanvas } from "./util/clear.js";
import { exportCanvas } from "./util/export.js";
import { bwGradient } from './tools/gradient.js';
import { colorNoise, bwNoise } from './tools/noise.js';
import { dots } from "./tools/pattern.js";
import { rgbParticle } from "./tools/misc.js";
import { brushMoveHandler, } from "./brush/brush.js";
import { fillCanvas } from "./tools/fill.js";
//Brush let
let brushMode = false;
//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvasContext = setupHighDpiCanvas(document.getElementById("draw_zone"));
//Event Handler
window.onload = function () {
    document.getElementById('coloredNoise').addEventListener('click', function () {
        // @ts-ignore
        colorNoise(canvasContext, screenWidth, screenHeight, document.getElementById('resolution').value, document.getElementById('opacity').value);
    });
    document.getElementById('bwNoise').addEventListener('click', function () {
        // @ts-ignore
        bwNoise(canvasContext, screenWidth, screenHeight, document.getElementById('resolution').value, document.getElementById('opacity').value);
    });
    document.getElementById('bwGradient').addEventListener('click', function () {
        // @ts-ignore
        bwGradient(canvasContext, screenWidth, screenHeight, document.getElementById('resolution').value, document.getElementById('opacity').value);
    });
    document.getElementById('rgbParticle').addEventListener('click', function () {
        // @ts-ignore
        rgbParticle(canvasContext, screenWidth, screenHeight, document.getElementById('resolution').value);
    });
    document.getElementById('dots').addEventListener('click', function () {
        // @ts-ignore
        dots(canvasContext, screenWidth, screenHeight, document.getElementById('resolution').value, document.getElementById('opacity').value, document.getElementById('colorRValue').value, document.getElementById('colorGValue').value, document.getElementById('colorBValue').value);
    });
    document.getElementById('fill').addEventListener('click', function () {
        // @ts-ignore
        fillCanvas(canvasContext, document.getElementById('colorRValue').value, document.getElementById('colorGValue').value, document.getElementById('colorBValue').value, document.getElementById('opacity').value);
    });
    document.getElementById('clear').addEventListener('click', function () {
        clearCanvas(canvasContext);
    });
    document.getElementById('export').addEventListener('click', function () {
        exportCanvas(document.getElementById('draw_zone'));
    });
    document.getElementById('useBrush').addEventListener('click', function () {
        brushMode = !brushMode;
    });
};
//Brush
document.getElementById('draw_zone').addEventListener('mousemove', function (event) {
    // @ts-ignore
    brushMoveHandler(event, canvasContext, document.getElementById('resolution').value, document.getElementById('opacity').value, brushMode, document.getElementById('colorRValue').value, document.getElementById('colorGValue').value, document.getElementById('colorBValue').value);
});
document.getElementById('draw_zone').addEventListener('touchmove', function (event) {
    // @ts-ignore
    brushMoveHandler(event, canvasContext, document.getElementById('resolution').value, document.getElementById('opacity').value, brushMode, document.getElementById('colorRValue').value, document.getElementById('colorGValue').value, document.getElementById('colorBValue').value);
});
//Resize reload
window.addEventListener('resize', function () {
    window.location.reload();
});
