import {setupHighDpiCanvas} from "./util/setup.js";
import {clearCanvas} from "./util/clear.js";
import {exportCanvas} from "./util/export.js";
import {bwGradient, rbGradient} from "./tools/gradient.js";
import {blendedBWNoise, bwNoise, colorNoise} from "./tools/noise.js";
import {checkeredPattern, dots, saw} from "./tools/pattern.js";
import {brushMoveHandler} from "./brush/brush.js";
import {fillCanvas} from "./tools/fill.js";
//Brush let
let brushMode = false;
//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvasContext = setupHighDpiCanvas(
    document.getElementById("draw")
);
//Event Handler
window.onload = function () {
    document.getElementById("coloredNoise").addEventListener("click", function () {
        colorNoise(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value);
    });
    document.getElementById("bwNoise").addEventListener("click", function () {
        bwNoise(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value);
    });
    document.getElementById("blendedBWNoise").addEventListener("click", function () {
        blendedBWNoise(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value);
    });
    document.getElementById("bwGradient").addEventListener("click", function () {
        bwGradient(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value);
    });
    document.getElementById("rbGradient").addEventListener("click", function () {
        rbGradient(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value);
    });
    document.getElementById("saw").addEventListener("click", function () {
        saw(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value, document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
    });
    document.getElementById("dots").addEventListener("click", function () {
        dots(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value, document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
    });
    document.getElementById("fill").addEventListener("click", function () {
        fillCanvas(canvasContext, document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value, document.getElementById("opacity").value);
    });
    document.getElementById("clear").addEventListener("click", function () {
        clearCanvas(canvasContext);
    });
    document.getElementById("export").addEventListener("click", function () {
        exportCanvas(document.getElementById("draw_zone"));
    });
    document.getElementById("useBrush").addEventListener("click", function () {
        brushMode = !brushMode;
    });
    document
        .getElementById("checkeredPattern")
        .addEventListener("click", function () {
            checkeredPattern(canvasContext, screenWidth, screenHeight, document.getElementById("resolution").value, document.getElementById("opacity").value, document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
        });
};
//Brush
document
    .getElementById("draw_zone")
    .addEventListener("mousemove", function (event) {
        brushMoveHandler(event, canvasContext, document.getElementById("resolution").value, document.getElementById("opacity").value, brushMode, document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
    });
//Resize reload
window.addEventListener("resize", function () {
    window.location.reload();
});