import {dragUiElement} from "./window/drag.js";
import {previewColor} from "./preview/previewColor.js";

// @ts-ignore
previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);

dragUiElement(document.getElementById("toolBox"));
dragUiElement(document.getElementById("optionsMenu"));
dragUiElement(document.getElementById("colorMenu"));

document.getElementById("colorRValue").addEventListener("click", function () {
    previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
});
document.getElementById("colorGValue").addEventListener("click", function () {
    previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
});
document.getElementById("colorBValue").addEventListener("click", function () {
    previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
});

document
    .getElementById("colorRValue")
    .addEventListener("touchend", function () {
        previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
    });
document
    .getElementById("colorGValue")
    .addEventListener("touchend", function () {
        previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
    });
document
    .getElementById("colorBValue")
    .addEventListener("touchend", function () {
        previewColor(document.getElementById("colorPreview"), document.getElementById("colorRValue").value, document.getElementById("colorGValue").value, document.getElementById("colorBValue").value);
    });
