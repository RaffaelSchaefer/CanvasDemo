import {setupHighDpiCanvas} from "./util/setup.js";
import {clearCanvas} from "./util/clear.js";
import {bwGradient,rgbGradient} from './tools/gradient.js';
import {colorNoise, bwNoise} from './tools/noise.js';
import {dotsWhite,dotsBlack} from "./tools/pattern.js";
import {exportCanvas} from "./util/export.js";

//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvasContext = setupHighDpiCanvas(document.getElementById("draw_zone"));
//Event Handler
window.onload = function () {
    document.getElementById('coloredNoise').addEventListener('click', function () {colorNoise(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value,document.getElementById('opacity').value)});
    document.getElementById('bwNoise').addEventListener('click', function () {bwNoise(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value,document.getElementById('opacity').value)});
    document.getElementById('bwGradient').addEventListener('click', function () {bwGradient(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value,document.getElementById('opacity').value,document.getElementById('translateX').value,document.getElementById('translateY').value)});
    document.getElementById('rgbGradient').addEventListener('click', function () {rgbGradient(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value,document.getElementById('opacity').value,document.getElementById('translateX').value,document.getElementById('translateY').value)});
    document.getElementById('dotsBlack').addEventListener('click', function () {dotsBlack(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value,document.getElementById('opacity').value,document.getElementById('translateX').value,document.getElementById('translateY').value)});
    document.getElementById('dotsWhite').addEventListener('click', function () {dotsWhite(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value,document.getElementById('opacity').value,document.getElementById('translateX').value,document.getElementById('translateY').value)});
    document.getElementById('clear').addEventListener('click', function () {clearCanvas(canvasContext)});
    document.getElementById('export').addEventListener('click', function () {exportCanvas(document.getElementById('draw_zone'))});
}
//Resize reload
window.addEventListener('resize', function () {
    window.location.reload();
});