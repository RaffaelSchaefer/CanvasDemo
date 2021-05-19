import {dragUiElement} from "./window/drag.js";
import {visibilityHandler} from "./window/close.js";

dragUiElement(document.getElementById("toolBox"));
document.getElementById('toolBoxHeaderClose').addEventListener("click", function () {visibilityHandler(document.getElementById('toolBoxContent'))});