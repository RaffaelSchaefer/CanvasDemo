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
    let res = document.getElementById('resolution').value;
    let alpha = document.getElementById('opacity').value;
    let positionX = document.getElementById('translateX').value;
    let positionY = document.getElementById('translateY').value;
    document.getElementById('coloredNoise').addEventListener('click', function () {colorNoise(canvasContext,screenWidth,screenHeight,res,alpha)});
    document.getElementById('bwNoise').addEventListener('click', function () {bwNoise(canvasContext,screenWidth,screenHeight,res,alpha)});
    document.getElementById('bwGradient').addEventListener('click', function () {bwGradient(canvasContext,screenWidth,screenHeight,res,alpha)});
    document.getElementById('rgbGradient').addEventListener('click', function () {rgbGradient(canvasContext,screenWidth,screenHeight,res,alpha)});
    document.getElementById('dotsBlack').addEventListener('click', function () {dotsBlack(canvasContext,screenWidth,screenHeight,res,alpha,positionX,positionY)});
    document.getElementById('dotsWhite').addEventListener('click', function () {dotsWhite(canvasContext,screenWidth,screenHeight,res,alpha,positionX,positionY)});
    document.getElementById('clear').addEventListener('click', function () {clearCanvas(canvasContext)});
    document.getElementById('export').addEventListener('click', function () {exportCanvas(document.getElementById('draw_zone'))});
}
//Resize reload
window.addEventListener('resize', function () {
    window.location.reload();
});