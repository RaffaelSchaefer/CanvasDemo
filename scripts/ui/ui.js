import {dragUiElement} from "./window/drag.js";
import {visibilityHandler} from "./window/close.js";

dragUiElement(document.getElementById("toolBox"));
dragUiElement(document.getElementById("optionsMenu"));
document.getElementById('toolBoxHeaderClose').addEventListener("click", function () {visibilityHandler(document.getElementById('toolBoxContent'))});
document.getElementById('optionsMenuClose').addEventListener("click", function () {visibilityHandler(document.getElementById('optionsMenuContent'))});