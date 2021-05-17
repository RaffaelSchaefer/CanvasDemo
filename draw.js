import {colorNoise, bwNoise} from './noise.js';
import {setupHighDpiCanvas} from "./setup.js";
import {bwGradient, colorGradient} from './gradient.js';
//Screen size calculation
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
//Canvas implementation
let canvasContext = setupHighDpiCanvas(document.getElementById("draw_zone"));
//Draw
canvasContext.imageSmoothingEnabled = false;
colorNoise(canvasContext, screenWidth, screenHeight);