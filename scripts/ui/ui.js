import {dragUiElement} from "./window/drag.js";
import {visibilityHandler} from "./window/close.js";
import {previewColor} from "./preview/previewColor.js";

dragUiElement(document.getElementById("toolBox"));
dragUiElement(document.getElementById("optionsMenu"));
dragUiElement(document.getElementById("brushMenu"));
dragUiElement(document.getElementById("colorMenu"));
document.getElementById('toolBoxHeaderClose').addEventListener("click", function () {visibilityHandler(document.getElementById('toolBoxContent'))});
document.getElementById('optionsMenuClose').addEventListener("click", function () {visibilityHandler(document.getElementById('optionsMenuContent'))});
document.getElementById('brushMenuClose').addEventListener("click", function () {visibilityHandler(document.getElementById('brushMenuContent'))});
document.getElementById('colorMenuClose').addEventListener("click", function () {visibilityHandler(document.getElementById('colorMenuContent'))});

document.getElementById('colorRValue').addEventListener("click",function () {previewColor(document.getElementById('colorPreview'),document.getElementById('colorRValue').value,document.getElementById('colorGValue').value,document.getElementById('colorBValue').value)});
document.getElementById('colorGValue').addEventListener("click",function () {previewColor(document.getElementById('colorPreview'),document.getElementById('colorRValue').value,document.getElementById('colorGValue').value,document.getElementById('colorBValue').value)});
document.getElementById('colorBValue').addEventListener("click",function () {previewColor(document.getElementById('colorPreview'),document.getElementById('colorRValue').value,document.getElementById('colorGValue').value,document.getElementById('colorBValue').value)});