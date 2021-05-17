import {colorNoise, bwNoise} from './noise.js';
import {setupHighDpiCanvas} from "./setup.js";
import {bwGradient} from './gradient.js';

//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvasContext = setupHighDpiCanvas(document.getElementById("draw_zone"));
//Draw
colorNoise(canvasContext, screenWidth, screenHeight, 4);
//Event Listeners
document.getElementById("bwNoise").addEventListener('click',bwNoise(canvasContext, screenWidth, screenHeight, 4));
document.getElementById("bwGradient").addEventListener('click',bwGradient(canvasContext, screenWidth,screenHeight, 4));
document.getElementById("coloredNoise").addEventListener('click',colorNoise(canvasContext,screenWidth,screenHeight,4));