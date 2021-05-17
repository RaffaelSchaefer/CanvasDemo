import {colorNoise, bwNoise} from './tools/noise.js';
import {setupHighDpiCanvas} from "./util/setup.js";
import {bwGradient,rgbGradient} from './tools/gradient.js';
//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvasContext = setupHighDpiCanvas(document.getElementById("draw_zone"));
//Event Handler
window.onload = function () {
    document.getElementById('coloredNoise').addEventListener('click', function () {colorNoise(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value)});
    document.getElementById('bwNoise').addEventListener('click', function () {bwNoise(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value)});
    document.getElementById('bwGradient').addEventListener('click', function () {bwGradient(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value)});
    document.getElementById('rgbGradient').addEventListener('click', function () {rgbGradient(canvasContext,screenWidth,screenHeight,document.getElementById('resolution').value)});
}